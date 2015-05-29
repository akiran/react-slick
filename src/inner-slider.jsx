'use strict';

import React from 'react';
// import EventHandlersMixin from './mixins/event-handlers';
// import HelpersMixin from './mixins/helpers';
import initialState from './initial-state';
import defaultProps from './default-props';

import Track from './track';
// import Dots from './dots';

var Slider = React.createClass({
  getInitialState: function () {
    return initialState;
  },
  getDefaultProps: function () {
    return defaultProps;
  },
  componentDidMount: function () {
    // this.initialize(this.props);
    // this.adaptHeight();
  },
  componentDidUpdate: function () {
    // this.adaptHeight();
  },
  // componentWillReceiveProps: function(nextProps) {
  //   // this.initialize(nextProps);
  // },
  render: function () {
    return (
      <div
        className="slick-list">
      <Track
        infinite={this.props.infinite}
        centerMode={this.props.centerMode}
        currentSlide={this.state.currentSlide}
        slidesToShow={this.props.slidesToShow}>
        {this.props.children}
      </Track>
      </div>
    );
  }
});

module.exports = Slider;
