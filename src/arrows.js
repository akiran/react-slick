"use strict";

import React from "react";
import classnames from "classnames";
import { canGoNext } from "./utils/innerSliderUtils";

export class PrevArrow extends React.PureComponent {
  clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  }
  render() {
    let prevClasses = { "slick-arrow": true, "slick-prev": true };
    let prevHandler = this.clickHandler.bind(this, { message: "previous" });

    if (
      !this.props.infinite &&
      (this.props.currentSlide === 0 ||
        this.props.slideCount <= this.props.slidesToShow)
    ) {
      prevClasses["slick-disabled"] = true;
      prevHandler = null;
    }

    let prevArrowProps = {
      key: "0",
      "data-role": "none",
      className: classnames(prevClasses),
      style: { display: "block" },
      onClick: prevHandler
    };

    if (!this.props.prevArrow) {
      return (
        <button key="0" type="button" {...prevArrowProps}>
          {" "}
          Previous
        </button>
      );
    }

    let isReactElement = typeof this.props.prevArrow.type === "string";

    if (isReactElement) {
      return React.cloneElement(this.props.prevArrow, {
        ...prevArrowProps,
        ...this.props.prevArrow.props
      });
    }

    let customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };

    return React.cloneElement(this.props.prevArrow, {
      ...prevArrowProps,
      ...customProps
    });
  }
}

export class NextArrow extends React.PureComponent {
  clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  }
  render() {
    let nextClasses = { "slick-arrow": true, "slick-next": true };
    let nextHandler = this.clickHandler.bind(this, { message: "next" });

    if (!canGoNext(this.props)) {
      nextClasses["slick-disabled"] = true;
      nextHandler = null;
    }

    let nextArrowProps = {
      key: "1",
      "data-role": "none",
      className: classnames(nextClasses),
      style: { display: "block" },
      onClick: nextHandler
    };

    if (!this.props.nextArrow) {
      return (
        <button key="0" type="button" {...nextArrowProps}>
          {" "}
          Next
        </button>
      );
    }

    let isReactElement = typeof this.props.nextArrow.type === "string";

    if (isReactElement) {
      return React.cloneElement(this.props.nextArrow, {
        ...nextArrowProps,
        ...this.props.nextArrow.props
      });
    }

    let customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };

    return React.cloneElement(this.props.nextArrow, {
      ...nextArrowProps,
      ...customProps
    });
  }
}
