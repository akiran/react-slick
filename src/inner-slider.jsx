'use strict';

import React from 'react';
import EventHandlersMixin from './mixins/event-handlers';
import HelpersMixin from './mixins/helpers';
import initialState from './initial-state';
import defaultProps from './default-props';
import classnames from 'classnames';

import Track from './track';
import Dots from './dots';

var Slider = React.createClass({
  mixins: [HelpersMixin, EventHandlersMixin],
  getInitialState: function () {
    return initialState;
  },
  getDefaultProps: function () {
    return defaultProps;
  },
  componentDidMount: function () {
    this.setState({
      mounted: true
    });
    this.initialize(this.props);
    if (this.props.adaptiveHeight) {
      this.adaptHeight();
    }
  },
  componentDidUpdate: function () {
    // this.adaptHeight();
  },
  componentWillReceiveProps: function(nextProps) {
    this.initialize(nextProps);
  },
  render: function () {
    var className = classnames('slick-initialized', 'slick-slider', this.props.className);

    var trackProps = {
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      currentSlide: this.state.currentSlide,
      slideWidth: this.state.slideWidth,
      slidesToShow: this.props.slidesToShow,
      trackStyle: this.state.trackStyle,
      variableWidth: this.props.variableWidth
    };

    var dotProps = {
      dots: this.props.dots,
      dotsClass: this.props.dotsClass,
      slideCount: this.state.slideCount,
      slidesToShow: this.props.slidesToShow,
      currentSlide: this.state.currentSlide,
      slidesToScroll: this.props.slidesToScroll,
      clickHandler: this.changeSlide
    };

    return (
      <div className={className}>
        <div
          ref='list'
          className="slick-list">
          <Track ref='track' {...trackProps}>
            {this.props.children}
          </Track>
        </div>
        <Dots {...dotProps}/>
      </div>
    );
  }
});

module.exports = Slider;
