'use strict';

import React from 'react';
import {InnerSlider} from './inner-slider';
import assign from 'object-assign';
import json2mq from 'json2mq';
import ResponsiveMixin from 'react-responsive-mixin';
import defaultProps from './default-props';
import keydown from 'keydown'

var Slider = React.createClass({
  mixins: [ResponsiveMixin],
  getInitialState: function () {
    return {
      breakpoint: null
    };
  },


  registerHotkeys: function () {
    this.hotkeys = [];


    // escape
    let kdClose = keydown('<escape>');
    this.hotkeys.push(kdClose);
    kdClose.on('pressed', () => {
      this.closeSlider();
    })

    // left
    let kdLeft = keydown('<left>');
    this.hotkeys.push(kdLeft);

    kdLeft.on('pressed', () => {
      if(!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow))
        this.refs['inner-slider'].changeSlide({message:'previous'});

    })

    // right
    let kdRight = keydown('<right>');
    this.hotkeys.push(kdRight);

    kdRight.on('pressed', () => {
      if (!this.props.infinite) {
        if (this.props.centerMode && this.props.currentSlide >= (this.props.slideCount - 1)) {
          this.slider.refs['inner-slider'].changeSlide({message:'next'})
        } else {
          if (this.props.currentSlide >= (this.props.slideCount - this.props.slidesToShow)) {
            this.slider.refs['inner-slider'].changeSlide({message:'next'})
          }
        }

        if (this.props.slideCount <= this.props.slidesToShow) {
          this.slider.refs['inner-slider'].changeSlide({message:'next'})
        }
      }



    })


  },
  
  componentDidMount: function () {
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
    this.props.onSliderMount(this);
  },
  componentWillUnmount: function () {
    this.hotkeys.map(evt => {
      evt.removeAllListeners('pressed');
    });
    this.props.onSliderUnmount();
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
    if (settings === 'unslick') {
      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
      return (
        <div>{this.props.children}</div>
      );
    } else {
      return (
        <InnerSlider ref="inner-slider" {...settings}>
          {this.props.children}
        </InnerSlider>
      );
    }
  }
});

module.exports = Slider;
