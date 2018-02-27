'use strict';

import React from 'react';
import {InnerSlider} from './inner-slider';
import assign from 'object-assign';
import json2mq from 'json2mq';
import defaultProps from './default-props';
import canUseDOM from 'can-use-dom';
const enquire = canUseDOM && require('enquire.js');

export default class Slider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      breakpoint: null
    };
    this._responsiveMediaHandlers = [];
  }

  innerSliderRefHandler = ref => this.innerSlider = ref

  media(query, handler) {
    // javascript handler for  css media query
    enquire.register(query, handler);
    this._responsiveMediaHandlers.push({query, handler});
  }
  
  // handles responsive breakpoints
  componentWillMount() {
    if (this.props.responsive) {
      let breakpoints = this.props.responsive.map(breakpt => breakpt.breakpoint);
      // sort them in increasing order of their numerical value
      breakpoints.sort((x, y) => x - y);

      breakpoints.forEach((breakpoint, index) => {
        // media query for each breakpoint
        let bQuery;
        if (index === 0) {
          bQuery = json2mq({minWidth: 0, maxWidth: breakpoint});
        } else {
          bQuery = json2mq({minWidth: breakpoints[index-1] + 1, maxWidth: breakpoint});
        }
        // when not using server side rendering
        canUseDOM && this.media(bQuery, () => {
          this.setState({breakpoint: breakpoint});
        })
      });

      // Register media query for full screen. Need to support resize from small to large
      // convert javascript object to media query string
      let query = json2mq({minWidth: breakpoints.slice(-1)[0]});

      canUseDOM && this.media(query, () => {
        this.setState({breakpoint: null});
      });
    }
  }

  componentWillUnmount() {
    this._responsiveMediaHandlers.forEach(function(obj) {
      enquire.unregister(obj.query, obj.handler);
    });
  }

  slickPrev = () => this.innerSlider.slickPrev()

  slickNext = () => this.innerSlider.slickNext()

  slickGoTo = slide => this.innerSlider.slickGoTo(slide)

  slickPause = () => this.innerSlider.pause()

  slickPlay = () => this.innerSlider.autoPlay()

  render() {
    var settings;
    var newProps;
    if (this.state.breakpoint) {
      // never executes in the first render
      // so defaultProps should be already there in this.props
      newProps = this.props.responsive.filter(resp => resp.breakpoint === this.state.breakpoint);
      settings = newProps[0].settings === 'unslick' ? 'unslick' : assign({}, defaultProps, this.props, newProps[0].settings);
    } else {
      settings = assign({}, defaultProps, this.props);
    }

    // force scrolling by one if centerMode is on
    if(settings.centerMode){
      if(settings.slidesToScroll > 1 && process.env.NODE_ENV !== 'production'){
        console.warn(`slidesToScroll should be equal to 1 in centerMode, you are using ${settings.slidesToScroll}`)
      }
      settings.slidesToScroll = 1
    }
    // force showing one slide and scrolling by one if the fade mode is on
    if(settings.fade){
      if(settings.slidesToShow > 1 && process.env.NODE_ENV !== 'production'){
        console.warn(`slidesToShow should be equal to 1 when fade is true, you're using ${settings.slidesToShow}`)
      }
      if(settings.slidesToScroll > 1 && process.env.NODE_ENV !== 'production'){
        console.warn(`slidesToScroll should be equal to 1 when fade is true, you're using ${settings.slidesToScroll}`)
      }
      settings.slidesToShow = 1
      settings.slidesToScroll = 1
    }

    // makes sure that children is an array, even when there is only 1 child
    let children = React.Children.toArray(this.props.children)

    // Children may contain false or null, so we should filter them
    // children may also contain string filled with spaces (in certain cases where we use jsx strings)
    children = children.filter(child => {
      if (typeof child === 'string'){
        return !!(child.trim())
      }
      return !!child
    })

    if (settings === 'unslick') {
      settings = assign({ unslick: true }, defaultProps, this.props)
      settings.slidesToShow = children.length
    } else if (children.length <= settings.slidesToShow) {
      settings.unslick = true
    }
    return (
      <InnerSlider ref={this.innerSliderRefHandler} {...settings}>
        {children}
      </InnerSlider>
    )
  }
}
