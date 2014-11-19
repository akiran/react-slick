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
  getAnimateCSS: function (targetLeft) {
    var style = this.getCSS(targetLeft);
    style.transition = 'transform 500ms ease';
    return style;
  },
  getCSS: function (targetLeft) {
    // implemented this instead of setCSS
    var style = {
      opacity: 1,
      width: (this.state.slideCount + 2)*this.state.slideWidth,
      transform: 'translate3d(' + targetLeft + 'px, 0px, 0px)'
    };
    
    return style;
  },
  getSlideStyle: function () {
    return {
      width: this.state.slideWidth
    };
  },
  slideHandler: function (index) {
    // Functionality of animateSlide and postSlide is merged into this function

    var targetSlide, currentSlide;
    var targetLeft, currentLeft;
    
    if (this.state.animating === true) {
      return;
    }

    targetSlide = index;
    if (targetSlide < 0) {
      currentSlide = targetSlide + this.state.slideCount;
    } else if (targetSlide >= this.state.slideCount) {
      currentSlide = targetSlide - this.state.slideCount;
    } else {
      currentSlide = targetSlide;
    }

    targetLeft = this.getLeft(targetSlide);
    currentLeft = this.getLeft(currentSlide);

    this.setState({
      animating: true,
      currentSlide: currentSlide,
      currentLeft: currentLeft,
      trackStyle: this.getAnimateCSS(targetLeft)
    }, function () {
      afterTransition(this.refs.track.getDOMNode(), function() {
        this.setState({
          animating: false,
          trackStyle: this.getCSS(currentLeft),
          swipeLeft: null
        });
      }.bind(this));
    });
  },
  swipeDirection: function (touchObject) {
    var xDist, yDist, r, swipeAngle;

    xDist = touchObject.startX - touchObject.curX;
    yDist = touchObject.startY - touchObject.curY;
    r = Math.atan2(yDist, xDist);

    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
        return (this.props.settings.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
        return (this.props.settings.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
        return (this.props.settings.rtl === false ? 'right' : 'left');
    }

    return 'vertical';
  }
};

module.exports = helpers;