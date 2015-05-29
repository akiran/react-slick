'use strict';

import React from 'react';
// import EventHandlersMixin from './mixins/event-handlers';
import HelpersMixin from './mixins/helpers';
import initialState from './initial-state';
import defaultProps from './default-props';
import classnames from 'classnames';

import Track from './track';
// import Dots from './dots';

var Slider = React.createClass({
  mixins: [HelpersMixin],
  getInitialState: function () {
    return initialState;
  },
  getDefaultProps: function () {
    return defaultProps;
  },
  componentDidMount: function () {
    // console.log(this.getDOMNode());
    this.initialize(this.props);
    if (this.props.adaptiveHeight) {
      this.adaptHeight();
    }
  },
  componentDidUpdate: function () {
    // this.adaptHeight();
  },
  // componentWillReceiveProps: function(nextProps) {
  //   // this.initialize(nextProps);
  // },
  render: function () {
    var className = classnames('slick-initialized', 'slick-slider', this.props.className);
    return (
      <div className={className} >
        <div
          ref='list'
          className="slick-list">
        <Track
          ref='track'
          infinite={this.props.infinite}
          centerMode={this.props.centerMode}
          currentSlide={this.state.currentSlide}
          slideWidth={this.state.slideWidth}
          slidesToShow={this.props.slidesToShow}
          trackStyle={this.state.trackStyle}
          variableWidth={this.props.variableWidth}>
          {this.props.children}
        </Track>
        </div>
      </div>
    );
  }
});

module.exports = Slider;
