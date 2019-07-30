"use strict";

import React from "react";
import classnames from "classnames";

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

export class Dots extends React.PureComponent {
  clickHandler(options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    this.props.clickHandler(options);
  }
  render() {
    let dotCount = getDotCount({
      slideCount: this.props.slideCount,
      slidesToScroll: this.props.slidesToScroll,
      slidesToShow: this.props.slidesToShow,
      infinite: this.props.infinite
    });

    // Apply join & split to Array to pre-fill it for IE8
    //
    // Credit: http://stackoverflow.com/a/13735425/1849458
    const { onMouseEnter, onMouseOver, onMouseLeave } = this.props;
    const mouseEvents = { onMouseEnter, onMouseOver, onMouseLeave };
    let dots = Array.apply(
      null,
      Array(dotCount + 1)
        .join("0")
        .split("")
    ).map((x, i) => {
      let leftBound = i * this.props.slidesToScroll;
      let rightBound =
        i * this.props.slidesToScroll + (this.props.slidesToScroll - 1);
      let className = classnames({
        "slick-active":
          this.props.currentSlide >= leftBound &&
          this.props.currentSlide <= rightBound
      });

      let dotOptions = {
        message: "dots",
        index: i,
        slidesToScroll: this.props.slidesToScroll,
        currentSlide: this.props.currentSlide
      };

      let onClick = this.clickHandler.bind(this, dotOptions);
      return (
        <li key={i} className={className}>
          {React.cloneElement(this.props.customPaging(i), { onClick })}
        </li>
      );
    });

    return React.cloneElement(this.props.appendDots(dots), {
      className: this.props.dotsClass,
      ...mouseEvents
    });
  }
}
