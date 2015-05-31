'use strict';

import React from 'react';
import classnames from 'classnames';

var getDotCount = function(spec) {
  var dots;
  dots = Math.floor(spec.slideCount / spec.slidesToScroll);
  return dots;
};

var Dots = React.createClass({

  clickHandler: function (options, e) {
    e.preventDefault();
    this.props.clickHandler(options);
  },
  slideHandler: function (targetSlide) {
    this.props.slideHandler(targetSlide);
  },
  render: function () {
    var dots;
    if (this.props.dots === true && this.props.slideCount > this.props.slidesToShow) {
      var dotCount = getDotCount({
        slideCount: this.props.slideCount,
        slidesToScroll: this.props.slidesToScroll
      });

      dots = Array.apply(null, {length: dotCount}).map((x, i) => {
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
    }

    return (
      <ul className={this.props.dotsClass} style={{display: 'block'}}>
        {dots}
      </ul>
    );

  }
});


module.exports = Dots;
