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
    var unslickBool = false;
    var UnSlickComponent = typeof this.props.unslick === 'function' && this.props.unslick;
    var children = this.props.children;

    if(!Array.isArray(children)) {
      children = [children]
    }

    // Children may contain false or null, so we should filter them
    children = children.filter(function(child){
      return !!child
    })

    if (this.state.breakpoint) {
      newProps = this.props.responsive.filter(resp => resp.breakpoint === this.state.breakpoint)[0];
      // allow for custom unslick function instead of strictly static settings
      unslickBool = newProps.settings === 'unslick' || (
        typeof newProps.responsiveUnslick === 'function' &&
          newProps.responsiveUnslick({children,newProps,state: this.state, props: this.props})
      )

      settings = unslickBool ? 'unslick' : assign({}, this.props, newProps.settings);
    } else {
      settings = assign({}, defaultProps, this.props);
    }

    // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
    if (settings === 'unslick') {
      if (UnSlickComponent) {
        return (
          <UnSlickComponent>{children}</UnSlickComponent>
        );
      } else {
        return (
          <div>{children}</div>
        );
      }
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
