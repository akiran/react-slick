"use strict";

exports.__esModule = true;

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

var _innerSlider = require("./inner-slider");

var _json2mq = require("json2mq");

var _json2mq2 = _interopRequireDefault(_json2mq);

var _defaultProps = require("./default-props");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _innerSliderUtils = require("./utils/innerSliderUtils");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var enquire = (0, _innerSliderUtils.canUseDOM)() && require("enquire.js");

var Slider = (function(_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props)
    );

    _this.innerSliderRefHandler = function(ref) {
      return (_this.innerSlider = ref);
    };

    _this.slickPrev = function() {
      return _this.innerSlider.slickPrev();
    };

    _this.slickNext = function() {
      return _this.innerSlider.slickNext();
    };

    _this.slickGoTo = function(slide) {
      var dontAnimate =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    };

    _this.slickPause = function() {
      return _this.innerSlider.pause("paused");
    };

    _this.slickPlay = function() {
      return _this.innerSlider.autoPlay("play");
    };

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }

  Slider.prototype.media = function media(query, handler) {
    // javascript handler for  css media query
    enquire.register(query, handler);
    this._responsiveMediaHandlers.push({ query: query, handler: handler });
  };

  // handles responsive breakpoints

  Slider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // performance monitoring
    //if (process.env.NODE_ENV !== 'production') {
    //const { whyDidYouUpdate } = require('why-did-you-update')
    //whyDidYouUpdate(React)
    //}
    if (this.props.responsive) {
      var breakpoints = this.props.responsive.map(function(breakpt) {
        return breakpt.breakpoint;
      });
      // sort them in increasing order of their numerical value
      breakpoints.sort(function(x, y) {
        return x - y;
      });

      breakpoints.forEach(function(breakpoint, index) {
        // media query for each breakpoint
        var bQuery = void 0;
        if (index === 0) {
          bQuery = (0, _json2mq2.default)({
            minWidth: 0,
            maxWidth: breakpoint
          });
        } else {
          bQuery = (0, _json2mq2.default)({
            minWidth: breakpoints[index - 1] + 1,
            maxWidth: breakpoint
          });
        }
        // when not using server side rendering
        (0, _innerSliderUtils.canUseDOM)() &&
          _this2.media(bQuery, function() {
            _this2.setState({ breakpoint: breakpoint });
          });
      });

      // Register media query for full screen. Need to support resize from small to large
      // convert javascript object to media query string
      var query = (0, _json2mq2.default)({
        minWidth: breakpoints.slice(-1)[0]
      });

      (0, _innerSliderUtils.canUseDOM)() &&
        this.media(query, function() {
          _this2.setState({ breakpoint: null });
        });
    }
  };

  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
    this._responsiveMediaHandlers.forEach(function(obj) {
      enquire.unregister(obj.query, obj.handler);
    });
  };

  Slider.prototype.render = function render() {
    var _this3 = this;

    var settings;
    var newProps;
    if (this.state.breakpoint) {
      newProps = this.props.responsive.filter(function(resp) {
        return resp.breakpoint === _this3.state.breakpoint;
      });
      settings =
        newProps[0].settings === "unslick"
          ? "unslick"
          : _extends(
              {},
              _defaultProps2.default,
              this.props,
              newProps[0].settings
            );
    } else {
      settings = _extends({}, _defaultProps2.default, this.props);
    }

    // force scrolling by one if centerMode is on
    if (settings.centerMode) {
      if (
        settings.slidesToScroll > 1 &&
        process.env.NODE_ENV !== "production"
      ) {
        console.warn(
          "slidesToScroll should be equal to 1 in centerMode, you are using " +
            settings.slidesToScroll
        );
      }
      settings.slidesToScroll = 1;
    }
    // force showing one slide and scrolling by one if the fade mode is on
    if (settings.fade) {
      if (settings.slidesToShow > 1 && process.env.NODE_ENV !== "production") {
        console.warn(
          "slidesToShow should be equal to 1 when fade is true, you're using " +
            settings.slidesToShow
        );
      }
      if (
        settings.slidesToScroll > 1 &&
        process.env.NODE_ENV !== "production"
      ) {
        console.warn(
          "slidesToScroll should be equal to 1 when fade is true, you're using " +
            settings.slidesToScroll
        );
      }
      settings.slidesToShow = 1;
      settings.slidesToScroll = 1;
    }

    // makes sure that children is an array, even when there is only 1 child
    var children = _react2.default.Children.toArray(this.props.children);

    // Children may contain false or null, so we should filter them
    // children may also contain string filled with spaces (in certain cases where we use jsx strings)
    children = children.filter(function(child) {
      if (typeof child === "string") {
        return !!child.trim();
      }
      return !!child;
    });

    // rows and slidesPerRow logic is handled here
    if (
      settings.variableWidth &&
      (settings.rows > 1 || settings.slidesPerRow > 1)
    ) {
      console.warn(
        "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
      );
      settings.variableWidth = false;
    }
    var newChildren = [];
    var currentWidth = null;
    for (
      var i = 0;
      i < children.length;
      i += settings.rows * settings.slidesPerRow
    ) {
      var newSlide = [];
      for (
        var j = i;
        j < i + settings.rows * settings.slidesPerRow;
        j += settings.slidesPerRow
      ) {
        var row = [];
        for (var k = j; k < j + settings.slidesPerRow; k += 1) {
          if (settings.variableWidth && children[k].props.style) {
            currentWidth = children[k].props.style.width;
          }
          if (k >= children.length) break;
          row.push(
            _react2.default.cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: 100 / settings.slidesPerRow + "%",
                display: "inline-block"
              }
            })
          );
        }
        newSlide.push(
          _react2.default.createElement("div", { key: 10 * i + j }, row)
        );
      }
      if (settings.variableWidth) {
        newChildren.push(
          _react2.default.createElement(
            "div",
            { key: i, style: { width: currentWidth } },
            newSlide
          )
        );
      } else {
        newChildren.push(
          _react2.default.createElement("div", { key: i }, newSlide)
        );
      }
    }

    if (settings === "unslick") {
      var className = "regular slider " + (this.props.className || "");
      return _react2.default.createElement(
        "div",
        { className: className },
        newChildren
      );
    } else if (newChildren.length <= settings.slidesToShow) {
      settings.unslick = true;
    }
    return _react2.default.createElement(
      _innerSlider.InnerSlider,
      _extends({ ref: this.innerSliderRefHandler }, settings),
      newChildren
    );
  };

  return Slider;
})(_react2.default.Component);

exports.default = Slider;
