"use strict";

exports.__esModule = true;
exports.NextArrow = exports.PrevArrow = undefined;

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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

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

var PrevArrow = (exports.PrevArrow = (function(_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _possibleConstructorReturn(
      this,
      _React$PureComponent.apply(this, arguments)
    );
  }

  PrevArrow.prototype.clickHandler = function clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  };

  PrevArrow.prototype.render = function render() {
    var prevClasses = { "slick-arrow": true, "slick-prev": true };
    var prevHandler = this.clickHandler.bind(this, { message: "previous" });

    if (
      !this.props.infinite &&
      (this.props.currentSlide === 0 ||
        this.props.slideCount <= this.props.slidesToShow)
    ) {
      prevClasses["slick-disabled"] = true;
      prevHandler = null;
    }

    var prevArrowProps = {
      key: "0",
      "data-role": "none",
      className: (0, _classnames2.default)(prevClasses),
      style: { display: "block" },
      onClick: prevHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var prevArrow = void 0;

    if (this.props.prevArrow) {
      prevArrow = _react2.default.cloneElement(
        this.props.prevArrow,
        _extends({}, prevArrowProps, customProps)
      );
    } else {
      prevArrow = _react2.default.createElement(
        "button",
        _extends({ key: "0", type: "button" }, prevArrowProps),
        " ",
        "Previous"
      );
    }

    return prevArrow;
  };

  return PrevArrow;
})(_react2.default.PureComponent));

var NextArrow = (exports.NextArrow = (function(_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _possibleConstructorReturn(
      this,
      _React$PureComponent2.apply(this, arguments)
    );
  }

  NextArrow.prototype.clickHandler = function clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  };

  NextArrow.prototype.render = function render() {
    var nextClasses = { "slick-arrow": true, "slick-next": true };
    var nextHandler = this.clickHandler.bind(this, { message: "next" });

    if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
      nextClasses["slick-disabled"] = true;
      nextHandler = null;
    }

    var nextArrowProps = {
      key: "1",
      "data-role": "none",
      className: (0, _classnames2.default)(nextClasses),
      style: { display: "block" },
      onClick: nextHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var nextArrow = void 0;

    if (this.props.nextArrow) {
      nextArrow = _react2.default.cloneElement(
        this.props.nextArrow,
        _extends({}, nextArrowProps, customProps)
      );
    } else {
      nextArrow = _react2.default.createElement(
        "button",
        _extends({ key: "1", type: "button" }, nextArrowProps),
        " ",
        "Next"
      );
    }

    return nextArrow;
  };

  return NextArrow;
})(_react2.default.PureComponent));
