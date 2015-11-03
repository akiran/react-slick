'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var getDotCount = function getDotCount(spec) {
  var dots;
  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  return dots;
};

var Dots = _react2['default'].createClass({
  displayName: 'Dots',

  clickHandler: function clickHandler(options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    this.props.clickHandler(options);
  },
  render: function render() {
    var _this = this;

    var dotCount = getDotCount({
      slideCount: this.props.slideCount,
      slidesToScroll: this.props.slidesToScroll
    });

    // Apply join & split to Array to pre-fill it for IE8
    //
    // Credit: http://stackoverflow.com/a/13735425/1849458
    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {

      var className = (0, _classnames2['default'])({
        'slick-active': _this.props.currentSlide === i * _this.props.slidesToScroll
      });

      var dotOptions = {
        message: 'dots',
        index: i,
        slidesToScroll: _this.props.slidesToScroll,
        currentSlide: _this.props.currentSlide
      };

      return _react2['default'].createElement(
        'li',
        { key: i, className: className },
        _react2['default'].createElement(
          'button',
          { onClick: _this.clickHandler.bind(_this, dotOptions) },
          i
        )
      );
    });

    return _react2['default'].createElement(
      'ul',
      { className: this.props.dotsClass, style: { display: 'block' } },
      dots
    );
  }
});
exports.Dots = Dots;