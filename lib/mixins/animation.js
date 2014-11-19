var afterTransition = require('after-transition');

var AnimationMixin = {
  getAnimationStyle: function () {
    return {
      transition: 'transform 500ms ease',
      WebkitTransition: 'transform 500ms ease'
    };
  }
};

module.exports = AnimationMixin;