"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _innerSliderUtils = require("./utils/innerSliderUtils");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _extends() {
  _extends =
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
  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
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

    if (
      index > spec.currentSlide - centerOffset - 1 &&
      index <= spec.currentSlide + centerOffset
    ) {
      slickActive = true;
    }
  } else {
    slickActive =
      spec.currentSlide <= index &&
      index < spec.currentSlide + spec.slidesToShow;
  }

  var slickCurrent = index === spec.currentSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL
  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = "relative";

    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }

    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.transition =
      "opacity " +
      spec.speed +
      "ms " +
      spec.cssEase +
      ", " +
      "visibility " +
      spec.speed +
      "ms " +
      spec.cssEase;
    style.WebkitTransition =
      "opacity " +
      spec.speed +
      "ms " +
      spec.cssEase +
      ", " +
      "visibility " +
      spec.speed +
      "ms " +
      spec.cssEase;
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];

  var childrenCount = _react["default"].Children.count(spec.children);

  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

  _react["default"].Children.forEach(spec.children, function(elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (
      !spec.lazyLoad ||
      (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)
    ) {
      child = elem;
    } else {
      child = _react["default"].createElement("div", null);
    }

    var childStyle = getSlideStyle(
      _objectSpread({}, spec, {
        index: index
      })
    );
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(
      _objectSpread({}, spec, {
        index: index
      })
    ); // push a cloned element of the desired slide

    slides.push(
      _react["default"].cloneElement(child, {
        key: "original" + getKey(child, index),
        "data-index": index,
        className: (0, _classnames["default"])(slideClasses, slideClass),
        tabIndex: "-1",
        "aria-hidden": !slideClasses["slick-active"],
        style: _objectSpread(
          {
            outline: "none"
          },
          child.props.style || {},
          {},
          childStyle
        ),
        onClick: function onClick(e) {
          child.props && child.props.onClick && child.props.onClick(e);

          if (spec.focusOnSelect) {
            spec.focusOnSelect(childOnClickOptions);
          }
        }
      })
    ); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;

      if (
        preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) &&
        childrenCount !== spec.slidesToShow
      ) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(
          _objectSpread({}, spec, {
            index: key
          })
        );
        preCloneSlides.push(
          _react["default"].cloneElement(child, {
            key: "precloned" + getKey(child, key),
            "data-index": key,
            tabIndex: "-1",
            className: (0, _classnames["default"])(slideClasses, slideClass),
            "aria-hidden": !slideClasses["slick-active"],
            style: _objectSpread({}, child.props.style || {}, {}, childStyle),
            onClick: function onClick(e) {
              child.props && child.props.onClick && child.props.onClick(e);

              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          })
        );
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;

        if (key < endIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(
          _objectSpread({}, spec, {
            index: key
          })
        );
        postCloneSlides.push(
          _react["default"].cloneElement(child, {
            key: "postcloned" + getKey(child, key),
            "data-index": key,
            tabIndex: "-1",
            className: (0, _classnames["default"])(slideClasses, slideClass),
            "aria-hidden": !slideClasses["slick-active"],
            style: _objectSpread({}, child.props.style || {}, {}, childStyle),
            onClick: function onClick(e) {
              child.props && child.props.onClick && child.props.onClick(e);

              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          })
        );
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(Track, _React$PureComponent);

    function Track() {
      _classCallCheck(this, Track);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Track).apply(this, arguments)
      );
    }

    _createClass(Track, [
      {
        key: "render",
        value: function render() {
          var slides = renderSlides(this.props);
          var _this$props = this.props,
            onMouseEnter = _this$props.onMouseEnter,
            onMouseOver = _this$props.onMouseOver,
            onMouseLeave = _this$props.onMouseLeave;
          var mouseEvents = {
            onMouseEnter: onMouseEnter,
            onMouseOver: onMouseOver,
            onMouseLeave: onMouseLeave
          };
          return _react["default"].createElement(
            "div",
            _extends(
              {
                className: "slick-track",
                style: this.props.trackStyle
              },
              mouseEvents
            ),
            slides
          );
        }
      }
    ]);

    return Track;
  })(_react["default"].PureComponent);

exports.Track = Track;
