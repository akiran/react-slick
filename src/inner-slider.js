'use strict';

import React from 'react';
import initialState from './initial-state';
import defaultProps from './default-props';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import { getOnDemandLazySlides, extractObject, initializedState, getHeight, 
  canGoNext, slideHandler, changeSlide, keyHandler, swipeStart, swipeMove, 
  swipeEnd, getPreClones, getPostClones } from './utils/innerSliderUtils'
import { getTrackLeft, getTrackCSS } from './utils/innerSliderUtils'

import { Track } from './track';
import { Dots } from './dots';
import { PrevArrow, NextArrow } from './arrows';
import ResizeObserver from 'resize-observer-polyfill'

export class InnerSlider extends React.Component {
  constructor(props) {
    super(props)
    this.list = null
    this.track = null
    this.state = {
      ...initialState,
      currentSlide: this.props.initialSlide
    }
    this.callbackTimers = []
  }
  listRefHandler = ref =>  this.list = ref
  trackRefHandler = ref => this.track = ref
  adaptHeight = () => {
    if (this.props.adaptiveHeight && this.list) {
      const elem = this.list.querySelector(`[data-index="${this.state.currentSlide}"]`)
      this.list.style.height = getHeight(elem) + 'px'
    }
  }
  componentWillMount = () => {
    this.props.onInit && this.props.onInit()
    if (this.props.lazyLoad) {
      let slidesToLoad = getOnDemandLazySlides({...this.props, ...this.state})
      if (slidesToLoad.length > 0) {
        this.setState((prevState, props) => ({ lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) }))
        if (this.props.onLazyLoad) {
          this.props.onLazyLoad(slidesToLoad)
        }
      }
    }
  }
  componentDidMount = () => {
    let spec = {listRef: this.list, trackRef: this.track, ...this.props}
    this.updateState(spec, true, () => {
      this.adaptHeight()
      this.props.autoplay && this.autoPlay('update')
    })
    if (this.props.lazyLoad === 'progressive') {
      this.lazyLoadTimer = setInterval(this.progressiveLazyLoad, 1000)
    }
    this.ro = new ResizeObserver( entries => this.onWindowResized())
    this.ro.observe(this.list)
    Array.from(document.querySelectorAll('.slick-slide')).forEach( slide => {
      slide.onfocus = this.props.pauseOnFocus ? this.onSlideFocus : null
      slide.onblur = this.props.pauseOnFocus ? this.onSlideBlur : null
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
  }
  componentWillUnmount = () => {
    if (this.animationEndCallback) {
      clearTimeout(this.animationEndCallback);
    }
    if (this.lazyLoadTimer) {
      clearInterval(this.lazyLoadTimer)
    }
    if (this.callbackTimers.length) {
      this.callbackTimers.forEach(timer => clearTimeout(timer))
      this.callbackTimers = []
    }
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }
  componentWillReceiveProps = (nextProps) => {
    let spec = {listRef: this.list, trackRef: this.track, ...nextProps, ...this.state}
    this.updateState(spec, false, () => {
      if (this.state.currentSlide >= React.Children.count(nextProps.children)) {
        this.changeSlide({
          message: 'index',
          index: React.Children.count(nextProps.children) - nextProps.slidesToShow,
          currentSlide: this.state.currentSlide
        });
      }
      if (nextProps.autoplay) {
        this.autoPlay('update')
      } else {
        this.pause('paused')
      }
    })
  }
  componentDidUpdate = () => {
    this.checkImagesLoad()
    this.props.onReInit && this.props.onReInit()
    if (this.props.lazyLoad) {
      let slidesToLoad = getOnDemandLazySlides({...this.props, ...this.state})
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
  }
  onWindowResized = () => {
    let spec = {listRef: this.list, trackRef: this.track, ...this.props, ...this.state}
    this.updateState(spec, true, () => {
      if (this.props.autoplay) this.autoPlay('update')
      else this.pause('paused')
    })
    // animating state should be cleared while resizing, otherwise autoplay stops working
    this.setState({
      animating: false
    });
    clearTimeout(this.animationEndCallback);
    delete this.animationEndCallback;
  }
  updateState = (spec, setTrackStyle, callback) => {
    let updatedState = initializedState(spec)
    spec = {...spec, ...updatedState, slideIndex: updatedState.currentSlide}
    let targetLeft = getTrackLeft(spec)
    spec = {...spec, left: targetLeft}
    let trackStyle = getTrackCSS(spec)
    if (setTrackStyle || (React.Children.count(this.props.children) !==
      React.Children.count(spec.children))) {
      updatedState['trackStyle'] = trackStyle
    }
    this.setState( updatedState, callback )
  }
  checkImagesLoad = () => {
    let images = document.querySelectorAll('.slick-slide img')
    let imagesCount = images.length,
      loadedCount = 0
    Array.from(images).forEach(image => {
      const handler = () => ++loadedCount &&
          (loadedCount >= imagesCount) && this.onWindowResized()
      if (!image.onclick) {
        image.onclick = () => image.parentNode.focus()
      } else {
        const prevClickHandler = image.onclick
        image.onclick = () => {
          prevClickHandler()
          image.parentNode.focus()
        }
      }
      if (!image.onload) {
        if (this.props.lazyLoad) {
          image.onload = () => {
            this.adaptHeight()
            this.callbackTimers.push(
              setTimeout(this.onWindowResized, this.props.speed))
          }
        } else {
          image.onload = handler
          image.onerror = () => {
            handler()
            this.props.onLazyLoadError && this.props.onLazyLoadError()
          }
        }
      }
    })
  }
  progressiveLazyLoad = () => {
    let slidesToLoad = []
    const spec = {...this.props, ...this.state}
    for(let index = this.state.currentSlide;
      index < this.state.slideCount + getPostClones(spec); index++) {
      if (this.state.lazyLoadedList.indexOf(index) < 0) {
        slidesToLoad.push(index)
        break
      }
    }
    for(let index = this.state.currentSlide - 1;
      index >= -getPreClones(spec); index--) {
      if (this.state.lazyLoadedList.indexOf(index) < 0) {
        slidesToLoad.push(index)
        break
      }
    }
    if (slidesToLoad.length > 0) {
      this.setState( state => (
        {lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)}
      ))
      if (this.props.onLazyLoad) {
        this.props.onLazyLoad(slidesToLoad)
      }
    } else {
      if (this.lazyLoadTimer) {
        clearInterval(this.lazyLoadTimer)
        delete this.lazyLoadTimer
      }
    }
  }
  slideHandler = (index) => {
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
        const{animating, ...firstBatch} = nextState
        this.setState(firstBatch, () => {
          this.callbackTimers.push(
            setTimeout(() => this.setState({ animating }), 10))
          afterChange && afterChange(state.currentSlide)
          delete this.animationEndCallback
        })
      }, speed)
    })

  }
  changeSlide = (options) => {
    const spec = {...this.props, ...this.state}
    let targetSlide = changeSlide(spec, options)
    if (targetSlide !== 0 && !targetSlide) return
    this.slideHandler(targetSlide)
  }
  keyHandler = (e) => {
    let dir = keyHandler(e, this.props.accessibility, this.props.rtl)
    dir !== '' && this.changeSlide({ message: dir })
  }
  selectHandler = (options) => {
    this.changeSlide(options)
  }
  swipeStart = (e) => {
    let state = swipeStart(e, this.props.swipe, this.props.draggable)
    state !== '' && this.setState(state)
  }
  swipeMove = (e) => {
    let state = swipeMove(e, {
      ...this.props,
      ...this.state,
      trackRef: this.track,
      listRef: this.list,
      slideIndex: this.state.currentSlide
    })
    if (!state) return
    this.setState(state)
  }
  swipeEnd = (e) => {
    let state = swipeEnd(e, {
      ...this.props,
      ...this.state,
      trackRef: this.track,
      listRef: this.list,
      slideIndex: this.state.currentSlide
    })
    if (!state) return
    let triggerSlideHandler = state['triggerSlideHandler']
    delete state['triggerSlideHandler']
    this.setState(state)
    if (triggerSlideHandler === undefined) return
    this.slideHandler(triggerSlideHandler)
  }
  slickPrev = () => {
    // this and fellow methods are wrapped in setTimeout
    // to make sure initialize setState has happened before
    // any of such methods are called
    this.callbackTimers.push(
      setTimeout(() => this.changeSlide({ message: 'previous' }), 0))
  }
  slickNext = () => {
    this.callbackTimers.push(
      setTimeout(() => this.changeSlide({ message: 'next' }), 0))
  }
  slickGoTo = (slide) => {
    slide = Number(slide)
    if (isNan(slide)) return ''
    this.callbackTimers.push(
      setTimeout( () => this.changeSlide({
        message: 'index',
        index: slide,
        currentSlide: this.state.currentSlide
      }), 0)
    )
  }
  play = ()=> {
    var nextIndex;
    if (this.props.rtl) {
      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
    } else {
      if (canGoNext({...this.props, ...this.state})) {
        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
      } else {
        return false;
      }
    }

    this.slideHandler(nextIndex);
  }
  autoPlay = (playType) => {
    if (this.autoplayTimer) {
      console.warn("autoPlay is triggered more than once")
      clearInterval(this.autoplayTimer)
    }
    const autoplaying = this.state.autoplaying
    if (playType === 'update') {
      if (autoplaying === 'hovered' ||
        autoplaying === 'focused' || autoplaying === 'paused') {
        return
      }
    } else if (playType === 'leave') {
      if (autoplaying === 'paused' || autoplaying === 'focused') {
        return
      }
    } else if (playType === 'blur') {
      if (autoplaying === 'paused' || autoplaying === 'hovered') {
        return
      }
    }
    this.autoplayTimer = setInterval(this.play, this.props.autoplaySpeed+50)
    this.setState({ autoplaying: 'playing' })
  }
  pause = (pauseType) => {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer)
      this.autoplayTimer = null
    }
    const autoplaying = this.state.autoplaying
    if (pauseType === 'paused') {
      this.setState({ autoplaying: 'paused' })
    } else if (pauseType === 'focused') {
      if (autoplaying === 'hovered' || autoplaying === 'playing') {
        this.setState({ autoplaying: 'focused'})
      }
    } else { // pauseType  is 'hovered'
      if (autoplaying === 'playing') {
        this.setState({ autoplaying: 'hovered' })
      }
    }
  }
  onDotsOver = e => this.props.autoplay && this.pause('hovered')
  onDotsLeave = e => this.props.autoplay &&
    this.state.autoplaying === 'hovered' && this.autoPlay('leave')
  onTrackOver = e => this.props.autoplay && this.pause('hovered')
  onTrackLeave = e => this.props.autoplay &&
    this.state.autoplaying === 'hovered' && this.autoPlay('leave')
  onSlideFocus = e => this.props.autoplay && this.pause('focused')
  onSlideBlur = e => this.props.autoplay &&
    this.state.autoplaying === 'focused' && this.autoPlay('blur')

  render = () => {
    var className = classnames('regular', 'slider', 'slick-initialized', 'slick-slider', this.props.className, {
      'slick-vertical': this.props.vertical,
    });
    let spec = {...this.props, ...this.state}
    let trackProps = extractObject(spec, [
      'fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect',
      'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth',
      'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll',
      'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding' ])
    const {pauseOnHover} = this.props
    trackProps = {
      ...trackProps,
      onMouseEnter: pauseOnHover ? this.onTrackOver : null,
      onMouseLeave: pauseOnHover ? this.onTrackLeave : null,
      onMouseOver: pauseOnHover ? this.onTrackOver : null,
      focusOnSelect: this.props.focusOnSelect? this.selectHandler: null
    }

    var dots;
    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
      let dotProps = extractObject(spec, [
        'dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll',
        'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots' ])
      const { pauseOnDotsHover } = this.props
      dotProps = {
        ...dotProps,
        clickHandler: this.changeSlide,
        onMouseEnter: pauseOnDotsHover ? this.onDotsLeave: null,
        onMouseOver: pauseOnDotsHover ? this.onDotsOver: null,
        onMouseLeave: pauseOnDotsHover ? this.onDotsLeave: null,
      }
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

    const listStyle = {...verticalHeightStyle, ...centerPaddingStyle}
    const touchMove = this.props.touchMove
    let listProps = {
      className: 'slick-list',
      style: listStyle,
      onMouseDown: touchMove ? this.swipeStart : null,
      onMouseMove: this.state.dragging && touchMove ? this.swipeMove : null,
      onMouseUp: touchMove ? this.swipeEnd : null,
      onMouseLeave: this.state.dragging && touchMove ? this.swipeEnd : null,
      onTouchStart: touchMove ? this.swipeStart : null,
      onTouchMove: this.state.dragging && touchMove ? this.swipeMove : null,
      onTouchEnd: touchMove ? this.swipeEnd : null,
      onTouchCancel: this.state.dragging && touchMove ? this.swipeEnd : null,
      onKeyDown: this.props.accessibility ? this.keyHandler : null,
    }

    let innerSliderProps = {
      className: className,
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
}
