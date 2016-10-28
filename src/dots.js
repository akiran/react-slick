'use strict';

import React from 'react';
import classnames from 'classnames';

var getDotCount = function (spec) {
  var dots;
  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  return dots;
};


export var Dots = React.createClass({

  clickHandler: function (options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    this.props.clickHandler(options);
  },
  render: function () {

    var dotCount = getDotCount({
      slideCount: this.props.slideCount,
      slidesToScroll: this.props.slidesToScroll
    });

    // Apply join & split to Array to pre-fill it for IE8
    //
    // Credit: http://stackoverflow.com/a/13735425/1849458
    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map((x, i) => {

      var leftBound = (i * this.props.slidesToScroll);
      var rightBound = (i * this.props.slidesToScroll) + (this.props.slidesToScroll - 1);
      var className = classnames({
        'slick-active': (this.props.currentSlide >= leftBound) && (this.props.currentSlide <= rightBound)
      });

      var dotOptions = {
        message: 'dots',
        index: i,
        slidesToScroll: this.props.slidesToScroll,
        currentSlide: this.props.currentSlide
      };

      var onClick = this.clickHandler.bind(this, dotOptions);

      return (
        <li key={i} className={className}>
          {React.cloneElement(this.props.customPaging(i), {onClick})}
        </li>
      );
    });

    return (
      <ul className={this.props.dotsClass} style={{display: 'block'}}>
        {dots}
      </ul>
    );

  }
});
