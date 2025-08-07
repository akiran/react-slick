"use strict";

import React from "react";
import classnames from "classnames";
import { clamp } from "./utils/innerSliderUtils";

const getDotCount = spec => {
  let dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots =
      Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) +
      1;
  }

  return dots;
};

export function Dots(props) {
  const {
    onMouseEnter,
    onMouseOver,
    onMouseLeave,
    infinite,
    slidesToScroll,
    slidesToShow,
    slideCount,
    currentSlide
  } = props;
  let dotCount = getDotCount({
    slideCount,
    slidesToScroll,
    slidesToShow,
    infinite
  });

  const mouseEvents = { onMouseEnter, onMouseOver, onMouseLeave };
  let dots = [];
  for (let i = 0; i < dotCount; i++) {
    let _rightBound = (i + 1) * slidesToScroll - 1;
    let rightBound = infinite
      ? _rightBound
      : clamp(_rightBound, 0, slideCount - 1);
    let _leftBound = rightBound - (slidesToScroll - 1);
    let leftBound = infinite
      ? _leftBound
      : clamp(_leftBound, 0, slideCount - 1);

    let className = classnames({
      "slick-active": infinite
        ? currentSlide >= leftBound && currentSlide <= rightBound
        : currentSlide === leftBound
    });

    let dotOptions = {
      message: "dots",
      index: i,
      slidesToScroll,
      currentSlide
    };

    function onClick(e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      props.clickHandler(dotOptions);
    }
    dots = dots.concat(
      <li key={i} className={className}>
        {React.cloneElement(props.customPaging(i), { onClick })}
      </li>
    );
  }

  return React.cloneElement(props.appendDots(dots), {
    className: props.dotsClass,
    ...mouseEvents
  });
}
