var assign = require('object-assign');
var React = require('react');

var helpers = {
  getSlideCount: function () {
    return React.Children.count(this.props.children);
  },
  getLeft: function (index) {
    return -1 * ((index + 1) * this.state.slideWidth);
  },
  getSlideStyle: function () {
    return {
      width: this.state.slideWidth
    };
  },
  getTrackStyle: function (index) {
    var transform;
    if (this.state.animating) {
      transform = 'translate3d(' + this.getLeft(this.state.animSlide) + 'px, 0px, 0px)';
    } else {
      transform = 'translate3d(' + this.getLeft(this.state.currentSlide) + 'px, 0px, 0px)';
    }
    var tractStyle = {
      opacity: 1,
      width: (this.state.slideCount + 2)*this.state.slideWidth,
      transform: transform
    };
    if (this.state.animating) {
      return assign(tractStyle, this.getAnimationStyle());
    } else {
      return tractStyle;
    }
  }
};

module.exports = helpers;