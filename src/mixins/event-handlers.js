'use strict';
import {getTrackCSS, getTrackLeft, getTrackAnimateCSS} from './trackHelper';
import assign from 'object-assign';
import ReactDOM from 'react-dom';
import { siblingDirection } from '../utils/trackUtils'
import { getWidth, getHeight, getSwipeDirection, checkNavigable } from '../utils/innerSliderUtils'

var EventHandlers = {
  getSlideCount() {
    const centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;

    if (this.props.swipeToSlide) {
      let swipedSlide;

      const slickList = ReactDOM.findDOMNode(this.list);

      const slides = slickList.querySelectorAll('.slick-slide');

      Array.from(slides).every((slide) => {
        if (!this.props.vertical) {
          if (slide.offsetLeft - centerOffset + (getWidth(slide) / 2) > this.state.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        } else {
          if (slide.offsetTop + (getHeight(slide) / 2) > this.state.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        }

        return true;
      });

      if (!swipedSlide) {
        return 0;
      }
      const currentIndex = this.props.rtl === true ? this.state.slideCount - this.state.currentSlide : this.state.currentSlide; 
      const slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;

      return slidesTraversed;
    } else {
      return this.props.slidesToScroll;
    }
  },
  swipeEnd: function (e) {
    if (!this.state.dragging) {
      if (this.props.swipe) {
        e.preventDefault();
      }
      return;
    }
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth/this.props.touchThreshold;
    var swipeDirection = getSwipeDirection(touchObject, this.props.verticalSwiping);

    if (this.props.verticalSwiping) {
      minSwipe = this.state.listHeight/this.props.touchThreshold;
    }

    var wasScrolling = this.state.scrolling;
    // reset the state of touch related state variables.
    this.setState({
      dragging: false,
      edgeDragged: false,
      scrolling: false,
      swiping: false,
      swiped: false,
      swipeLeft: null,
      touchObject: {}
    });
    if (wasScrolling) {
      return;
    }

    // Fix for #13
    if (!touchObject.swipeLength) {
      return;
    }
    if (touchObject.swipeLength > minSwipe) {
      e.preventDefault();

      if(this.props.onSwipe) {
        this.props.onSwipe(swipeDirection)
      }

      let slideCount, newSlide;

      switch (swipeDirection) {

        case 'left':
        case 'up':
          newSlide = this.state.currentSlide + this.getSlideCount();
          slideCount = this.props.swipeToSlide ? checkNavigable({...this.props, ...this.state}, newSlide) : newSlide;
          this.setState({ currentDirection: 0 })
          break;

        case 'right':
        case 'down':
          newSlide = this.state.currentSlide - this.getSlideCount();
          slideCount = this.props.swipeToSlide ? checkNavigable({...this.props, ...this.state}, newSlide) : newSlide;
          this.setState({ currentDirection: 1 })
          break;

        default:
          slideCount = this.state.currentSlide;

      }
      this.slideHandler(slideCount);
    } else {
      // Adjust the track back to it's original position.
      var currentLeft = getTrackLeft(assign({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, this.props, this.state));

      this.setState({
        trackStyle: getTrackAnimateCSS(assign({left: currentLeft}, this.props, this.state))
      });
    }
  },
  onInnerSliderEnter: function (e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause(true);
    }
  },
  onInnerSliderOver: function (e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause(true);
    }
  },
  onInnerSliderLeave: function (e) {
    if (this.props.autoplay && this.props.pauseOnHover &&
      this.state.autoplaying === 'hovered') {
      this.autoPlay();
    }
  }
};

export default EventHandlers;
