'use strict';

import React from 'react';
import EventHandlersMixin from './mixins/event-handlers';
import classnames from 'classnames';

var getDotCount = function(spec) {
  var dots;
  dots = Math.floor(spec.slideCount / spec.slidesToScroll);
  return dots;
};

var Dots = React.createClass({

  mixins: [EventHandlersMixin],

  slideHandler: function (targetSlide) {
    this.props.slideHandler(targetSlide);
  },
  render: function () {
    var dotCount = getDotCount({
      slideCount: this.props.slideCount,
      slidesToScroll: this.props.slidesToScroll
    });
    var dots = new Array(dotCount);

    if (this.props.dots === true && this.props.slideCount > this.props.slidesToShow) {
      dots = dots.map((x, i) => {
        var className = classnames({
          'slick-active': (this.props.currentSlide === i * this.props.slidesToScroll)
        });
        var dotOptions = {
          message: 'dots',
          index: i,
          slidesToScroll: this.props.slidesToScroll,
          currentSlide: this.props.currentSlide
        };
        return (<li key={i} className={className}><button onClick={this.changeSlide.bind(this, dotOptions)}>{i}</button></li>);
      });
      return (
        <ul className={this.props.dotsClass} style={{display: 'block'}}>
          {dots}
        </ul>
      );
    }
  }
});


module.exports = Dots;
