(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory(require("react"), require("react-dom"));
  else if (typeof define === "function" && define.amd)
    define(["react", "react-dom"], factory);
  else if (typeof exports === "object")
    exports["Slider"] = factory(require("react"), require("react-dom"));
  else root["Slider"] = factory(root["React"], root["ReactDOM"]);
})(window, function(
  __WEBPACK_EXTERNAL_MODULE__2__,
  __WEBPACK_EXTERNAL_MODULE__4__
) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module"
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          1
        );

        /* harmony default export */ __webpack_exports__["default"] =
          _slider__WEBPACK_IMPORTED_MODULE_0__["default"];

        /***/
      },
      /* 1 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Slider;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _inner_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          3
        );
        /* harmony import */ var json2mq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          14
        );
        /* harmony import */ var json2mq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          json2mq__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _default_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          16
        );
        /* harmony import */ var _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          9
        );

        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
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
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
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
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }
          );
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

        var enquire =
          Object(
            _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_4__["canUseDOM"]
          )() && __webpack_require__(17);

        var Slider =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(Slider, _React$Component);

            function Slider(props) {
              var _this;

              _classCallCheck(this, Slider);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(Slider).call(this, props)
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "innerSliderRefHandler",
                function(ref) {
                  return (_this.innerSlider = ref);
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "slickPrev",
                function() {
                  return _this.innerSlider.slickPrev();
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "slickNext",
                function() {
                  return _this.innerSlider.slickNext();
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "slickGoTo",
                function(slide) {
                  var dontAnimate =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : false;
                  return _this.innerSlider.slickGoTo(slide, dontAnimate);
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "slickPause",
                function() {
                  return _this.innerSlider.pause("paused");
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "slickPlay",
                function() {
                  return _this.innerSlider.autoPlay("play");
                }
              );

              _this.state = {
                breakpoint: null
              };
              _this._responsiveMediaHandlers = [];
              return _this;
            }

            _createClass(Slider, [
              {
                key: "media",
                value: function media(query, handler) {
                  // javascript handler for  css media query
                  enquire.register(query, handler);

                  this._responsiveMediaHandlers.push({
                    query: query,
                    handler: handler
                  });
                } // handles responsive breakpoints
              },
              {
                key: "UNSAFE_componentWillMount",
                value: function UNSAFE_componentWillMount() {
                  var _this2 = this;

                  // performance monitoring
                  //if (process.env.NODE_ENV !== 'production') {
                  //const { whyDidYouUpdate } = require('why-did-you-update')
                  //whyDidYouUpdate(React)
                  //}
                  if (this.props.responsive) {
                    var breakpoints = this.props.responsive.map(function(
                      breakpt
                    ) {
                      return breakpt.breakpoint;
                    }); // sort them in increasing order of their numerical value

                    breakpoints.sort(function(x, y) {
                      return x - y;
                    });
                    breakpoints.forEach(function(breakpoint, index) {
                      // media query for each breakpoint
                      var bQuery;

                      if (index === 0) {
                        bQuery = json2mq__WEBPACK_IMPORTED_MODULE_2___default()(
                          {
                            minWidth: 0,
                            maxWidth: breakpoint
                          }
                        );
                      } else {
                        bQuery = json2mq__WEBPACK_IMPORTED_MODULE_2___default()(
                          {
                            minWidth: breakpoints[index - 1] + 1,
                            maxWidth: breakpoint
                          }
                        );
                      } // when not using server side rendering

                      Object(
                        _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_4__[
                          "canUseDOM"
                        ]
                      )() &&
                        _this2.media(bQuery, function() {
                          _this2.setState({
                            breakpoint: breakpoint
                          });
                        });
                    }); // Register media query for full screen. Need to support resize from small to large
                    // convert javascript object to media query string

                    var query = json2mq__WEBPACK_IMPORTED_MODULE_2___default()({
                      minWidth: breakpoints.slice(-1)[0]
                    });
                    Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_4__[
                        "canUseDOM"
                      ]
                    )() &&
                      this.media(query, function() {
                        _this2.setState({
                          breakpoint: null
                        });
                      });
                  }
                }
              },
              {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                  this._responsiveMediaHandlers.forEach(function(obj) {
                    enquire.unregister(obj.query, obj.handler);
                  });
                }
              },
              {
                key: "render",
                value: function render() {
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
                        : _objectSpread(
                            {},
                            _default_props__WEBPACK_IMPORTED_MODULE_3__[
                              "default"
                            ],
                            {},
                            this.props,
                            {},
                            newProps[0].settings
                          );
                  } else {
                    settings = _objectSpread(
                      {},
                      _default_props__WEBPACK_IMPORTED_MODULE_3__["default"],
                      {},
                      this.props
                    );
                  } // force scrolling by one if centerMode is on

                  if (settings.centerMode) {
                    if (
                      settings.slidesToScroll > 1 &&
                      "none" !== "production"
                    ) {
                      console.warn(
                        "slidesToScroll should be equal to 1 in centerMode, you are using ".concat(
                          settings.slidesToScroll
                        )
                      );
                    }

                    settings.slidesToScroll = 1;
                  } // force showing one slide and scrolling by one if the fade mode is on

                  if (settings.fade) {
                    if (settings.slidesToShow > 1 && "none" !== "production") {
                      console.warn(
                        "slidesToShow should be equal to 1 when fade is true, you're using ".concat(
                          settings.slidesToShow
                        )
                      );
                    }

                    if (
                      settings.slidesToScroll > 1 &&
                      "none" !== "production"
                    ) {
                      console.warn(
                        "slidesToScroll should be equal to 1 when fade is true, you're using ".concat(
                          settings.slidesToScroll
                        )
                      );
                    }

                    settings.slidesToShow = 1;
                    settings.slidesToScroll = 1;
                  } // makes sure that children is an array, even when there is only 1 child

                  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(
                    this.props.children
                  ); // Children may contain false or null, so we should filter them
                  // children may also contain string filled with spaces (in certain cases where we use jsx strings)

                  children = children.filter(function(child) {
                    if (typeof child === "string") {
                      return !!child.trim();
                    }

                    return !!child;
                  }); // rows and slidesPerRow logic is handled here

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
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(
                            children[k],
                            {
                              key: 100 * i + 10 * j + k,
                              tabIndex: -1,
                              style: {
                                width: "".concat(
                                  100 / settings.slidesPerRow,
                                  "%"
                                ),
                                display: "inline-block"
                              }
                            }
                          )
                        );
                      }

                      newSlide.push(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            key: 10 * i + j
                          },
                          row
                        )
                      );
                    }

                    if (settings.variableWidth) {
                      newChildren.push(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            key: i,
                            style: {
                              width: currentWidth
                            }
                          },
                          newSlide
                        )
                      );
                    } else {
                      newChildren.push(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            key: i
                          },
                          newSlide
                        )
                      );
                    }
                  }

                  if (settings === "unslick") {
                    var className =
                      "regular slider " + (this.props.className || "");
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      {
                        className: className
                      },
                      newChildren
                    );
                  } else if (newChildren.length <= settings.slidesToShow) {
                    settings.unslick = true;
                  }

                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _inner_slider__WEBPACK_IMPORTED_MODULE_1__["InnerSlider"],
                    _extends(
                      {
                        style: this.props.style,
                        ref: this.innerSliderRefHandler
                      },
                      settings
                    ),
                    newChildren
                  );
                }
              }
            ]);

            return Slider;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

        /***/
      },
      /* 2 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

        /***/
      },
      /* 3 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "InnerSlider",
          function() {
            return InnerSlider;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          4
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_dom__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          5
        );
        /* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6
        );
        /* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          lodash_debounce__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          8
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          9
        );
        /* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          10
        );
        /* harmony import */ var _dots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          11
        );
        /* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          12
        );
        /* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          13
        );

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

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }

        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
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
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
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

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }
          );
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

        var InnerSlider =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(InnerSlider, _React$Component);

            function InnerSlider(props) {
              var _this;

              _classCallCheck(this, InnerSlider);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(InnerSlider).call(this, props)
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "listRefHandler",
                function(ref) {
                  return (_this.list = ref);
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "trackRefHandler",
                function(ref) {
                  return (_this.track = ref);
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "adaptHeight",
                function() {
                  if (_this.props.adaptiveHeight && _this.list) {
                    var elem = _this.list.querySelector(
                      '[data-index="'.concat(_this.state.currentSlide, '"]')
                    );

                    _this.list.style.height =
                      Object(
                        _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                          "getHeight"
                        ]
                      )(elem) + "px";
                  }
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "UNSAFE_componentWillMount",
                function() {
                  _this.ssrInit();

                  _this.props.onInit && _this.props.onInit();

                  if (_this.props.lazyLoad) {
                    var slidesToLoad = Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                        "getOnDemandLazySlides"
                      ]
                    )(_objectSpread({}, _this.props, {}, _this.state));

                    if (slidesToLoad.length > 0) {
                      _this.setState(function(prevState) {
                        return {
                          lazyLoadedList: prevState.lazyLoadedList.concat(
                            slidesToLoad
                          )
                        };
                      });

                      if (_this.props.onLazyLoad) {
                        _this.props.onLazyLoad(slidesToLoad);
                      }
                    }
                  }
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "componentDidMount",
                function() {
                  var spec = _objectSpread(
                    {
                      listRef: _this.list,
                      trackRef: _this.track
                    },
                    _this.props
                  );

                  _this.updateState(spec, true, function() {
                    _this.adaptHeight();

                    _this.props.autoplay && _this.autoPlay("update");
                  });

                  if (_this.props.lazyLoad === "progressive") {
                    _this.lazyLoadTimer = setInterval(
                      _this.progressiveLazyLoad,
                      3000
                    );
                  }

                  _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_9__[
                    "default"
                  ](function() {
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
                      slide.onfocus = _this.props.pauseOnFocus
                        ? _this.onSlideFocus
                        : null;
                      slide.onblur = _this.props.pauseOnFocus
                        ? _this.onSlideBlur
                        : null;
                    }
                  );

                  if (window.addEventListener) {
                    window.addEventListener("resize", _this.onWindowResized);
                  } else {
                    window.attachEvent("onresize", _this.onWindowResized);
                  }
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "componentWillUnmount",
                function() {
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
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "UNSAFE_componentWillReceiveProps",
                function(nextProps) {
                  var spec = _objectSpread(
                    {
                      listRef: _this.list,
                      trackRef: _this.track
                    },
                    nextProps,
                    {},
                    _this.state
                  );

                  var setTrackStyle = false;

                  for (
                    var _i = 0, _Object$keys = Object.keys(_this.props);
                    _i < _Object$keys.length;
                    _i++
                  ) {
                    var key = _Object$keys[_i];

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
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(
                        nextProps.children
                      )
                    ) {
                      _this.changeSlide({
                        message: "index",
                        index:
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(
                            nextProps.children
                          ) - nextProps.slidesToShow,
                        currentSlide: _this.state.currentSlide
                      });
                    }

                    if (nextProps.autoplay) {
                      _this.autoPlay("update");
                    } else {
                      _this.pause("paused");
                    }
                  });
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "componentDidUpdate",
                function() {
                  _this.checkImagesLoad();

                  _this.props.onReInit && _this.props.onReInit();

                  if (_this.props.lazyLoad) {
                    var slidesToLoad = Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                        "getOnDemandLazySlides"
                      ]
                    )(_objectSpread({}, _this.props, {}, _this.state));

                    if (slidesToLoad.length > 0) {
                      _this.setState(function(prevState) {
                        return {
                          lazyLoadedList: prevState.lazyLoadedList.concat(
                            slidesToLoad
                          )
                        };
                      });

                      if (_this.props.onLazyLoad) {
                        _this.props.onLazyLoad(slidesToLoad);
                      }
                    }
                  } // if (this.props.onLazyLoad) {
                  //   this.props.onLazyLoad([leftMostSlide])
                  // }

                  _this.adaptHeight();
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "onWindowResized",
                function(setTrackStyle) {
                  if (_this.debouncedResize) _this.debouncedResize.cancel();
                  _this.debouncedResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(
                    function() {
                      return _this.resizeWindow(setTrackStyle);
                    },
                    50
                  );

                  _this.debouncedResize();
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "resizeWindow",
                function() {
                  var setTrackStyle =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : true;
                  if (
                    !react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(
                      _this.track
                    )
                  )
                    return;

                  var spec = _objectSpread(
                    {
                      listRef: _this.list,
                      trackRef: _this.track
                    },
                    _this.props,
                    {},
                    _this.state
                  );

                  _this.updateState(spec, setTrackStyle, function() {
                    if (_this.props.autoplay) _this.autoPlay("update");
                    else _this.pause("paused");
                  }); // animating state should be cleared while resizing, otherwise autoplay stops working

                  _this.setState({
                    animating: false
                  });

                  clearTimeout(_this.animationEndCallback);
                  delete _this.animationEndCallback;
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "updateState",
                function(spec, setTrackStyle, callback) {
                  var updatedState = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "initializedState"
                    ]
                  )(spec);
                  spec = _objectSpread({}, spec, {}, updatedState, {
                    slideIndex: updatedState.currentSlide
                  });
                  var targetLeft = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "getTrackLeft"
                    ]
                  )(spec);
                  spec = _objectSpread({}, spec, {
                    left: targetLeft
                  });
                  var trackStyle = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "getTrackCSS"
                    ]
                  )(spec);

                  if (
                    setTrackStyle ||
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(
                      _this.props.children
                    ) !==
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(
                        spec.children
                      )
                  ) {
                    updatedState["trackStyle"] = trackStyle;
                  }

                  _this.setState(updatedState, callback);
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "ssrInit",
                function() {
                  if (_this.props.variableWidth) {
                    var _trackWidth = 0,
                      _trackLeft = 0;
                    var childrenWidths = [];
                    var preClones = Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                        "getPreClones"
                      ]
                    )(
                      _objectSpread({}, _this.props, {}, _this.state, {
                        slideCount: _this.props.children.length
                      })
                    );
                    var postClones = Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                        "getPostClones"
                      ]
                    )(
                      _objectSpread({}, _this.props, {}, _this.state, {
                        slideCount: _this.props.children.length
                      })
                    );

                    _this.props.children.forEach(function(child) {
                      childrenWidths.push(child.props.style.width);
                      _trackWidth += child.props.style.width;
                    });

                    for (var i = 0; i < preClones; i++) {
                      _trackLeft +=
                        childrenWidths[childrenWidths.length - 1 - i];
                      _trackWidth +=
                        childrenWidths[childrenWidths.length - 1 - i];
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
                      var currentWidth = "".concat(
                        childrenWidths[_this.state.currentSlide],
                        "px"
                      );
                      _trackStyle.left = "calc("
                        .concat(_trackStyle.left, " + (100% - ")
                        .concat(currentWidth, ") / 2 ) ");
                    }

                    _this.setState({
                      trackStyle: _trackStyle
                    });

                    return;
                  }

                  var childrenCount = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(
                    _this.props.children
                  );

                  var spec = _objectSpread({}, _this.props, {}, _this.state, {
                    slideCount: childrenCount
                  });

                  var slideCount =
                    Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                        "getPreClones"
                      ]
                    )(spec) +
                    Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                        "getPostClones"
                      ]
                    )(spec) +
                    childrenCount;
                  var trackWidth =
                    (100 / _this.props.slidesToShow) * slideCount;
                  var slideWidth = 100 / slideCount;
                  var trackLeft =
                    (-slideWidth *
                      (Object(
                        _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                          "getPreClones"
                        ]
                      )(spec) +
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
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "checkImagesLoad",
                function() {
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
                          _this.props.onLazyLoadError &&
                            _this.props.onLazyLoadError();
                        };
                      }
                    }
                  });
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "progressiveLazyLoad",
                function() {
                  var slidesToLoad = [_this.props.initialSlide];

                  var spec = _objectSpread({}, _this.props, {}, _this.state);

                  for (
                    var index = _this.state.currentSlide;
                    index <
                    _this.state.slideCount +
                      Object(
                        _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                          "getPostClones"
                        ]
                      )(spec);
                    index++
                  ) {
                    if (_this.state.lazyLoadedList.indexOf(index) < 0) {
                      slidesToLoad.push(index);
                      break;
                    }
                  }

                  for (
                    var _index = _this.state.currentSlide - 1;
                    _index >=
                    -Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                        "getPreClones"
                      ]
                    )(spec);
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
                        lazyLoadedList: state.lazyLoadedList.concat(
                          slidesToLoad
                        )
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
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "slideHandler",
                function(index) {
                  var dontAnimate =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : false;
                  var _this$props = _this.props,
                    asNavFor = _this$props.asNavFor,
                    beforeChange = _this$props.beforeChange,
                    onLazyLoad = _this$props.onLazyLoad,
                    speed = _this$props.speed,
                    afterChange = _this$props.afterChange; // capture currentslide before state is updated

                  var currentSlide = _this.state.currentSlide;

                  var _slideHandler = Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                        "slideHandler"
                      ]
                    )(
                      _objectSpread(
                        {
                          index: index
                        },
                        _this.props,
                        {},
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
                  beforeChange &&
                    beforeChange(currentSlide, state.currentSlide);
                  var slidesToLoad = state.lazyLoadedList.filter(function(
                    value
                  ) {
                    return _this.state.lazyLoadedList.indexOf(value) < 0;
                  });
                  onLazyLoad &&
                    slidesToLoad.length > 0 &&
                    onLazyLoad(slidesToLoad);

                  _this.setState(state, function() {
                    asNavFor && asNavFor.innerSlider.slideHandler(index);
                    if (!nextState) return;
                    _this.animationEndCallback = setTimeout(function() {
                      var animating = nextState.animating,
                        firstBatch = _objectWithoutProperties(nextState, [
                          "animating"
                        ]);

                      _this.setState(firstBatch, function() {
                        _this.callbackTimers.push(
                          setTimeout(function() {
                            return _this.setState({
                              animating: animating
                            });
                          }, 10)
                        );

                        afterChange && afterChange(state.currentSlide);
                        delete _this.animationEndCallback;
                      });
                    }, speed);
                  });
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "changeSlide",
                function(options) {
                  var dontAnimate =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : false;

                  var spec = _objectSpread({}, _this.props, {}, _this.state);

                  var targetSlide = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "changeSlide"
                    ]
                  )(spec, options);
                  if (targetSlide !== 0 && !targetSlide) return;

                  if (dontAnimate === true) {
                    _this.slideHandler(targetSlide, dontAnimate);
                  } else {
                    _this.slideHandler(targetSlide);
                  }
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "clickHandler",
                function(e) {
                  if (_this.clickable === false) {
                    e.stopPropagation();
                    e.preventDefault();
                  }

                  _this.clickable = true;
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "keyHandler",
                function(e) {
                  var dir = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "keyHandler"
                    ]
                  )(e, _this.props.accessibility, _this.props.rtl);
                  dir !== "" &&
                    _this.changeSlide({
                      message: dir
                    });
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "selectHandler",
                function(options) {
                  _this.changeSlide(options);
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "disableBodyScroll",
                function() {
                  var preventDefault = function preventDefault(e) {
                    e = e || window.event;
                    if (e.preventDefault) e.preventDefault();
                    e.returnValue = false;
                  };

                  window.ontouchmove = preventDefault;
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "enableBodyScroll",
                function() {
                  window.ontouchmove = null;
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "swipeStart",
                function(e) {
                  if (_this.props.verticalSwiping) {
                    _this.disableBodyScroll();
                  }

                  var state = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "swipeStart"
                    ]
                  )(e, _this.props.swipe, _this.props.draggable);
                  state !== "" && _this.setState(state);
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "swipeMove",
                function(e) {
                  var state = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "swipeMove"
                    ]
                  )(
                    e,
                    _objectSpread({}, _this.props, {}, _this.state, {
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
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "swipeEnd",
                function(e) {
                  var state = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "swipeEnd"
                    ]
                  )(
                    e,
                    _objectSpread({}, _this.props, {}, _this.state, {
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
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "slickPrev",
                function() {
                  // this and fellow methods are wrapped in setTimeout
                  // to make sure initialize setState has happened before
                  // any of such methods are called
                  _this.callbackTimers.push(
                    setTimeout(function() {
                      return _this.changeSlide({
                        message: "previous"
                      });
                    }, 0)
                  );
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "slickNext",
                function() {
                  _this.callbackTimers.push(
                    setTimeout(function() {
                      return _this.changeSlide({
                        message: "next"
                      });
                    }, 0)
                  );
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "slickGoTo",
                function(slide) {
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
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "play",
                function() {
                  var nextIndex;

                  if (_this.props.rtl) {
                    nextIndex =
                      _this.state.currentSlide - _this.props.slidesToScroll;
                  } else {
                    if (
                      Object(
                        _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                          "canGoNext"
                        ]
                      )(_objectSpread({}, _this.props, {}, _this.state))
                    ) {
                      nextIndex =
                        _this.state.currentSlide + _this.props.slidesToScroll;
                    } else {
                      return false;
                    }
                  }

                  _this.slideHandler(nextIndex);
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "autoPlay",
                function(playType) {
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

                  _this.setState({
                    autoplaying: "playing"
                  });
                }
              );

              _defineProperty(_assertThisInitialized(_this), "pause", function(
                pauseType
              ) {
                if (_this.autoplayTimer) {
                  clearInterval(_this.autoplayTimer);
                  _this.autoplayTimer = null;
                }

                var autoplaying = _this.state.autoplaying;

                if (pauseType === "paused") {
                  _this.setState({
                    autoplaying: "paused"
                  });
                } else if (pauseType === "focused") {
                  if (autoplaying === "hovered" || autoplaying === "playing") {
                    _this.setState({
                      autoplaying: "focused"
                    });
                  }
                } else {
                  // pauseType  is 'hovered'
                  if (autoplaying === "playing") {
                    _this.setState({
                      autoplaying: "hovered"
                    });
                  }
                }
              });

              _defineProperty(
                _assertThisInitialized(_this),
                "onDotsOver",
                function() {
                  return _this.props.autoplay && _this.pause("hovered");
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "onDotsLeave",
                function() {
                  return (
                    _this.props.autoplay &&
                    _this.state.autoplaying === "hovered" &&
                    _this.autoPlay("leave")
                  );
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "onTrackOver",
                function() {
                  return _this.props.autoplay && _this.pause("hovered");
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "onTrackLeave",
                function() {
                  return (
                    _this.props.autoplay &&
                    _this.state.autoplaying === "hovered" &&
                    _this.autoPlay("leave")
                  );
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "onSlideFocus",
                function() {
                  return _this.props.autoplay && _this.pause("focused");
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "onSlideBlur",
                function() {
                  return (
                    _this.props.autoplay &&
                    _this.state.autoplaying === "focused" &&
                    _this.autoPlay("blur")
                  );
                }
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "render",
                function() {
                  var className = classnames__WEBPACK_IMPORTED_MODULE_4___default()(
                    "slick-slider",
                    _this.props.className,
                    {
                      "slick-vertical": _this.props.vertical,
                      "slick-initialized": true
                    }
                  );

                  var spec = _objectSpread({}, _this.props, {}, _this.state);

                  var trackProps = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "extractObject"
                    ]
                  )(spec, [
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
                  trackProps = _objectSpread({}, trackProps, {
                    onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
                    onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
                    onMouseOver: pauseOnHover ? _this.onTrackOver : null,
                    focusOnSelect: _this.props.focusOnSelect
                      ? _this.selectHandler
                      : null
                  });
                  var dots;

                  if (
                    _this.props.dots === true &&
                    _this.state.slideCount >= _this.props.slidesToShow
                  ) {
                    var dotProps = Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                        "extractObject"
                      ]
                    )(spec, [
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
                    dotProps = _objectSpread({}, dotProps, {
                      clickHandler: _this.changeSlide,
                      onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
                      onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
                      onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
                    });
                    dots = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _dots__WEBPACK_IMPORTED_MODULE_7__["Dots"],
                      dotProps
                    );
                  }

                  var prevArrow, nextArrow;
                  var arrowProps = Object(
                    _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_5__[
                      "extractObject"
                    ]
                  )(spec, [
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
                    prevArrow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _arrows__WEBPACK_IMPORTED_MODULE_8__["PrevArrow"],
                      arrowProps
                    );
                    nextArrow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _arrows__WEBPACK_IMPORTED_MODULE_8__["NextArrow"],
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

                  var listStyle = _objectSpread(
                    {},
                    verticalHeightStyle,
                    {},
                    centerPaddingStyle
                  );

                  var touchMove = _this.props.touchMove;
                  var listProps = {
                    className: "slick-list",
                    style: listStyle,
                    onClick: _this.clickHandler,
                    onMouseDown: touchMove ? _this.swipeStart : null,
                    onMouseMove:
                      _this.state.dragging && touchMove
                        ? _this.swipeMove
                        : null,
                    onMouseUp: touchMove ? _this.swipeEnd : null,
                    onMouseLeave:
                      _this.state.dragging && touchMove ? _this.swipeEnd : null,
                    onTouchStart: touchMove ? _this.swipeStart : null,
                    onTouchMove:
                      _this.state.dragging && touchMove
                        ? _this.swipeMove
                        : null,
                    onTouchEnd: touchMove ? _this.swipeEnd : null,
                    onTouchCancel:
                      _this.state.dragging && touchMove ? _this.swipeEnd : null,
                    onKeyDown: _this.props.accessibility
                      ? _this.keyHandler
                      : null
                  };
                  var innerSliderProps = {
                    className: className,
                    dir: "ltr",
                    style: _this.props.style
                  };

                  if (_this.props.unslick) {
                    listProps = {
                      className: "slick-list"
                    };
                    innerSliderProps = {
                      className: className
                    };
                  }

                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    innerSliderProps,
                    !_this.props.unslick ? prevArrow : "",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "div",
                      _extends(
                        {
                          ref: _this.listRefHandler
                        },
                        listProps
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _track__WEBPACK_IMPORTED_MODULE_6__["Track"],
                        _extends(
                          {
                            ref: _this.trackRefHandler
                          },
                          trackProps
                        ),
                        _this.props.children
                      )
                    ),
                    !_this.props.unslick ? nextArrow : "",
                    !_this.props.unslick ? dots : ""
                  );
                }
              );

              _this.list = null;
              _this.track = null;
              _this.state = _objectSpread(
                {},
                _initial_state__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                  currentSlide: _this.props.initialSlide,
                  slideCount: react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(
                    _this.props.children
                  )
                }
              );
              _this.callbackTimers = [];
              _this.clickable = true;
              _this.debouncedResize = null;
              return _this;
            }

            return InnerSlider;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

        /***/
      },
      /* 4 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

        /***/
      },
      /* 5 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var initialState = {
          animating: false,
          autoplaying: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          dragging: false,
          edgeDragged: false,
          initialized: false,
          lazyLoadedList: [],
          listHeight: null,
          listWidth: null,
          scrolling: false,
          slideCount: null,
          slideHeight: null,
          slideWidth: null,
          swipeLeft: null,
          swiped: false,
          // used by swipeEvent. differentites between touch and swipe.
          swiping: false,
          touchObject: {
            startX: 0,
            startY: 0,
            curX: 0,
            curY: 0
          },
          trackStyle: {},
          trackWidth: 0
        };
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = initialState;

        /***/
      },
      /* 6 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(global) {
          /**
           * lodash (Custom Build) <https://lodash.com/>
           * Build: `lodash modularize exports="npm" -o ./`
           * Copyright jQuery Foundation and other contributors <https://jquery.org/>
           * Released under MIT license <https://lodash.com/license>
           * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
           * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
           */

          /** Used as the `TypeError` message for "Functions" methods. */
          var FUNC_ERROR_TEXT = "Expected a function";

          /** Used as references for various `Number` constants. */
          var NAN = 0 / 0;

          /** `Object#toString` result references. */
          var symbolTag = "[object Symbol]";

          /** Used to match leading and trailing whitespace. */
          var reTrim = /^\s+|\s+$/g;

          /** Used to detect bad signed hexadecimal string values. */
          var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

          /** Used to detect binary string values. */
          var reIsBinary = /^0b[01]+$/i;

          /** Used to detect octal string values. */
          var reIsOctal = /^0o[0-7]+$/i;

          /** Built-in method references without a dependency on `root`. */
          var freeParseInt = parseInt;

          /** Detect free variable `global` from Node.js. */
          var freeGlobal =
            typeof global == "object" &&
            global &&
            global.Object === Object &&
            global;

          /** Detect free variable `self`. */
          var freeSelf =
            typeof self == "object" && self && self.Object === Object && self;

          /** Used as a reference to the global object. */
          var root = freeGlobal || freeSelf || Function("return this")();

          /** Used for built-in method references. */
          var objectProto = Object.prototype;

          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */
          var objectToString = objectProto.toString;

          /* Built-in method references for those with the same name as other `lodash` methods. */
          var nativeMax = Math.max,
            nativeMin = Math.min;

          /**
           * Gets the timestamp of the number of milliseconds that have elapsed since
           * the Unix epoch (1 January 1970 00:00:00 UTC).
           *
           * @static
           * @memberOf _
           * @since 2.4.0
           * @category Date
           * @returns {number} Returns the timestamp.
           * @example
           *
           * _.defer(function(stamp) {
           *   console.log(_.now() - stamp);
           * }, _.now());
           * // => Logs the number of milliseconds it took for the deferred invocation.
           */
          var now = function() {
            return root.Date.now();
          };

          /**
           * Creates a debounced function that delays invoking `func` until after `wait`
           * milliseconds have elapsed since the last time the debounced function was
           * invoked. The debounced function comes with a `cancel` method to cancel
           * delayed `func` invocations and a `flush` method to immediately invoke them.
           * Provide `options` to indicate whether `func` should be invoked on the
           * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
           * with the last arguments provided to the debounced function. Subsequent
           * calls to the debounced function return the result of the last `func`
           * invocation.
           *
           * **Note:** If `leading` and `trailing` options are `true`, `func` is
           * invoked on the trailing edge of the timeout only if the debounced function
           * is invoked more than once during the `wait` timeout.
           *
           * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
           * until to the next tick, similar to `setTimeout` with a timeout of `0`.
           *
           * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
           * for details over the differences between `_.debounce` and `_.throttle`.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Function
           * @param {Function} func The function to debounce.
           * @param {number} [wait=0] The number of milliseconds to delay.
           * @param {Object} [options={}] The options object.
           * @param {boolean} [options.leading=false]
           *  Specify invoking on the leading edge of the timeout.
           * @param {number} [options.maxWait]
           *  The maximum time `func` is allowed to be delayed before it's invoked.
           * @param {boolean} [options.trailing=true]
           *  Specify invoking on the trailing edge of the timeout.
           * @returns {Function} Returns the new debounced function.
           * @example
           *
           * // Avoid costly calculations while the window size is in flux.
           * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
           *
           * // Invoke `sendMail` when clicked, debouncing subsequent calls.
           * jQuery(element).on('click', _.debounce(sendMail, 300, {
           *   'leading': true,
           *   'trailing': false
           * }));
           *
           * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
           * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
           * var source = new EventSource('/stream');
           * jQuery(source).on('message', debounced);
           *
           * // Cancel the trailing debounced invocation.
           * jQuery(window).on('popstate', debounced.cancel);
           */
          function debounce(func, wait, options) {
            var lastArgs,
              lastThis,
              maxWait,
              result,
              timerId,
              lastCallTime,
              lastInvokeTime = 0,
              leading = false,
              maxing = false,
              trailing = true;

            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing
                ? nativeMax(toNumber(options.maxWait) || 0, wait)
                : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }

            function invokeFunc(time) {
              var args = lastArgs,
                thisArg = lastThis;

              lastArgs = lastThis = undefined;
              lastInvokeTime = time;
              result = func.apply(thisArg, args);
              return result;
            }

            function leadingEdge(time) {
              // Reset any `maxWait` timer.
              lastInvokeTime = time;
              // Start the timer for the trailing edge.
              timerId = setTimeout(timerExpired, wait);
              // Invoke the leading edge.
              return leading ? invokeFunc(time) : result;
            }

            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime,
                result = wait - timeSinceLastCall;

              return maxing
                ? nativeMin(result, maxWait - timeSinceLastInvoke)
                : result;
            }

            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime;

              // Either this is the first call, activity has stopped and we're at the
              // trailing edge, the system time has gone backwards and we're treating
              // it as the trailing edge, or we've hit the `maxWait` limit.
              return (
                lastCallTime === undefined ||
                timeSinceLastCall >= wait ||
                timeSinceLastCall < 0 ||
                (maxing && timeSinceLastInvoke >= maxWait)
              );
            }

            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              // Restart the timer.
              timerId = setTimeout(timerExpired, remainingWait(time));
            }

            function trailingEdge(time) {
              timerId = undefined;

              // Only invoke if we have `lastArgs` which means `func` has been
              // debounced at least once.
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined;
              return result;
            }

            function cancel() {
              if (timerId !== undefined) {
                clearTimeout(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined;
            }

            function flush() {
              return timerId === undefined ? result : trailingEdge(now());
            }

            function debounced() {
              var time = now(),
                isInvoking = shouldInvoke(time);

              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;

              if (isInvoking) {
                if (timerId === undefined) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  // Handle invocations in a tight loop.
                  timerId = setTimeout(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined) {
                timerId = setTimeout(timerExpired, wait);
              }
              return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }

          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */
          function isObject(value) {
            var type = typeof value;
            return !!value && (type == "object" || type == "function");
          }

          /**
           * Checks if `value` is object-like. A value is object-like if it's not `null`
           * and has a `typeof` result of "object".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
           * @example
           *
           * _.isObjectLike({});
           * // => true
           *
           * _.isObjectLike([1, 2, 3]);
           * // => true
           *
           * _.isObjectLike(_.noop);
           * // => false
           *
           * _.isObjectLike(null);
           * // => false
           */
          function isObjectLike(value) {
            return !!value && typeof value == "object";
          }

          /**
           * Checks if `value` is classified as a `Symbol` primitive or object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
           * @example
           *
           * _.isSymbol(Symbol.iterator);
           * // => true
           *
           * _.isSymbol('abc');
           * // => false
           */
          function isSymbol(value) {
            return (
              typeof value == "symbol" ||
              (isObjectLike(value) && objectToString.call(value) == symbolTag)
            );
          }

          /**
           * Converts `value` to a number.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to process.
           * @returns {number} Returns the number.
           * @example
           *
           * _.toNumber(3.2);
           * // => 3.2
           *
           * _.toNumber(Number.MIN_VALUE);
           * // => 5e-324
           *
           * _.toNumber(Infinity);
           * // => Infinity
           *
           * _.toNumber('3.2');
           * // => 3.2
           */
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other =
                typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = value.replace(reTrim, "");
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value)
              ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
              : reIsBadHex.test(value)
              ? NAN
              : +value;
          }

          module.exports = debounce;

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(7)));

        /***/
      },
      /* 7 */
      /***/ function(module, exports) {
        var g;

        // This works in non-strict mode
        g = (function() {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },
      /* 8 */
      /***/ function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__; /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        /* global define */

        (function() {
          "use strict";

          var hasOwn = {}.hasOwnProperty;

          function classNames() {
            var classes = [];

            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i];
              if (!arg) continue;

              var argType = typeof arg;

              if (argType === "string" || argType === "number") {
                classes.push(arg);
              } else if (Array.isArray(arg) && arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                  classes.push(inner);
                }
              } else if (argType === "object") {
                for (var key in arg) {
                  if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                  }
                }
              }
            }

            return classes.join(" ");
          }

          if (true && module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
          } else if (true) {
            // register as 'classnames', consistent with npm package name
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
              return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })();

        /***/
      },
      /* 9 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getOnDemandLazySlides",
          function() {
            return getOnDemandLazySlides;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getRequiredLazySlides",
          function() {
            return getRequiredLazySlides;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "lazyStartIndex",
          function() {
            return lazyStartIndex;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "lazyEndIndex",
          function() {
            return lazyEndIndex;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "lazySlidesOnLeft",
          function() {
            return lazySlidesOnLeft;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "lazySlidesOnRight",
          function() {
            return lazySlidesOnRight;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getWidth",
          function() {
            return getWidth;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getHeight",
          function() {
            return getHeight;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getSwipeDirection",
          function() {
            return getSwipeDirection;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "canGoNext",
          function() {
            return canGoNext;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "extractObject",
          function() {
            return extractObject;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initializedState",
          function() {
            return initializedState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "slideHandler",
          function() {
            return slideHandler;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "changeSlide",
          function() {
            return changeSlide;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "keyHandler",
          function() {
            return keyHandler;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "swipeStart",
          function() {
            return swipeStart;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "swipeMove",
          function() {
            return swipeMove;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "swipeEnd",
          function() {
            return swipeEnd;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getNavigableIndexes",
          function() {
            return getNavigableIndexes;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "checkNavigable",
          function() {
            return checkNavigable;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getSlideCount",
          function() {
            return getSlideCount;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "checkSpecKeys",
          function() {
            return checkSpecKeys;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getTrackCSS",
          function() {
            return getTrackCSS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getTrackAnimateCSS",
          function() {
            return getTrackAnimateCSS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getTrackLeft",
          function() {
            return getTrackLeft;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getPreClones",
          function() {
            return getPreClones;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getPostClones",
          function() {
            return getPostClones;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getTotalSlides",
          function() {
            return getTotalSlides;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "siblingDirection",
          function() {
            return siblingDirection;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "slidesOnRight",
          function() {
            return slidesOnRight;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "slidesOnLeft",
          function() {
            return slidesOnLeft;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "canUseDOM",
          function() {
            return canUseDOM;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          4
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_dom__WEBPACK_IMPORTED_MODULE_1__
        );
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
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
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

        var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
          var onDemandSlides = [];
          var startIndex = lazyStartIndex(spec);
          var endIndex = lazyEndIndex(spec);

          for (
            var slideIndex = startIndex;
            slideIndex < endIndex;
            slideIndex++
          ) {
            if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
              onDemandSlides.push(slideIndex);
            }
          }

          return onDemandSlides;
        }; // return list of slides that need to be present

        var getRequiredLazySlides = function getRequiredLazySlides(spec) {
          var requiredSlides = [];
          var startIndex = lazyStartIndex(spec);
          var endIndex = lazyEndIndex(spec);

          for (
            var slideIndex = startIndex;
            slideIndex < endIndex;
            slideIndex++
          ) {
            requiredSlides.push(slideIndex);
          }

          return requiredSlides;
        }; // startIndex that needs to be present

        var lazyStartIndex = function lazyStartIndex(spec) {
          return spec.currentSlide - lazySlidesOnLeft(spec);
        };
        var lazyEndIndex = function lazyEndIndex(spec) {
          return spec.currentSlide + lazySlidesOnRight(spec);
        };
        var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
          return spec.centerMode
            ? Math.floor(spec.slidesToShow / 2) +
                (parseInt(spec.centerPadding) > 0 ? 1 : 0)
            : 0;
        };
        var lazySlidesOnRight = function lazySlidesOnRight(spec) {
          return spec.centerMode
            ? Math.floor((spec.slidesToShow - 1) / 2) +
                1 +
                (parseInt(spec.centerPadding) > 0 ? 1 : 0)
            : spec.slidesToShow;
        }; // get width of an element

        var getWidth = function getWidth(elem) {
          return (elem && elem.offsetWidth) || 0;
        };
        var getHeight = function getHeight(elem) {
          return (elem && elem.offsetHeight) || 0;
        };
        var getSwipeDirection = function getSwipeDirection(touchObject) {
          var verticalSwiping =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false;
          var xDist, yDist, r, swipeAngle;
          xDist = touchObject.startX - touchObject.curX;
          yDist = touchObject.startY - touchObject.curY;
          r = Math.atan2(yDist, xDist);
          swipeAngle = Math.round((r * 180) / Math.PI);

          if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
          }

          if (
            (swipeAngle <= 45 && swipeAngle >= 0) ||
            (swipeAngle <= 360 && swipeAngle >= 315)
          ) {
            return "left";
          }

          if (swipeAngle >= 135 && swipeAngle <= 225) {
            return "right";
          }

          if (verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
              return "up";
            } else {
              return "down";
            }
          }

          return "vertical";
        }; // whether or not we can go next

        var canGoNext = function canGoNext(spec) {
          var canGo = true;

          if (!spec.infinite) {
            if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
              canGo = false;
            } else if (
              spec.slideCount <= spec.slidesToShow ||
              spec.currentSlide >= spec.slideCount - spec.slidesToShow
            ) {
              canGo = false;
            }
          }

          return canGo;
        }; // given an object and a list of keys, return new object with given keys

        var extractObject = function extractObject(spec, keys) {
          var newObject = {};
          keys.forEach(function(key) {
            return (newObject[key] = spec[key]);
          });
          return newObject;
        }; // get initialized state

        var initializedState = function initializedState(spec) {
          // spec also contains listRef, trackRef
          var slideCount = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(
            spec.children
          );
          var listWidth = Math.ceil(
            getWidth(
              react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(
                spec.listRef
              )
            )
          );
          var trackWidth = Math.ceil(
            getWidth(
              react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(
                spec.trackRef
              )
            )
          );
          var slideWidth;

          if (!spec.vertical) {
            var centerPaddingAdj =
              spec.centerMode && parseInt(spec.centerPadding) * 2;

            if (
              typeof spec.centerPadding === "string" &&
              spec.centerPadding.slice(-1) === "%"
            ) {
              centerPaddingAdj *= listWidth / 100;
            }

            slideWidth = Math.ceil(
              (listWidth - centerPaddingAdj) / spec.slidesToShow
            );
          } else {
            slideWidth = listWidth;
          }

          var slideHeight =
            react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(
              spec.listRef
            ) &&
            getHeight(
              react_dom__WEBPACK_IMPORTED_MODULE_1___default.a
                .findDOMNode(spec.listRef)
                .querySelector('[data-index="0"]')
            );
          var listHeight = slideHeight * spec.slidesToShow;
          var currentSlide =
            spec.currentSlide === undefined
              ? spec.initialSlide
              : spec.currentSlide;

          if (spec.rtl && spec.currentSlide === undefined) {
            currentSlide = slideCount - 1 - spec.initialSlide;
          }

          var lazyLoadedList = spec.lazyLoadedList || [];
          var slidesToLoad = getOnDemandLazySlides(
            {
              currentSlide: currentSlide,
              lazyLoadedList: lazyLoadedList
            },
            spec
          );
          lazyLoadedList.concat(slidesToLoad);
          var state = {
            slideCount: slideCount,
            slideWidth: slideWidth,
            listWidth: listWidth,
            trackWidth: trackWidth,
            currentSlide: currentSlide,
            slideHeight: slideHeight,
            listHeight: listHeight,
            lazyLoadedList: lazyLoadedList
          };

          if (spec.autoplaying === null && spec.autoplay) {
            state["autoplaying"] = "playing";
          }

          return state;
        };
        var slideHandler = function slideHandler(spec) {
          var waitForAnimate = spec.waitForAnimate,
            animating = spec.animating,
            fade = spec.fade,
            infinite = spec.infinite,
            index = spec.index,
            slideCount = spec.slideCount,
            lazyLoadedList = spec.lazyLoadedList,
            lazyLoad = spec.lazyLoad,
            currentSlide = spec.currentSlide,
            centerMode = spec.centerMode,
            slidesToScroll = spec.slidesToScroll,
            slidesToShow = spec.slidesToShow,
            useCSS = spec.useCSS;
          if (waitForAnimate && animating) return {};
          var animationSlide = index,
            finalSlide,
            animationLeft,
            finalLeft;
          var state = {},
            nextState = {};

          if (fade) {
            if (!infinite && (index < 0 || index >= slideCount)) return {};

            if (index < 0) {
              animationSlide = index + slideCount;
            } else if (index >= slideCount) {
              animationSlide = index - slideCount;
            }

            if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
              lazyLoadedList.push(animationSlide);
            }

            state = {
              animating: true,
              currentSlide: animationSlide,
              lazyLoadedList: lazyLoadedList
            };
            nextState = {
              animating: false
            };
          } else {
            finalSlide = animationSlide;

            if (animationSlide < 0) {
              finalSlide = animationSlide + slideCount;
              if (!infinite) finalSlide = 0;
              else if (slideCount % slidesToScroll !== 0)
                finalSlide = slideCount - (slideCount % slidesToScroll);
            } else if (!canGoNext(spec) && animationSlide > currentSlide) {
              animationSlide = finalSlide = currentSlide;
            } else if (centerMode && animationSlide >= slideCount) {
              animationSlide = infinite ? slideCount : slideCount - 1;
              finalSlide = infinite ? 0 : slideCount - 1;
            } else if (animationSlide >= slideCount) {
              finalSlide = animationSlide - slideCount;
              if (!infinite) finalSlide = slideCount - slidesToShow;
              else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
            }

            animationLeft = getTrackLeft(
              _objectSpread({}, spec, {
                slideIndex: animationSlide
              })
            );
            finalLeft = getTrackLeft(
              _objectSpread({}, spec, {
                slideIndex: finalSlide
              })
            );

            if (!infinite) {
              if (animationLeft === finalLeft) animationSlide = finalSlide;
              animationLeft = finalLeft;
            }

            lazyLoad &&
              lazyLoadedList.concat(
                getOnDemandLazySlides(
                  _objectSpread({}, spec, {
                    currentSlide: animationSlide
                  })
                )
              );

            if (!useCSS) {
              state = {
                currentSlide: finalSlide,
                trackStyle: getTrackCSS(
                  _objectSpread({}, spec, {
                    left: finalLeft
                  })
                ),
                lazyLoadedList: lazyLoadedList
              };
            } else {
              state = {
                animating: true,
                currentSlide: finalSlide,
                trackStyle: getTrackAnimateCSS(
                  _objectSpread({}, spec, {
                    left: animationLeft
                  })
                ),
                lazyLoadedList: lazyLoadedList
              };
              nextState = {
                animating: false,
                currentSlide: finalSlide,
                trackStyle: getTrackCSS(
                  _objectSpread({}, spec, {
                    left: finalLeft
                  })
                ),
                swipeLeft: null
              };
            }
          }

          return {
            state: state,
            nextState: nextState
          };
        };
        var changeSlide = function changeSlide(spec, options) {
          var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
          var slidesToScroll = spec.slidesToScroll,
            slidesToShow = spec.slidesToShow,
            slideCount = spec.slideCount,
            currentSlide = spec.currentSlide,
            lazyLoad = spec.lazyLoad,
            infinite = spec.infinite;
          unevenOffset = slideCount % slidesToScroll !== 0;
          indexOffset = unevenOffset
            ? 0
            : (slideCount - currentSlide) % slidesToScroll;

          if (options.message === "previous") {
            slideOffset =
              indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
            targetSlide = currentSlide - slideOffset;

            if (lazyLoad && !infinite) {
              previousInt = currentSlide - slideOffset;
              targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
            }
          } else if (options.message === "next") {
            slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
            targetSlide = currentSlide + slideOffset;

            if (lazyLoad && !infinite) {
              targetSlide =
                ((currentSlide + slidesToScroll) % slideCount) + indexOffset;
            }
          } else if (options.message === "dots") {
            // Click on dots
            targetSlide = options.index * options.slidesToScroll;

            if (targetSlide === options.currentSlide) {
              return null;
            }
          } else if (options.message === "children") {
            // Click on the slides
            targetSlide = options.index;

            if (targetSlide === options.currentSlide) {
              return null;
            }

            if (infinite) {
              var direction = siblingDirection(
                _objectSpread({}, spec, {
                  targetSlide: targetSlide
                })
              );

              if (targetSlide > options.currentSlide && direction === "left") {
                targetSlide = targetSlide - slideCount;
              } else if (
                targetSlide < options.currentSlide &&
                direction === "right"
              ) {
                targetSlide = targetSlide + slideCount;
              }
            }
          } else if (options.message === "index") {
            targetSlide = Number(options.index);

            if (targetSlide === options.currentSlide) {
              return null;
            }
          }

          return targetSlide;
        };
        var keyHandler = function keyHandler(e, accessibility, rtl) {
          if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility)
            return "";
          if (e.keyCode === 37) return rtl ? "next" : "previous";
          if (e.keyCode === 39) return rtl ? "previous" : "next";
          return "";
        };
        var swipeStart = function swipeStart(e, swipe, draggable) {
          e.target.tagName === "IMG" && e.preventDefault();
          if (!swipe || (!draggable && e.type.indexOf("mouse") !== -1))
            return "";
          return {
            dragging: true,
            touchObject: {
              startX: e.touches ? e.touches[0].pageX : e.clientX,
              startY: e.touches ? e.touches[0].pageY : e.clientY,
              curX: e.touches ? e.touches[0].pageX : e.clientX,
              curY: e.touches ? e.touches[0].pageY : e.clientY
            }
          };
        };
        var swipeMove = function swipeMove(e, spec) {
          // spec also contains, trackRef and slideIndex
          var scrolling = spec.scrolling,
            animating = spec.animating,
            vertical = spec.vertical,
            swipeToSlide = spec.swipeToSlide,
            verticalSwiping = spec.verticalSwiping,
            rtl = spec.rtl,
            currentSlide = spec.currentSlide,
            edgeFriction = spec.edgeFriction,
            edgeDragged = spec.edgeDragged,
            onEdge = spec.onEdge,
            swiped = spec.swiped,
            swiping = spec.swiping,
            slideCount = spec.slideCount,
            slidesToScroll = spec.slidesToScroll,
            infinite = spec.infinite,
            touchObject = spec.touchObject,
            swipeEvent = spec.swipeEvent,
            listHeight = spec.listHeight,
            listWidth = spec.listWidth;
          if (scrolling) return;
          if (animating) return e.preventDefault();
          if (vertical && swipeToSlide && verticalSwiping) e.preventDefault();
          var swipeLeft,
            state = {};
          var curLeft = getTrackLeft(spec);
          touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
          touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
          touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2))
          );
          var verticalSwipeLength = Math.round(
            Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2))
          );

          if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
            return {
              scrolling: true
            };
          }

          if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
          var positionOffset =
            (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
          if (verticalSwiping)
            positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
          var dotCount = Math.ceil(slideCount / slidesToScroll);
          var swipeDirection = getSwipeDirection(
            spec.touchObject,
            verticalSwiping
          );
          var touchSwipeLength = touchObject.swipeLength;

          if (!infinite) {
            if (
              (currentSlide === 0 && swipeDirection === "right") ||
              (currentSlide + 1 >= dotCount && swipeDirection === "left") ||
              (!canGoNext(spec) && swipeDirection === "left")
            ) {
              touchSwipeLength = touchObject.swipeLength * edgeFriction;

              if (edgeDragged === false && onEdge) {
                onEdge(swipeDirection);
                state["edgeDragged"] = true;
              }
            }
          }

          if (!swiped && swipeEvent) {
            swipeEvent(swipeDirection);
            state["swiped"] = true;
          }

          if (!vertical) {
            if (!rtl) {
              swipeLeft = curLeft + touchSwipeLength * positionOffset;
            } else {
              swipeLeft = curLeft - touchSwipeLength * positionOffset;
            }
          } else {
            swipeLeft =
              curLeft +
              touchSwipeLength * (listHeight / listWidth) * positionOffset;
          }

          if (verticalSwiping) {
            swipeLeft = curLeft + touchSwipeLength * positionOffset;
          }

          state = _objectSpread({}, state, {
            touchObject: touchObject,
            swipeLeft: swipeLeft,
            trackStyle: getTrackCSS(
              _objectSpread({}, spec, {
                left: swipeLeft
              })
            )
          });

          if (
            Math.abs(touchObject.curX - touchObject.startX) <
            Math.abs(touchObject.curY - touchObject.startY) * 0.8
          ) {
            return state;
          }

          if (touchObject.swipeLength > 10) {
            state["swiping"] = true;
            e.preventDefault();
          }

          return state;
        };
        var swipeEnd = function swipeEnd(e, spec) {
          var dragging = spec.dragging,
            swipe = spec.swipe,
            touchObject = spec.touchObject,
            listWidth = spec.listWidth,
            touchThreshold = spec.touchThreshold,
            verticalSwiping = spec.verticalSwiping,
            listHeight = spec.listHeight,
            currentSlide = spec.currentSlide,
            swipeToSlide = spec.swipeToSlide,
            scrolling = spec.scrolling,
            onSwipe = spec.onSwipe;

          if (!dragging) {
            if (swipe) e.preventDefault();
            return {};
          }

          var minSwipe = verticalSwiping
            ? listHeight / touchThreshold
            : listWidth / touchThreshold;
          var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

          var state = {
            dragging: false,
            edgeDragged: false,
            scrolling: false,
            swiping: false,
            swiped: false,
            swipeLeft: null,
            touchObject: {}
          };

          if (scrolling) {
            return state;
          }

          if (!touchObject.swipeLength) {
            return state;
          }

          if (touchObject.swipeLength > minSwipe) {
            e.preventDefault();

            if (onSwipe) {
              onSwipe(swipeDirection);
            }

            var slideCount, newSlide;

            switch (swipeDirection) {
              case "left":
              case "up":
                newSlide = currentSlide + getSlideCount(spec);
                slideCount = swipeToSlide
                  ? checkNavigable(spec, newSlide)
                  : newSlide;
                state["currentDirection"] = 0;
                break;

              case "right":
              case "down":
                newSlide = currentSlide - getSlideCount(spec);
                slideCount = swipeToSlide
                  ? checkNavigable(spec, newSlide)
                  : newSlide;
                state["currentDirection"] = 1;
                break;

              default:
                slideCount = currentSlide;
            }

            state["triggerSlideHandler"] = slideCount;
          } else {
            // Adjust the track back to it's original position.
            var currentLeft = getTrackLeft(spec);
            state["trackStyle"] = getTrackAnimateCSS(
              _objectSpread({}, spec, {
                left: currentLeft
              })
            );
          }

          return state;
        };
        var getNavigableIndexes = function getNavigableIndexes(spec) {
          var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
          var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
          var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
          var indexes = [];

          while (breakpoint < max) {
            indexes.push(breakpoint);
            breakpoint = counter + spec.slidesToScroll;
            counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
          }

          return indexes;
        };
        var checkNavigable = function checkNavigable(spec, index) {
          var navigables = getNavigableIndexes(spec);
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
        };
        var getSlideCount = function getSlideCount(spec) {
          var centerOffset = spec.centerMode
            ? spec.slideWidth * Math.floor(spec.slidesToShow / 2)
            : 0;

          if (spec.swipeToSlide) {
            var swipedSlide;
            var slickList = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(
              spec.listRef
            );
            var slides = slickList.querySelectorAll(".slick-slide");
            Array.from(slides).every(function(slide) {
              if (!spec.vertical) {
                if (
                  slide.offsetLeft - centerOffset + getWidth(slide) / 2 >
                  spec.swipeLeft * -1
                ) {
                  swipedSlide = slide;
                  return false;
                }
              } else {
                if (
                  slide.offsetTop + getHeight(slide) / 2 >
                  spec.swipeLeft * -1
                ) {
                  swipedSlide = slide;
                  return false;
                }
              }

              return true;
            });

            if (!swipedSlide) {
              return 0;
            }

            var currentIndex =
              spec.rtl === true
                ? spec.slideCount - spec.currentSlide
                : spec.currentSlide;
            var slidesTraversed =
              Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
            return slidesTraversed;
          } else {
            return spec.slidesToScroll;
          }
        };
        var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
          return keysArray.reduce(function(value, key) {
            return value && spec.hasOwnProperty(key);
          }, true)
            ? null
            : console.error("Keys Missing:", spec);
        };
        var getTrackCSS = function getTrackCSS(spec) {
          checkSpecKeys(spec, [
            "left",
            "variableWidth",
            "slideCount",
            "slidesToShow",
            "slideWidth"
          ]);
          var trackWidth, trackHeight;
          var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

          if (!spec.vertical) {
            trackWidth = getTotalSlides(spec) * spec.slideWidth;
          } else {
            trackHeight = trackChildren * spec.slideHeight;
          }

          var style = {
            opacity: 1,
            transition: "",
            WebkitTransition: ""
          };

          if (spec.useTransform) {
            var WebkitTransform = !spec.vertical
              ? "translate3d(" + spec.left + "px, 0px, 0px)"
              : "translate3d(0px, " + spec.left + "px, 0px)";
            var transform = !spec.vertical
              ? "translate3d(" + spec.left + "px, 0px, 0px)"
              : "translate3d(0px, " + spec.left + "px, 0px)";
            var msTransform = !spec.vertical
              ? "translateX(" + spec.left + "px)"
              : "translateY(" + spec.left + "px)";
            style = _objectSpread({}, style, {
              WebkitTransform: WebkitTransform,
              transform: transform,
              msTransform: msTransform
            });
          } else {
            if (spec.vertical) {
              style["top"] = spec.left;
            } else {
              style["left"] = spec.left;
            }
          }

          if (spec.fade)
            style = {
              opacity: 1
            };
          if (trackWidth) style.width = trackWidth;
          if (trackHeight) style.height = trackHeight; // Fallback for IE8

          if (window && !window.addEventListener && window.attachEvent) {
            if (!spec.vertical) {
              style.marginLeft = spec.left + "px";
            } else {
              style.marginTop = spec.left + "px";
            }
          }

          return style;
        };
        var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
          checkSpecKeys(spec, [
            "left",
            "variableWidth",
            "slideCount",
            "slidesToShow",
            "slideWidth",
            "speed",
            "cssEase"
          ]);
          var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

          if (spec.useTransform) {
            style.WebkitTransition =
              "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
            style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
          } else {
            if (spec.vertical) {
              style.transition = "top " + spec.speed + "ms " + spec.cssEase;
            } else {
              style.transition = "left " + spec.speed + "ms " + spec.cssEase;
            }
          }

          return style;
        };
        var getTrackLeft = function getTrackLeft(spec) {
          if (spec.unslick) {
            return 0;
          }

          checkSpecKeys(spec, [
            "slideIndex",
            "trackRef",
            "infinite",
            "centerMode",
            "slideCount",
            "slidesToShow",
            "slidesToScroll",
            "slideWidth",
            "listWidth",
            "variableWidth",
            "slideHeight"
          ]);
          var slideIndex = spec.slideIndex,
            trackRef = spec.trackRef,
            infinite = spec.infinite,
            centerMode = spec.centerMode,
            slideCount = spec.slideCount,
            slidesToShow = spec.slidesToShow,
            slidesToScroll = spec.slidesToScroll,
            slideWidth = spec.slideWidth,
            listWidth = spec.listWidth,
            variableWidth = spec.variableWidth,
            slideHeight = spec.slideHeight,
            fade = spec.fade,
            vertical = spec.vertical;
          var slideOffset = 0;
          var targetLeft;
          var targetSlide;
          var verticalOffset = 0;

          if (fade || spec.slideCount === 1) {
            return 0;
          }

          var slidesToOffset = 0;

          if (infinite) {
            slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
            // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

            if (
              slideCount % slidesToScroll !== 0 &&
              slideIndex + slidesToScroll > slideCount
            ) {
              slidesToOffset = -(slideIndex > slideCount
                ? slidesToShow - (slideIndex - slideCount)
                : slideCount % slidesToScroll);
            } // shift current slide to center of the frame

            if (centerMode) {
              slidesToOffset += parseInt(slidesToShow / 2);
            }
          } else {
            if (
              slideCount % slidesToScroll !== 0 &&
              slideIndex + slidesToScroll > slideCount
            ) {
              slidesToOffset = slidesToShow - (slideCount % slidesToScroll);
            }

            if (centerMode) {
              slidesToOffset = parseInt(slidesToShow / 2);
            }
          }

          slideOffset = slidesToOffset * slideWidth;
          verticalOffset = slidesToOffset * slideHeight;

          if (!vertical) {
            targetLeft = slideIndex * slideWidth * -1 + slideOffset;
          } else {
            targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
          }

          if (variableWidth === true) {
            var targetSlideIndex;
            var trackElem = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(
              trackRef
            );
            targetSlideIndex = slideIndex + getPreClones(spec);
            targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
            targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;

            if (centerMode === true) {
              targetSlideIndex = infinite
                ? slideIndex + getPreClones(spec)
                : slideIndex;
              targetSlide = trackElem && trackElem.children[targetSlideIndex];
              targetLeft = 0;

              for (var slide = 0; slide < targetSlideIndex; slide++) {
                targetLeft -=
                  trackElem &&
                  trackElem.children[slide] &&
                  trackElem.children[slide].offsetWidth;
              }

              targetLeft -= parseInt(spec.centerPadding);
              targetLeft +=
                targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
            }
          }

          return targetLeft;
        };
        var getPreClones = function getPreClones(spec) {
          if (spec.unslick || !spec.infinite) {
            return 0;
          }

          if (spec.variableWidth) {
            return spec.slideCount;
          }

          return spec.slidesToShow + (spec.centerMode ? 1 : 0);
        };
        var getPostClones = function getPostClones(spec) {
          if (spec.unslick || !spec.infinite) {
            return 0;
          }

          return spec.slideCount;
        };
        var getTotalSlides = function getTotalSlides(spec) {
          return spec.slideCount === 1
            ? 1
            : getPreClones(spec) + spec.slideCount + getPostClones(spec);
        };
        var siblingDirection = function siblingDirection(spec) {
          if (spec.targetSlide > spec.currentSlide) {
            if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
              return "left";
            }

            return "right";
          } else {
            if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
              return "right";
            }

            return "left";
          }
        };
        var slidesOnRight = function slidesOnRight(_ref) {
          var slidesToShow = _ref.slidesToShow,
            centerMode = _ref.centerMode,
            rtl = _ref.rtl,
            centerPadding = _ref.centerPadding;

          // returns no of slides on the right of active slide
          if (centerMode) {
            var right = (slidesToShow - 1) / 2 + 1;
            if (parseInt(centerPadding) > 0) right += 1;
            if (rtl && slidesToShow % 2 === 0) right += 1;
            return right;
          }

          if (rtl) {
            return 0;
          }

          return slidesToShow - 1;
        };
        var slidesOnLeft = function slidesOnLeft(_ref2) {
          var slidesToShow = _ref2.slidesToShow,
            centerMode = _ref2.centerMode,
            rtl = _ref2.rtl,
            centerPadding = _ref2.centerPadding;

          // returns no of slides on the left of active slide
          if (centerMode) {
            var left = (slidesToShow - 1) / 2 + 1;
            if (parseInt(centerPadding) > 0) left += 1;
            if (!rtl && slidesToShow % 2 === 0) left += 1;
            return left;
          }

          if (rtl) {
            return slidesToShow - 1;
          }

          return 0;
        };
        var canUseDOM = function canUseDOM() {
          return !!(
            typeof window !== "undefined" &&
            window.document &&
            window.document.createElement
          );
        };

        /***/
      },
      /* 10 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Track",
          function() {
            return Track;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          8
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          9
        );

        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
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
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
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
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }
          );
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
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
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

          if (
            spec.variableWidth === undefined ||
            spec.variableWidth === false
          ) {
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
          var childrenCount = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(
            spec.children
          );
          var startIndex = Object(
            _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_2__[
              "lazyStartIndex"
            ]
          )(spec);
          var endIndex = Object(
            _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_2__["lazyEndIndex"]
          )(spec);
          react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(
            spec.children,
            function(elem, index) {
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
                child = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  null
                );
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(
                  child,
                  {
                    key: "original" + getKey(child, index),
                    "data-index": index,
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                      slideClasses,
                      slideClass
                    ),
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
                      child.props &&
                        child.props.onClick &&
                        child.props.onClick(e);

                      if (spec.focusOnSelect) {
                        spec.focusOnSelect(childOnClickOptions);
                      }
                    }
                  }
                )
              ); // if slide needs to be precloned or postcloned

              if (spec.infinite && spec.fade === false) {
                var preCloneNo = childrenCount - index;

                if (
                  preCloneNo <=
                    Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_2__[
                        "getPreClones"
                      ]
                    )(spec) &&
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(
                      child,
                      {
                        key: "precloned" + getKey(child, key),
                        "data-index": key,
                        tabIndex: "-1",
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                          slideClasses,
                          slideClass
                        ),
                        "aria-hidden": !slideClasses["slick-active"],
                        style: _objectSpread(
                          {},
                          child.props.style || {},
                          {},
                          childStyle
                        ),
                        onClick: function onClick(e) {
                          child.props &&
                            child.props.onClick &&
                            child.props.onClick(e);

                          if (spec.focusOnSelect) {
                            spec.focusOnSelect(childOnClickOptions);
                          }
                        }
                      }
                    )
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(
                      child,
                      {
                        key: "postcloned" + getKey(child, key),
                        "data-index": key,
                        tabIndex: "-1",
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                          slideClasses,
                          slideClass
                        ),
                        "aria-hidden": !slideClasses["slick-active"],
                        style: _objectSpread(
                          {},
                          child.props.style || {},
                          {},
                          childStyle
                        ),
                        onClick: function onClick(e) {
                          child.props &&
                            child.props.onClick &&
                            child.props.onClick(e);

                          if (spec.focusOnSelect) {
                            spec.focusOnSelect(childOnClickOptions);
                          }
                        }
                      }
                    )
                  );
                }
              }
            }
          );

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
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

        /***/
      },
      /* 11 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Dots",
          function() {
            return Dots;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          8
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_1__
        );

        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
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
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
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
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
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
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }
          );
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

        var getDotCount = function getDotCount(spec) {
          var dots;

          if (spec.infinite) {
            dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
          } else {
            dots =
              Math.ceil(
                (spec.slideCount - spec.slidesToShow) / spec.slidesToScroll
              ) + 1;
          }

          return dots;
        };

        var Dots =
          /*#__PURE__*/
          (function(_React$PureComponent) {
            _inherits(Dots, _React$PureComponent);

            function Dots() {
              _classCallCheck(this, Dots);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(Dots).apply(this, arguments)
              );
            }

            _createClass(Dots, [
              {
                key: "clickHandler",
                value: function clickHandler(options, e) {
                  // In Autoplay the focus stays on clicked button even after transition
                  // to next slide. That only goes away by click somewhere outside
                  e.preventDefault();
                  this.props.clickHandler(options);
                }
              },
              {
                key: "render",
                value: function render() {
                  var _this = this;

                  var dotCount = getDotCount({
                    slideCount: this.props.slideCount,
                    slidesToScroll: this.props.slidesToScroll,
                    slidesToShow: this.props.slidesToShow,
                    infinite: this.props.infinite
                  }); // Apply join & split to Array to pre-fill it for IE8
                  //
                  // Credit: http://stackoverflow.com/a/13735425/1849458

                  var _this$props = this.props,
                    onMouseEnter = _this$props.onMouseEnter,
                    onMouseOver = _this$props.onMouseOver,
                    onMouseLeave = _this$props.onMouseLeave;
                  var mouseEvents = {
                    onMouseEnter: onMouseEnter,
                    onMouseOver: onMouseOver,
                    onMouseLeave: onMouseLeave
                  };
                  var dots = Array.apply(
                    null,
                    Array(dotCount + 1)
                      .join("0")
                      .split("")
                  ).map(function(x, i) {
                    var leftBound = i * _this.props.slidesToScroll;
                    var rightBound =
                      i * _this.props.slidesToScroll +
                      (_this.props.slidesToScroll - 1);
                    var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                      {
                        "slick-active":
                          _this.props.currentSlide >= leftBound &&
                          _this.props.currentSlide <= rightBound
                      }
                    );
                    var dotOptions = {
                      message: "dots",
                      index: i,
                      slidesToScroll: _this.props.slidesToScroll,
                      currentSlide: _this.props.currentSlide
                    };

                    var onClick = _this.clickHandler.bind(_this, dotOptions);

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "li",
                      {
                        key: i,
                        className: className
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(
                        _this.props.customPaging(i),
                        {
                          onClick: onClick
                        }
                      )
                    );
                  });
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(
                    this.props.appendDots(dots),
                    _objectSpread(
                      {
                        className: this.props.dotsClass
                      },
                      mouseEvents
                    )
                  );
                }
              }
            ]);

            return Dots;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

        /***/
      },
      /* 12 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PrevArrow",
          function() {
            return PrevArrow;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "NextArrow",
          function() {
            return NextArrow;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          8
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          9
        );

        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
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
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
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
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
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
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }
          );
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

        var PrevArrow =
          /*#__PURE__*/
          (function(_React$PureComponent) {
            _inherits(PrevArrow, _React$PureComponent);

            function PrevArrow() {
              _classCallCheck(this, PrevArrow);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(PrevArrow).apply(this, arguments)
              );
            }

            _createClass(PrevArrow, [
              {
                key: "clickHandler",
                value: function clickHandler(options, e) {
                  if (e) {
                    e.preventDefault();
                  }

                  this.props.clickHandler(options, e);
                }
              },
              {
                key: "render",
                value: function render() {
                  var prevClasses = {
                    "slick-arrow": true,
                    "slick-prev": true
                  };
                  var prevHandler = this.clickHandler.bind(this, {
                    message: "previous"
                  });

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
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                      prevClasses
                    ),
                    style: {
                      display: "block"
                    },
                    onClick: prevHandler
                  };
                  var customProps = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                  };
                  var prevArrow;

                  if (this.props.prevArrow) {
                    prevArrow = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(
                      this.props.prevArrow,
                      _objectSpread({}, prevArrowProps, {}, customProps)
                    );
                  } else {
                    prevArrow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "button",
                      _extends(
                        {
                          key: "0",
                          type: "button"
                        },
                        prevArrowProps
                      ),
                      " ",
                      "Previous"
                    );
                  }

                  return prevArrow;
                }
              }
            ]);

            return PrevArrow;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
        var NextArrow =
          /*#__PURE__*/
          (function(_React$PureComponent2) {
            _inherits(NextArrow, _React$PureComponent2);

            function NextArrow() {
              _classCallCheck(this, NextArrow);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(NextArrow).apply(this, arguments)
              );
            }

            _createClass(NextArrow, [
              {
                key: "clickHandler",
                value: function clickHandler(options, e) {
                  if (e) {
                    e.preventDefault();
                  }

                  this.props.clickHandler(options, e);
                }
              },
              {
                key: "render",
                value: function render() {
                  var nextClasses = {
                    "slick-arrow": true,
                    "slick-next": true
                  };
                  var nextHandler = this.clickHandler.bind(this, {
                    message: "next"
                  });

                  if (
                    !Object(
                      _utils_innerSliderUtils__WEBPACK_IMPORTED_MODULE_2__[
                        "canGoNext"
                      ]
                    )(this.props)
                  ) {
                    nextClasses["slick-disabled"] = true;
                    nextHandler = null;
                  }

                  var nextArrowProps = {
                    key: "1",
                    "data-role": "none",
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                      nextClasses
                    ),
                    style: {
                      display: "block"
                    },
                    onClick: nextHandler
                  };
                  var customProps = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                  };
                  var nextArrow;

                  if (this.props.nextArrow) {
                    nextArrow = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(
                      this.props.nextArrow,
                      _objectSpread({}, nextArrowProps, {}, customProps)
                    );
                  } else {
                    nextArrow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "button",
                      _extends(
                        {
                          key: "1",
                          type: "button"
                        },
                        nextArrowProps
                      ),
                      " ",
                      "Next"
                    );
                  }

                  return nextArrow;
                }
              }
            ]);

            return NextArrow;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

        /***/
      },
      /* 13 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function(global) {
          /**
           * A collection of shims that provide minimal functionality of the ES6 collections.
           *
           * These implementations are not meant to be used outside of the ResizeObserver
           * modules as they cover only a limited range of use cases.
           */
          /* eslint-disable require-jsdoc, valid-jsdoc */
          var MapShim = (function() {
            if (typeof Map !== "undefined") {
              return Map;
            }
            /**
             * Returns index in provided array that matches the specified key.
             *
             * @param {Array<Array>} arr
             * @param {*} key
             * @returns {number}
             */
            function getIndex(arr, key) {
              var result = -1;
              arr.some(function(entry, index) {
                if (entry[0] === key) {
                  result = index;
                  return true;
                }
                return false;
              });
              return result;
            }
            return /** @class */ (function() {
              function class_1() {
                this.__entries__ = [];
              }
              Object.defineProperty(class_1.prototype, "size", {
                /**
                 * @returns {boolean}
                 */
                get: function() {
                  return this.__entries__.length;
                },
                enumerable: true,
                configurable: true
              });
              /**
               * @param {*} key
               * @returns {*}
               */
              class_1.prototype.get = function(key) {
                var index = getIndex(this.__entries__, key);
                var entry = this.__entries__[index];
                return entry && entry[1];
              };
              /**
               * @param {*} key
               * @param {*} value
               * @returns {void}
               */
              class_1.prototype.set = function(key, value) {
                var index = getIndex(this.__entries__, key);
                if (~index) {
                  this.__entries__[index][1] = value;
                } else {
                  this.__entries__.push([key, value]);
                }
              };
              /**
               * @param {*} key
               * @returns {void}
               */
              class_1.prototype.delete = function(key) {
                var entries = this.__entries__;
                var index = getIndex(entries, key);
                if (~index) {
                  entries.splice(index, 1);
                }
              };
              /**
               * @param {*} key
               * @returns {void}
               */
              class_1.prototype.has = function(key) {
                return !!~getIndex(this.__entries__, key);
              };
              /**
               * @returns {void}
               */
              class_1.prototype.clear = function() {
                this.__entries__.splice(0);
              };
              /**
               * @param {Function} callback
               * @param {*} [ctx=null]
               * @returns {void}
               */
              class_1.prototype.forEach = function(callback, ctx) {
                if (ctx === void 0) {
                  ctx = null;
                }
                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                  var entry = _a[_i];
                  callback.call(ctx, entry[1], entry[0]);
                }
              };
              return class_1;
            })();
          })();

          /**
           * Detects whether window and document objects are available in current environment.
           */
          var isBrowser =
            typeof window !== "undefined" &&
            typeof document !== "undefined" &&
            window.document === document;

          // Returns global object of a current environment.
          var global$1 = (function() {
            if (typeof global !== "undefined" && global.Math === Math) {
              return global;
            }
            if (typeof self !== "undefined" && self.Math === Math) {
              return self;
            }
            if (typeof window !== "undefined" && window.Math === Math) {
              return window;
            }
            // eslint-disable-next-line no-new-func
            return Function("return this")();
          })();

          /**
           * A shim for the requestAnimationFrame which falls back to the setTimeout if
           * first one is not supported.
           *
           * @returns {number} Requests' identifier.
           */
          var requestAnimationFrame$1 = (function() {
            if (typeof requestAnimationFrame === "function") {
              // It's required to use a bounded function because IE sometimes throws
              // an "Invalid calling object" error if rAF is invoked without the global
              // object on the left hand side.
              return requestAnimationFrame.bind(global$1);
            }
            return function(callback) {
              return setTimeout(function() {
                return callback(Date.now());
              }, 1000 / 60);
            };
          })();

          // Defines minimum timeout before adding a trailing call.
          var trailingTimeout = 2;
          /**
           * Creates a wrapper function which ensures that provided callback will be
           * invoked only once during the specified delay period.
           *
           * @param {Function} callback - Function to be invoked after the delay period.
           * @param {number} delay - Delay after which to invoke callback.
           * @returns {Function}
           */
          function throttle(callback, delay) {
            var leadingCall = false,
              trailingCall = false,
              lastCallTime = 0;
            /**
             * Invokes the original callback function and schedules new invocation if
             * the "proxy" was called during current request.
             *
             * @returns {void}
             */
            function resolvePending() {
              if (leadingCall) {
                leadingCall = false;
                callback();
              }
              if (trailingCall) {
                proxy();
              }
            }
            /**
             * Callback invoked after the specified delay. It will further postpone
             * invocation of the original function delegating it to the
             * requestAnimationFrame.
             *
             * @returns {void}
             */
            function timeoutCallback() {
              requestAnimationFrame$1(resolvePending);
            }
            /**
             * Schedules invocation of the original function.
             *
             * @returns {void}
             */
            function proxy() {
              var timeStamp = Date.now();
              if (leadingCall) {
                // Reject immediately following calls.
                if (timeStamp - lastCallTime < trailingTimeout) {
                  return;
                }
                // Schedule new call to be in invoked when the pending one is resolved.
                // This is important for "transitions" which never actually start
                // immediately so there is a chance that we might miss one if change
                // happens amids the pending invocation.
                trailingCall = true;
              } else {
                leadingCall = true;
                trailingCall = false;
                setTimeout(timeoutCallback, delay);
              }
              lastCallTime = timeStamp;
            }
            return proxy;
          }

          // Minimum delay before invoking the update of observers.
          var REFRESH_DELAY = 20;
          // A list of substrings of CSS properties used to find transition events that
          // might affect dimensions of observed elements.
          var transitionKeys = [
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "size",
            "weight"
          ];
          // Check if MutationObserver is available.
          var mutationObserverSupported =
            typeof MutationObserver !== "undefined";
          /**
           * Singleton controller class which handles updates of ResizeObserver instances.
           */
          var ResizeObserverController = /** @class */ (function() {
            /**
             * Creates a new instance of ResizeObserverController.
             *
             * @private
             */
            function ResizeObserverController() {
              /**
               * Indicates whether DOM listeners have been added.
               *
               * @private {boolean}
               */
              this.connected_ = false;
              /**
               * Tells that controller has subscribed for Mutation Events.
               *
               * @private {boolean}
               */
              this.mutationEventsAdded_ = false;
              /**
               * Keeps reference to the instance of MutationObserver.
               *
               * @private {MutationObserver}
               */
              this.mutationsObserver_ = null;
              /**
               * A list of connected observers.
               *
               * @private {Array<ResizeObserverSPI>}
               */
              this.observers_ = [];
              this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
              this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
            }
            /**
             * Adds observer to observers list.
             *
             * @param {ResizeObserverSPI} observer - Observer to be added.
             * @returns {void}
             */
            ResizeObserverController.prototype.addObserver = function(
              observer
            ) {
              if (!~this.observers_.indexOf(observer)) {
                this.observers_.push(observer);
              }
              // Add listeners if they haven't been added yet.
              if (!this.connected_) {
                this.connect_();
              }
            };
            /**
             * Removes observer from observers list.
             *
             * @param {ResizeObserverSPI} observer - Observer to be removed.
             * @returns {void}
             */
            ResizeObserverController.prototype.removeObserver = function(
              observer
            ) {
              var observers = this.observers_;
              var index = observers.indexOf(observer);
              // Remove observer if it's present in registry.
              if (~index) {
                observers.splice(index, 1);
              }
              // Remove listeners if controller has no connected observers.
              if (!observers.length && this.connected_) {
                this.disconnect_();
              }
            };
            /**
             * Invokes the update of observers. It will continue running updates insofar
             * it detects changes.
             *
             * @returns {void}
             */
            ResizeObserverController.prototype.refresh = function() {
              var changesDetected = this.updateObservers_();
              // Continue running updates if changes have been detected as there might
              // be future ones caused by CSS transitions.
              if (changesDetected) {
                this.refresh();
              }
            };
            /**
             * Updates every observer from observers list and notifies them of queued
             * entries.
             *
             * @private
             * @returns {boolean} Returns "true" if any observer has detected changes in
             *      dimensions of it's elements.
             */
            ResizeObserverController.prototype.updateObservers_ = function() {
              // Collect observers that have active observations.
              var activeObservers = this.observers_.filter(function(observer) {
                return observer.gatherActive(), observer.hasActive();
              });
              // Deliver notifications in a separate cycle in order to avoid any
              // collisions between observers, e.g. when multiple instances of
              // ResizeObserver are tracking the same element and the callback of one
              // of them changes content dimensions of the observed target. Sometimes
              // this may result in notifications being blocked for the rest of observers.
              activeObservers.forEach(function(observer) {
                return observer.broadcastActive();
              });
              return activeObservers.length > 0;
            };
            /**
             * Initializes DOM listeners.
             *
             * @private
             * @returns {void}
             */
            ResizeObserverController.prototype.connect_ = function() {
              // Do nothing if running in a non-browser environment or if listeners
              // have been already added.
              if (!isBrowser || this.connected_) {
                return;
              }
              // Subscription to the "Transitionend" event is used as a workaround for
              // delayed transitions. This way it's possible to capture at least the
              // final state of an element.
              document.addEventListener("transitionend", this.onTransitionEnd_);
              window.addEventListener("resize", this.refresh);
              if (mutationObserverSupported) {
                this.mutationsObserver_ = new MutationObserver(this.refresh);
                this.mutationsObserver_.observe(document, {
                  attributes: true,
                  childList: true,
                  characterData: true,
                  subtree: true
                });
              } else {
                document.addEventListener("DOMSubtreeModified", this.refresh);
                this.mutationEventsAdded_ = true;
              }
              this.connected_ = true;
            };
            /**
             * Removes DOM listeners.
             *
             * @private
             * @returns {void}
             */
            ResizeObserverController.prototype.disconnect_ = function() {
              // Do nothing if running in a non-browser environment or if listeners
              // have been already removed.
              if (!isBrowser || !this.connected_) {
                return;
              }
              document.removeEventListener(
                "transitionend",
                this.onTransitionEnd_
              );
              window.removeEventListener("resize", this.refresh);
              if (this.mutationsObserver_) {
                this.mutationsObserver_.disconnect();
              }
              if (this.mutationEventsAdded_) {
                document.removeEventListener(
                  "DOMSubtreeModified",
                  this.refresh
                );
              }
              this.mutationsObserver_ = null;
              this.mutationEventsAdded_ = false;
              this.connected_ = false;
            };
            /**
             * "Transitionend" event handler.
             *
             * @private
             * @param {TransitionEvent} event
             * @returns {void}
             */
            ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
              var _b = _a.propertyName,
                propertyName = _b === void 0 ? "" : _b;
              // Detect whether transition may affect dimensions of an element.
              var isReflowProperty = transitionKeys.some(function(key) {
                return !!~propertyName.indexOf(key);
              });
              if (isReflowProperty) {
                this.refresh();
              }
            };
            /**
             * Returns instance of the ResizeObserverController.
             *
             * @returns {ResizeObserverController}
             */
            ResizeObserverController.getInstance = function() {
              if (!this.instance_) {
                this.instance_ = new ResizeObserverController();
              }
              return this.instance_;
            };
            /**
             * Holds reference to the controller's instance.
             *
             * @private {ResizeObserverController}
             */
            ResizeObserverController.instance_ = null;
            return ResizeObserverController;
          })();

          /**
           * Defines non-writable/enumerable properties of the provided target object.
           *
           * @param {Object} target - Object for which to define properties.
           * @param {Object} props - Properties to be defined.
           * @returns {Object} Target object.
           */
          var defineConfigurable = function(target, props) {
            for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
              var key = _a[_i];
              Object.defineProperty(target, key, {
                value: props[key],
                enumerable: false,
                writable: false,
                configurable: true
              });
            }
            return target;
          };

          /**
           * Returns the global object associated with provided element.
           *
           * @param {Object} target
           * @returns {Object}
           */
          var getWindowOf = function(target) {
            // Assume that the element is an instance of Node, which means that it
            // has the "ownerDocument" property from which we can retrieve a
            // corresponding global object.
            var ownerGlobal =
              target &&
              target.ownerDocument &&
              target.ownerDocument.defaultView;
            // Return the local global object if it's not possible extract one from
            // provided element.
            return ownerGlobal || global$1;
          };

          // Placeholder of an empty content rectangle.
          var emptyRect = createRectInit(0, 0, 0, 0);
          /**
           * Converts provided string to a number.
           *
           * @param {number|string} value
           * @returns {number}
           */
          function toFloat(value) {
            return parseFloat(value) || 0;
          }
          /**
           * Extracts borders size from provided styles.
           *
           * @param {CSSStyleDeclaration} styles
           * @param {...string} positions - Borders positions (top, right, ...)
           * @returns {number}
           */
          function getBordersSize(styles) {
            var positions = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              positions[_i - 1] = arguments[_i];
            }
            return positions.reduce(function(size, position) {
              var value = styles["border-" + position + "-width"];
              return size + toFloat(value);
            }, 0);
          }
          /**
           * Extracts paddings sizes from provided styles.
           *
           * @param {CSSStyleDeclaration} styles
           * @returns {Object} Paddings box.
           */
          function getPaddings(styles) {
            var positions = ["top", "right", "bottom", "left"];
            var paddings = {};
            for (
              var _i = 0, positions_1 = positions;
              _i < positions_1.length;
              _i++
            ) {
              var position = positions_1[_i];
              var value = styles["padding-" + position];
              paddings[position] = toFloat(value);
            }
            return paddings;
          }
          /**
           * Calculates content rectangle of provided SVG element.
           *
           * @param {SVGGraphicsElement} target - Element content rectangle of which needs
           *      to be calculated.
           * @returns {DOMRectInit}
           */
          function getSVGContentRect(target) {
            var bbox = target.getBBox();
            return createRectInit(0, 0, bbox.width, bbox.height);
          }
          /**
           * Calculates content rectangle of provided HTMLElement.
           *
           * @param {HTMLElement} target - Element for which to calculate the content rectangle.
           * @returns {DOMRectInit}
           */
          function getHTMLElementContentRect(target) {
            // Client width & height properties can't be
            // used exclusively as they provide rounded values.
            var clientWidth = target.clientWidth,
              clientHeight = target.clientHeight;
            // By this condition we can catch all non-replaced inline, hidden and
            // detached elements. Though elements with width & height properties less
            // than 0.5 will be discarded as well.
            //
            // Without it we would need to implement separate methods for each of
            // those cases and it's not possible to perform a precise and performance
            // effective test for hidden elements. E.g. even jQuery's ':visible' filter
            // gives wrong results for elements with width & height less than 0.5.
            if (!clientWidth && !clientHeight) {
              return emptyRect;
            }
            var styles = getWindowOf(target).getComputedStyle(target);
            var paddings = getPaddings(styles);
            var horizPad = paddings.left + paddings.right;
            var vertPad = paddings.top + paddings.bottom;
            // Computed styles of width & height are being used because they are the
            // only dimensions available to JS that contain non-rounded values. It could
            // be possible to utilize the getBoundingClientRect if only it's data wasn't
            // affected by CSS transformations let alone paddings, borders and scroll bars.
            var width = toFloat(styles.width),
              height = toFloat(styles.height);
            // Width & height include paddings and borders when the 'border-box' box
            // model is applied (except for IE).
            if (styles.boxSizing === "border-box") {
              // Following conditions are required to handle Internet Explorer which
              // doesn't include paddings and borders to computed CSS dimensions.
              //
              // We can say that if CSS dimensions + paddings are equal to the "client"
              // properties then it's either IE, and thus we don't need to subtract
              // anything, or an element merely doesn't have paddings/borders styles.
              if (Math.round(width + horizPad) !== clientWidth) {
                width -= getBordersSize(styles, "left", "right") + horizPad;
              }
              if (Math.round(height + vertPad) !== clientHeight) {
                height -= getBordersSize(styles, "top", "bottom") + vertPad;
              }
            }
            // Following steps can't be applied to the document's root element as its
            // client[Width/Height] properties represent viewport area of the window.
            // Besides, it's as well not necessary as the <html> itself neither has
            // rendered scroll bars nor it can be clipped.
            if (!isDocumentElement(target)) {
              // In some browsers (only in Firefox, actually) CSS width & height
              // include scroll bars size which can be removed at this step as scroll
              // bars are the only difference between rounded dimensions + paddings
              // and "client" properties, though that is not always true in Chrome.
              var vertScrollbar = Math.round(width + horizPad) - clientWidth;
              var horizScrollbar = Math.round(height + vertPad) - clientHeight;
              // Chrome has a rather weird rounding of "client" properties.
              // E.g. for an element with content width of 314.2px it sometimes gives
              // the client width of 315px and for the width of 314.7px it may give
              // 314px. And it doesn't happen all the time. So just ignore this delta
              // as a non-relevant.
              if (Math.abs(vertScrollbar) !== 1) {
                width -= vertScrollbar;
              }
              if (Math.abs(horizScrollbar) !== 1) {
                height -= horizScrollbar;
              }
            }
            return createRectInit(paddings.left, paddings.top, width, height);
          }
          /**
           * Checks whether provided element is an instance of the SVGGraphicsElement.
           *
           * @param {Element} target - Element to be checked.
           * @returns {boolean}
           */
          var isSVGGraphicsElement = (function() {
            // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
            // interface.
            if (typeof SVGGraphicsElement !== "undefined") {
              return function(target) {
                return target instanceof getWindowOf(target).SVGGraphicsElement;
              };
            }
            // If it's so, then check that element is at least an instance of the
            // SVGElement and that it has the "getBBox" method.
            // eslint-disable-next-line no-extra-parens
            return function(target) {
              return (
                target instanceof getWindowOf(target).SVGElement &&
                typeof target.getBBox === "function"
              );
            };
          })();
          /**
           * Checks whether provided element is a document element (<html>).
           *
           * @param {Element} target - Element to be checked.
           * @returns {boolean}
           */
          function isDocumentElement(target) {
            return target === getWindowOf(target).document.documentElement;
          }
          /**
           * Calculates an appropriate content rectangle for provided html or svg element.
           *
           * @param {Element} target - Element content rectangle of which needs to be calculated.
           * @returns {DOMRectInit}
           */
          function getContentRect(target) {
            if (!isBrowser) {
              return emptyRect;
            }
            if (isSVGGraphicsElement(target)) {
              return getSVGContentRect(target);
            }
            return getHTMLElementContentRect(target);
          }
          /**
           * Creates rectangle with an interface of the DOMRectReadOnly.
           * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
           *
           * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
           * @returns {DOMRectReadOnly}
           */
          function createReadOnlyRect(_a) {
            var x = _a.x,
              y = _a.y,
              width = _a.width,
              height = _a.height;
            // If DOMRectReadOnly is available use it as a prototype for the rectangle.
            var Constr =
              typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
            var rect = Object.create(Constr.prototype);
            // Rectangle's properties are not writable and non-enumerable.
            defineConfigurable(rect, {
              x: x,
              y: y,
              width: width,
              height: height,
              top: y,
              right: x + width,
              bottom: height + y,
              left: x
            });
            return rect;
          }
          /**
           * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
           * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
           *
           * @param {number} x - X coordinate.
           * @param {number} y - Y coordinate.
           * @param {number} width - Rectangle's width.
           * @param {number} height - Rectangle's height.
           * @returns {DOMRectInit}
           */
          function createRectInit(x, y, width, height) {
            return { x: x, y: y, width: width, height: height };
          }

          /**
           * Class that is responsible for computations of the content rectangle of
           * provided DOM element and for keeping track of it's changes.
           */
          var ResizeObservation = /** @class */ (function() {
            /**
             * Creates an instance of ResizeObservation.
             *
             * @param {Element} target - Element to be observed.
             */
            function ResizeObservation(target) {
              /**
               * Broadcasted width of content rectangle.
               *
               * @type {number}
               */
              this.broadcastWidth = 0;
              /**
               * Broadcasted height of content rectangle.
               *
               * @type {number}
               */
              this.broadcastHeight = 0;
              /**
               * Reference to the last observed content rectangle.
               *
               * @private {DOMRectInit}
               */
              this.contentRect_ = createRectInit(0, 0, 0, 0);
              this.target = target;
            }
            /**
             * Updates content rectangle and tells whether it's width or height properties
             * have changed since the last broadcast.
             *
             * @returns {boolean}
             */
            ResizeObservation.prototype.isActive = function() {
              var rect = getContentRect(this.target);
              this.contentRect_ = rect;
              return (
                rect.width !== this.broadcastWidth ||
                rect.height !== this.broadcastHeight
              );
            };
            /**
             * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
             * from the corresponding properties of the last observed content rectangle.
             *
             * @returns {DOMRectInit} Last observed content rectangle.
             */
            ResizeObservation.prototype.broadcastRect = function() {
              var rect = this.contentRect_;
              this.broadcastWidth = rect.width;
              this.broadcastHeight = rect.height;
              return rect;
            };
            return ResizeObservation;
          })();

          var ResizeObserverEntry = /** @class */ (function() {
            /**
             * Creates an instance of ResizeObserverEntry.
             *
             * @param {Element} target - Element that is being observed.
             * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
             */
            function ResizeObserverEntry(target, rectInit) {
              var contentRect = createReadOnlyRect(rectInit);
              // According to the specification following properties are not writable
              // and are also not enumerable in the native implementation.
              //
              // Property accessors are not being used as they'd require to define a
              // private WeakMap storage which may cause memory leaks in browsers that
              // don't support this type of collections.
              defineConfigurable(this, {
                target: target,
                contentRect: contentRect
              });
            }
            return ResizeObserverEntry;
          })();

          var ResizeObserverSPI = /** @class */ (function() {
            /**
             * Creates a new instance of ResizeObserver.
             *
             * @param {ResizeObserverCallback} callback - Callback function that is invoked
             *      when one of the observed elements changes it's content dimensions.
             * @param {ResizeObserverController} controller - Controller instance which
             *      is responsible for the updates of observer.
             * @param {ResizeObserver} callbackCtx - Reference to the public
             *      ResizeObserver instance which will be passed to callback function.
             */
            function ResizeObserverSPI(callback, controller, callbackCtx) {
              /**
               * Collection of resize observations that have detected changes in dimensions
               * of elements.
               *
               * @private {Array<ResizeObservation>}
               */
              this.activeObservations_ = [];
              /**
               * Registry of the ResizeObservation instances.
               *
               * @private {Map<Element, ResizeObservation>}
               */
              this.observations_ = new MapShim();
              if (typeof callback !== "function") {
                throw new TypeError(
                  "The callback provided as parameter 1 is not a function."
                );
              }
              this.callback_ = callback;
              this.controller_ = controller;
              this.callbackCtx_ = callbackCtx;
            }
            /**
             * Starts observing provided element.
             *
             * @param {Element} target - Element to be observed.
             * @returns {void}
             */
            ResizeObserverSPI.prototype.observe = function(target) {
              if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
              }
              // Do nothing if current environment doesn't have the Element interface.
              if (
                typeof Element === "undefined" ||
                !(Element instanceof Object)
              ) {
                return;
              }
              if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
              }
              var observations = this.observations_;
              // Do nothing if element is already being observed.
              if (observations.has(target)) {
                return;
              }
              observations.set(target, new ResizeObservation(target));
              this.controller_.addObserver(this);
              // Force the update of observations.
              this.controller_.refresh();
            };
            /**
             * Stops observing provided element.
             *
             * @param {Element} target - Element to stop observing.
             * @returns {void}
             */
            ResizeObserverSPI.prototype.unobserve = function(target) {
              if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
              }
              // Do nothing if current environment doesn't have the Element interface.
              if (
                typeof Element === "undefined" ||
                !(Element instanceof Object)
              ) {
                return;
              }
              if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
              }
              var observations = this.observations_;
              // Do nothing if element is not being observed.
              if (!observations.has(target)) {
                return;
              }
              observations.delete(target);
              if (!observations.size) {
                this.controller_.removeObserver(this);
              }
            };
            /**
             * Stops observing all elements.
             *
             * @returns {void}
             */
            ResizeObserverSPI.prototype.disconnect = function() {
              this.clearActive();
              this.observations_.clear();
              this.controller_.removeObserver(this);
            };
            /**
             * Collects observation instances the associated element of which has changed
             * it's content rectangle.
             *
             * @returns {void}
             */
            ResizeObserverSPI.prototype.gatherActive = function() {
              var _this = this;
              this.clearActive();
              this.observations_.forEach(function(observation) {
                if (observation.isActive()) {
                  _this.activeObservations_.push(observation);
                }
              });
            };
            /**
             * Invokes initial callback function with a list of ResizeObserverEntry
             * instances collected from active resize observations.
             *
             * @returns {void}
             */
            ResizeObserverSPI.prototype.broadcastActive = function() {
              // Do nothing if observer doesn't have active observations.
              if (!this.hasActive()) {
                return;
              }
              var ctx = this.callbackCtx_;
              // Create ResizeObserverEntry instance for every active observation.
              var entries = this.activeObservations_.map(function(observation) {
                return new ResizeObserverEntry(
                  observation.target,
                  observation.broadcastRect()
                );
              });
              this.callback_.call(ctx, entries, ctx);
              this.clearActive();
            };
            /**
             * Clears the collection of active observations.
             *
             * @returns {void}
             */
            ResizeObserverSPI.prototype.clearActive = function() {
              this.activeObservations_.splice(0);
            };
            /**
             * Tells whether observer has active observations.
             *
             * @returns {boolean}
             */
            ResizeObserverSPI.prototype.hasActive = function() {
              return this.activeObservations_.length > 0;
            };
            return ResizeObserverSPI;
          })();

          // Registry of internal observers. If WeakMap is not available use current shim
          // for the Map collection as it has all required methods and because WeakMap
          // can't be fully polyfilled anyway.
          var observers =
            typeof WeakMap !== "undefined" ? new WeakMap() : new MapShim();
          /**
           * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
           * exposing only those methods and properties that are defined in the spec.
           */
          var ResizeObserver = /** @class */ (function() {
            /**
             * Creates a new instance of ResizeObserver.
             *
             * @param {ResizeObserverCallback} callback - Callback that is invoked when
             *      dimensions of the observed elements change.
             */
            function ResizeObserver(callback) {
              if (!(this instanceof ResizeObserver)) {
                throw new TypeError("Cannot call a class as a function.");
              }
              if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
              }
              var controller = ResizeObserverController.getInstance();
              var observer = new ResizeObserverSPI(callback, controller, this);
              observers.set(this, observer);
            }
            return ResizeObserver;
          })();
          // Expose public methods of ResizeObserver.
          ["observe", "unobserve", "disconnect"].forEach(function(method) {
            ResizeObserver.prototype[method] = function() {
              var _a;
              return (_a = observers.get(this))[method].apply(_a, arguments);
            };
          });

          var index = (function() {
            // Export existing implementation if available.
            if (typeof global$1.ResizeObserver !== "undefined") {
              return global$1.ResizeObserver;
            }
            return ResizeObserver;
          })();

          /* harmony default export */ __webpack_exports__["default"] = index;

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(7)));

        /***/
      },
      /* 14 */
      /***/ function(module, exports, __webpack_require__) {
        var camel2hyphen = __webpack_require__(15);

        var isDimension = function(feature) {
          var re = /[height|width]$/;
          return re.test(feature);
        };

        var obj2mq = function(obj) {
          var mq = "";
          var features = Object.keys(obj);
          features.forEach(function(feature, index) {
            var value = obj[feature];
            feature = camel2hyphen(feature);
            // Add px to dimension features
            if (isDimension(feature) && typeof value === "number") {
              value = value + "px";
            }
            if (value === true) {
              mq += feature;
            } else if (value === false) {
              mq += "not " + feature;
            } else {
              mq += "(" + feature + ": " + value + ")";
            }
            if (index < features.length - 1) {
              mq += " and ";
            }
          });
          return mq;
        };

        var json2mq = function(query) {
          var mq = "";
          if (typeof query === "string") {
            return query;
          }
          // Handling array of media queries
          if (query instanceof Array) {
            query.forEach(function(q, index) {
              mq += obj2mq(q);
              if (index < query.length - 1) {
                mq += ", ";
              }
            });
            return mq;
          }
          // Handling single media query
          return obj2mq(query);
        };

        module.exports = json2mq;

        /***/
      },
      /* 15 */
      /***/ function(module, exports) {
        var camel2hyphen = function(str) {
          return str
            .replace(/[A-Z]/g, function(match) {
              return "-" + match.toLowerCase();
            })
            .toLowerCase();
        };

        module.exports = camel2hyphen;

        /***/
      },
      /* 16 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          2
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );

        var defaultProps = {
          accessibility: true,
          adaptiveHeight: false,
          afterChange: null,
          appendDots: function appendDots(dots) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "ul",
              {
                style: {
                  display: "block"
                }
              },
              dots
            );
          },
          arrows: true,
          autoplay: false,
          autoplaySpeed: 3000,
          beforeChange: null,
          centerMode: false,
          centerPadding: "50px",
          className: "",
          cssEase: "ease",
          customPaging: function customPaging(i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "button",
              null,
              i + 1
            );
          },
          dots: false,
          dotsClass: "slick-dots",
          draggable: true,
          easing: "linear",
          edgeFriction: 0.35,
          fade: false,
          focusOnSelect: false,
          infinite: true,
          initialSlide: 0,
          lazyLoad: null,
          nextArrow: null,
          onEdge: null,
          onInit: null,
          onLazyLoadError: null,
          onReInit: null,
          pauseOnDotsHover: false,
          pauseOnFocus: false,
          pauseOnHover: true,
          prevArrow: null,
          responsive: null,
          rows: 1,
          rtl: false,
          slide: "div",
          slidesPerRow: 1,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 500,
          swipe: true,
          swipeEvent: null,
          swipeToSlide: false,
          touchMove: true,
          touchThreshold: 5,
          useCSS: true,
          useTransform: true,
          variableWidth: false,
          vertical: false,
          waitForAnimate: true
        };
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = defaultProps;

        /***/
      },
      /* 17 */
      /***/ function(module, exports, __webpack_require__) {
        var MediaQueryDispatch = __webpack_require__(18);
        module.exports = new MediaQueryDispatch();

        /***/
      },
      /* 18 */
      /***/ function(module, exports, __webpack_require__) {
        var MediaQuery = __webpack_require__(19);
        var Util = __webpack_require__(21);
        var each = Util.each;
        var isFunction = Util.isFunction;
        var isArray = Util.isArray;

        /**
         * Allows for registration of query handlers.
         * Manages the query handler's state and is responsible for wiring up browser events
         *
         * @constructor
         */
        function MediaQueryDispatch() {
          if (!window.matchMedia) {
            throw new Error(
              "matchMedia not present, legacy browsers require a polyfill"
            );
          }

          this.queries = {};
          this.browserIsIncapable = !window.matchMedia("only all").matches;
        }

        MediaQueryDispatch.prototype = {
          constructor: MediaQueryDispatch,

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
          register: function(q, options, shouldDegrade) {
            var queries = this.queries,
              isUnconditional = shouldDegrade && this.browserIsIncapable;

            if (!queries[q]) {
              queries[q] = new MediaQuery(q, isUnconditional);
            }

            //normalise to object in an array
            if (isFunction(options)) {
              options = { match: options };
            }
            if (!isArray(options)) {
              options = [options];
            }
            each(options, function(handler) {
              if (isFunction(handler)) {
                handler = { match: handler };
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
          unregister: function(q, handler) {
            var query = this.queries[q];

            if (query) {
              if (handler) {
                query.removeHandler(handler);
              } else {
                query.clear();
                delete this.queries[q];
              }
            }

            return this;
          }
        };

        module.exports = MediaQueryDispatch;

        /***/
      },
      /* 19 */
      /***/ function(module, exports, __webpack_require__) {
        var QueryHandler = __webpack_require__(20);
        var each = __webpack_require__(21).each;

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
          constuctor: MediaQuery,

          /**
           * add a handler for this query, triggering if already active
           *
           * @param {object} handler
           * @param {function} handler.match callback for when query is activated
           * @param {function} [handler.unmatch] callback for when query is deactivated
           * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
           * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
           */
          addHandler: function(handler) {
            var qh = new QueryHandler(handler);
            this.handlers.push(qh);

            this.matches() && qh.on();
          },

          /**
           * removes the given handler from the collection, and calls it's destroy methods
           *
           * @param {object || function} handler the handler to remove
           */
          removeHandler: function(handler) {
            var handlers = this.handlers;
            each(handlers, function(h, i) {
              if (h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i, 1); //remove from array and exit each early
              }
            });
          },

          /**
           * Determine whether the media query should be considered a match
           *
           * @return {Boolean} true if media query can be considered a match, false otherwise
           */
          matches: function() {
            return this.mql.matches || this.isUnconditional;
          },

          /**
           * Clears all handlers and unbinds events
           */
          clear: function() {
            each(this.handlers, function(handler) {
              handler.destroy();
            });
            this.mql.removeListener(this.listener);
            this.handlers.length = 0; //clear array
          },

          /*
           * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
           */
          assess: function() {
            var action = this.matches() ? "on" : "off";

            each(this.handlers, function(handler) {
              handler[action]();
            });
          }
        };

        module.exports = MediaQuery;

        /***/
      },
      /* 20 */
      /***/ function(module, exports) {
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
          constructor: QueryHandler,

          /**
           * coordinates setup of the handler
           *
           * @function
           */
          setup: function() {
            if (this.options.setup) {
              this.options.setup();
            }
            this.initialised = true;
          },

          /**
           * coordinates setup and triggering of the handler
           *
           * @function
           */
          on: function() {
            !this.initialised && this.setup();
            this.options.match && this.options.match();
          },

          /**
           * coordinates the unmatch event for the handler
           *
           * @function
           */
          off: function() {
            this.options.unmatch && this.options.unmatch();
          },

          /**
           * called when a handler is to be destroyed.
           * delegates to the destroy or unmatch callbacks, depending on availability.
           *
           * @function
           */
          destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off();
          },

          /**
           * determines equality by reference.
           * if object is supplied compare options, if function, compare match callback
           *
           * @function
           * @param {object || function} [target] the target for comparison
           */
          equals: function(target) {
            return this.options === target || this.options.match === target;
          }
        };

        module.exports = QueryHandler;

        /***/
      },
      /* 21 */
      /***/ function(module, exports) {
        /**
         * Helper function for iterating over a collection
         *
         * @param collection
         * @param fn
         */
        function each(collection, fn) {
          var i = 0,
            length = collection.length,
            cont;

          for (i; i < length; i++) {
            cont = fn(collection[i], i);
            if (cont === false) {
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
          return Object.prototype.toString.apply(target) === "[object Array]";
        }

        /**
         * Helper function for determining whether target object is a function
         *
         * @param target the object under test
         * @return {Boolean} true if function, false otherwise
         */
        function isFunction(target) {
          return typeof target === "function";
        }

        module.exports = {
          isFunction: isFunction,
          isArray: isArray,
          each: each
        };

        /***/
      }
      /******/
    ]
  );
});
//# sourceMappingURL=react-slick.js.map
