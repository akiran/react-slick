'use strict';

import React from 'react';
import EventHandlersMixin from './mixins/event-handlers';
import HelpersMixin from './mixins/helpers';
import initialState from './initial-state';
import defaultProps from './default-props';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import assign from 'object-assign';
import { getOnDemandLazySlides, extractObject, initializedState } from './utils/innerSliderUtils'
import { getTrackLeft, getTrackCSS } from './mixins/trackHelper'

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
    const spec = assign({listRef: this.list, trackRef: this.track}, this.props)
    let initialState = initializedState(spec)
    this.setState( initialState, () => {
      let targetLeft = getTrackLeft(assign(
        {slideIndex: this.state.currentSlide, trackRef: this.track},
        this.props, this.state
      ))
      let trackStyle = getTrackCSS(assign(
        {left: targetLeft}, this.props, this.state
      ))
      this.setState({ trackStyle })
      this.adaptHeight()
      this.autoPlay()  // it doesn't have to be here
    })

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
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
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
    } else if (this.state.currentSlide >= React.Children.count(nextProps.children)) {
      this.update(nextProps);
      this.changeSlide({
        message: 'index',
        index: React.Children.count(nextProps.children) - nextProps.slidesToShow,
        currentSlide: this.state.currentSlide
      });
    } else {
      this.update(nextProps);
    }
  },
  componentDidUpdate: function () {
    let images = document.querySelectorAll('.slick-slide img')
    images.forEach(image => {
      if (!image.onload) {
        image.onload = () => setTimeout(() => this.update(this.props), this.props.speed)
      }
    })
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
    let spec = assign({}, this.props, this.state)
    let trackProps = extractObject(spec, [
      'fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect',
      'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth',
      'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll',
      'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding' ])
    trackProps.focusOnSelect = this.props.focusOnSelect? this.selectHandler: null

    var dots;
    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
      let dotProps = extractObject(spec, [
        'dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll',
        'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots' ])
      dotProps.clickHandler = this.changeSlide
      dots = (<Dots {...dotProps} />);
    }

    var prevArrow, nextArrow;
    let arrowProps = extractObject(spec, ['infinite', 'centerMode', 'currentSlide',
      'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow'])
    arrowProps.clickHandler = this.changeSlide

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
      dir: 'ltr',
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
