'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixinsEventHandlers = require('./mixins/event-handlers');

var _mixinsEventHandlers2 = _interopRequireDefault(_mixinsEventHandlers);

var _mixinsHelpers = require('./mixins/helpers');

var _mixinsHelpers2 = _interopRequireDefault(_mixinsHelpers);

var _initialState = require('./initial-state');

var _initialState2 = _interopRequireDefault(_initialState);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _track = require('./track');

var _dots = require('./dots');

var _arrows = require('./arrows');

var InnerSlider = _react2['default'].createClass({
  displayName: 'InnerSlider',

  mixins: [_mixinsHelpers2['default'], _mixinsEventHandlers2['default']],
  getInitialState: function getInitialState() {
    return _initialState2['default'];
  },
  getDefaultProps: function getDefaultProps() {
    return _defaultProps2['default'];
  },
  componentWillMount: function componentWillMount() {
    if (this.props.init) {
      this.props.init();
    }
    this.setState({
      mounted: true
    });
    var lazyLoadedList = [];
    for (var i = 0; i < this.props.children.length; i++) {
      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow || this.props.initialSlide && i >= this.props.initialSlide && i < this.props.initialSlide + this.props.slidesToShow) {
        lazyLoadedList.push(i);
      }
    }

    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
      this.setState({
        lazyLoadedList: lazyLoadedList
      });
    }
  },
  componentDidMount: function componentDidMount() {
    // Hack for autoplay -- Inspect Later
    this.initialize(this.props);
    this.adaptHeight();

    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
      window.removeEventListener('blur', this.onWindowInactive);
      window.removeEventListener('focus', this.onWindowActive);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
      window.detachEvent('blur', this.onWindowInactive);
      window.detachEvent('focus', this.onWindowActive);
    }

    if (this.state.autoPlayTimer) {
      window.clearTimeout(this.state.autoPlayTimer);
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.slickGoTo != nextProps.slickGoTo) {
      this.setState({ currentSlide: nextProps.slickGoTo });
    }
    this.update(nextProps);
  },
  componentDidUpdate: function componentDidUpdate() {
    this.adaptHeight();
  },
  onWindowResized: function onWindowResized() {
    this.update(this.props);
    this.state.animating = false;
    /* Reset autoplay timer so that autoplaying does not occur during resize */
    this.autoPlay();
  },
  render: function render() {
    var className = (0, _classnames2['default'])('slick-initialized', 'slick-slider', this.props.className);

    var trackProps = {
      fade: this.props.fade,
      cssEase: this.props.cssEase,
      speed: this.props.speed,
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      currentSlide: this.state.currentSlide,
      lazyLoad: this.props.lazyLoad,
      lazyLoadedList: this.state.lazyLoadedList,
      rtl: this.props.rtl,
      slideWidth: this.state.slideWidth,
      slidesToShow: this.props.slidesToShow,
      slideCount: this.state.slideCount,
      trackStyle: this.state.trackStyle,
      variableWidth: this.props.variableWidth
    };

    var dots;

    if (this.props.dots === true && this.state.slideCount > this.props.slidesToShow) {
      var dotProps = {
        dotsClass: this.props.dotsClass,
        slideCount: this.state.slideCount,
        slidesToShow: this.props.slidesToShow,
        currentSlide: this.state.currentSlide,
        slidesToScroll: this.props.slidesToScroll,
        disableDots: this.props.disableDots,
        clickHandler: this.changeSlide
      };

      dots = _react2['default'].createElement(_dots.Dots, dotProps);
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
      clickHandler: this.changeSlide,
      disableNextArrow: this.props.disableNextArrow,
      disablePreviousArrow: this.props.disablePreviousArrow
    };

    if (this.props.arrows) {
      prevArrow = _react2['default'].createElement(_arrows.PrevArrow, arrowProps);
      nextArrow = _react2['default'].createElement(_arrows.NextArrow, arrowProps);
    }

    var handleTouchStart = this.props.touchMove === false ? null : this.swipeStart;
    var handleTouchMove = this.props.touchMove === false ? null : this.state.dragging ? this.swipeMove : null;
    var handleTouchEnd = this.props.touchMove === false ? null : this.swipeEnd;
    var handleTouchCancel = this.props.touchMove === false ? null : this.state.dragging ? this.swipeEnd : null;

    return _react2['default'].createElement(
      'div',
      { className: className, onMouseEnter: this.onInnerSliderEnter, onMouseLeave: this.onInnerSliderLeave },
      _react2['default'].createElement(
        'div',
        {
          ref: 'list',
          className: 'slick-list',
          onMouseDown: this.swipeStart,
          onMouseMove: this.state.dragging ? this.swipeMove : null,
          onMouseUp: this.swipeEnd,
          onMouseLeave: this.state.dragging ? this.swipeEnd : null,
          onTouchStart: handleTouchStart,
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
          onTouchCancel: handleTouchCancel },
        _react2['default'].createElement(
          _track.Track,
          _extends({ ref: 'track' }, trackProps),
          this.props.children
        )
      ),
      prevArrow,
      nextArrow,
      dots
    );
  }
});
exports.InnerSlider = InnerSlider;