"use strict";

import React from "react";
import classnames from "classnames";
import {
  lazyStartIndex,
  lazyEndIndex,
  getPreClones
} from "./utils/innerSliderUtils";

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
const getSlideClasses = spec => {
  let slickActive, slickCenter, slickCloned;
  let centerOffset, index;

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

  let focusedSlide;
  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }
  let slickCurrent = index === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL
  };
};

const getSlideStyle = spec => {
  let style = {};

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
    style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
    if (spec.useCSS) {
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
    }
  }

  return style;
};

const getKey = (child, fallbackKey) => child.key || fallbackKey;

const renderSlides = spec => {
  let key;
  let slides = [];
  let preCloneSlides = [];
  let postCloneSlides = [];
  let childrenCount = React.Children.count(spec.children);
  let startIndex = lazyStartIndex(spec);
  let endIndex = lazyEndIndex(spec);
  const childRefs = spec.childRefs;

  React.Children.forEach(spec.children, (elem, index) => {
    let child;
    let childOnClickOptions = {
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
    let childStyle = getSlideStyle({ ...spec, index });
    let slideClass = child.props.className || "";
    let slideClasses = getSlideClasses({ ...spec, index });
    // push a cloned element of the desired slide
    slides.push(
      React.cloneElement(child, {
        key: "original" + getKey(child, index),
        "data-index": index,
        ref: el => {
          if (el) {
            childRefs.add(el);
          }
        },
        className: classnames(slideClasses, slideClass),
        style: {
          outline: "none",
          ...(child.props.style || {}),
          ...childStyle
        },
        onClick: e => {
          child.props && child.props.onClick && child.props.onClick(e);
          if (spec.focusOnSelect) {
            spec.focusOnSelect(childOnClickOptions);
          }
        }
      })
    );

    // if slide needs to be precloned or postcloned
    if (
      spec.infinite &&
      childrenCount > 1 &&
      spec.fade === false &&
      !spec.unslick
    ) {
      let preCloneNo = childrenCount - index;
      if (preCloneNo <= getPreClones(spec)) {
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
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

export class Track extends React.PureComponent {
  node = null;

  constructor(props) {
    super(props);
    this.childRefs = new Set();
    this.observer = null;
  }

  handleRef = ref => {
    this.node = ref;
  };

  componentDidMount() {
    window.addEventListener("resize", this.setupIntersectionObserver);
    window.addEventListener("scroll", this.setupIntersectionObserver);
    setTimeout(() => this.setupIntersectObserver(), 0);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setupIntersectionObserver);
    window.removeEventListener("scroll", this.setupIntersectionObserver);
  }

  setupIntersectObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.tabIndex = entry.isIntersecting ? 0 : -1;
          entry.target.setAttribute(
            "aria-hidden",
            entry.isIntersecting ? "false" : "true"
          );
        });
      },
      {
        root: null,
        threshold: 0.1
      }
    );
    this.childRefs.forEach(element => {
      if (element && element instanceof Element) {
        this.observer.observe(element);
      }
    });
  }

  render() {
    const slides = renderSlides({
      childRefs: this.childRefs,
      ...this.props
    });
    const { onMouseEnter, onMouseOver, onMouseLeave } = this.props;
    const mouseEvents = { onMouseEnter, onMouseOver, onMouseLeave };
    return (
      <div
        ref={this.handleRef}
        className="slick-track"
        style={this.props.trackStyle}
        {...mouseEvents}
      >
        {slides}
      </div>
    );
  }
}
