var assign = require('object-assign');
var React = require('react');
var classnames = require('classnames');
var ReactTransitionEvents = require('react/lib/ReactTransitionEvents');

var helpers = {
  initialize: function (props) {
    var slideCount = React.Children.count(props.children);
    var listWidth = this.refs.list.getDOMNode().getBoundingClientRect().width;
    var trackWidth = this.refs.track.getDOMNode().getBoundingClientRect().width;
    var slideWidth = this.getDOMNode().getBoundingClientRect().width/props.slidesToShow;

    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
      listWidth: listWidth,
      trackWidth: trackWidth,
      currentSlide: props.initialSlide
    
    
    }, function () {
      // getCSS function needs previously set state
      var trackStyle = this.getCSS(this.getLeft(this.state.currentSlide));
      this.setState({trackStyle: trackStyle});

      this.autoPlay(); // once we're set up, trigger the initial autoplay.
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
    var targetSlide;
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
    if (this.props.centerMode === true && this.props.infinite === true) {
        slideOffset += this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) - this.state.slideWidth;
    } else if (this.props.centerMode === true) {
        slideOffset = this.state.slideWidth * Math.floor(this.props.slidesToShow / 2);
    }
    
    targetLeft = ((slideIndex * this.state.slideWidth) * -1) + slideOffset;

    if (this.props.variableWidth === true) {
        var targetSlideIndex;
        if(this.state.slideCount <= this.props.slidesToShow || this.props.infinite === false) {
            targetSlide = this.refs.track.getDOMNode().childNodes[slideIndex];
        } else {
            targetSlideIndex = (slideIndex + this.props.slidesToShow);
            targetSlide = this.refs.track.getDOMNode().childNodes[targetSlideIndex];
        }
        targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
        if (this.props.centerMode === true) {
            if(this.props.infinite === false) {
                targetSlide = this.refs.track.getDOMNode().childNodes[slideIndex];
            } else {
                targetSlide = this.refs.track.getDOMNode().childNodes[(slideIndex + this.props.slidesToShow + 1)];
            }
            
            targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
            targetLeft += (this.state.listWidth - targetSlide.offsetWidth) / 2;
        }
    }
    
    return targetLeft;
    
  },
  getAnimateCSS: function (targetLeft) {
    var style = this.getCSS(targetLeft);
    style.WebkitTransition = 'transform ' + this.props.speed + 'ms ' + this.props.cssEase;
    style.transition = 'transform ' + this.props.speed + 'ms ' + this.props.cssEase;
    return style;
  },
  getCSS: function (targetLeft) {
    // implemented this instead of setCSS
    var trackWidth;
    if (this.props.variableWidth) {
      trackWidth = (this.state.slideCount + 2*this.props.slidesToShow)*this.state.slideWidth;
    } else if (this.props.centerMode) {
      trackWidth = (this.state.slideCount + 2*(this.props.slidesToShow + 1)) *this.state.slideWidth;
    } else {
      trackWidth = (this.state.slideCount + 2*this.props.slidesToShow )*this.state.slideWidth;
    }
    var style = {
      opacity: 1,
      width: trackWidth,
      WebkitTransform: 'translate3d(' + targetLeft + 'px, 0px, 0px)',
      transform: 'translate3d(' + targetLeft + 'px, 0px, 0px)',
    };
    
    return style;
  },
  getSlideStyle: function () {
    return {
      width: this.state.slideWidth
    };
  },
  getSlideClasses: function (index) {
    var slickActive, slickCenter, slickCloned;
    var centerOffset, indexOffset;
    var allSlides;
    var centerIndex;
    var realRange = false;


    slickCloned = (index < 0) || (index >= this.state.slideCount);
    if (this.props.centerMode) {
      if (this.refs.track) {
        allSlides = this.refs.track.getDOMNode().childNodes.length;
      }
      centerOffset = Math.floor(this.props.slidesToShow / 2);
      indexOffset = this.state.currentSlide + this.props.slidesToShow;
      centerIndex = this.state.currentSlide + centerOffset; 
      slickCenter = (centerIndex-1 === index);
      if (this.state.currentSlide >= centerOffset && this.state.currentSlide <= (this.props.slideCount - 1) - centerOffset) {
        realRange = true;
      } 
       if (realRange && (index > this.state.currentSlide - centerOffset) && (index <= this.state.currentSlide + centerOffset + 1 )) {
        slickActive = true;
       } else {

       }
    } else {
      slickActive = (this.state.currentSlide === index);
    }
    return classnames({
      'slick-slide': true,
      'slick-active': slickActive,
      'slick-center': slickCenter,
      'slick-cloned': slickCloned
    });
  },
  getListStyle: function () {
    var style = {};
    if (this.props.adaptiveHeight) {
      var selector = '[data-index="' + this.state.currentSlide +'"]';
      if (this.refs.list) {
        style.height = this.refs.list.getDOMNode().querySelector(selector).offsetHeight;
      }
    }
    return style;
  },
  slideHandler: function (index, sync, dontAnimate) {
    // Functionality of animateSlide and postSlide is merged into this function
    // console.log('slideHandler', index);
    var targetSlide, currentSlide;
    var targetLeft, currentLeft;
    
    if (this.state.animating === true) {
      return;
    }

    // To prevent the slider from sticking in animating state, If we click on already active dot 
    if (this.props.fade === true && this.state.currentSlide === index) {
      return;
    }
    if (this.state.slideCount <= this.props.slidesToShow) {
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

    if(this.props.afterChange!==null){
      this.props.afterChange(currentSlide);
    }

    var callback = function() {  
        this.setState({
          animating: false,
          trackStyle: this.getCSS(currentLeft),
          swipeLeft: null
        });
    }.bind(this)

    this.setState({
      animating: true,
      currentSlide: currentSlide,
      currentLeft: currentLeft,
      trackStyle: this.getAnimateCSS(targetLeft)
    }, function () {
      ReactTransitionEvents.addEndEventListener(this.refs.track.getDOMNode(), callback);
      setTimeout(callback, this.props.speed);
    });

    this.autoPlay();
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
  },
  autoPlay: function () {
    var play = function () {
      if (this.isMounted())
        this.slideHandler(this.state.currentSlide + this.props.slidesToScroll);
    }.bind(this);
    if (this.props.autoplay) {
      window.clearTimeout(this.state.autoPlayTimer);
      this.setState({
        autoPlayTimer: window.setTimeout(play, this.props.autoplaySpeed)
      });
    }
  },
};

module.exports = helpers;