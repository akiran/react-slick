'use strict';

import React from 'react';
import EventHandlersMixin from './mixins/event-handlers';
import HelpersMixin from './mixins/helpers';
import initialState from './initial-state';
import defaultProps from './default-props';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import assign from 'object-assign';
import { getOnDemandLazySlides } from './utils/innerSliderUtils'

import { Track } from './track';
import { Dots } from './dots';
import { PrevArrow, NextArrow } from './arrows';

export var InnerSlider = createReactClass({
  mixins: [HelpersMixin, EventHandlersMixin],
  list: null, // wraps the track
  track: null, // component that rolls out like a film
  listRefHandler: function (ref) {
    this.list = ref;
  },
  trackRefHandler: function (ref) {
    this.track = ref;
  },
  getInitialState: function () {
    return Object.assign({}, initialState, {
      currentSlide: this.props.initialSlide
    });
  },
  componentWillMount: function () {
    if (this.props.init) {
      this.props.init();
    }
    if (this.props.lazyLoad) {
      let slidesToLoad = getOnDemandLazySlides(assign({}, this.props, this.state))
      if (slidesToLoad.length > 0) {
        this.setState((prevState, props) => ({ lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) }))
        if (this.props.onLazyLoad) {
          this.props.onLazyLoad(slidesToLoad)
        }
      }
    }
  },
  componentDidMount: function componentDidMount() {
    // Hack for autoplay -- Inspect Later
    this.initialize(this.props);
    this.adaptHeight();

    // To support server-side rendering
    if (!window) {
      return
    }
    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.animationEndCallback) {
      clearTimeout(this.animationEndCallback);
    }
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
    if (this.state.autoPlayTimer) {
      clearInterval(this.state.autoPlayTimer);
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (this.props.slickGoTo != nextProps.slickGoTo) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('react-slick deprecation warning: slickGoTo prop is deprecated and it will be removed in next release. Use slickGoTo method instead')
      }
      this.changeSlide({
        message: 'index',
        index: nextProps.slickGoTo,
        currentSlide: this.state.currentSlide
      });
    } else if (this.state.currentSlide >= nextProps.children.length) {
      this.update(nextProps);
      this.changeSlide({
        message: 'index',
        index: nextProps.children.length - nextProps.slidesToShow,
        currentSlide: this.state.currentSlide
      });
    } else {
      this.update(nextProps);
    }
  },
  componentDidUpdate: function () {
    if (this.props.reInit) {
      this.props.reInit()
    }
    if (this.props.lazyLoad) {
      let slidesToLoad = getOnDemandLazySlides(assign({}, this.props, this.state))
      if (slidesToLoad.length > 0) {
        this.setState((prevState, props) => ({ lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) }))
        if (this.props.onLazyLoad) {
          this.props.onLazyLoad(slidesToLoad)
        }
      }
    }
    // if (this.props.onLazyLoad) {
    //   this.props.onLazyLoad([leftMostSlide])
    // }
    this.adaptHeight();
  },
  onWindowResized: function () {
    this.update(this.props);
    // animating state should be cleared while resizing, otherwise autoplay stops working
    this.setState({
      animating: false
    });
    clearTimeout(this.animationEndCallback);
    delete this.animationEndCallback;
  },
  slickPrev: function () {
    // this and fellow methods are wrapped in setTimeout
    // to make sure initialize setState has happened before
    // any of such methods are called
    setTimeout(() => this.changeSlide({ message: 'previous' }), 0)
  },
  slickNext: function () {
    setTimeout(() => this.changeSlide({ message: 'next' }), 0)
  },
  slickGoTo: function (slide) {
    slide = Number(slide)
    !isNaN(slide) && setTimeout( () => this.changeSlide({
      message: 'index',
      index: slide,
      currentSlide: this.state.currentSlide
    }), 0)
  },
  render: function () {
    var className = classnames('slick-initialized', 'slick-slider', this.props.className, {
      'slick-vertical': this.props.vertical,
    });

    var trackProps = {
      fade: this.props.fade,
      cssEase: this.props.cssEase,
      speed: this.props.speed,
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      focusOnSelect: this.props.focusOnSelect ? this.selectHandler : null,
      currentSlide: this.state.currentSlide,
      lazyLoad: this.props.lazyLoad,
      lazyLoadedList: this.state.lazyLoadedList,
      rtl: this.props.rtl,
      slideWidth: this.state.slideWidth,
      slideHeight: this.state.slideHeight,
      listHeight: this.state.listHeight,
      vertical: this.props.vertical,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      slideCount: this.state.slideCount,
      trackStyle: this.state.trackStyle,
      variableWidth: this.props.variableWidth,
      unslick: this.props.unslick,
      centerPadding: this.props.centerPadding
    };

    var dots;

    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
      var dotProps = {
        dotsClass: this.props.dotsClass,
        slideCount: this.state.slideCount,
        slidesToShow: this.props.slidesToShow,
        currentSlide: this.state.currentSlide,
        slidesToScroll: this.props.slidesToScroll,
        clickHandler: this.changeSlide,
        children: this.props.children,
        customPaging: this.props.customPaging,
        infinite: this.props.infinite,
        appendDots: this.props.appendDots
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

    var verticalHeightStyle = null;

    if (this.props.vertical) {
      verticalHeightStyle = {
        height: this.state.listHeight,
      };
    }

    var centerPaddingStyle = null;

    if (this.props.vertical === false) {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: ('0px ' + this.props.centerPadding)
        };
      }
    } else {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: (this.props.centerPadding + ' 0px')
        };
      }
    }

    const listStyle = assign({}, verticalHeightStyle, centerPaddingStyle);
    let listProps = {
      className: 'slick-list',
      style: listStyle,
      onMouseDown: this.swipeStart,
      onMouseMove: this.state.dragging ? this.swipeMove : null,
      onMouseUp: this.swipeEnd,
      onMouseLeave: this.state.dragging ? this.swipeEnd : null,
      onTouchStart: this.swipeStart,
      onTouchMove: this.state.dragging ? this.swipeMove : null,
      onTouchEnd: this.swipeEnd,
      onTouchCancel: this.state.dragging ? this.swipeEnd : null,
      onKeyDown: this.props.accessibility ? this.keyHandler : null,
    }

    let innerSliderProps = {
      className: className,
      onMouseEnter: this.onInnerSliderEnter,
      onMouseLeave: this.onInnerSliderLeave,
      onMouseOver: this.onInnerSliderOver,
    }

    if (this.props.unslick) {
      listProps = { className: 'slick-list' }
      innerSliderProps = { className }
    }
    
    return (
      <div {...innerSliderProps} >
        { !this.props.unslick ? prevArrow : '' }
        <div ref={this.listRefHandler} {...listProps} >
          <Track ref={this.trackRefHandler} {...trackProps}>
            {this.props.children}
          </Track>
        </div>
        { !this.props.unslick ? nextArrow: '' }
        { !this.props.unslick ? dots : '' }
      </div>
    );
  }
});
