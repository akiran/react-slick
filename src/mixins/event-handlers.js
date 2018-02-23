'use strict';
import {getTrackCSS, getTrackLeft, getTrackAnimateCSS} from './trackHelper';
import helpers from './helpers';
import assign from 'object-assign';
import ReactDOM from 'react-dom';
import { siblingDirection } from '../utils/trackUtils'

var EventHandlers = {
  // Event handler for previous and next
  // gets called if slide is changed via arrows or dots but not swiping/dragging
  changeSlide: function (options) {
    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
    const {slidesToScroll, slidesToShow, centerMode, rtl} = this.props
    const {slideCount, currentSlide} = this.state
    unevenOffset = (slideCount % slidesToScroll !== 0);
    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

    if (options.message === 'previous') {
      slideOffset = (indexOffset === 0) ? slidesToScroll : slidesToShow - indexOffset;
      targetSlide = currentSlide - slideOffset;
      if (this.props.lazyLoad && !this.props.infinite) {
        previousInt = currentSlide - slideOffset;
        targetSlide = previousInt === -1 ? slideCount -1 : previousInt;
      }
    } else if (options.message === 'next') {
      slideOffset = (indexOffset === 0) ? slidesToScroll : indexOffset;
      targetSlide = currentSlide + slideOffset;
      if (this.props.lazyLoad && !this.props.infinite) {
        targetSlide = ((currentSlide + slidesToScroll) % slideCount) + indexOffset;
      }
    } else if (options.message === 'dots') {
      // Click on dots
      targetSlide = options.index * options.slidesToScroll
      if (targetSlide === options.currentSlide) {
        return;
      }
    } else if (options.message === 'children') {
      // Click on the slides
      targetSlide = options.index
      if (targetSlide === options.currentSlide) {
        return
      }
      if (this.props.infinite) {
        let direction = siblingDirection({currentSlide, targetSlide, slidesToShow, centerMode, slideCount, rtl})
        if (targetSlide > options.currentSlide && direction === 'left') {
          targetSlide = targetSlide - slideCount
        } else if (targetSlide < options.currentSlide && direction === 'right') {
          targetSlide = targetSlide + slideCount
        }
      }
    } else if (options.message === 'index') {
      targetSlide = Number(options.index);
      if (targetSlide === options.currentSlide) {
        return;
      }
    }
    this.slideHandler(targetSlide);
  },

  // Accessiblity handler for previous and next
  keyHandler: function (e) {
    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
    if(!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
        if (e.keyCode === 37 && this.props.accessibility === true) {
            this.changeSlide({
              message: this.props.rtl === true ? 'next' :  'previous'
            });
        } else if (e.keyCode === 39 && this.props.accessibility === true) {
            this.changeSlide({
              message: this.props.rtl === true ? 'previous' : 'next'
            });
        }
    }
  },
  // Focus on selecting a slide (click handler on track)
  selectHandler: function (options) {
    this.changeSlide(options)
  },
  // invoked when swiping/dragging starts (just once)
  swipeStart: function (e) {
    var touches, posX, posY;

    // the condition after or looked redundant
    if ((this.props.swipe === false)) { // || ('ontouchend' in document && this.props.swipe === false)) {
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
  },
  // continuous invokation while swiping/dragging is going on
  swipeMove: function (e) {
    if (!this.state.dragging) {
      e.preventDefault();
      return;
    }
    if (this.state.scrolling) {
      return;
    }
    if (this.state.animating) {
      e.preventDefault();
      return;
    }
    if (this.props.vertical && this.props.swipeToSlide && this.props.verticalSwiping) {
      e.preventDefault();
    }
    var swipeLeft;
    var curLeft, positionOffset;
    var touchObject = this.state.touchObject;

    curLeft = getTrackLeft(assign({
      slideIndex: this.state.currentSlide,
      trackRef: this.track
    }, this.props, this.state));
    touchObject.curX = (e.touches) ? e.touches[0].pageX : e.clientX;
    touchObject.curY = (e.touches) ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

    if (!this.props.verticalSwiping && !this.state.swiping && verticalSwipeLength > 10) {
      this.setState({
        scrolling: true
      })
      return;
    }

    if (this.props.verticalSwiping) {
      touchObject.swipeLength = verticalSwipeLength;
    }

    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);

    if (this.props.verticalSwiping) {
      positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
    }

    var currentSlide = this.state.currentSlide;
    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll); // this might not be correct, using getDotCount may be more accurate
    var swipeDirection = this.swipeDirection(this.state.touchObject);
    var touchSwipeLength = touchObject.swipeLength;

    if (this.props.infinite === false) {
      if ((currentSlide === 0 && swipeDirection === 'right') || (currentSlide + 1 >= dotCount && swipeDirection === 'left')) {
        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;

        if (this.state.edgeDragged === false && this.props.edgeEvent) {
          this.props.edgeEvent(swipeDirection);
          this.setState({ edgeDragged: true });
        }
      }
    }
    if (this.state.swiped === false && this.props.swipeEvent) {
      this.props.swipeEvent(swipeDirection);
      this.setState({ swiped: true });
    }

    if (!this.props.vertical) {
      if (!this.props.rtl) {
        swipeLeft = curLeft + touchSwipeLength * positionOffset;
      }
      else {
        swipeLeft = curLeft - touchSwipeLength * positionOffset;
      }
    } else {
      swipeLeft = curLeft + (touchSwipeLength * (this.state.listHeight / this.state.listWidth)) * positionOffset;
    }

    if (this.props.verticalSwiping) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    }

    this.setState({
      touchObject: touchObject,
      swipeLeft: swipeLeft,
      trackStyle: getTrackCSS(assign({left: swipeLeft}, this.props, this.state))
    });

    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8)
      { return; }
    if (touchObject.swipeLength > 10) {
      this.setState({
        swiping: true
      })
      e.preventDefault();
    }
  },
  getNavigableIndexes() {
    let max;
    let breakPoint = 0;
    let counter = 0;
    let indexes = [];

    if (!this.props.infinite) {
      max = this.state.slideCount;
    } else {
      breakPoint = this.props.slidesToShow * -1;
      counter = this.props.slidesToShow * -1;
      max = this.state.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + this.props.slidesToScroll;

      counter += this.props.slidesToScroll <= this.props.slidesToShow ?
        this.props.slidesToScroll : this.props.slidesToShow;
    }

    return indexes;
  },
  checkNavigable(index) {
    const navigables = this.getNavigableIndexes();
    let prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  },
  getSlideCount() {
    const centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;

    if (this.props.swipeToSlide) {
      let swipedSlide;

      const slickList = ReactDOM.findDOMNode(this.list);

      const slides = slickList.querySelectorAll('.slick-slide');

      Array.from(slides).every((slide) => {
        if (!this.props.vertical) {
          if (slide.offsetLeft - centerOffset + (this.getWidth(slide) / 2) > this.state.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        } else {
          if (slide.offsetTop + (this.getHeight(slide) / 2) > this.state.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        }

        return true;
      });

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
    var swipeDirection = this.swipeDirection(touchObject);

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

      let slideCount, newSlide;

      switch (swipeDirection) {

        case 'left':
        case 'down':
          newSlide = this.state.currentSlide + this.getSlideCount();
          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
          // this.state.currentDirection = 0; // critical: change this line with setState statement
          this.setState({ currentDirection: 0 }) // unverified fix of above line
          break;

        case 'right':
        case 'up':
          newSlide = this.state.currentSlide - this.getSlideCount();
          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
          // this.state.currentDirection = 1; // critical: change this line with setState statement
          this.setState({ currentDirection: 1 }) // unverified fix of above line
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
      this.pause();
    }
  },
  onInnerSliderOver: function (e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause();
    }
  },
  onInnerSliderLeave: function (e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.autoPlay();
    }
  }
};

export default EventHandlers;
