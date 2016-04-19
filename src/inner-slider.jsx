'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import EventHandlersMixin from './mixins/event-handlers';
import HelpersMixin from './mixins/helpers';
import initialState from './initial-state';
import defaultProps from './default-props';
import classnames from 'classnames';

import {Track} from './track';
import {Dots} from './dots';
import {PrevArrow, NextArrow} from './arrows';
import keydown from 'keydown'
export var InnerSlider = React.createClass({
  mixins: [HelpersMixin, EventHandlersMixin],
  getInitialState: function () {
    var state = initialState;
    state.currentSlide = this.props.initialSlide;

    return state;
  },
  getDefaultProps: function () {
    return defaultProps;
  },
  componentWillMount: function () {
    if (this.props.init) {
      this.props.init();
    }
    this.setState({
      mounted: true
    });
    var lazyLoadedList = [];
    for (var i = 0; i < React.Children.count(this.props.children); i++) {
      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow) {
        lazyLoadedList.push(i);
      }
    }

    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
      this.setState({
        lazyLoadedList: lazyLoadedList
      });
    }
  },
  componentDidMount: function componentDidMount() {
    // Hack for autoplay -- Inspect Later
    this.initialize(this.props);
    this.adaptHeight();
    this.registerHotkeys();




    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this.hotkeys.map(evt => {
      evt.removeAllListeners('pressed');
    });
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
    if (this.state.autoPlayTimer) {
      window.clearInterval(this.state.autoPlayTimer);
    }
  },
  componentWillReceiveProps: function(nextProps) {
    if (this.props.slickGoTo != nextProps.slickGoTo) {
      this.changeSlide({
          message: 'index',
          index: nextProps.slickGoTo,
          currentSlide: this.state.currentSlide
      });
    } else {
      this.update(nextProps);
    }
  },
  componentDidUpdate: function () {
    this.adaptHeight();
  },
  onWindowResized: function () {
    this.update(this.props);
  },


  nextSlide: function () {
    this.changeSlide({
      message: 'next'
    });
    // this.changeSlide({
    //   message: 'index',
    //   index: this.state.currentSlide + 1,
    //   currentSlide: this.state.currentSlide
    // });
  },
  previousSlide: function () {
    this.changeSlide({
      message: 'previous'
    });
    // this.changeSlide({
    //   message: 'index',
    //   index: this.state.currentSlide - 1,
    //   currentSlide: this.state.currentSlide
    // });
  },

  registerHotkeys: function () {
    this.hotkeys = [];




    // left
    let kdLeft = keydown('<left>');
    this.hotkeys.push(kdLeft);

    kdLeft.on('pressed', () => {
      console.log("kd left pressed",this.state.slideCount,this.props.slidesToShow );

      //todo fix this if
      if(!this.props.infinite && !(this.state.currentSlide === 0 || this.state.slideCount <= this.props.slidesToShow))
        this.previousSlide()

    })

    // right
    let kdRight = keydown('<right>');
    this.hotkeys.push(kdRight);

    kdRight.on('pressed', () => {
      console.log("kd right pressed",this.state.slideCount,this.props.slidesToShow );
      //todo fix these ifs

      if (!this.props.infinite) {
        if (!(this.props.centerMode && this.state.currentSlide >= (this.state.slideCount - 1))) {
          this.nextSlide()
        } else {
          if (!(this.state.currentSlide >= (this.state.slideCount - this.props.slidesToShow))) {
            this.nextSlide()
          }
        }

        if (!(this.state.slideCount <= this.props.slidesToShow)) {
          this.nextSlide()
        }
      }



    })


  },

  render: function () {
    var className = classnames('slick-initialized', 'slick-slider', this.props.className);

    var trackProps = {
      fade: this.props.fade,
      cssEase: this.props.cssEase,
      speed: this.props.speed,
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      currentSlide: this.state.currentSlide,
      lazyLoad: this.props.lazyLoad,
      lazyLoadedList: this.state.lazyLoadedList,
      rtl: this.props.rtl,
      slideWidth: this.state.slideWidth,
      slidesToShow: this.props.slidesToShow,
      slideCount: this.state.slideCount,
      trackStyle: this.state.trackStyle,
      variableWidth: this.props.variableWidth
    };

    var dots;

    if (this.props.dots === true && this.state.slideCount > this.props.slidesToShow) {
      var dotProps = {
        dotsClass: this.props.dotsClass,
        slideCount: this.state.slideCount,
        slidesToShow: this.props.slidesToShow,
        currentSlide: this.state.currentSlide,
        slidesToScroll: this.props.slidesToScroll,
        clickHandler: this.changeSlide
      };

      dots = (<Dots {...dotProps} />);
    }

    var prevArrow, nextArrow;

    var arrowProps = {
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      currentSlide: this.state.currentSlide,
      slideCount: this.state.slideCount,
      slidesToShow: this.props.slidesToShow,
      prevArrow: this.props.prevArrow,
      nextArrow: this.props.nextArrow,
      clickHandler: this.changeSlide
    };

    if (this.props.arrows) {
      prevArrow = (<PrevArrow {...arrowProps} />);
      nextArrow = (<NextArrow {...arrowProps} />);
    }

    return (
      <div className={className} onMouseEnter={this.onInnerSliderEnter} onMouseLeave={this.onInnerSliderLeave}>
        <div
          ref='list'
          className="slick-list"
          onMouseDown={this.swipeStart}
          onMouseMove={this.state.dragging ? this.swipeMove: null}
          onMouseUp={this.swipeEnd}
          onMouseLeave={this.state.dragging ? this.swipeEnd: null}
          onTouchStart={this.swipeStart}
          onTouchMove={this.state.dragging ? this.swipeMove: null}
          onTouchEnd={this.swipeEnd}
          onTouchCancel={this.state.dragging ? this.swipeEnd: null}>
          <Track ref='track' {...trackProps}>
            {this.props.children}
          </Track>
        </div>
        {prevArrow}
        {nextArrow}
        {dots}
      </div>
    );
  }
});
