var assign = require('object-assign');
var React = require('react');
var afterTransition = require('after-transition');

var helpers = {
  initialize: function (props) {
    var slideCount = React.Children.count(props.children);
    var slideWidth = this.getDOMNode().getBoundingClientRect().width/props.slidesToShow;
    var listWidth = this.refs.list.getDOMNode().getBoundingClientRect().width;
    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
      listWidth: listWidth
    }, function () {
      // getCSS function needs previously set state
      var trackStyle = this.getCSS(this.getLeft(0));
      this.setState({trackStyle: trackStyle});
    });
  },
  getDotCount: function () {
    var pagerQty;
    pagerQty = Math.ceil(this.state.slideCount /this.props.slidesToScroll);
    return pagerQty - 1;
  },
  getLeft: function (slideIndex) {
    var slideOffset = 0;
    var targetLeft;
    if (this.props.infinite === true)   {
      if (this.state.slideCount > this.props.slidesToShow) {
       slideOffset = (this.state.slideWidth * this.props.slidesToShow) * -1;
      }
      if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        if (slideIndex + this.props.slidesToScroll > this.state.slideCount && this.state.slideCount > this.props.slidesToShow) {
            if(slideIndex > this.state.slideCount) {
              slideOffset = ((this.props.slidesToShow - (slideIndex - this.state.slideCount)) * this.state.slideWidth) * -1;
            } else {
              slideOffset = ((this.state.slideCount % this.props.slidesToScroll) * this.state.slideWidth) * -1;
            }
        }
      }
    } else {

    }
    
    targetLeft = ((slideIndex * this.state.slideWidth) * -1) + slideOffset;
    return targetLeft;
    
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
      width: (this.state.slideCount + 2*this.props.slidesToShow)*this.state.slideWidth,
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

    // To prevent the slider from sticking in animating state, If we click on already active dot 
    if (this.state.currentSlide === index) {
      return;
    }

    targetSlide = index;
    if (targetSlide < 0) {
      if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = this.state.slideCount - (this.state.slideCount % this.props.slidesToScroll);
      } else {
        currentSlide = this.state.slideCount + targetSlide;
      }
    } else if (targetSlide >= this.state.slideCount) {
      if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = 0;
      } else {
        currentSlide = targetSlide - this.state.slideCount;
      }
    } else {
      currentSlide = targetSlide;
    }

    targetLeft = this.getLeft(targetSlide, this.state);
    currentLeft = this.getLeft(currentSlide, this.state);

    if (this.props.infinite === false) {
      targetLeft = currentLeft;
    }

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
        return (this.props.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
        return (this.props.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
        return (this.props.rtl === false ? 'right' : 'left');
    }

    return 'vertical';
  }
};

module.exports = helpers;