'use strict';

import React from 'react';
import {InnerSlider} from './inner-slider';
import assign from 'object-assign';
import json2mq from 'json2mq';
import ResponsiveMixin from 'react-responsive-mixin';
import defaultProps from './default-props';

var Slider = React.createClass({
  mixins: [ResponsiveMixin],
  innerSlider: null,
  innerSliderRefHandler: function (ref) {
    this.innerSlider = ref;
  },
  getInitialState: function () {
    return {
      breakpoint: null
    };
  },
  componentWillMount: function () {
    if (this.props.responsive) {
      var breakpoints = this.props.responsive.map(breakpt => breakpt.breakpoint);
      breakpoints.sort((x, y) => x - y);

      breakpoints.forEach((breakpoint, index) => {
        var bQuery;
        if (index === 0) {
          bQuery = json2mq({minWidth: 0, maxWidth: breakpoint});
        } else {
          bQuery = json2mq({minWidth: breakpoints[index-1], maxWidth: breakpoint});
        }
        this.media(bQuery, () => {
          this.setState({breakpoint: breakpoint});
        });
      });

      // Register media query for full screen. Need to support resize from small to large
      var query = json2mq({minWidth: breakpoints.slice(-1)[0]});

      this.media(query, () => {
        this.setState({breakpoint: null});
      });
    }
  },

  slickPrev: function () {
    this.innerSlider.slickPrev();
  },

  slickNext: function () {
    this.innerSlider.slickNext();
  },

  slickGoTo: function (slide) {
    this.innerSlider.slickGoTo(slide)
  },

  render: function () {
    var settings;
    var newProps;
    if (this.state.breakpoint) {
      newProps = this.props.responsive.filter(resp => resp.breakpoint === this.state.breakpoint);
      settings = newProps[0].settings === 'unslick' ? 'unslick' : assign({}, this.props, newProps[0].settings);
    } else {
      settings = assign({}, defaultProps, this.props);
    }

    var children = this.props.children;
    if(!Array.isArray(children)) {
      children = [children]
    }

    // Children may contain false or null, so we should filter them
    children = children.filter(function(child){
      return !!child
    })

    if (settings === 'unslick') {
      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
      return (
        <div>{children}</div>
      );
    } else {
      return (
        <InnerSlider ref={this.innerSliderRefHandler} {...settings}>
          {children}
        </InnerSlider>
      );
    }
  }
});

module.exports = Slider;
