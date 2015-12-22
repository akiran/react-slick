'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var PrevArrow = _react2['default'].createClass({
  displayName: 'PrevArrow',

  clickHandler: function clickHandler(options, e) {
    e.preventDefault();
    this.props.clickHandler(options, e);
  },
  render: function render() {
    var prevClasses = { 'slick-prev': true };
    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });

    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
      prevClasses['slick-disabled'] = true;
      prevHandler = null;
    }

    var prevArrowProps = {
      key: '0',
      ref: 'previous',
      'data-role': 'none',
      className: (0, _classnames2['default'])(prevClasses),
      style: { display: 'block' },
      onClick: prevHandler
    };
    var prevArrow;

    if (this.props.prevArrow) {
      prevArrow = _react2['default'].createElement(this.props.prevArrow, prevArrowProps);
    } else {
      prevArrow = _react2['default'].createElement(
        'button',
        _extends({ key: '0', type: 'button' }, prevArrowProps),
        ' Previous'
      );
    }

    return prevArrow;
  }
});

exports.PrevArrow = PrevArrow;
var NextArrow = _react2['default'].createClass({
  displayName: 'NextArrow',

  clickHandler: function clickHandler(options, e) {
    e.preventDefault();
    this.props.clickHandler(options, e);
  },
  render: function render() {
    var nextClasses = { 'slick-next': true };
    var nextHandler = this.clickHandler.bind(this, { message: 'next' });

    if (!this.props.infinite) {
      if (this.props.centerMode && this.props.currentSlide >= this.props.slideCount - 1) {
        nextClasses['slick-disabled'] = true;
        nextHandler = null;
      } else {
        if (this.props.currentSlide >= this.props.slideCount - this.props.slidesToShow) {
          nextClasses['slick-disabled'] = true;
          nextHandler = null;
        }
      }

      if (this.props.slideCount <= this.props.slidesToShow) {
        nextClasses['slick-disabled'] = true;
        nextHandler = null;
      }
    }

    var nextArrowProps = {
      key: '1',
      ref: 'next',
      'data-role': 'none',
      className: (0, _classnames2['default'])(nextClasses),
      style: { display: 'block' },
      onClick: nextHandler
    };

    var nextArrow;

    if (this.props.nextArrow) {
      nextArrow = _react2['default'].createElement(this.props.nextArrow, nextArrowProps);
    } else {
      nextArrow = _react2['default'].createElement(
        'button',
        _extends({ key: '1', type: 'button' }, nextArrowProps),
        ' Next'
      );
    }

    return nextArrow;
  }
});
exports.NextArrow = NextArrow;