"use strict";

import React from "react";
import classnames from "classnames";
import { canGoNext } from "./utils/innerSliderUtils";

export const PrevArrow = React.memo(props => {
  function clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    props.clickHandler(options);
  }
  let prevClasses = { "slick-arrow": true, "slick-prev": true };
  let prevHandler = () => clickHandler({ message: "previous" });

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
});

export const NextArrow = React.memo(props => {
  function clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    props.clickHandler(options, e);
  }
  let nextClasses = { "slick-arrow": true, "slick-next": true };
  let nextHandler = () => clickHandler({ message: "next" });

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
});
