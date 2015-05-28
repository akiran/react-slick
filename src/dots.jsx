'use strict';

import React from 'react';
import EventHandlersMixin from './mixins/event-handlers';
import classnames from 'classnames';

var Dots = React.createClass({

  mixins: [EventHandlersMixin],

  slideHandler: function (targetSlide) {
    (this.props.slideHandler(targetSlide)).bind(this.props.self);
  },
  render: function () {
    var dotOptions;
    var dots = [];
    if (this.props.dots === true && this.props.slideCount > this.props.slidesToShow) {
      for (var i=0; i <= this.props.dotCount; i += 1) {
        var className = classnames({
          'slick-active': (this.props.currentSlide === i * this.props.slidesToScroll)
        });
        dotOptions = {
          message: 'dots',
          index: i,
          slidesToScroll: this.props.slidesToScroll,
          currentSlide: this.props.currentSlide
        };
        dots.push(<li key={i} className={className}><button onClick={this.changeSlide.bind(this, dotOptions)}>{i}</button></li>);
      }
      return (
        <ul className={this.props.dotsClass} style={{display: 'block'}}>
          {dots}
        </ul>
      );
    } else {
      return null;
    }
  }

});


module.exports = Dots;
