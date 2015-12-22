'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReactDOM = require('./ReactDOM');

var _ReactDOM2 = _interopRequireDefault(_ReactDOM);

var _reactLibReactTransitionEvents = require('react/lib/ReactTransitionEvents');

var _reactLibReactTransitionEvents2 = _interopRequireDefault(_reactLibReactTransitionEvents);

var _trackHelper = require('./trackHelper');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var helpers = {
  initialize: function initialize(props) {
    var slideCount = _react2['default'].Children.count(props.children);
    var listWidth = this.getWidth(_ReactDOM2['default'].findDOMNode(this.refs.list));
    var trackWidth = this.getWidth(_ReactDOM2['default'].findDOMNode(this.refs.track));
    var slideWidth = this.getWidth(_ReactDOM2['default'].findDOMNode(this)) / props.slidesToShow;

    var currentSlide = props.rtl ? slideCount - 1 - props.initialSlide : props.initialSlide;

    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
      listWidth: listWidth,
      trackWidth: trackWidth,
      currentSlide: currentSlide
    }, function () {

      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2['default'])({
        slideIndex: this.state.currentSlide,
        trackRef: this.refs.track
      }, props, this.state));
      // getCSS function needs previously set state
      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2['default'])({ left: targetLeft }, props, this.state));

      this.setState({ trackStyle: trackStyle });

      this.autoPlay(); // once we're set up, trigger the initial autoplay.
    });
  },
  update: function update(props) {
    // This method has mostly same code as initialize method.
    // Refactor it
    var slideCount = _react2['default'].Children.count(props.children);
    var listWidth = this.getWidth(_ReactDOM2['default'].findDOMNode(this.refs.list));
    var trackWidth = this.getWidth(_ReactDOM2['default'].findDOMNode(this.refs.track));
    var slideWidth = this.getWidth(_ReactDOM2['default'].findDOMNode(this)) / props.slidesToShow;

    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
      listWidth: listWidth,
      trackWidth: trackWidth
    }, function () {

      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2['default'])({
        slideIndex: this.state.currentSlide,
        trackRef: this.refs.track
      }, props, this.state));
      // getCSS function needs previously set state
      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2['default'])({ left: targetLeft }, props, this.state));

      this.setState({ trackStyle: trackStyle });
    });
  },
  getWidth: function getWidth(elem) {
    return elem.getBoundingClientRect().width || elem.offsetWidth;
  },
  adaptHeight: function adaptHeight() {
    if (this.props.adaptiveHeight) {
      var selector = '[data-index="' + this.state.currentSlide + '"]';
      if (this.refs.list) {
        var slickList = _ReactDOM2['default'].findDOMNode(this.refs.list);
        slickList.style.height = slickList.querySelector(selector).offsetHeight + 'px';
      }
    }
  },
  slideHandler: function slideHandler(index) {
    var _this = this;

    // Functionality of animateSlide and postSlide is merged into this function
    // console.log('slideHandler', index);
    var targetSlide, currentSlide;
    var targetLeft, currentLeft;
    var callback;

    if (this.state.currentSlide === index) {
      return;
    }

    if (this.props.fade) {
      currentSlide = this.state.currentSlide;

      //  Shifting targetSlide back into the range
      if (index < 0) {
        targetSlide = index + this.state.slideCount;
      } else if (index >= this.state.slideCount) {
        targetSlide = index - this.state.slideCount;
      } else {
        targetSlide = index;
      }

      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(targetSlide) < 0) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList.concat(targetSlide)
        });
      }

      callback = function () {
        _this.setState({
          animating: false
        });
        if (_this.props.afterChange) {
          _this.props.afterChange(currentSlide);
        }
        _reactLibReactTransitionEvents2['default'].removeEndEventListener(_ReactDOM2['default'].findDOMNode(_this.refs.track).children[currentSlide], callback);
      };

      this.setState({
        animating: true,
        currentSlide: targetSlide
      }, function () {
        _reactLibReactTransitionEvents2['default'].addEndEventListener(_ReactDOM2['default'].findDOMNode(this.refs.track).children[currentSlide], callback);
      });

      if (this.props.beforeChange) {
        this.props.beforeChange(this.state.currentSlide, currentSlide);
      }

      this.autoPlay();
      return;
    }

    targetSlide = index;
    if (targetSlide < 0) {
      if (this.props.infinite === false) {
        currentSlide = 0;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = this.state.slideCount - this.state.slideCount % this.props.slidesToScroll;
      } else {
        currentSlide = this.state.slideCount + targetSlide;
      }
    } else if (targetSlide >= this.state.slideCount) {
      if (this.props.infinite === false) {
        currentSlide = this.state.slideCount - this.props.slidesToShow;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = 0;
      } else {
        currentSlide = targetSlide - this.state.slideCount;
      }
    } else {
      currentSlide = targetSlide;
    }

    targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2['default'])({
      slideIndex: targetSlide,
      trackRef: this.refs.track
    }, this.props, this.state));

    currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2['default'])({
      slideIndex: currentSlide,
      trackRef: this.refs.track
    }, this.props, this.state));

    if (this.props.infinite === false) {
      targetLeft = currentLeft;
    }

    if (this.props.beforeChange) {
      this.props.beforeChange(this.state.currentSlide, currentSlide);
    }

    if (this.props.lazyLoad) {
      var loaded = true;
      var slidesToLoad = [];
      for (var i = targetSlide; i < targetSlide + this.props.slidesToShow; i++) {
        loaded = loaded && this.state.lazyLoadedList.indexOf(i) >= 0;
        if (!loaded) {
          slidesToLoad.push(i);
        }
      }
      if (!loaded) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad)
        });
      }
    }

    // Slide Transition happens here.
    // animated transition happens to target Slide and
    // non - animated transition happens to current Slide
    // If CSS transitions are false, directly go the current slide.

    if (this.props.useCSS === false) {

      this.setState({
        currentSlide: currentSlide,
        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2['default'])({ left: currentLeft }, this.props, this.state))
      }, function () {
        if (this.props.afterChange) {
          this.props.afterChange(currentSlide);
        }
      });
    } else {

      var nextStateChanges = {
        animating: false,
        currentSlide: currentSlide,
        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2['default'])({ left: currentLeft }, this.props, this.state)),
        swipeLeft: null
      };

      callback = function () {
        _this.setState(nextStateChanges);
        if (_this.props.afterChange) {
          _this.props.afterChange(currentSlide);
        }
        _reactLibReactTransitionEvents2['default'].removeEndEventListener(_ReactDOM2['default'].findDOMNode(_this.refs.track), callback);
      };

      this.setState({
        animating: true,
        currentSlide: targetSlide,
        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2['default'])({ left: targetLeft }, this.props, this.state))
      }, function () {
        _reactLibReactTransitionEvents2['default'].addEndEventListener(_ReactDOM2['default'].findDOMNode(this.refs.track), callback);
      });
    }

    this.autoPlay();
  },
  swipeDirection: function swipeDirection(touchObject) {
    var xDist, yDist, r, swipeAngle;

    xDist = touchObject.startX - touchObject.curX;
    yDist = touchObject.startY - touchObject.curY;
    r = Math.atan2(yDist, xDist);

    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
      return this.props.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return this.props.rtl === false ? 'right' : 'left';
    }

    return 'vertical';
  },
  autoPlay: function autoPlay() {
    var _this2 = this;

    var play = function play() {
      if (_this2.state.mounted) {
        _this2.slideHandler(_this2.state.currentSlide + _this2.props.slidesToScroll);
      }
    };
    if (this.props.autoplay) {
      window.clearTimeout(this.state.autoPlayTimer);
      this.setState({
        autoPlayTimer: window.setTimeout(play, this.props.autoplaySpeed)
      });
    }
  }
};

exports['default'] = helpers;
module.exports = exports['default'];