'use strict';

import React from 'react';
import classnames from 'classnames';

var getDotCount = function(spec) {
  var dots;
  dots = Math.floor(spec.slideCount / spec.slidesToScroll);
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

    var dots = Array.apply(null, {length: dotCount}).map((x, i) => {

      var className = classnames({
        'slick-active': (this.props.currentSlide === i * this.props.slidesToScroll)
      });

      var dotOptions = {
        message: 'dots',
        index: i,
        slidesToScroll: this.props.slidesToScroll,
        currentSlide: this.props.currentSlide
      };

      return (
        <li key={i} className={className}>
          <button onClick={this.clickHandler.bind(this, dotOptions)}>{i}</button>
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
