"use strict";

import React from "react";
import classnames from "classnames";
import {
  lazyStartIndex,
  lazyEndIndex,
  getPreClones
} from "./utils/innerSliderUtils";

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = spec => {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }
  slickCloned = index < 0 || index >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
    if (
      index > spec.currentSlide - centerOffset - 1 &&
      index <= spec.currentSlide + centerOffset
    ) {
      slickActive = true;
    }
  } else {
    slickActive =
      spec.currentSlide <= index &&
      index < spec.currentSlide + spec.slidesToShow;
  }
  let slickCurrent = index === spec.currentSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL
  };
};

var getSlideAttributes = type => {
  return type === "radiogroup"
    ? {
        track: "radiogroup",
        slide: "radio",
        pressed: "false",
        required: "true",
        tabindex: "-1",
        ariaChecked: true
      }
    : {
        track: "list",
        slide: "listitem",
        pressed: null,
        required: null,
        tabindex: null,
        ariaChecked: false
      };
};
var getSlideStyle = function(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = "relative";
    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.transition =
      "opacity " +
      spec.speed +
      "ms " +
      spec.cssEase +
      ", " +
      "visibility " +
      spec.speed +
      "ms " +
      spec.cssEase;
    style.WebkitTransition =
      "opacity " +
      spec.speed +
      "ms " +
      spec.cssEase +
      ", " +
      "visibility " +
      spec.speed +
      "ms " +
      spec.cssEase;
  }

  return style;
};

const getKey = (child, fallbackKey) => child.key || fallbackKey;

var renderSlides = function(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = React.Children.count(spec.children);
  let startIndex = lazyStartIndex(spec);
  let endIndex = lazyEndIndex(spec);
  const sliderAttr = getSlideAttributes(spec.type);
  const getTabIndex = index => {
    if (sliderAttr.tabindex && index === 0) {
      return { index: index, truthy: true };
    } else if (sliderAttr.tabindex && index) {
      return { index: sliderAttr.tabindex, truthy: false };
    } else {
      return { index: null, truthy: null };
    }
  };

  React.Children.forEach(spec.children, (elem, index) => {
    let child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };
    // in case of lazyLoad, whether or not we want to fetch the slide
    if (
      !spec.lazyLoad ||
      (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)
    ) {
      child = elem;
    } else {
      child = <div />;
    }
    var childStyle = getSlideStyle({ ...spec, index });
    const slideClass = child.props.className || "";
    const tabOrder = getTabIndex(index);
    let slideClasses = getSlideClasses({ ...spec, index });

    const setElementAttrs = (ele, target) => {
      if (ele) {
        ele.setAttribute("tabindex", -1);
        ele.setAttribute("aria-checked", false);
        ele.classList.remove("slick-current");
      }
      if (target) {
        target.setAttribute("tabindex", 0);
        target.setAttribute("aria-checked", true);
        target.classList.add("slick-current");
      }
    };
    const handleRadioKeydown = e => {
      let ele = e.currentTarget,
        previous = ele.previousElementSibling,
        next = ele.nextElementSibling,
        key = e.keyCode;

      if (key === 37 && previous) {
        setElementAttrs(ele, previous);
        previous.focus();
        previous.click();
      }
      if (key === 39 && next) {
        setElementAttrs(ele, next);
        next.focus();
        next.click();
      }
    };
    const handleRadioClick = e => {
      let ele = e.currentTarget,
        siblings = ele.parentElement.childNodes;

      siblings.forEach(elem => {
        setElementAttrs(elem);
      });
      setElementAttrs(null, ele);
    };
    // push a cloned element of the desired slide
    slides.push(
      React.cloneElement(child, {
        key: "original" + getKey(child, index),
        "data-index": index,
        "aria-checked": tabOrder.truthy,
        "aria-required": sliderAttr.required,
        tabIndex: tabOrder.index,
        role: sliderAttr.slide,
        className: classnames(slideClasses, slideClass),
        style: { outline: "none", ...(child.props.style || {}), ...childStyle },
        onClick: e => {
          if (spec.type === "radiogroup") {
            handleRadioClick(e);
          }
          child.props && child.props.onClick && child.props.onClick(e);
          if (typeof spec.slideOnClick === "function") {
            spec.slideOnClick(e);
          }
          if (spec.focusOnSelect) {
            spec.focusOnSelect(childOnClickOptions);
          }
        },
        onKeyDown: e => {
          if (spec.type === "radiogroup") {
            handleRadioKeydown(e);
          }
          child.props && child.props.onKeyDown && child.props.onKeyDown(e);
          if (typeof spec.slideOnKeyDown === "function") {
            spec.slideOnKeyDown(e);
          }
        }
      })
    );

    // if slide needs to be precloned or postcloned
    if (spec.infinite && spec.fade === false) {
      let preCloneNo = childrenCount - index;
      if (
        preCloneNo <= getPreClones(spec) &&
        childrenCount !== spec.slidesToShow
      ) {
        key = -preCloneNo;
        if (key >= startIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses({ ...spec, index: key });
        preCloneSlides.push(
          React.cloneElement(child, {
            key: "precloned" + getKey(child, key),
            "data-index": key,
            className: classnames(slideClasses, slideClass),
            "aria-hidden": !slideClasses["slick-active"],
            style: { ...(child.props.style || {}), ...childStyle },
            onClick: e => {
              child.props && child.props.onClick && child.props.onClick(e);
              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          })
        );
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;
        if (key < endIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses({ ...spec, index: key });
        postCloneSlides.push(
          React.cloneElement(child, {
            key: "postcloned" + getKey(child, key),
            "data-index": key,
            className: classnames(slideClasses, slideClass),
            "aria-hidden": !slideClasses["slick-active"],
            style: { ...(child.props.style || {}), ...childStyle },
            onClick: e => {
              child.props && child.props.onClick && child.props.onClick(e);
              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          })
        );
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

export class Track extends React.PureComponent {
  render() {
    const slides = renderSlides(this.props);
    const { onMouseEnter, onMouseOver, onMouseLeave } = this.props;
    const mouseEvents = { onMouseEnter, onMouseOver, onMouseLeave };
    const sliderAttr = getSlideAttributes(this.props.type);
    return (
      <div
        aria-labelledby={`${this.props.labelId}Label ${this.props.labelId}Inst`}
        role={sliderAttr.track}
        className="slick-track"
        style={this.props.trackStyle}
        {...mouseEvents}
      >
        {slides}
      </div>
    );
  }
}
