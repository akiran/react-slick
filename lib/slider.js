'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _innerSlider = require('./inner-slider');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _json2mq = require('json2mq');

var _json2mq2 = _interopRequireDefault(_json2mq);

var _reactResponsiveMixin = require('react-responsive-mixin');

var _reactResponsiveMixin2 = _interopRequireDefault(_reactResponsiveMixin);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var Slider = _react2['default'].createClass({
  displayName: 'Slider',

  mixins: [_reactResponsiveMixin2['default']],
  getInitialState: function getInitialState() {
    return {
      breakpoint: null
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

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
          bQuery = (0, _json2mq2['default'])({ minWidth: 0, maxWidth: breakpoint });
        } else {
          bQuery = (0, _json2mq2['default'])({ minWidth: breakpoints[index - 1], maxWidth: breakpoint });
        }
        _this.media(bQuery, function () {
          _this.setState({ breakpoint: breakpoint });
        });
      });

      // Register media query for full screen. Need to support resize from small to large
      var query = (0, _json2mq2['default'])({ minWidth: breakpoints.slice(-1)[0] });

      this.media(query, function () {
        _this.setState({ breakpoint: null });
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var settings;
    var newProps;
    if (this.state.breakpoint) {
      newProps = this.props.responsive.filter(function (resp) {
        return resp.breakpoint === _this2.state.breakpoint;
      });
      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2['default'])({}, this.props, newProps[0].settings);
    } else {
      settings = (0, _objectAssign2['default'])({}, _defaultProps2['default'], this.props);
    }
    if (settings === 'unslick') {
      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
      return _react2['default'].createElement(
        'div',
        null,
        this.props.children
      );
    } else {
      return _react2['default'].createElement(
        _innerSlider.InnerSlider,
        settings,
        this.props.children
      );
    }
  }
});

module.exports = Slider;