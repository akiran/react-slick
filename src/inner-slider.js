"use strict";

import React, {
  createRef,
  useEffect,
  useRef,
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle
} from "react";
import initialState from "./initial-state";
import debounce from "lodash.debounce";
import classnames from "classnames";
import {
  getOnDemandLazySlides,
  extractObject,
  initializedState,
  getHeight,
  canGoNext,
  slideHandler,
  changeSlide,
  keyHandler,
  swipeStart,
  swipeMove,
  swipeEnd,
  getPreClones,
  getPostClones,
  getTrackLeft,
  getTrackCSS
} from "./utils/innerSliderUtils";

import { Track } from "./track";
import { Dots } from "./dots";
import { PrevArrow, NextArrow } from "./arrows";
import ResizeObserver from "resize-observer-polyfill";

export const InnerSlider = forwardRef((props, ref) => {
  const [innerSlideStates, setInnerSlideStates] = useState({
    ...initialState,
    currentSlide: props.initialSlide,
    slideCount: React.Children.count(props.children)
  });
  let debouncedResize;
  const [clickable, setClickable] = useState(true);
  let callbackTimers = [];
  const [lazyLoadTimer, setLazyLoadTimer] = useState();
  const [autoplayTimes, setAutoplayTimes] = useState(0);
  const [autoplayTimers, setAutoplayTimers] = useState();
  let secondAsNavForIndex;

  const listRefHandler = useRef();
  const trackRefHandler = createRef();
  const [animationEndCallback, setAnimationEndCallback] = useState(null);

  const ssrStates = useMemo(() => ssrInit(), []);

  useMemo(() => {
    setInnerSlideStates(() => ({ ...innerSlideStates, ...ssrStates }));
  }, []);

  useImperativeHandle(ref, () => ({
    slickPrev() {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      callbackTimers.push(
        setTimeout(() => thisChangeSlide({ message: "previous" }), 0)
      );
    },
    slickNext() {
      callbackTimers(setTimeout(() => thisChangeSlide({ message: "next" }), 0));
    },
    slickGoTo(slide, dontAnimate = false) {
      slide = Number(slide);
      if (isNaN(slide)) return "";
      callbackTimers.push(
        setTimeout(
          () =>
            thisChangeSlide(
              {
                message: "index",
                index: slide,
                currentSlide: innerSlideStates.currentSlide
              },
              dontAnimate
            ),
          0
        )
      );
    },
    autoPlay(playType) {
      setInnerSlideStates(prevS => ({
        ...prevS,
        autoplaying: playType
      }));
    },
    slideHandler(index) {
      thisSlideHandler(index);
    }
  }));

  function adaptHeight() {
    if (props.adaptiveHeight && listRefHandler.current) {
      const elem = listRefHandler.current.querySelector(
        `[data-index="${innerSlideStates.currentSlide}"]`
      );
      listRefHandler.current.style.height = getHeight(elem) + "px";
    }
  }

  useEffect(() => {
    const autoplaying = innerSlideStates.autoplaying;
    if (props.autoplay) {
      if (
        autoplaying === "hovered" ||
        autoplaying === "focused" ||
        autoplaying === "paused"
      ) {
        return;
      }

      setAutoplayTimers(setTimeout(play, props.autoplaySpeed + 50));
    }
  }, [autoplayTimes, innerSlideStates.autoplaying]);
  useEffect(() => {
    props.onInit && props.onInit();
    if (props.lazyLoad) {
      let slidesToLoad = getOnDemandLazySlides({
        ...props,
        ...innerSlideStates
      });
      if (slidesToLoad.length > 0) {
        setInnerSlideStates(prevState => ({
          ...prevState,
          lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
        }));
        if (props.onLazyLoad) {
          props.onLazyLoad(slidesToLoad);
        }
      }
    }
    let spec = {
      listRef: listRefHandler.current,
      trackRef: trackRefHandler.current,
      ...props
    };
    updateState(spec, () => {
      adaptHeight();
      props.autoplay && autoPlay("update");
    });
    if (props.lazyLoad === "progressive") {
      // ? must use useContext or class
      setLazyLoadTimer(setInterval(progressiveLazyLoad, 1000));
    }
    const ro = new ResizeObserver(() => {
      if (innerSlideStates.animating) {
        onWindowResized(); // don't set trackStyle hence don't break animation
        callbackTimers.push(setTimeout(() => onWindowResized(), props.speed));
      } else {
        onWindowResized();
      }
    });
    ro.observe(listRefHandler.current);
    document.querySelectorAll &&
      Array.prototype.forEach.call(
        document.querySelectorAll(".slick-slide"),
        slide => {
          slide.onfocus = props.pauseOnFocus ? onSlideFocus() : null;
          slide.onblur = props.pauseOnFocus ? onSlideBlur : null;
        }
      );
    // if (window.addEventListener) {
    //   window.addEventListener('resize', onWindowResized);
    // } else {
    //   window.attachEvent('onresize', onWindowResized);
    // }
    return () => {
      if (animationEndCallback) {
        clearTimeout(animationEndCallback);
      }
      if (lazyLoadTimer) {
        clearInterval(lazyLoadTimer);
      }
      if (callbackTimers.length) {
        callbackTimers.forEach(timer => clearTimeout(timer));
        callbackTimers = [];
      }
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    checkImagesLoad();
    props.onReInit && props.onReInit();
    if (props.lazyLoad) {
      let slidesToLoad = getOnDemandLazySlides({
        ...props,
        ...innerSlideStates
      });
      if (slidesToLoad.length > 0) {
        setInnerSlideStates(prevState => ({
          ...prevState,
          lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
        }));

        if (props.onLazyLoad) {
          props.onLazyLoad(slidesToLoad);
        }
      }
    }
    // if (props.onLazyLoad) {
    //   props.onLazyLoad([leftMostSlide])
    // }
    adaptHeight();
    let spec = {
      listRef: listRefHandler.current,
      trackRef: trackRefHandler.current,
      ...props,
      ...innerSlideStates
    };
    updateState(spec, () => {
      if (
        innerSlideStates.currentSlide >= React.Children.count(props.children)
      ) {
        thisChangeSlide({
          message: "index",
          index: React.Children.count(props.children) - props.slidesToShow,
          currentSlide: innerSlideStates.currentSlide
        });
      }
      if (props.autoplay) {
        autoPlay("update");
      } else {
        autoPlay("paused");
      }
    });
  }, [props]);
  function onWindowResized() {
    if (debouncedResize) debouncedResize.cancel();
    debouncedResize = debounce(() => resizeWindow(), 50);
    debouncedResize();
  }
  function resizeWindow() {
    let spec = {
      listRef: listRefHandler.current,
      trackRef: trackRefHandler.current,
      ...props,
      ...innerSlideStates
    };
    updateState(spec, () => {
      if (props.autoplay) autoPlay("update");
      else autoPlay("paused");
    });
    // animating state should be cleared while resizing, otherwise autoplay stops working
    setInnerSlideStates(prevS => ({ ...prevS, animating: false }));
    clearTimeout(animationEndCallback);
    setAnimationEndCallback(null);
  }
  useEffect(() => {
    const isTrackMounted = Boolean(trackRefHandler.current);
    // prevent warning: setting state on unmounted component (server side rendering)
    if (!isTrackMounted) return;
    resizeWindow();
  }, [window.innerWidth, window.innerWidth]);
  function updateState(spec, callback) {
    let updatedState = initializedState(spec);
    spec = { ...spec, ...updatedState, slideIndex: updatedState.currentSlide };
    let targetLeft = getTrackLeft(spec);
    spec = { ...spec, left: targetLeft };
    let trackStyle = getTrackCSS(spec);
    updatedState.trackStyle = trackStyle;
    setInnerSlideStates(prevA => ({ ...prevA, ...updatedState }));
    callback();
  }

  function ssrInit() {
    if (props.variableWidth) {
      let trackWidth = 0,
        trackLeft = 0;
      let childrenWidths = [];
      let preClones = getPreClones({
        ...props,
        ...innerSlideStates,
        slideCount: props.children.length
      });
      let postClones = getPostClones({
        ...props,
        ...innerSlideStates,
        slideCount: props.children.length
      });
      props.children.forEach(child => {
        childrenWidths.push(child.props.style.width);
        trackWidth += child.props.style.width;
      });
      for (let i = 0; i < preClones; i++) {
        trackLeft += childrenWidths[childrenWidths.length - 1 - i];
        trackWidth += childrenWidths[childrenWidths.length - 1 - i];
      }
      for (let i = 0; i < postClones; i++) {
        trackWidth += childrenWidths[i];
      }
      for (let i = 0; i < innerSlideStates.currentSlide; i++) {
        trackLeft += childrenWidths[i];
      }
      let trackStyle = {
        width: trackWidth + "px",
        left: -trackLeft + "px"
      };
      if (props.centerMode) {
        let currentWidth = `${childrenWidths[innerSlideStates.currentSlide]}px`;
        trackStyle.left = `calc(${trackStyle.left} + (100% - ${currentWidth}) / 2 ) `;
      }
      return {
        trackStyle
      };
    }
    let childrenCount = React.Children.count(props.children);
    const spec = {
      ...props,
      ...innerSlideStates,
      slideCount: childrenCount
    };

    let slideCount = getPreClones(spec) + getPostClones(spec) + childrenCount;
    let trackWidth = (100 / props.slidesToShow) * slideCount;
    let slideWidth = 100 / slideCount;

    let trackLeft =
      (-slideWidth *
        (getPreClones(spec) + innerSlideStates.currentSlide) *
        trackWidth) /
      100;
    if (props.centerMode) {
      trackLeft += (100 - (slideWidth * trackWidth) / 100) / 2;
    }
    let trackStyle = {
      width: trackWidth + "%",
      left: trackLeft + "%"
    };

    return {
      slideWidth: slideWidth + "%",
      trackStyle: trackStyle
    };
  }
  function checkImagesLoad() {
    let images =
      (listRefHandler.current &&
        listRefHandler.current.querySelectorAll &&
        listRefHandler.current.querySelectorAll(".slick-slide img")) ||
      [];
    let imagesCount = images.length,
      loadedCount = 0;
    Array.prototype.forEach.call(images, image => {
      const handler = () =>
        ++loadedCount && loadedCount >= imagesCount && onWindowResized();
      if (!image.onclick) {
        image.onclick = () => image.parentNode.focus();
      } else {
        const prevClickHandler = image.onclick;
        image.onclick = e => {
          prevClickHandler(e);
          image.parentNode.focus();
        };
      }
      if (!image.onload) {
        if (props.lazyLoad) {
          image.onload = () => {
            adaptHeight();
            callbackTimers.push(setTimeout(onWindowResized, props.speed));
          };
        } else {
          image.onload = handler;
          image.onerror = () => {
            handler();
            props.onLazyLoadError && props.onLazyLoadError();
          };
        }
      }
    });
  }
  function progressiveLazyLoad() {
    let slidesToLoad = [];
    const spec = {
      ...props,
      ...innerSlideStates
    };
    for (
      let index = innerSlideStates.currentSlide;
      index < innerSlideStates.slideCount + getPostClones(spec);
      index++
    ) {
      if (innerSlideStates.lazyLoadedList.indexOf(index) < 0) {
        slidesToLoad.push(index);
        break;
      }
    }
    for (
      let index = innerSlideStates.currentSlide - 1;
      index >= -getPreClones(spec);
      index--
    ) {
      if (innerSlideStates.lazyLoadedList.indexOf(index) < 0) {
        slidesToLoad.push(index);
        break;
      }
    }
    if (slidesToLoad.length > 0) {
      setInnerSlideStates(state => ({
        ...state,
        lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
      }));
      if (props.onLazyLoad) {
        props.onLazyLoad(slidesToLoad);
      }
    } else {
      if (lazyLoadTimer) {
        clearInterval(lazyLoadTimer);
        setLazyLoadTimer(null);
      }
    }
  }
  function thisSlideHandler(index, dontAnimate = false) {
    if (callbackTimers.length) {
      callbackTimers.forEach(timer => clearTimeout(timer));
      callbackTimers = [];
    }
    if (autoplayTimers) {
      clearTimeout(autoplayTimers);
      setAutoplayTimers(null);
    }
    const { asNavFor, beforeChange, onLazyLoad, speed, afterChange } = props;
    // capture currentslide before state is updated
    const currentSlide = innerSlideStates.currentSlide;
    let { state, nextState } = slideHandler({
      index,
      ...props,
      ...innerSlideStates,
      trackRef: trackRefHandler.current,
      useCSS: props.useCSS && !dontAnimate
    });
    if (!state) return;
    beforeChange && beforeChange(currentSlide, state.currentSlide);
    let slidesToLoad = state.lazyLoadedList.filter(
      value => innerSlideStates.lazyLoadedList.indexOf(value) < 0
    );
    onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
    if (!props.waitForAnimate && animationEndCallback) {
      clearTimeout(animationEndCallback);
      afterChange && afterChange(currentSlide);
      setAnimationEndCallback(null);
    }

    setInnerSlideStates(prevS => ({ ...prevS, ...state }));
    (function() {
      // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
      if (asNavFor && secondAsNavForIndex !== index) {
        secondAsNavForIndex = index;
        asNavFor.slideHandler(index);
      }
      if (!nextState) return;
      setAnimationEndCallback(() =>
        setTimeout(() => {
          const { animating, ...firstBatch } = nextState;
          setInnerSlideStates(prevS => ({ ...prevS, ...firstBatch }));
          function edit() {
            callbackTimers.push(
              setTimeout(
                () => setInnerSlideStates(prevS => ({ ...prevS, animating })),
                10
              )
            );
            afterChange && afterChange(state.currentSlide);
            setAnimationEndCallback(null);
          }
          edit();
        }, speed)
      );
    })();
    props.autoplay && autoPlay("playing");
  }
  function thisChangeSlide(options, dontAnimate = false) {
    const spec = {
      ...props,
      ...innerSlideStates
    };
    let targetSlide = changeSlide(spec, options);
    if (targetSlide !== 0 && !targetSlide) return;
    if (dontAnimate === true) {
      thisSlideHandler(targetSlide, dontAnimate);
    } else {
      thisSlideHandler(targetSlide);
    }
    props.autoplay && autoPlay("update");
    if (props.focusOnSelect) {
      const nodes = listRefHandler.current.querySelectorAll(".slick-current");
      nodes[0] && nodes[0].focus();
    }
  }

  // function clickHandler(e) {
  //   if (clickable === false) {
  //     e.stopPropagation();
  //     e.preventDefault();
  //   }
  //   setClickable(true);
  // }
  function thisKeyHandler(e) {
    let dir = keyHandler(e, props.accessibility, props.rtl);
    dir !== "" && thisChangeSlide({ message: dir });
  }
  function selectHandler(options) {
    thisChangeSlide(options);
  }
  function disableBodyScroll() {
    const preventDefault = e => {
      e = e || window.event;
      if (e.preventDefault) e.preventDefault();
      e.returnValue = false;
    };
    window.ontouchmove = preventDefault;
  }
  function enableBodyScroll() {
    window.ontouchmove = null;
  }
  function thisSwipeStart(e) {
    if (props.verticalSwiping) {
      disableBodyScroll();
    }
    let state = swipeStart(e, props.swipe, props.draggable);
    state !== "" && setInnerSlideStates(prevS => ({ ...prevS, ...state }));
  }
  function thisSwipeMove(e) {
    let state = swipeMove(e, {
      ...props,
      ...innerSlideStates,
      trackRef: trackRefHandler.current,
      listRef: listRefHandler.current,
      slideIndex: innerSlideStates.currentSlide
    });
    if (!state) return;
    if (state["swiping"]) {
      setClickable(false);
    }
    setInnerSlideStates(prevS => ({ ...prevS, ...state }));
  }
  function thisSwipeEnd(e) {
    let state = swipeEnd(e, {
      ...props,
      ...innerSlideStates,
      trackRef: trackRefHandler.current,
      listRef: listRefHandler.current,
      slideIndex: innerSlideStates.currentSlide
    });
    if (!state) return;
    let triggerSlideHandler = state["triggerSlideHandler"];
    delete state["triggerSlideHandler"];
    setInnerSlideStates(prevS => ({ ...prevS, ...state }));
    if (triggerSlideHandler === undefined) return;
    thisSlideHandler(triggerSlideHandler);
    if (props.verticalSwiping) {
      enableBodyScroll();
    }
  }
  function touchEnd(e) {
    thisSwipeEnd(e);
    setClickable(true);
  }

  function play() {
    var nextIndex;
    if (props.rtl) {
      nextIndex = innerSlideStates.currentSlide - props.slidesToScroll;
    } else {
      if (canGoNext({ ...props, ...innerSlideStates })) {
        nextIndex = innerSlideStates.currentSlide + props.slidesToScroll;
      } else {
        return false;
      }
    }
    thisSlideHandler(nextIndex);
    setAutoplayTimes(prevN => prevN + 1);
  }

  function autoPlay(playType) {
    setInnerSlideStates(prevS => ({
      ...prevS,
      autoplaying: playType
    }));
  }
  function onDotsOver() {
    props.autoplay && autoPlay("hovered");
  }
  function onDotsLeave() {
    props.autoplay &&
      innerSlideStates.autoplaying === "hovered" &&
      autoPlay("leave");
  }
  function onTrackOver() {
    props.autoplay && autoPlay("hovered");
  }
  function onTrackLeave() {
    props.autoplay &&
      innerSlideStates.autoplaying === "hovered" &&
      autoPlay("leave");
  }
  function onSlideFocus() {
    props.autoplay && autoPlay("focused");
  }
  function onSlideBlur() {
    props.autoplay &&
      innerSlideStates.autoplaying === "focused" &&
      autoPlay("blur");
  }

  var className = classnames("slick-slider", props.className, {
    "slick-vertical": props.vertical,
    "slick-initialized": true
  });
  let spec = { ...props, ...innerSlideStates };
  let trackProps = extractObject(spec, [
    "fade",
    "cssEase",
    "speed",
    "infinite",
    "centerMode",
    "focusOnSelect",
    "currentSlide",
    "lazyLoad",
    "lazyLoadedList",
    "rtl",
    "slideWidth",
    "slideHeight",
    "listHeight",
    "vertical",
    "slidesToShow",
    "slidesToScroll",
    "slideCount",
    "trackStyle",
    "variableWidth",
    "unslick",
    "centerPadding",
    "targetSlide",
    "useCSS"
  ]);
  const { pauseOnHover } = props;
  trackProps = {
    ...trackProps,
    onMouseEnter: pauseOnHover ? onTrackOver : null,
    onMouseLeave: pauseOnHover ? onTrackLeave : null,
    onMouseOver: pauseOnHover ? onTrackOver : null,
    focusOnSelect: props.focusOnSelect && clickable ? selectHandler : null
  };

  var dots;
  if (
    props.dots === true &&
    innerSlideStates.slideCount >= props.slidesToShow
  ) {
    let dotProps = extractObject(spec, [
      "dotsClass",
      "slideCount",
      "slidesToShow",
      "currentSlide",
      "slidesToScroll",
      "clickHandler",
      "children",
      "customPaging",
      "infinite",
      "appendDots"
    ]);
    const { pauseOnDotsHover } = props;
    dotProps = {
      ...dotProps,
      clickHandler: thisChangeSlide,
      onMouseEnter: pauseOnDotsHover ? onDotsLeave : null,
      onMouseOver: pauseOnDotsHover ? onDotsOver : null,
      onMouseLeave: pauseOnDotsHover ? onDotsLeave : null
    };
    dots = <Dots {...dotProps} />;
  }

  var prevArrow, nextArrow;
  let arrowProps = extractObject(spec, [
    "infinite",
    "centerMode",
    "currentSlide",
    "slideCount",
    "slidesToShow",
    "prevArrow",
    "nextArrow"
  ]);
  arrowProps.clickHandler = thisChangeSlide;

  if (props.arrows) {
    prevArrow = <PrevArrow {...arrowProps} />;
    nextArrow = <NextArrow {...arrowProps} />;
  }

  var verticalHeightStyle = null;

  if (props.vertical) {
    verticalHeightStyle = {
      height: innerSlideStates.listHeight
    };
  }

  var centerPaddingStyle = null;

  if (props.vertical === false) {
    if (props.centerMode === true) {
      centerPaddingStyle = {
        padding: "0px " + props.centerPadding
      };
    }
  } else {
    if (props.centerMode === true) {
      centerPaddingStyle = {
        padding: props.centerPadding + " 0px"
      };
    }
  }

  const listStyle = { ...verticalHeightStyle, ...centerPaddingStyle };
  const touchMove = props.touchMove;
  let listProps = {
    className: "slick-list",
    style: listStyle,
    onClick: () => {},
    onMouseDown: touchMove ? thisSwipeStart : null,
    onMouseMove: innerSlideStates.dragging && touchMove ? thisSwipeMove : null,
    onMouseUp: touchMove ? thisSwipeEnd : null,
    onMouseLeave: innerSlideStates.dragging && touchMove ? thisSwipeEnd : null,
    onTouchStart: touchMove ? thisSwipeStart : null,
    onTouchMove: innerSlideStates.dragging && touchMove ? thisSwipeMove : null,
    onTouchEnd: touchMove ? touchEnd : null,
    onTouchCancel: innerSlideStates.dragging && touchMove ? thisSwipeEnd : null,
    onKeyDown: props.accessibility ? thisKeyHandler : null
  };

  let innerSliderProps = {
    className: className,
    dir: "ltr",
    style: props.style
  };

  if (props.unslick) {
    listProps = { className: "slick-list" };
    innerSliderProps = { className };
  }
  return (
    <div {...innerSliderProps}>
      {!props.unslick ? prevArrow : ""}
      <div ref={listRefHandler} {...listProps}>
        <Track ref={trackRefHandler} {...trackProps}>
          {props.children}
        </Track>
      </div>
      {!props.unslick ? nextArrow : ""}
      {!props.unslick ? dots : ""}
    </div>
  );
});
