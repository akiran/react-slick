'use strict';
import {getTrackCSS, getTrackLeft, getTrackAnimateCSS} from './trackHelper';
import helpers from './helpers';
import assign from 'object-assign';

/**
 *
 * Calculate if horizontal track swiping should occur.

 * A typical "vertical" thumb swipe to navigate the page can have a degree offset
 * of up to 45deg from the horizontal line, so it makes sense to start moving *the slide* at
 * a lower degree offset -- e.g. 20deg -- so that no accidental slide swiping occurs while
 * the user just wanted to swipe down the page.
 *
 *              ^                       45deg
 *              |                     .'
 *              |                   .'
 *              |                 .'
 *              |               .'
 *              |             .'
 *              |          .-'
 *              |        .'
 *              |      .'            __ 20deg (degree offset from horizontal line)
 *              |    .'        _..-::::|
 *              |  .'   __..-::::::::::|
 *      Swipe   |.i_.-:::::::::::::::::|
 *      start-> +'-:::::::Move slide---+----------------- (horizontal line)
 *              |`:`-.:::::::::::::::::|
 *              |  `.    `--.::::::::::|
 *              |    `.        `--:::::|
 *              |      `.            ``|20deg (degree offset from horizontal line)
 *              |        `.
 *              |          `-.
 *              |             `.
 *              |               `.
 *              |                 `.
 *              |                   `.
 *              |                     `45deg
 *              |
 *              v
 *
 * deltaX: The absolute horizontal pixel length of the current swipe
 * deltaY: The absolute vertical pixel length of the current swipe
 *
 */
function shouldTriggerSlideMovement(deltaX, deltaY) {
  var minimumDegreeOffsetFromHorizontalLine = 20; // degree
  var xFactor = (minimumDegreeOffsetFromHorizontalLine / 45);
  return deltaX * xFactor > deltaY;
}

var EventHandlers = {
  // Event handler for previous and next
  changeSlide: function (options) {
    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
    const {slidesToScroll, slidesToShow} = this.props
    const {slideCount, currentSlide} = this.state
    unevenOffset = (slideCount % slidesToScroll !== 0);
    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

    if (options.message === 'previous') {
      slideOffset = (indexOffset === 0) ? slidesToScroll : slidesToShow - indexOffset;
      targetSlide = currentSlide - slideOffset;
      if (this.props.lazyLoad) {
        previousInt = currentSlide - slideOffset;
        targetSlide = previousInt === -1 ? slideCount -1 : previousInt;
      }
    } else if (options.message === 'next') {
      slideOffset = (indexOffset === 0) ? slidesToScroll : indexOffset;
      targetSlide = currentSlide + slideOffset;
    } else if (options.message === 'dots') {
      // Click on dots
      targetSlide = options.index * options.slidesToScroll;
      if (targetSlide === options.currentSlide) {
        return;
      }
    } else if (options.message === 'index') {
      targetSlide = options.index;
      if (targetSlide === options.currentSlide) {
        return;
      }
    }

    this.slideHandler(targetSlide);
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
  },
  swipeMove: function (e) {
    // Fix #5
    if (this.state.animating) {
      return;
    }

    var swipeLeft;
    var curLeft, positionOffset;
    var touchObject = this.state.touchObject;

    curLeft = getTrackLeft(assign({
      slideIndex: this.state.currentSlide,
      trackRef: this.refs.track
    }, this.props, this.state));
    touchObject.curX = (e.touches) ? e.touches[0].pageX : e.clientX;
    touchObject.curY = (e.touches) ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));

    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);

    var currentSlide = this.state.currentSlide;
    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll);
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

    var deltaX = Math.abs(touchObject.curX - touchObject.startX);
    var deltaY = Math.abs(touchObject.curY - touchObject.startY);
    if (!shouldTriggerSlideMovement(deltaX, deltaY)) {
      this.setState({
        touchObject: {
          // Set startX to current X so that *when* the deltaX/Y combination
          // will later trigger a slide movement, the start x movement of the
          // slide will be smooth and not jerky
          // (Example: during a ~70 deg slide motion an x offset of 10px and an y offset
          // of 40px has been accumulated. Now the slide motion is corrected to be
          // more horizontal. When the deltaX/Y ratio will be sufficient, we don't want to
          // the slide to jump 10px at once.
          startX: touchObject.curX,
          startY: touchObject.startY,
        },
      });
      // Don't perform the slide movement below if shouldTriggerSlideMovement returned false
      return;
    }

    swipeLeft = curLeft + touchSwipeLength * positionOffset;
    this.setState({
      touchObject: touchObject,
      swipeLeft: swipeLeft,
      trackStyle: getTrackCSS(assign({left: swipeLeft}, this.props, this.state))
    });

    // Fix #38
    if (touchObject.swipeLength > 4) {
      e.preventDefault();
    }
  },
  swipeEnd: function (e) {
    if (!this.state.dragging) {
      return;
    }
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth/this.props.touchThreshold;
    var swipeDirection = this.swipeDirection(touchObject);

    // reset the state of touch related state variables.
    this.setState({
      dragging: false,
      edgeDragged: false,
      swiped: false,
      swipeLeft: null,
      touchObject: {}
    });
    // Fix for #13
    if (!touchObject.swipeLength) {
      return;
    }
    if (touchObject.swipeLength > minSwipe) {
      e.preventDefault();
      if (swipeDirection === 'left') {
        this.slideHandler(this.state.currentSlide + this.props.slidesToScroll);
      } else if (swipeDirection === 'right') {
        this.slideHandler(this.state.currentSlide - this.props.slidesToScroll);
      } else {
        this.slideHandler(this.state.currentSlide);
      }
    } else {
      // Adjust the track back to it's original position.
      var currentLeft = getTrackLeft(assign({
        slideIndex: this.state.currentSlide,
        trackRef: this.refs.track
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
  onInnerSliderLeave: function (e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.autoPlay();
    }
  }
};

export default EventHandlers;
