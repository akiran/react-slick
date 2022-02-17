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
    let prevArrowProps = {};

    if (
      !this.props.infinite &&
      (this.props.currentSlide === 0 ||
        this.props.slideCount <= this.props.slidesToShow)
    ) {
      prevClasses["slick-disabled"] = true;
      prevArrowProps.disabled = true;
      prevHandler = null;
    }

    prevArrowProps = {
      ...prevArrowProps,
      key: "0",
      className: classnames(prevClasses),
      style: { display: "block" },
      onClick: prevHandler,
    };
    let customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    let prevArrow;

    if (this.props.prevArrow) {
      prevArrow = React.cloneElement(this.props.prevArrow, {
        ...prevArrowProps,
        ...customProps
      });
    } else {
      prevArrow = (
        <button key="0" type="button" {...prevArrowProps}>
          {" "}
          Previous
        </button>
      );
    }

    return prevArrow;
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

    let nextArrowProps = {};

    if (!canGoNext(this.props)) {
      nextClasses["slick-disabled"] = true;
      nextHandler = null;   
      nextArrowProps.disabled = true;   
    }

    nextArrowProps = {
      ...nextArrowProps,
      key: "1",
      className: classnames(nextClasses),
      style: { display: "block" },
      onClick: nextHandler,
    };
    let customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    let nextArrow;

    if (this.props.nextArrow) {
      nextArrow = React.cloneElement(this.props.nextArrow, {
        ...nextArrowProps,
        ...customProps
      });
    } else {
      nextArrow = (
        <button key="1" type="button" {...nextArrowProps}>
          {" "}
          Next
        </button>
      );
    }

    return nextArrow;
  }
}
