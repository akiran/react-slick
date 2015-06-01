'use strict';
import {getTrackCSS, getTrackLeft} from './trackHelper';

var EventHandlers = {
  // Event handler for previous and next
  changeSlide: function (options) {
    var indexOffset, slideOffset, unevenOffset;
    unevenOffset = (this.state.slideCount % this.props.slidesToScroll !== 0);
    indexOffset = unevenOffset ? 0 : (this.state.slideCount - this.state.currentSlide) % this.props.slidesToScroll;

    if (options.message === 'previous') {
      slideOffset = (indexOffset === 0) ? this.props.slidesToScroll : this.props.slidesToShow - indexOffset;
      if (this.state.slideCount > this.props.slidesToShow || (this.props.centerMode && !this.props.infinite)) {
        this.slideHandler(this.state.currentSlide - slideOffset, false);
      }
    } else if (options.message === 'next') {
      slideOffset = (indexOffset === 0) ? this.props.slidesToScroll : indexOffset;
      if (this.state.slideCount > this.props.slidesToShow || (this.props.centerMode && !this.props.infinite)) {
        this.slideHandler(this.state.currentSlide + slideOffset, false);
      }
    } else if (options.message === 'dots') {
      // Click on dots
      var targetSlide = options.index * options.slidesToScroll;
      if (targetSlide !== options.currentSlide) {
        this.slideHandler(targetSlide);
      }
    }
  },
  // Accessiblity handler for previous and next
  keyHandler: function (e) {

  },
  // Focus on selecting a slide (click handler on track)
  selectHandler: function (e) {

  },
  swipeStart: function (e) {
    var touches, posX, posY;

    if ((this.props.swipe === false) || ('ontouchend' in document && this.props.swipe === false)) {
      return;
    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
      return;
    }
    posX = (e.touches !== undefined) ? e.touches[0].pageX : e.clientX;
    posY = (e.touches !== undefined) ? e.touches[0].pageY : e.clientY;
    this.setState({
      dragging: true,
      touchObject: {
        startX: posX,
        startY: posY,
        curX: posX,
        curY: posY
      }
    });
    e.preventDefault();
  },
  swipeMove: function (e) {
    if (!this.state.dragging) {
      return;
    }
    if (this.state.animating) {
      return;
    }
    var swipeLeft;
    var curLeft, positionOffset;
    var touchObject = this.state.touchObject;

    curLeft = getTrackLeft({
      slideIndex: this.state.currentSlide,
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      slideCount: this.state.slideCount,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      slideWidth: this.state.slideWidth,
      trackRef: this.refs.track,
      listWidth: this.state.listWidth
    });
    touchObject.curX = (e.touches) ? e.touches[0].pageX : e.clientX;
    touchObject.curY = (e.touches) ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));

    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
    swipeLeft = curLeft + touchObject.swipeLength * positionOffset;
    this.setState({
      touchObject: touchObject,
      swipeLeft: swipeLeft,
      trackStyle: getTrackCSS({
        variableWidth: this.props.variableWidth,
        slideCount: this.state.slideCount,
        slidesToShow: this.props.slidesToShow,
        slideWidth: this.state.slideWidth,
        left: swipeLeft
      })
    });
    e.preventDefault();
  },
  swipeEnd: function (e) {
    e.preventDefault();
    if (!this.state.dragging) {
      return;
    }
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth/this.props.touchThreshold;
    var swipeDirection = this.swipeDirection(touchObject);
    this.setState({
      dragging: false,
      swipeLeft: null,
      touchObject: {}
    });
    // Fix for #13
    if (!touchObject.swipeLength) {
      return;
    }
    if (touchObject.swipeLength > minSwipe) {
      if (swipeDirection === 'left') {
        this.slideHandler(this.state.currentSlide + this.props.slidesToScroll);
      } else if (swipeDirection === 'right') {
        this.slideHandler(this.state.currentSlide - this.props.slidesToScroll);
      } else {
        this.slideHandler(this.state.currentSlide, null, true);
      }
    } else {
      this.slideHandler(this.state.currentSlide, null, true);
    }
  }
};

export default EventHandlers;
