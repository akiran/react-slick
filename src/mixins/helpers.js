'use strict';

import React from 'react';
import ReactTransitionEvents from 'react/lib/ReactTransitionEvents';
import {getTrackCSS, getTrackLeft, getTrackAnimateCSS} from './trackHelper';
import assign from 'object-assign';

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

      var targetLeft = getTrackLeft(assign({
        slideIndex: this.state.currentSlide,
        trackRef: this.refs.track
      }, props, this.state));
      // getCSS function needs previously set state
      var trackStyle = getTrackCSS(assign({left: targetLeft}, props, this.state));

      this.setState({trackStyle: trackStyle});

      this.autoPlay(); // once we're set up, trigger the initial autoplay.
    });
  },
  adaptHeight: function () {
    if (this.props.adaptiveHeight) {
      var selector = '[data-index="' + this.state.currentSlide +'"]';
      if (this.refs.list) {
        var slickList = this.refs.list.getDOMNode();
        slickList.style.height = slickList.querySelector(selector).offsetHeight + 'px';
      }
    }
  },
  slideHandler: function (index, sync, dontAnimate) {
    // Functionality of animateSlide and postSlide is merged into this function
    // console.log('slideHandler', index);
    var targetSlide, currentSlide;
    var targetLeft, currentLeft;
    var callback;

    if (this.state.animating === true && this.state.currentSlide === index) {
      return;
    }

    if (this.props.fade) {
      currentSlide = this.state.currentSlide;

      if (this.props.beforeChange) {
        this.props.beforeChange(currentSlide);
      }

      //  Shifting targetSlide back into the range
      if (index < 0) {
        targetSlide = index + this.state.slideCount;
      } else if (index >= this.state.slideCount) {
        targetSlide = index - this.state.slideCount;
      } else {
        targetSlide = index;
      }

      callback = () => {
        this.setState({
          animating: false
        });
        if (this.props.afterChange) {
          this.props.afterChange(currentSlide);
        }
        ReactTransitionEvents.removeEndEventListener(this.refs.track.getDOMNode().children[currentSlide], callback);
      };

      this.setState({
        animating: true,
        currentSlide: targetSlide
      }, function () {
        ReactTransitionEvents.addEndEventListener(this.refs.track.getDOMNode().children[currentSlide], callback);
      });

      this.autoPlay();
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

    targetLeft = getTrackLeft(assign({
      slideIndex: targetSlide,
      trackRef: this.refs.track
    }, this.props, this.state));

    currentLeft = getTrackLeft(assign({
      slideIndex: currentSlide,
      trackRef: this.refs.track
    }, this.props, this.state));

    if (this.props.infinite === false) {
      targetLeft = currentLeft;
    }

    if (this.props.beforeChange) {
      this.props.beforeChange(currentSlide);
    }

    if (this.props.lazyLoad) {
      var loaded = true;
      var slidesToLoad = [];
      for (var i = targetSlide; i < targetSlide + this.props.slidesToShow; i++ ) {
        loaded = loaded && (this.state.lazyLoadedList.indexOf(i) >= 0);
        if (!loaded) {
          slidesToLoad.push(i);
        }
      }
      if (!loaded) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad)
        });
      }
    }

    var nextStateChanges = {
      animating: false,
      trackStyle: getTrackCSS(assign({left: currentLeft}, this.props, this.state)),
      swipeLeft: null
    };

    callback = () => {
      this.setState(nextStateChanges);
      if (this.props.afterChange) {
        this.props.afterChange(currentSlide);
      }
      ReactTransitionEvents.removeEndEventListener(this.refs.track.getDOMNode(), callback);
    };

    this.setState({
      animating: true,
      currentSlide: currentSlide,
      currentLeft: currentLeft,
      trackStyle: getTrackAnimateCSS(assign({left: targetLeft}, this.props, this.state))
    }, function () {
      ReactTransitionEvents.addEndEventListener(this.refs.track.getDOMNode(), callback);
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
    if ((swipeAngle <= 45) && (swipeAngle >= 0) || (swipeAngle <= 360) && (swipeAngle >= 315)) {
        return (this.props.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
        return (this.props.rtl === false ? 'right' : 'left');
    }

    return 'vertical';
  },
  autoPlay: function () {
    var play = () => {
      if (this.state.mounted) {
        this.slideHandler(this.state.currentSlide + this.props.slidesToScroll);
      }
    };
    if (this.props.autoplay) {
      window.clearTimeout(this.state.autoPlayTimer);
      this.setState({
        autoPlayTimer: window.setTimeout(play, this.props.autoplaySpeed)
      });
    }
  }
};

export default helpers;
