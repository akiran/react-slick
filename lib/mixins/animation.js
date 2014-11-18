var afterTransition = require('after-transition');

var AnimationMixin = {
  // componentDidMount: function () {
  //   afterTransition(this.refs.track.getDOMNode(), function() {
  //     this.setState({animating: false});
  //   }.bind(this));
  // },
  getAnimationStyle: function () {
    return {
      transition: 'transform 500ms ease',
      WebkitTransition: 'transform 500ms ease'
    };
  }
};

module.exports = AnimationMixin;