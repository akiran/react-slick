'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _trackHelper = require('./trackHelper');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var EventHandlers = {
  // Event handler for previous and next
  changeSlide: function changeSlide(options) {
    var indexOffset, slideOffset, unevenOffset, targetSlide;
    unevenOffset = this.state.slideCount % this.props.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (this.state.slideCount - this.state.currentSlide) % this.props.slidesToScroll;

    if (options.message === 'previous') {
      slideOffset = indexOffset === 0 ? this.props.slidesToScroll : this.props.slidesToShow - indexOffset;
      targetSlide = this.state.currentSlide - slideOffset;
    } else if (options.message === 'next') {
      slideOffset = indexOffset === 0 ? this.props.slidesToScroll : indexOffset;
      targetSlide = this.state.currentSlide + slideOffset;
    } else if (options.message === 'dots') {
      // Click on dots
      targetSlide = options.index * options.slidesToScroll;
      if (targetSlide === options.currentSlide) {
        return;
      }
    }

    this.slideHandler(targetSlide);
  },
  // Accessiblity handler for previous and next
  keyHandler: function keyHandler(e) {},
  // Focus on selecting a slide (click handler on track)
  selectHandler: function selectHandler(e) {},
  swipeStart: function swipeStart(e) {
    var touches, posX, posY;

    if (this.props.swipe === false || 'ontouchend' in document && this.props.swipe === false) {
      return;
    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
      return;
    }
    posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
    posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
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
  swipeMove: function swipeMove(e) {
    if (!this.state.dragging) {
      return;
    }
    if (this.state.animating) {
      return;
    }
    var swipeLeft;
    var curLeft, positionOffset;
    var touchObject = this.state.touchObject;

    curLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2['default'])({
      slideIndex: this.state.currentSlide,
      trackRef: this.refs.track
    }, this.props, this.state));
    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));

    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);

    var currentSlide = this.state.currentSlide;
    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll);
    var swipeDirection = this.swipeDirection(this.state.touchObject);
    var touchSwipeLength = touchObject.swipeLength;

    if (this.props.infinite === false) {
      if (currentSlide === 0 && swipeDirection === 'right' || currentSlide + 1 >= dotCount && swipeDirection === 'left') {
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

    swipeLeft = curLeft + touchSwipeLength * positionOffset;
    this.setState({
      touchObject: touchObject,
      swipeLeft: swipeLeft,
      trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2['default'])({ left: swipeLeft }, this.props, this.state))
    });

    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
      return;
    }
    if (touchObject.swipeLength > 4) {
      e.preventDefault();
    }
  },
  swipeEnd: function swipeEnd(e) {
    if (!this.state.dragging) {
      return;
    }
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth / this.props.touchThreshold;
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
      var currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2['default'])({
        slideIndex: this.state.currentSlide,
        trackRef: this.refs.track
      }, this.props, this.state));

      this.setState({
        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2['default'])({ left: currentLeft }, this.props, this.state))
      });
    }
  }
};

exports['default'] = EventHandlers;
module.exports = exports['default'];