'use strict';

import React from 'react';
import EventHandlersMixin from './mixins/event-handlers';
import initialState from './initial-state';
import defaultProps from './default-props';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import assign from 'object-assign';
import { getOnDemandLazySlides, extractObject, initializedState, getHeight, 
  canGoNext, slideHandler, changeSlide, keyHandler, swipeStart, swipeMove
} from './utils/innerSliderUtils'
import { getTrackLeft, getTrackCSS } from './mixins/trackHelper'

import { Track } from './track';
import { Dots } from './dots';
import { PrevArrow, NextArrow } from './arrows';

export var InnerSlider = createReactClass({
  mixins: [EventHandlersMixin],
  list: null, // wraps the track
  track: null, // component that rolls out like a film
  listRefHandler: function (ref) {
    this.list = ref;
  },
  trackRefHandler: function (ref) {
    this.track = ref;
  },
  adaptHeight: function () {
    if (this.props.adaptiveHeight && this.list) {
      const elem = this.list.querySelector(`[data-index="${this.state.currentSlide}"]`)
      this.list.style.height = getHeight(elem) + 'px'
    }
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
    let spec = assign({listRef: this.list, trackRef: this.track}, this.props)
    this.updateState(spec, true, () => {
      this.adaptHeight()
      this.props.autoplay && this.autoPlay()
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
    let spec = assign({listRef: this.list, trackRef: this.track}, nextProps, this.state)
    this.updateState(spec, false, () => {
      if (this.state.currentSlide >= React.Children.count(nextProps.children)) {
        this.changeSlide({
          message: 'index',
          index: React.Children.count(nextProps.children) - nextProps.slidesToShow,
          currentSlide: this.state.currentSlide
        });
      }
      if (nextProps.autoplay) {
        this.autoPlay()
      } else {
        this.pause()
      }
    })
  },
  componentDidUpdate: function () {
    this.checkImagesLoad()
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
    let spec = assign({listRef: this.list, trackRef: this.track}, this.props, this.state)
    this.updateState(spec, false, () => {
      if (this.props.autoplay) this.autoPlay()
      else this.pause()
    })
    // animating state should be cleared while resizing, otherwise autoplay stops working
    this.setState({
      animating: false
    });
    clearTimeout(this.animationEndCallback);
    delete this.animationEndCallback;
  },
  updateState: function (spec, setTrackStyle, callback) {
    let updatedState = initializedState(spec)
    assign(spec, {slideIndex: updatedState.currentSlide}, updatedState)
    let targetLeft = getTrackLeft(spec)
    assign(spec, {left: targetLeft})
    let trackStyle = getTrackCSS(spec)
    if (setTrackStyle || (React.Children.count(this.props.children) !==
      React.Children.count(spec.children))) {
      updatedState['trackStyle'] = trackStyle
    }
    this.setState( updatedState, callback )
  },
  checkImagesLoad: function () {
    let images = document.querySelectorAll('.slick-slide img')
    let imagesCount = images.length,
      loadedCount = 0
    images.forEach(image => {
      const handler = () => ++loadedCount &&
          (loadedCount >= imagesCount) && this.onWindowResized()
      if (!image.onload) {
        if (this.props.lazyLoad) {
          image.onload = () => this.adaptHeight() ||
            setTimeout(this.onWindowResized, this.props.speed)
        } else {
          image.onload = handler
          image.onerror = handler
        }
      }
    })
  },
  slideHandler: function(index) {
    const {
      asNavFor, currentSlide, beforeChange, onLazyLoad, speed, afterChange
    } = this.props
    let {state, nextState} = slideHandler(
      {index, ...this.props, ...this.state, trackRef: this.track})
    if (!state) return
    beforeChange && beforeChange(currentSlide, state.currentSlide)
    let slidesToLoad = state.lazyLoadedList.filter(value =>
      this.state.lazyLoadedList.indexOf(value) < 0)
    onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad)
    this.setState(state, () => {
      asNavFor && asNavFor.innerSlider.state.currentSlide !== currentSlide
        && asNavFor.innerSlider.slideHandler(index)
      this.animationEndCallback = setTimeout(() => {
        this.setState(nextState, () => {
          afterChange && afterChange(state.currentSlide)
          delete this.animationEndCallback
        })
      }, speed)
    })

  },
  changeSlide: function(options) {
    const spec = {...this.props, ...this.state}
    let targetSlide = changeSlide(spec, options)
    if (targetSlide !== 0 && !targetSlide) return
    this.slideHandler(targetSlide)
  },
  keyHandler: function(e) {
    let dir = keyHandler(e, this.props.accessibility, this.props.rtl)
    dir !== '' && this.changeSlide({ message: dir })
  },
  selectHandler: function(options) {
    this.changeSlide(options)
  },
  swipeStart: function(e) {
    let state = swipeStart(e, this.props.swipe, this.props.draggable)
    state !== '' && this.setState(state)
  },
  swipeMove: function(e) {
    let state = swipeMove(e, {
      ...this.props,
      ...this.state,
      trackRef: this.track,
      slideIndex: this.state.currentSlide
    })
    if (!state) return
    this.setState(state)
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
  play: function(){
    var nextIndex;
    if (this.props.rtl) {
      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
    } else {
      if (canGoNext(Object.assign({}, this.props,this.state))) {
        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
      } else {
        return false;
      }
    }

    this.slideHandler(nextIndex);
  },
  autoPlay: function () {
    if (this.autoplayTimer) {
      console.warn("autoPlay is triggered more than once")
      clearInterval(this.autoplayTimer)
    }
    this.autoplayTimer = setInterval(this.play, this.props.autoplaySpeed+50)
    this.setState({ autoplaying: 'playing' })
  },
  pause: function (hover=false) {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer)
      this.autoplayTimer = null
    }
    if (hover) this.setState({ autoplaying: 'hovered' })
    else this.setState({ autoplaying: 'paused' })
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
