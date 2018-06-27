"use strict";

exports.__esModule = true;
exports.InnerSlider = undefined;

var _typeof =
  typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _initialState = require("./initial-state");

var _initialState2 = _interopRequireDefault(_initialState);

var _lodash = require("lodash.debounce");

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _innerSliderUtils = require("./utils/innerSliderUtils");

var _track = require("./track");

var _dots = require("./dots");

var _arrows = require("./arrows");

var _resizeObserverPolyfill = require("resize-observer-polyfill");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var InnerSlider = (exports.InnerSlider = (function(_React$Component) {
  _inherits(InnerSlider, _React$Component);

  function InnerSlider(props) {
    _classCallCheck(this, InnerSlider);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props)
    );

    _this.listRefHandler = function(ref) {
      return (_this.list = ref);
    };

    _this.trackRefHandler = function(ref) {
      return (_this.track = ref);
    };

    _this.adaptHeight = function() {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector(
          '[data-index="' + _this.state.currentSlide + '"]'
        );
        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    };

    _this.componentWillMount = function() {
      _this.ssrInit();
      _this.props.onInit && _this.props.onInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(
          _extends({}, _this.props, _this.state)
        );
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
    };

    _this.componentDidMount = function() {
      var spec = _extends(
        { listRef: _this.list, trackRef: _this.track },
        _this.props
      );
      _this.updateState(spec, true, function() {
        _this.adaptHeight();
        _this.props.autoplay && _this.autoPlay("update");
      });
      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }
      _this.ro = new _resizeObserverPolyfill2.default(function() {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation
          _this.callbackTimers.push(
            setTimeout(function() {
              return _this.onWindowResized();
            }, _this.props.speed)
          );
        } else {
          _this.onWindowResized();
        }
      });
      _this.ro.observe(_this.list);
      Array.prototype.forEach.call(
        document.querySelectorAll(".slick-slide"),
        function(slide) {
          slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
          slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
        }
      );
      // To support server-side rendering
      if (!window) {
        return;
      }
      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    };

    _this.componentWillUnmount = function() {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }
      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }
      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function(timer) {
          return clearTimeout(timer);
        });
        _this.callbackTimers = [];
      }
      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
    };

    _this.componentWillReceiveProps = function(nextProps) {
      var spec = _extends(
        {
          listRef: _this.list,
          trackRef: _this.track
        },
        nextProps,
        _this.state
      );
      var setTrackStyle = false;
      for (
        var _iterator = Object.keys(_this.props),
          _isArray = Array.isArray(_iterator),
          _i = 0,
          _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
        ;

      ) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var key = _ref;

        if (!nextProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }
        if (
          _typeof(nextProps[key]) === "object" ||
          typeof nextProps[key] === "function"
        ) {
          continue;
        }
        if (nextProps[key] !== _this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }
      _this.updateState(spec, setTrackStyle, function() {
        if (
          _this.state.currentSlide >=
          _react2.default.Children.count(nextProps.children)
        ) {
          _this.changeSlide({
            message: "index",
            index:
              _react2.default.Children.count(nextProps.children) -
              nextProps.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }
        if (nextProps.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    };

    _this.componentDidUpdate = function() {
      _this.checkImagesLoad();
      _this.props.onReInit && _this.props.onReInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(
          _extends({}, _this.props, _this.state)
        );
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }
      _this.adaptHeight();
    };

    _this.onWindowResized = function(setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash2.default)(function() {
        return _this.resizeWindow(setTrackStyle);
      }, 50);
      _this.debouncedResize();
    };

    _this.resizeWindow = function() {
      var setTrackStyle =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : true;

      if (!_reactDom2.default.findDOMNode(_this.track)) return;
      var spec = _extends(
        {
          listRef: _this.list,
          trackRef: _this.track
        },
        _this.props,
        _this.state
      );
      _this.updateState(spec, setTrackStyle, function() {
        if (_this.props.autoplay) _this.autoPlay("update");
        else _this.pause("paused");
      });
      // animating state should be cleared while resizing, otherwise autoplay stops working
      _this.setState({
        animating: false
      });
      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    };

    _this.updateState = function(spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _extends({}, spec, updatedState, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _extends({}, spec, { left: targetLeft });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
      if (
        setTrackStyle ||
        _react2.default.Children.count(_this.props.children) !==
          _react2.default.Children.count(spec.children)
      ) {
        updatedState["trackStyle"] = trackStyle;
      }
      _this.setState(updatedState, callback);
    };

    _this.ssrInit = function() {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
          _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(
          _extends({}, _this.props, _this.state, {
            slideCount: _this.props.children.length
          })
        );
        var postClones = (0, _innerSliderUtils.getPostClones)(
          _extends({}, _this.props, _this.state, {
            slideCount: _this.props.children.length
          })
        );
        _this.props.children.forEach(function(child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });
        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }
        for (var _i2 = 0; _i2 < postClones; _i2++) {
          _trackWidth += childrenWidths[_i2];
        }
        for (var _i3 = 0; _i3 < _this.state.currentSlide; _i3++) {
          _trackLeft += childrenWidths[_i3];
        }
        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };
        if (_this.props.centerMode) {
          var currentWidth = childrenWidths[_this.state.currentSlide] + "px";
          _trackStyle.left =
            "calc(" +
            _trackStyle.left +
            " + (100% - " +
            currentWidth +
            ") / 2 ) ";
        }
        _this.setState({
          trackStyle: _trackStyle
        });
        return;
      }
      var childrenCount = _react2.default.Children.count(_this.props.children);
      var spec = _extends({}, _this.props, _this.state, {
        slideCount: childrenCount
      });
      var slideCount =
        (0, _innerSliderUtils.getPreClones)(spec) +
        (0, _innerSliderUtils.getPostClones)(spec) +
        childrenCount;
      var trackWidth = (100 / _this.props.slidesToShow) * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft =
        (-slideWidth *
          ((0, _innerSliderUtils.getPreClones)(spec) +
            _this.state.currentSlide) *
          trackWidth) /
        100;
      if (_this.props.centerMode) {
        trackLeft += (100 - (slideWidth * trackWidth) / 100) / 2;
      }
      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      _this.setState({
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      });
    };

    _this.checkImagesLoad = function() {
      var images = document.querySelectorAll(".slick-slide img");
      var imagesCount = images.length,
        loadedCount = 0;
      Array.prototype.forEach.call(images, function(image) {
        var handler = function handler() {
          return (
            ++loadedCount &&
            loadedCount >= imagesCount &&
            _this.onWindowResized()
          );
        };
        if (!image.onclick) {
          image.onclick = function() {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;
          image.onclick = function() {
            prevClickHandler();
            image.parentNode.focus();
          };
        }
        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function() {
              _this.adaptHeight();
              _this.callbackTimers.push(
                setTimeout(_this.onWindowResized, _this.props.speed)
              );
            };
          } else {
            image.onload = handler;
            image.onerror = function() {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    };

    _this.progressiveLazyLoad = function() {
      var slidesToLoad = [];
      var spec = _extends({}, _this.props, _this.state);
      for (
        var index = _this.state.currentSlide;
        index <
        _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec);
        index++
      ) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }
      for (
        var _index = _this.state.currentSlide - 1;
        _index >= -(0, _innerSliderUtils.getPreClones)(spec);
        _index--
      ) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }
      if (slidesToLoad.length > 0) {
        _this.setState(function(state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });
        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    };

    _this.slideHandler = function(index) {
      var dontAnimate =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : false;
      var _this$props = _this.props,
        asNavFor = _this$props.asNavFor,
        currentSlide = _this$props.currentSlide,
        beforeChange = _this$props.beforeChange,
        onLazyLoad = _this$props.onLazyLoad,
        speed = _this$props.speed,
        afterChange = _this$props.afterChange;

      var _slideHandler = (0, _innerSliderUtils.slideHandler)(
          _extends(
            {
              index: index
            },
            _this.props,
            _this.state,
            {
              trackRef: _this.track,
              useCSS: _this.props.useCSS && !dontAnimate
            }
          )
        ),
        state = _slideHandler.state,
        nextState = _slideHandler.nextState;

      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function(value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
      _this.setState(state, function() {
        asNavFor &&
          asNavFor.innerSlider.state.currentSlide !== currentSlide &&
          asNavFor.innerSlider.slideHandler(index);
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function() {
          var animating = nextState.animating,
            firstBatch = _objectWithoutProperties(nextState, ["animating"]);

          _this.setState(firstBatch, function() {
            _this.callbackTimers.push(
              setTimeout(function() {
                return _this.setState({ animating: animating });
              }, 10)
            );
            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    };

    _this.changeSlide = function(options) {
      var dontAnimate =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : false;

      var spec = _extends({}, _this.props, _this.state);
      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;
      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
    };

    _this.clickHandler = function(e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.clickable = true;
    };

    _this.keyHandler = function(e) {
      var dir = (0, _innerSliderUtils.keyHandler)(
        e,
        _this.props.accessibility,
        _this.props.rtl
      );
      dir !== "" && _this.changeSlide({ message: dir });
    };

    _this.selectHandler = function(options) {
      _this.changeSlide(options);
    };

    _this.disableBodyScroll = function() {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };
      window.ontouchmove = preventDefault;
    };

    _this.enableBodyScroll = function() {
      window.ontouchmove = null;
    };

    _this.swipeStart = function(e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }
      var state = (0, _innerSliderUtils.swipeStart)(
        e,
        _this.props.swipe,
        _this.props.draggable
      );
      state !== "" && _this.setState(state);
    };

    _this.swipeMove = function(e) {
      var state = (0, _innerSliderUtils.swipeMove)(
        e,
        _extends({}, _this.props, _this.state, {
          trackRef: _this.track,
          listRef: _this.list,
          slideIndex: _this.state.currentSlide
        })
      );
      if (!state) return;
      if (state["swiping"]) {
        _this.clickable = false;
      }
      _this.setState(state);
    };

    _this.swipeEnd = function(e) {
      var state = (0, _innerSliderUtils.swipeEnd)(
        e,
        _extends({}, _this.props, _this.state, {
          trackRef: _this.track,
          listRef: _this.list,
          slideIndex: _this.state.currentSlide
        })
      );
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];
      _this.setState(state);
      if (triggerSlideHandler === undefined) return;
      _this.slideHandler(triggerSlideHandler);
      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    };

    _this.slickPrev = function() {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(
        setTimeout(function() {
          return _this.changeSlide({ message: "previous" });
        }, 0)
      );
    };

    _this.slickNext = function() {
      _this.callbackTimers.push(
        setTimeout(function() {
          return _this.changeSlide({ message: "next" });
        }, 0)
      );
    };

    _this.slickGoTo = function(slide) {
      var dontAnimate =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : false;

      slide = Number(slide);
      if (isNaN(slide)) return "";
      _this.callbackTimers.push(
        setTimeout(function() {
          return _this.changeSlide(
            {
              message: "index",
              index: slide,
              currentSlide: _this.state.currentSlide
            },
            dontAnimate
          );
        }, 0)
      );
    };

    _this.play = function() {
      var nextIndex;
      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if (
          (0, _innerSliderUtils.canGoNext)(
            _extends({}, _this.props, _this.state)
          )
        ) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }

      _this.slideHandler(nextIndex);
    };

    _this.autoPlay = function(playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      var autoplaying = _this.state.autoplaying;
      if (playType === "update") {
        if (
          autoplaying === "hovered" ||
          autoplaying === "focused" ||
          autoplaying === "paused"
        ) {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }
      _this.autoplayTimer = setInterval(
        _this.play,
        _this.props.autoplaySpeed + 50
      );
      _this.setState({ autoplaying: "playing" });
    };

    _this.pause = function(pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }
      var autoplaying = _this.state.autoplaying;
      if (pauseType === "paused") {
        _this.setState({ autoplaying: "paused" });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({ autoplaying: "focused" });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({ autoplaying: "hovered" });
        }
      }
    };

    _this.onDotsOver = function() {
      return _this.props.autoplay && _this.pause("hovered");
    };

    _this.onDotsLeave = function() {
      return (
        _this.props.autoplay &&
        _this.state.autoplaying === "hovered" &&
        _this.autoPlay("leave")
      );
    };

    _this.onTrackOver = function() {
      return _this.props.autoplay && _this.pause("hovered");
    };

    _this.onTrackLeave = function() {
      return (
        _this.props.autoplay &&
        _this.state.autoplaying === "hovered" &&
        _this.autoPlay("leave")
      );
    };

    _this.onSlideFocus = function() {
      return _this.props.autoplay && _this.pause("focused");
    };

    _this.onSlideBlur = function() {
      return (
        _this.props.autoplay &&
        _this.state.autoplaying === "focused" &&
        _this.autoPlay("blur")
      );
    };

    _this.render = function() {
      var className = (0, _classnames2.default)(
        "slick-slider",
        _this.props.className,
        {
          "slick-vertical": _this.props.vertical,
          "slick-initialized": true
        }
      );
      var spec = _extends({}, _this.props, _this.state);
      var trackProps = (0, _innerSliderUtils.extractObject)(spec, [
        "fade",
        "cssEase",
        "speed",
        "infinite",
        "centerMode",
        "focusOnSelect",
        "currentSlide",
        "lazyLoad",
        "lazyLoadedList",
        "rtl",
        "slideWidth",
        "slideHeight",
        "listHeight",
        "vertical",
        "slidesToShow",
        "slidesToScroll",
        "slideCount",
        "trackStyle",
        "variableWidth",
        "unslick",
        "centerPadding"
      ]);
      var pauseOnHover = _this.props.pauseOnHover;

      trackProps = _extends({}, trackProps, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect ? _this.selectHandler : null
      });

      var dots;
      if (
        _this.props.dots === true &&
        _this.state.slideCount >= _this.props.slidesToShow
      ) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, [
          "dotsClass",
          "slideCount",
          "slidesToShow",
          "currentSlide",
          "slidesToScroll",
          "clickHandler",
          "children",
          "customPaging",
          "infinite",
          "appendDots"
        ]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;

        dotProps = _extends({}, dotProps, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = _react2.default.createElement(_dots.Dots, dotProps);
      }

      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, [
        "infinite",
        "centerMode",
        "currentSlide",
        "slideCount",
        "slidesToShow",
        "prevArrow",
        "nextArrow"
      ]);
      arrowProps.clickHandler = _this.changeSlide;

      if (_this.props.arrows) {
        prevArrow = _react2.default.createElement(
          _arrows.PrevArrow,
          arrowProps
        );
        nextArrow = _react2.default.createElement(
          _arrows.NextArrow,
          arrowProps
        );
      }

      var verticalHeightStyle = null;

      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }

      var centerPaddingStyle = null;

      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }

      var listStyle = _extends({}, verticalHeightStyle, centerPaddingStyle);
      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.swipeEnd : null,
        onTouchCancel:
          _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };

      var innerSliderProps = {
        className: className,
        dir: "ltr"
      };

      if (_this.props.unslick) {
        listProps = { className: "slick-list" };
        innerSliderProps = { className: className };
      }
      return _react2.default.createElement(
        "div",
        innerSliderProps,
        !_this.props.unslick ? prevArrow : "",
        _react2.default.createElement(
          "div",
          _extends({ ref: _this.listRefHandler }, listProps),
          _react2.default.createElement(
            _track.Track,
            _extends({ ref: _this.trackRefHandler }, trackProps),
            _this.props.children
          )
        ),
        !_this.props.unslick ? nextArrow : "",
        !_this.props.unslick ? dots : ""
      );
    };

    _this.list = null;
    _this.track = null;
    _this.state = _extends({}, _initialState2.default, {
      currentSlide: _this.props.initialSlide,
      slideCount: _react2.default.Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    return _this;
  }

  return InnerSlider;
})(_react2.default.Component));
