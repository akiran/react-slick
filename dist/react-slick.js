(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Slider"] = factory(require("react"), require("react-dom"));
	else
		root["Slider"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _innerSlider = __webpack_require__(3);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _json2mq = __webpack_require__(21);

	var _json2mq2 = _interopRequireDefault(_json2mq);

	var _defaultProps = __webpack_require__(10);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	var _canUseDom = __webpack_require__(23);

	var _canUseDom2 = _interopRequireDefault(_canUseDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var enquire = _canUseDom2.default && __webpack_require__(24);

	var Slider = function (_React$Component) {
	  _inherits(Slider, _React$Component);

	  function Slider(props) {
	    _classCallCheck(this, Slider);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.state = {
	      breakpoint: null
	    };
	    _this._responsiveMediaHandlers = [];
	    _this.innerSliderRefHandler = _this.innerSliderRefHandler.bind(_this);
	    return _this;
	  }

	  Slider.prototype.innerSliderRefHandler = function innerSliderRefHandler(ref) {
	    this.innerSlider = ref;
	  };

	  Slider.prototype.media = function media(query, handler) {
	    enquire.register(query, handler);
	    this._responsiveMediaHandlers.push({ query: query, handler: handler });
	  };

	  Slider.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    if (this.props.responsive) {
	      var breakpoints = this.props.responsive.map(function (breakpt) {
	        return breakpt.breakpoint;
	      });
	      breakpoints.sort(function (x, y) {
	        return x - y;
	      });

	      breakpoints.forEach(function (breakpoint, index) {
	        var bQuery;
	        if (index === 0) {
	          bQuery = (0, _json2mq2.default)({ minWidth: 0, maxWidth: breakpoint });
	        } else {
	          bQuery = (0, _json2mq2.default)({ minWidth: breakpoints[index - 1], maxWidth: breakpoint });
	        }
	        _canUseDom2.default && _this2.media(bQuery, function () {
	          _this2.setState({ breakpoint: breakpoint });
	        });
	      });

	      // Register media query for full screen. Need to support resize from small to large
	      var query = (0, _json2mq2.default)({ minWidth: breakpoints.slice(-1)[0] });

	      _canUseDom2.default && this.media(query, function () {
	        _this2.setState({ breakpoint: null });
	      });
	    }
	  };

	  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._responsiveMediaHandlers.forEach(function (obj) {
	      enquire.unregister(obj.query, obj.handler);
	    });
	  };

	  Slider.prototype.slickPrev = function slickPrev() {
	    this.innerSlider.slickPrev();
	  };

	  Slider.prototype.slickNext = function slickNext() {
	    this.innerSlider.slickNext();
	  };

	  Slider.prototype.slickGoTo = function slickGoTo(slide) {
	    this.innerSlider.slickGoTo(slide);
	  };

	  Slider.prototype.render = function render() {
	    var _this3 = this;

	    var settings;
	    var newProps;
	    if (this.state.breakpoint) {
	      newProps = this.props.responsive.filter(function (resp) {
	        return resp.breakpoint === _this3.state.breakpoint;
	      });
	      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2.default)({}, this.props, newProps[0].settings);
	    } else {
	      settings = (0, _objectAssign2.default)({}, _defaultProps2.default, this.props);
	    }

	    var children = this.props.children;
	    if (!Array.isArray(children)) {
	      children = [children];
	    }

	    // Children may contain false or null, so we should filter them
	    children = children.filter(function (child) {
	      return !!child;
	    });

	    if (settings === 'unslick') {
	      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className + ' unslicked' },
	        children
	      );
	    } else {
	      return _react2.default.createElement(
	        _innerSlider.InnerSlider,
	        _extends({ ref: this.innerSliderRefHandler }, settings),
	        children
	      );
	    }
	  };

	  return Slider;
	}(_react2.default.Component);

	exports.default = Slider;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.InnerSlider = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _eventHandlers = __webpack_require__(4);

	var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

	var _helpers = __webpack_require__(8);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _initialState = __webpack_require__(9);

	var _initialState2 = _interopRequireDefault(_initialState);

	var _defaultProps = __webpack_require__(10);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	var _createReactClass = __webpack_require__(11);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _classnames = __webpack_require__(17);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _track = __webpack_require__(18);

	var _dots = __webpack_require__(19);

	var _arrows = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InnerSlider = exports.InnerSlider = (0, _createReactClass2.default)({
	  displayName: 'InnerSlider',

	  mixins: [_helpers2.default, _eventHandlers2.default],
	  list: null,
	  track: null,
	  listRefHandler: function listRefHandler(ref) {
	    this.list = ref;
	  },
	  trackRefHandler: function trackRefHandler(ref) {
	    this.track = ref;
	  },
	  getInitialState: function getInitialState() {
	    return _extends({}, _initialState2.default, {
	      currentSlide: this.props.initialSlide
	    });
	  },
	  getDefaultProps: function getDefaultProps() {
	    return _defaultProps2.default;
	  },
	  componentWillMount: function componentWillMount() {
	    if (this.props.init) {
	      this.props.init();
	    }
	    this.setState({
	      mounted: true
	    });
	    var lazyLoadedList = [];
	    for (var i = 0; i < _react2.default.Children.count(this.props.children); i++) {
	      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow) {
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

	    // To support server-side rendering
	    if (!window) {
	      return;
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
	    if (this.state.autoPlayTimer) {
	      clearInterval(this.state.autoPlayTimer);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.slickGoTo != nextProps.slickGoTo) {
	      if ((undefined) !== 'production') {
	        console.warn('react-slick deprecation warning: slickGoTo prop is deprecated and it will be removed in next release. Use slickGoTo method instead');
	      }
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.slickGoTo,
	        currentSlide: this.state.currentSlide
	      });
	    } else if (this.state.currentSlide >= nextProps.children.length) {
	      this.update(nextProps);
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.children.length - nextProps.slidesToShow,
	        currentSlide: this.state.currentSlide
	      });
	    } else {
	      this.update(nextProps);
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.adaptHeight();
	  },
	  onWindowResized: function onWindowResized() {
	    this.update(this.props);
	    // animating state should be cleared while resizing, otherwise autoplay stops working
	    this.setState({
	      animating: false
	    });
	    clearTimeout(this.animationEndCallback);
	    delete this.animationEndCallback;
	  },
	  slickPrev: function slickPrev() {
	    this.changeSlide({ message: 'previous' });
	  },
	  slickNext: function slickNext() {
	    this.changeSlide({ message: 'next' });
	  },
	  slickGoTo: function slickGoTo(slide) {
	    slide = Number(slide);
	    !isNaN(slide) && this.changeSlide({
	      message: 'index',
	      index: slide,
	      currentSlide: this.state.currentSlide
	    });
	  },
	  render: function render() {
	    var className = (0, _classnames2.default)('slick-initialized', 'slick-slider', this.props.className, {
	      'slick-vertical': this.props.vertical
	    });

	    var trackProps = {
	      fade: this.props.fade,
	      cssEase: this.props.cssEase,
	      speed: this.props.speed,
	      infinite: this.props.infinite,
	      centerMode: this.props.centerMode,
	      focusOnSelect: this.props.focusOnSelect ? this.selectHandler : null,
	      currentSlide: this.state.currentSlide,
	      lazyLoad: this.props.lazyLoad,
	      lazyLoadedList: this.state.lazyLoadedList,
	      rtl: this.props.rtl,
	      slideWidth: this.state.slideWidth,
	      slidesToShow: this.props.slidesToShow,
	      slidesToScroll: this.props.slidesToScroll,
	      slideCount: this.state.slideCount,
	      trackStyle: this.state.trackStyle,
	      variableWidth: this.props.variableWidth
	    };

	    var dots;

	    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
	      var dotProps = {
	        dotsClass: this.props.dotsClass,
	        slideCount: this.state.slideCount,
	        slidesToShow: this.props.slidesToShow,
	        currentSlide: this.state.currentSlide,
	        slidesToScroll: this.props.slidesToScroll,
	        clickHandler: this.changeSlide,
	        children: this.props.children,
	        customPaging: this.props.customPaging
	      };

	      dots = _react2.default.createElement(_dots.Dots, dotProps);
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
	      clickHandler: this.changeSlide
	    };

	    if (this.props.arrows) {
	      prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
	      nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
	    }

	    var verticalHeightStyle = null;

	    if (this.props.vertical) {
	      verticalHeightStyle = {
	        height: this.state.listHeight
	      };
	    }

	    var centerPaddingStyle = null;

	    if (this.props.vertical === false) {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: '0px ' + this.props.centerPadding
	        };
	      }
	    } else {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: this.props.centerPadding + ' 0px'
	        };
	      }
	    }

	    var listStyle = (0, _objectAssign2.default)({}, verticalHeightStyle, centerPaddingStyle);

	    return _react2.default.createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: this.onInnerSliderEnter,
	        onMouseLeave: this.onInnerSliderLeave,
	        onMouseOver: this.onInnerSliderOver
	      },
	      prevArrow,
	      _react2.default.createElement(
	        'div',
	        {
	          ref: this.listRefHandler,
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
	          onKeyDown: this.props.accessibility ? this.keyHandler : null },
	        _react2.default.createElement(
	          _track.Track,
	          _extends({ ref: this.trackRefHandler }, trackProps),
	          this.props.children
	        )
	      ),
	      nextArrow,
	      dots
	    );
	  }
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _trackHelper = __webpack_require__(5);

	var _helpers = __webpack_require__(8);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EventHandlers = {
	  // Event handler for previous and next
	  changeSlide: function changeSlide(options) {
	    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
	    var _props = this.props,
	        slidesToScroll = _props.slidesToScroll,
	        slidesToShow = _props.slidesToShow;
	    var _state = this.state,
	        slideCount = _state.slideCount,
	        currentSlide = _state.currentSlide;

	    unevenOffset = slideCount % slidesToScroll !== 0;
	    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

	    if (options.message === 'previous') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
	      targetSlide = currentSlide - slideOffset;
	      if (this.props.lazyLoad) {
	        previousInt = currentSlide - slideOffset;
	        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
	      }
	    } else if (options.message === 'next') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
	      targetSlide = currentSlide + slideOffset;
	      if (this.props.lazyLoad) {
	        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
	      }
	    } else if (options.message === 'dots' || options.message === 'children') {
	      // Click on dots
	      targetSlide = options.index * options.slidesToScroll;
	      if (targetSlide === options.currentSlide) {
	        return;
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
	  keyHandler: function keyHandler(e) {
	    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	    if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	      if (e.keyCode === 37 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'next' : 'previous'
	        });
	      } else if (e.keyCode === 39 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'previous' : 'next'
	        });
	      }
	    }
	  },
	  // Focus on selecting a slide (click handler on track)
	  selectHandler: function selectHandler(options) {
	    this.changeSlide(options);
	  },
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

	    curLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: this.state.currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));
	    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
	    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
	    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
	    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

	    if (!this.props.verticalSwiping && !this.state.swiping && verticalSwipeLength > 4) {
	      this.setState({
	        scrolling: true
	      });
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

	    if (!this.props.vertical) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    } else {
	      swipeLeft = curLeft + touchSwipeLength * (this.state.listHeight / this.state.listWidth) * positionOffset;
	    }

	    if (this.props.verticalSwiping) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    }

	    this.setState({
	      touchObject: touchObject,
	      swipeLeft: swipeLeft,
	      trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: swipeLeft }, this.props, this.state))
	    });

	    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
	      return;
	    }
	    if (touchObject.swipeLength > 4) {
	      this.setState({
	        swiping: true
	      });
	      e.preventDefault();
	    }
	  },
	  getNavigableIndexes: function getNavigableIndexes() {
	    var max = void 0;
	    var breakPoint = 0;
	    var counter = 0;
	    var indexes = [];

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

	      counter += this.props.slidesToScroll <= this.props.slidesToShow ? this.props.slidesToScroll : this.props.slidesToShow;
	    }

	    return indexes;
	  },
	  checkNavigable: function checkNavigable(index) {
	    var navigables = this.getNavigableIndexes();
	    var prevNavigable = 0;

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
	  getSlideCount: function getSlideCount() {
	    var _this = this;

	    var centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;

	    if (this.props.swipeToSlide) {
	      var swipedSlide = void 0;

	      var slickList = _reactDom2.default.findDOMNode(this.list);

	      var slides = slickList.querySelectorAll('.slick-slide');

	      Array.from(slides).every(function (slide) {
	        if (!_this.props.vertical) {
	          if (slide.offsetLeft - centerOffset + _this.getWidth(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        } else {
	          if (slide.offsetTop + _this.getHeight(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        }

	        return true;
	      });

	      var slidesTraversed = Math.abs(swipedSlide.dataset.index - this.state.currentSlide) || 1;

	      return slidesTraversed;
	    } else {
	      return this.props.slidesToScroll;
	    }
	  },

	  swipeEnd: function swipeEnd(e) {
	    if (!this.state.dragging) {
	      if (this.props.swipe) {
	        e.preventDefault();
	      }
	      return;
	    }
	    var touchObject = this.state.touchObject;
	    var minSwipe = this.state.listWidth / this.props.touchThreshold;
	    var swipeDirection = this.swipeDirection(touchObject);

	    if (this.props.verticalSwiping) {
	      minSwipe = this.state.listHeight / this.props.touchThreshold;
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

	      var slideCount = void 0,
	          newSlide = void 0;

	      switch (swipeDirection) {

	        case 'left':
	        case 'down':
	          newSlide = this.state.currentSlide + this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 0;
	          break;

	        case 'right':
	        case 'up':
	          newSlide = this.state.currentSlide - this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 1;
	          break;

	        default:
	          slideCount = this.state.currentSlide;

	      }

	      this.slideHandler(slideCount);
	    } else {
	      // Adjust the track back to it's original position.
	      var currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, this.props, this.state));

	      this.setState({
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      });
	    }
	  },
	  onInnerSliderEnter: function onInnerSliderEnter(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  onInnerSliderOver: function onInnerSliderOver(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  onInnerSliderLeave: function onInnerSliderLeave(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.autoPlay();
	    }
	  }
	};

	exports.default = EventHandlers;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = undefined;

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
	  return keysArray.reduce(function (value, key) {
	    return value && spec.hasOwnProperty(key);
	  }, true) ? null : console.error('Keys Missing', spec);
	};

	var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

	  var trackWidth, trackHeight;

	  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

	  if (!spec.vertical) {
	    if (spec.variableWidth) {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    } else if (spec.centerMode) {
	      trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
	    } else {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    }
	  } else {
	    trackHeight = trackChildren * spec.slideHeight;
	  }

	  var style = {
	    opacity: 1,
	    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transition: '',
	    WebkitTransition: '',
	    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)'
	  };

	  if (trackWidth) {
	    (0, _objectAssign2.default)(style, { width: trackWidth });
	  }

	  if (trackHeight) {
	    (0, _objectAssign2.default)(style, { height: trackHeight });
	  }

	  // Fallback for IE8
	  if (window && !window.addEventListener && window.attachEvent) {
	    if (!spec.vertical) {
	      style.marginLeft = spec.left + 'px';
	    } else {
	      style.marginTop = spec.left + 'px';
	    }
	  }

	  return style;
	};

	var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

	  var style = getTrackCSS(spec);
	  // useCSS is true by default so it can be undefined
	  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
	  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
	  return style;
	};

	var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {

	  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);

	  var slideOffset = 0;
	  var targetLeft;
	  var targetSlide;
	  var verticalOffset = 0;

	  if (spec.fade) {
	    return 0;
	  }

	  if (spec.infinite) {
	    if (spec.slideCount >= spec.slidesToShow) {
	      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
	      verticalOffset = spec.slideHeight * spec.slidesToShow * -1;
	    }
	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        if (spec.slideIndex > spec.slideCount) {
	          slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
	          verticalOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight * -1;
	        } else {
	          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
	          verticalOffset = spec.slideCount % spec.slidesToScroll * spec.slideHeight * -1;
	        }
	      }
	    }
	  } else {

	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        var slidesToOffset = spec.slidesToShow - spec.slideCount % spec.slidesToScroll;
	        slideOffset = slidesToOffset * spec.slideWidth;
	      }
	    }
	  }

	  if (spec.centerMode) {
	    if (spec.infinite) {
	      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    } else {
	      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    }
	  }

	  if (!spec.vertical) {
	    targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
	  } else {
	    targetLeft = spec.slideIndex * spec.slideHeight * -1 + verticalOffset;
	  }

	  if (spec.variableWidth === true) {
	    var targetSlideIndex;
	    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
	    } else {
	      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
	    }
	    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	    if (spec.centerMode === true) {
	      if (spec.infinite === false) {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex];
	      } else {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
	      }

	      if (targetSlide) {
	        targetLeft = targetSlide.offsetLeft * -1 + (spec.slideWidth - targetSlide.offsetWidth) / 2;
	      }
	    }
	  }

	  return targetLeft;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _trackHelper = __webpack_require__(5);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var helpers = {
	  initialize: function initialize(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);

	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;

	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }

	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;

	    var currentSlide = props.rtl ? slideCount - 1 - props.initialSlide : props.initialSlide;

	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      currentSlide: currentSlide,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {

	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

	      this.setState({ trackStyle: trackStyle });

	      this.autoPlay(); // once we're set up, trigger the initial autoplay.
	    });
	  },
	  update: function update(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);
	    // This method has mostly same code as initialize method.
	    // Refactor it
	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;

	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }

	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;

	    // pause slider if autoplay is set to false
	    if (!props.autoplay) {
	      this.pause();
	    } else {
	      this.autoPlay();
	    }

	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {

	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

	      this.setState({ trackStyle: trackStyle });
	    });
	  },
	  getWidth: function getWidth(elem) {
	    return elem && (elem.getBoundingClientRect().width || elem.offsetWidth) || 0;
	  },
	  getHeight: function getHeight(elem) {
	    return elem && (elem.getBoundingClientRect().height || elem.offsetHeight) || 0;
	  },

	  adaptHeight: function adaptHeight() {
	    if (this.props.adaptiveHeight) {
	      var selector = '[data-index="' + this.state.currentSlide + '"]';
	      if (this.list) {
	        var slickList = _reactDom2.default.findDOMNode(this.list);
	        slickList.style.height = slickList.querySelector(selector).offsetHeight + 'px';
	      }
	    }
	  },
	  canGoNext: function canGoNext(opts) {
	    var canGo = true;
	    if (!opts.infinite) {
	      if (opts.centerMode) {
	        // check if current slide is last slide
	        if (opts.currentSlide >= opts.slideCount - 1) {
	          canGo = false;
	        }
	      } else {
	        // check if all slides are shown in slider
	        if (opts.slideCount <= opts.slidesToShow || opts.currentSlide >= opts.slideCount - opts.slidesToShow) {
	          canGo = false;
	        }
	      }
	    }
	    return canGo;
	  },
	  slideHandler: function slideHandler(index) {
	    var _this = this;

	    // Functionality of animateSlide and postSlide is merged into this function
	    // console.log('slideHandler', index);
	    var targetSlide, currentSlide;
	    var targetLeft, currentLeft;
	    var callback;

	    if (this.props.waitForAnimate && this.state.animating) {
	      return;
	    }

	    if (this.props.fade) {
	      currentSlide = this.state.currentSlide;

	      // Don't change slide if it's not infite and current slide is the first or last slide.
	      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
	        return;
	      }

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

	      callback = function callback() {
	        _this.setState({
	          animating: false
	        });
	        if (_this.props.afterChange) {
	          _this.props.afterChange(targetSlide);
	        }
	        delete _this.animationEndCallback;
	      };

	      this.setState({
	        animating: true,
	        currentSlide: targetSlide
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
	      });

	      if (this.props.beforeChange) {
	        this.props.beforeChange(this.state.currentSlide, targetSlide);
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

	    targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: targetSlide,
	      trackRef: this.track
	    }, this.props, this.state));

	    currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: currentSlide,
	      trackRef: this.track
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
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      }, function () {
	        if (this.props.afterChange) {
	          this.props.afterChange(currentSlide);
	        }
	      });
	    } else {

	      var nextStateChanges = {
	        animating: false,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state)),
	        swipeLeft: null
	      };

	      callback = function callback() {
	        _this.setState(nextStateChanges);
	        if (_this.props.afterChange) {
	          _this.props.afterChange(currentSlide);
	        }
	        delete _this.animationEndCallback;
	      };

	      this.setState({
	        animating: true,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: targetLeft }, this.props, this.state))
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
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
	    if (this.props.verticalSwiping === true) {
	      if (swipeAngle >= 35 && swipeAngle <= 135) {
	        return 'down';
	      } else {
	        return 'up';
	      }
	    }

	    return 'vertical';
	  },
	  play: function play() {
	    var nextIndex;

	    if (!this.state.mounted) {
	      return false;
	    }

	    if (this.props.rtl) {
	      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
	    } else {
	      if (this.canGoNext(_extends({}, this.props, this.state))) {
	        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
	      } else {
	        return false;
	      }
	    }

	    this.slideHandler(nextIndex);
	  },
	  autoPlay: function autoPlay() {
	    if (this.state.autoPlayTimer) {
	      clearTimeout(this.state.autoPlayTimer);
	    }
	    if (this.props.autoplay) {
	      this.setState({
	        autoPlayTimer: setTimeout(this.play, this.props.autoplaySpeed)
	      });
	    }
	  },
	  pause: function pause() {
	    if (this.state.autoPlayTimer) {
	      clearTimeout(this.state.autoPlayTimer);
	      this.setState({
	        autoPlayTimer: null
	      });
	    }
	  }
	};

	exports.default = helpers;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	var initialState = {
	    animating: false,
	    dragging: false,
	    autoPlayTimer: null,
	    currentDirection: 0,
	    currentLeft: null,
	    currentSlide: 0,
	    direction: 1,
	    listWidth: null,
	    listHeight: null,
	    scrolling: false,
	    // loadIndex: 0,
	    slideCount: null,
	    slideWidth: null,
	    slideHeight: null,
	    swiping: false,
	    // sliding: false,
	    // slideOffset: 0,
	    swipeLeft: null,
	    touchObject: {
	        startX: 0,
	        startY: 0,
	        curX: 0,
	        curY: 0
	    },

	    lazyLoadedList: [],

	    // added for react
	    initialized: false,
	    edgeDragged: false,
	    swiped: false, // used by swipeEvent. differentites between touch and swipe.
	    trackStyle: {},
	    trackWidth: 0

	    // Removed
	    // transformsEnabled: false,
	    // $nextArrow: null,
	    // $prevArrow: null,
	    // $dots: null,
	    // $list: null,
	    // $slideTrack: null,
	    // $slides: null,
	};

	module.exports = initialState;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultProps = {
	    className: '',
	    accessibility: true,
	    adaptiveHeight: false,
	    arrows: true,
	    autoplay: false,
	    autoplaySpeed: 3000,
	    centerMode: false,
	    centerPadding: '50px',
	    cssEase: 'ease',
	    customPaging: function customPaging(i) {
	        return _react2.default.createElement(
	            'button',
	            null,
	            i + 1
	        );
	    },
	    dots: false,
	    dotsClass: 'slick-dots',
	    draggable: true,
	    easing: 'linear',
	    edgeFriction: 0.35,
	    fade: false,
	    focusOnSelect: false,
	    infinite: true,
	    initialSlide: 0,
	    lazyLoad: false,
	    pauseOnHover: true,
	    responsive: null,
	    rtl: false,
	    slide: 'div',
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    speed: 500,
	    swipe: true,
	    swipeToSlide: false,
	    touchMove: true,
	    touchThreshold: 5,
	    useCSS: true,
	    variableWidth: false,
	    vertical: false,
	    waitForAnimate: true,
	    afterChange: null,
	    beforeChange: null,
	    edgeEvent: null,
	    init: null,
	    swipeEvent: null,
	    // nextArrow, prevArrow are react componets
	    nextArrow: null,
	    prevArrow: null
	};

	module.exports = defaultProps;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var React = __webpack_require__(2);
	var factory = __webpack_require__(12);

	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;

	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(7);

	var emptyObject = __webpack_require__(13);
	var _invariant = __webpack_require__(14);

	if ((undefined) !== 'production') {
	  var warning = __webpack_require__(15);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if ((undefined) !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if ((undefined) !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if ((undefined) !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if ((undefined) !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if ((undefined) !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if ((undefined) !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if ((undefined) !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if ((undefined) !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if ((undefined) !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if ((undefined) !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if ((undefined) !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if ((undefined) !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if ((undefined) !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if ((undefined) !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if ((undefined) !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if ((undefined) !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if ((undefined) !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if ((undefined) !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(16);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ((undefined) !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Track = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _classnames = __webpack_require__(17);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var getSlideClasses = function getSlideClasses(spec) {
	  var slickActive, slickCenter, slickCloned;
	  var centerOffset, index;

	  if (spec.rtl) {
	    index = spec.slideCount - 1 - spec.index;
	  } else {
	    index = spec.index;
	  }
	  slickCloned = index < 0 || index >= spec.slideCount;
	  if (spec.centerMode) {
	    centerOffset = Math.floor(spec.slidesToShow / 2);
	    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
	    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
	      slickActive = true;
	    }
	  } else {
	    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
	  }
	  return (0, _classnames2.default)({
	    'slick-slide': true,
	    'slick-active': slickActive,
	    'slick-center': slickCenter,
	    'slick-cloned': slickCloned
	  });
	};

	var getSlideStyle = function getSlideStyle(spec) {
	  var style = {};

	  if (spec.variableWidth === undefined || spec.variableWidth === false) {
	    style.width = spec.slideWidth + 0.2;
	  }

	  if (spec.fade) {
	    style.position = 'relative';
	    style.left = -spec.index * spec.slideWidth;
	    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
	    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	  }

	  return style;
	};

	var getKey = function getKey(child, fallbackKey) {
	  // key could be a zero
	  return child.key === null || child.key === undefined ? fallbackKey : child.key;
	};

	var renderSlides = function renderSlides(spec) {
	  var key;
	  var slides = [];
	  var preCloneSlides = [];
	  var postCloneSlides = [];
	  var count = _react2.default.Children.count(spec.children);

	  _react2.default.Children.forEach(spec.children, function (elem, index) {
	    var child = void 0;
	    var childOnClickOptions = {
	      message: 'children',
	      index: index,
	      slidesToScroll: spec.slidesToScroll,
	      currentSlide: spec.currentSlide
	    };

	    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
	      child = elem;
	    } else {
	      child = _react2.default.createElement('div', null);
	    }
	    var childStyle = getSlideStyle((0, _objectAssign2.default)({}, spec, { index: index }));
	    var slideClass = child.props.className || '';

	    var onClick = function onClick(e) {
	      child.props && child.props.onClick && child.props.onClick(e);
	      if (spec.focusOnSelect) {
	        spec.focusOnSelect(childOnClickOptions);
	      }
	    };

	    slides.push(_react2.default.cloneElement(child, {
	      key: 'original' + getKey(child, index),
	      'data-index': index,
	      className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: index }, spec)), slideClass),
	      tabIndex: '-1',
	      style: (0, _objectAssign2.default)({ outline: 'none' }, child.props.style || {}, childStyle),
	      onClick: onClick
	    }));

	    // variableWidth doesn't wrap properly.
	    if (spec.infinite && spec.fade === false) {
	      var infiniteCount = spec.variableWidth ? spec.slidesToShow + 1 : spec.slidesToShow;

	      if (index >= count - infiniteCount) {
	        key = -(count - index);
	        preCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'precloned' + getKey(child, key),
	          'data-index': key,
	          className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: key }, spec)), slideClass),
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }

	      if (index < infiniteCount) {
	        key = count + index;
	        postCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'postcloned' + getKey(child, key),
	          'data-index': key,
	          className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: key }, spec)), slideClass),
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }
	    }
	  });

	  if (spec.rtl) {
	    return preCloneSlides.concat(slides, postCloneSlides).reverse();
	  } else {
	    return preCloneSlides.concat(slides, postCloneSlides);
	  }
	};

	var Track = exports.Track = function (_React$Component) {
	  _inherits(Track, _React$Component);

	  function Track() {
	    _classCallCheck(this, Track);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Track.prototype.render = function render() {
	    var slides = renderSlides.call(this, this.props);
	    return _react2.default.createElement(
	      'div',
	      { className: 'slick-track', style: this.props.trackStyle },
	      slides
	    );
	  };

	  return Track;
	}(_react2.default.Component);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Dots = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(17);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var getDotCount = function getDotCount(spec) {
	  var dots;
	  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
	  return dots;
	};

	var Dots = exports.Dots = function (_React$Component) {
	  _inherits(Dots, _React$Component);

	  function Dots() {
	    _classCallCheck(this, Dots);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Dots.prototype.clickHandler = function clickHandler(options, e) {
	    // In Autoplay the focus stays on clicked button even after transition
	    // to next slide. That only goes away by click somewhere outside
	    e.preventDefault();
	    this.props.clickHandler(options);
	  };

	  Dots.prototype.render = function render() {
	    var _this2 = this;

	    var dotCount = getDotCount({
	      slideCount: this.props.slideCount,
	      slidesToScroll: this.props.slidesToScroll
	    });

	    // Apply join & split to Array to pre-fill it for IE8
	    //
	    // Credit: http://stackoverflow.com/a/13735425/1849458
	    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {

	      var leftBound = i * _this2.props.slidesToScroll;
	      var rightBound = i * _this2.props.slidesToScroll + (_this2.props.slidesToScroll - 1);
	      var className = (0, _classnames2.default)({
	        'slick-active': _this2.props.currentSlide >= leftBound && _this2.props.currentSlide <= rightBound
	      });

	      var dotOptions = {
	        message: 'dots',
	        index: i,
	        slidesToScroll: _this2.props.slidesToScroll,
	        currentSlide: _this2.props.currentSlide
	      };

	      var onClick = _this2.clickHandler.bind(_this2, dotOptions);

	      return _react2.default.createElement(
	        'li',
	        { key: i, className: className },
	        _react2.default.cloneElement(_this2.props.customPaging(i), { onClick: onClick })
	      );
	    });

	    return _react2.default.createElement(
	      'ul',
	      { className: this.props.dotsClass, style: { display: 'block' } },
	      dots
	    );
	  };

	  return Dots;
	}(_react2.default.Component);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.NextArrow = exports.PrevArrow = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(17);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _helpers = __webpack_require__(8);

	var _helpers2 = _interopRequireDefault(_helpers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PrevArrow = exports.PrevArrow = function (_React$Component) {
	  _inherits(PrevArrow, _React$Component);

	  function PrevArrow() {
	    _classCallCheck(this, PrevArrow);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  PrevArrow.prototype.clickHandler = function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  };

	  PrevArrow.prototype.render = function render() {
	    var prevClasses = { 'slick-arrow': true, 'slick-prev': true };
	    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });

	    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
	      prevClasses['slick-disabled'] = true;
	      prevHandler = null;
	    }

	    var prevArrowProps = {
	      key: '0',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(prevClasses),
	      style: { display: 'block' },
	      onClick: prevHandler
	    };
	    var customProps = {
	      currentSlide: this.props.currentSlide,
	      slideCount: this.props.slideCount
	    };
	    var prevArrow;

	    if (this.props.prevArrow) {
	      prevArrow = _react2.default.cloneElement(this.props.prevArrow, _extends({}, prevArrowProps, customProps));
	    } else {
	      prevArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '0', type: 'button' }, prevArrowProps),
	        ' Previous'
	      );
	    }

	    return prevArrow;
	  };

	  return PrevArrow;
	}(_react2.default.Component);

	var NextArrow = exports.NextArrow = function (_React$Component2) {
	  _inherits(NextArrow, _React$Component2);

	  function NextArrow() {
	    _classCallCheck(this, NextArrow);

	    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	  }

	  NextArrow.prototype.clickHandler = function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  };

	  NextArrow.prototype.render = function render() {
	    var nextClasses = { 'slick-arrow': true, 'slick-next': true };
	    var nextHandler = this.clickHandler.bind(this, { message: 'next' });

	    if (!_helpers2.default.canGoNext(this.props)) {
	      nextClasses['slick-disabled'] = true;
	      nextHandler = null;
	    }

	    var nextArrowProps = {
	      key: '1',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(nextClasses),
	      style: { display: 'block' },
	      onClick: nextHandler
	    };
	    var customProps = {
	      currentSlide: this.props.currentSlide,
	      slideCount: this.props.slideCount
	    };
	    var nextArrow;

	    if (this.props.nextArrow) {
	      nextArrow = _react2.default.cloneElement(this.props.nextArrow, _extends({}, nextArrowProps, customProps));
	    } else {
	      nextArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '1', type: 'button' }, nextArrowProps),
	        ' Next'
	      );
	    }

	    return nextArrow;
	  };

	  return NextArrow;
	}(_react2.default.Component);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var camel2hyphen = __webpack_require__(22);

	var isDimension = function (feature) {
	  var re = /[height|width]$/;
	  return re.test(feature);
	};

	var obj2mq = function (obj) {
	  var mq = '';
	  var features = Object.keys(obj);
	  features.forEach(function (feature, index) {
	    var value = obj[feature];
	    feature = camel2hyphen(feature);
	    // Add px to dimension features
	    if (isDimension(feature) && typeof value === 'number') {
	      value = value + 'px';
	    }
	    if (value === true) {
	      mq += feature;
	    } else if (value === false) {
	      mq += 'not ' + feature;
	    } else {
	      mq += '(' + feature + ': ' + value + ')';
	    }
	    if (index < features.length-1) {
	      mq += ' and '
	    }
	  });
	  return mq;
	};

	var json2mq = function (query) {
	  var mq = '';
	  if (typeof query === 'string') {
	    return query;
	  }
	  // Handling array of media queries
	  if (query instanceof Array) {
	    query.forEach(function (q, index) {
	      mq += obj2mq(q);
	      if (index < query.length-1) {
	        mq += ', '
	      }
	    });
	    return mq;
	  }
	  // Handling single media query
	  return obj2mq(query);
	};

	module.exports = json2mq;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	var camel2hyphen = function (str) {
	  return str
	          .replace(/[A-Z]/g, function (match) {
	            return '-' + match.toLowerCase();
	          })
	          .toLowerCase();
	};

	module.exports = camel2hyphen;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	module.exports = canUseDOM;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var MediaQueryDispatch = __webpack_require__(25);
	module.exports = new MediaQueryDispatch();


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var MediaQuery = __webpack_require__(26);
	var Util = __webpack_require__(28);
	var each = Util.each;
	var isFunction = Util.isFunction;
	var isArray = Util.isArray;

	/**
	 * Allows for registration of query handlers.
	 * Manages the query handler's state and is responsible for wiring up browser events
	 *
	 * @constructor
	 */
	function MediaQueryDispatch () {
	    if(!window.matchMedia) {
	        throw new Error('matchMedia not present, legacy browsers require a polyfill');
	    }

	    this.queries = {};
	    this.browserIsIncapable = !window.matchMedia('only all').matches;
	}

	MediaQueryDispatch.prototype = {

	    constructor : MediaQueryDispatch,

	    /**
	     * Registers a handler for the given media query
	     *
	     * @param {string} q the media query
	     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
	     * @param {function} options.match fired when query matched
	     * @param {function} [options.unmatch] fired when a query is no longer matched
	     * @param {function} [options.setup] fired when handler first triggered
	     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
	     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
	     */
	    register : function(q, options, shouldDegrade) {
	        var queries         = this.queries,
	            isUnconditional = shouldDegrade && this.browserIsIncapable;

	        if(!queries[q]) {
	            queries[q] = new MediaQuery(q, isUnconditional);
	        }

	        //normalise to object in an array
	        if(isFunction(options)) {
	            options = { match : options };
	        }
	        if(!isArray(options)) {
	            options = [options];
	        }
	        each(options, function(handler) {
	            if (isFunction(handler)) {
	                handler = { match : handler };
	            }
	            queries[q].addHandler(handler);
	        });

	        return this;
	    },

	    /**
	     * unregisters a query and all it's handlers, or a specific handler for a query
	     *
	     * @param {string} q the media query to target
	     * @param {object || function} [handler] specific handler to unregister
	     */
	    unregister : function(q, handler) {
	        var query = this.queries[q];

	        if(query) {
	            if(handler) {
	                query.removeHandler(handler);
	            }
	            else {
	                query.clear();
	                delete this.queries[q];
	            }
	        }

	        return this;
	    }
	};

	module.exports = MediaQueryDispatch;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var QueryHandler = __webpack_require__(27);
	var each = __webpack_require__(28).each;

	/**
	 * Represents a single media query, manages it's state and registered handlers for this query
	 *
	 * @constructor
	 * @param {string} query the media query string
	 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
	 */
	function MediaQuery(query, isUnconditional) {
	    this.query = query;
	    this.isUnconditional = isUnconditional;
	    this.handlers = [];
	    this.mql = window.matchMedia(query);

	    var self = this;
	    this.listener = function(mql) {
	        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
	        self.mql = mql.currentTarget || mql;
	        self.assess();
	    };
	    this.mql.addListener(this.listener);
	}

	MediaQuery.prototype = {

	    constuctor : MediaQuery,

	    /**
	     * add a handler for this query, triggering if already active
	     *
	     * @param {object} handler
	     * @param {function} handler.match callback for when query is activated
	     * @param {function} [handler.unmatch] callback for when query is deactivated
	     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
	     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
	     */
	    addHandler : function(handler) {
	        var qh = new QueryHandler(handler);
	        this.handlers.push(qh);

	        this.matches() && qh.on();
	    },

	    /**
	     * removes the given handler from the collection, and calls it's destroy methods
	     *
	     * @param {object || function} handler the handler to remove
	     */
	    removeHandler : function(handler) {
	        var handlers = this.handlers;
	        each(handlers, function(h, i) {
	            if(h.equals(handler)) {
	                h.destroy();
	                return !handlers.splice(i,1); //remove from array and exit each early
	            }
	        });
	    },

	    /**
	     * Determine whether the media query should be considered a match
	     *
	     * @return {Boolean} true if media query can be considered a match, false otherwise
	     */
	    matches : function() {
	        return this.mql.matches || this.isUnconditional;
	    },

	    /**
	     * Clears all handlers and unbinds events
	     */
	    clear : function() {
	        each(this.handlers, function(handler) {
	            handler.destroy();
	        });
	        this.mql.removeListener(this.listener);
	        this.handlers.length = 0; //clear array
	    },

	    /*
	        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
	        */
	    assess : function() {
	        var action = this.matches() ? 'on' : 'off';

	        each(this.handlers, function(handler) {
	            handler[action]();
	        });
	    }
	};

	module.exports = MediaQuery;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	/**
	 * Delegate to handle a media query being matched and unmatched.
	 *
	 * @param {object} options
	 * @param {function} options.match callback for when the media query is matched
	 * @param {function} [options.unmatch] callback for when the media query is unmatched
	 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
	 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
	 * @constructor
	 */
	function QueryHandler(options) {
	    this.options = options;
	    !options.deferSetup && this.setup();
	}

	QueryHandler.prototype = {

	    constructor : QueryHandler,

	    /**
	     * coordinates setup of the handler
	     *
	     * @function
	     */
	    setup : function() {
	        if(this.options.setup) {
	            this.options.setup();
	        }
	        this.initialised = true;
	    },

	    /**
	     * coordinates setup and triggering of the handler
	     *
	     * @function
	     */
	    on : function() {
	        !this.initialised && this.setup();
	        this.options.match && this.options.match();
	    },

	    /**
	     * coordinates the unmatch event for the handler
	     *
	     * @function
	     */
	    off : function() {
	        this.options.unmatch && this.options.unmatch();
	    },

	    /**
	     * called when a handler is to be destroyed.
	     * delegates to the destroy or unmatch callbacks, depending on availability.
	     *
	     * @function
	     */
	    destroy : function() {
	        this.options.destroy ? this.options.destroy() : this.off();
	    },

	    /**
	     * determines equality by reference.
	     * if object is supplied compare options, if function, compare match callback
	     *
	     * @function
	     * @param {object || function} [target] the target for comparison
	     */
	    equals : function(target) {
	        return this.options === target || this.options.match === target;
	    }

	};

	module.exports = QueryHandler;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/**
	 * Helper function for iterating over a collection
	 *
	 * @param collection
	 * @param fn
	 */
	function each(collection, fn) {
	    var i      = 0,
	        length = collection.length,
	        cont;

	    for(i; i < length; i++) {
	        cont = fn(collection[i], i);
	        if(cont === false) {
	            break; //allow early exit
	        }
	    }
	}

	/**
	 * Helper function for determining whether target object is an array
	 *
	 * @param target the object under test
	 * @return {Boolean} true if array, false otherwise
	 */
	function isArray(target) {
	    return Object.prototype.toString.apply(target) === '[object Array]';
	}

	/**
	 * Helper function for determining whether target object is a function
	 *
	 * @param target the object under test
	 * @return {Boolean} true if function, false otherwise
	 */
	function isFunction(target) {
	    return typeof target === 'function';
	}

	module.exports = {
	    isFunction : isFunction,
	    isArray : isArray,
	    each : each
	};


/***/ })
/******/ ])
});
;