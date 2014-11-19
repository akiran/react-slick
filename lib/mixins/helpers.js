var assign = require('object-assign');
var React = require('react');
var afterTransition = require('after-transition');

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
  },
  slideHandler: function (index) {
    var animSlide, currentSlide;
    var animDirection, currentDirection;
    var offsetSlide;
    if (index > this.state.currentSlide) {
      offsetSlide = index - this.state.currentSlide;
      animDirection = currentDirection = 1;
      animSlide = currentSlide = this.state.currentSlide + offsetSlide;
      if (animSlide >= this.state.slideCount) {
        currentSlide = animSlide - this.state.slideCount;
        currentDirection = 0;
      }
    } else {
      offsetSlide = this.state.currentSlide - index;
      animDirection = currentDirection = 0;
      animSlide = currentSlide = this.state.currentSlide - offsetSlide;
      if (animSlide < 0) {
        currentSlide  = animSlide + this.state.slideCount; 
        currentDirection = 1;
      }
    }
    this.setState({
      animating: true,
      currentSlide: currentSlide,
      currentDirection: currentDirection,
      animSlide: animSlide,
      animDirection: animDirection
    }, function () {
      afterTransition(this.refs.track.getDOMNode(), function() {
        this.setState({animating: false});
      }.bind(this));
    });
  },
};

module.exports = helpers;