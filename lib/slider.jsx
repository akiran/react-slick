var React = require('react');
var InnerSlider = require('./inner-slider');
var enquire = require('enquire.js')
var _ = require('lodash');
var json2mq = require('json2mq');
var assign = require('object-assign');

var Slider = React.createClass({
  getInitialState: function () {
    return {
      breakpoint: null
    };
  },
  componentDidMount: function () {
    var breakpoints = _.sortBy(_.pluck(this.props.responsive, 'breakpoint'));
    var _props = this.props; 
    breakpoints.forEach(function (breakpoint, index) {
      var query;
      if (index === 0) {
        query = json2mq({minWidth: 0, maxWidth: breakpoint});
      } else {
        query = json2mq({minWidth: breakpoints[index-1], maxWidth: breakpoint});
      }
      enquire.register(query, {
        match: function () {
          this.setState({breakpoint: breakpoint});
        }.bind(this)
      });
    }.bind(this));

    // Register media query for full screen. Need to support resize from small to large
    var query = json2mq({minWidth: breakpoints.slice(-1)[0]})
    enquire.register(query, {
      match: function () {
        this.setState({breakpoint: null});
      }.bind(this)
    });
  },
  render: function () {
    var settings;
    var newProps;
    if (this.state.breakpoint) {
      newProps = _.filter(this.props.responsive, {breakpoint: this.state.breakpoint});
      settings = _.assign({}, this.props, newProps[0].settings);
    } else {
      settings = this.props;
    }
    return (
        <InnerSlider {...settings}/>
    );
  }
});

module.exports = Slider;
