"use strict";

import React from "react";
import classnames from "classnames";
import { canGoNext } from "./utils/innerSliderUtils";

export function PrevArrow(props) {
  let prevClasses = { "slick-arrow": true, "slick-prev": true };
  function prevHandler(e) {
    if (e) {
      e.preventDefault();
    }
    props.clickHandler({ message: "previous" }, e);
  }

  if (
    !props.infinite &&
    (props.currentSlide === 0 || props.slideCount <= props.slidesToShow)
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
  let customProps = {
    currentSlide: props.currentSlide,
    slideCount: props.slideCount
  };
  let prevArrow;

  if (props.prevArrow) {
    prevArrow = React.cloneElement(props.prevArrow, {
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

export function NextArrow(props) {
  let nextClasses = { "slick-arrow": true, "slick-next": true };
  function nextHandler(e) {
    if (e) {
      e.preventDefault();
    }
    props.clickHandler({ message: "next" }, e);
  }

  if (!canGoNext(props)) {
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
  let customProps = {
    currentSlide: props.currentSlide,
    slideCount: props.slideCount
  };
  let nextArrow;

  if (props.nextArrow) {
    nextArrow = React.cloneElement(props.nextArrow, {
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
