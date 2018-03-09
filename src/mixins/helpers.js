'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {getTrackCSS, getTrackLeft, getTrackAnimateCSS} from './trackHelper';
import assign from 'object-assign';
import { getOnDemandLazySlides, getWidth, getHeight, canGoNext } from '../utils/innerSliderUtils'

var helpers = {
  update: function (props, recursionLevel=0) {
    const slickList = ReactDOM.findDOMNode(this.list);
    var slideCount = React.Children.count(props.children);
    var listWidth = getWidth(slickList);
    var trackWidth = getWidth(ReactDOM.findDOMNode(this.track));
    var slideWidth;

    if (!props.vertical) {
      var centerPaddingAdj = props.centerMode && (parseInt(props.centerPadding) * 2);
      if (props.centerPadding.slice(-1) === '%') {
        centerPaddingAdj *= listWidth / 100
      }
      slideWidth = Math.ceil((getWidth(slickList) - centerPaddingAdj)/props.slidesToShow)
    } else {
      slideWidth = Math.ceil(getWidth(slickList))
    }

    const slideHeight = getHeight(slickList.querySelector('[data-index="0"]'));
    const listHeight = slideHeight * props.slidesToShow;

    // pause slider if autoplay is set to false
    if(!props.autoplay) {
      this.pause();
    } else {
      this.autoPlay(props.autoplay);
    }
    
    let slidesToLoad = getOnDemandLazySlides({}, this.props, this.state)
    if (slidesToLoad.length > 0 && this.props.onLazyLoad) {
      this.props.onLazyLoad(slidesToLoad)
    }
    let prevLazyLoadedList = this.state.lazyLoadedList
    this.setState({
      slideCount,
      slideWidth,
      listWidth,
      trackWidth,
      slideHeight,
      listHeight,
      lazyLoadedList: prevLazyLoadedList.concat(slidesToLoad)
    }, function () {
      if (!slideWidth) {
        if (recursionLevel < 2) {
          this.update(this.props, recursionLevel + 1)
        }
      }
      var targetLeft = getTrackLeft(assign({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, props, this.state));
      // getCSS function needs previously set state
      var trackStyle = getTrackCSS(assign({left: targetLeft}, props, this.state));

      this.setState({trackStyle: trackStyle});
    });
  },
  adaptHeight: function () {
    if (this.props.adaptiveHeight) {
      var selector = '[data-index="' + this.state.currentSlide +'"]';
      if (this.list) {
        var slickList = ReactDOM.findDOMNode(this.list);
        var elem = slickList.querySelector(selector) || {};
        slickList.style.height = (elem.offsetHeight || 0) + 'px';
      }
    }
  },
  slideHandler: function (index) {
    // index is target slide index
    // Functionality of animateSlide and postSlide is merged into this function
    var animationTargetSlide, finalTargetSlide;
    var animationTargetLeft, finalTargetLeft;
    var callback;

    if (this.props.waitForAnimate && this.state.animating) {
      return;
    }

    if (this.props.fade) {
      finalTargetSlide = this.state.currentSlide;

      // Don't change slide if infinite=false and target slide is out of range
      if(this.props.infinite === false &&
        (index < 0 || index >= this.state.slideCount)) {
        return;
      }

      //  Shifting animationTargetSlide back into the range
      if (index < 0) {
        animationTargetSlide = index + this.state.slideCount;
      } else if (index >= this.state.slideCount) {
        animationTargetSlide = index - this.state.slideCount;
      } else {
        animationTargetSlide = index;
      }

      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(animationTargetSlide) < 0) {
        this.setState((prevState, props) => ({ lazyLoadedList: prevState.lazyLoadedList.concat(animationTargetSlide) }))
        if (this.props.onLazyLoad) {
          this.props.onLazyLoad([animationTargetSlide])
        }
      }

      callback = () => {
        this.setState({
          animating: false
        });
        if (this.props.afterChange) {
          this.props.afterChange(animationTargetSlide);
        }
        delete this.animationEndCallback;
      };

      this.setState({
        animating: true,
        currentSlide: animationTargetSlide
      }, () => {
        if (this.props.asNavFor && this.props.asNavFor.innerSlider.state.currentSlide !== this.state.currentSlide) {
          this.props.asNavFor.innerSlider.slideHandler(index)
        }
        this.animationEndCallback = setTimeout(callback, this.props.speed);
      });

      if (this.props.beforeChange) {
        this.props.beforeChange(this.state.currentSlide, animationTargetSlide);
      }

      this.autoPlay();
      return;
    }

    animationTargetSlide = index;


    /*
      @TODO: Make sure to leave no bug in the code below
      start: critical checkpoint
    */
    if (animationTargetSlide < 0) {
      if(this.props.infinite === false) {
        finalTargetSlide = 0;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        finalTargetSlide = this.state.slideCount - (this.state.slideCount % this.props.slidesToScroll);
      } else {
        finalTargetSlide = this.state.slideCount + animationTargetSlide;
      }
    } else if (this.props.centerMode && animationTargetSlide >= this.state.slideCount) {
      if(this.props.infinite === false) {
        animationTargetSlide = this.state.slideCount - 1
        finalTargetSlide = this.state.slideCount - 1
      } else {
        animationTargetSlide = this.state.slideCount
        finalTargetSlide = 0
      }
    } else if (animationTargetSlide >= this.state.slideCount) {
      if(this.props.infinite === false) {
        finalTargetSlide = this.state.slideCount - this.props.slidesToShow;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        finalTargetSlide = 0;
      } else {
        finalTargetSlide = animationTargetSlide - this.state.slideCount;
      }
    } else if (this.state.currentSlide + this.slidesToShow < this.state.slideCount && animationTargetSlide + this.props.slidesToShow >= this.state.slideCount) {
      if (this.props.infinite === false) {
        finalTargetSlide = this.state.slideCount - this.props.slidesToShow
      } else {
        if ((this.state.slideCount - animationTargetSlide) % this.props.slidesToScroll !== 0) {
          finalTargetSlide = this.state.slideCount - this.props.slidesToShow
        } else {
          finalTargetSlide = animationTargetSlide
        }
      }
    } else {
      finalTargetSlide = animationTargetSlide;
    }

    /* 
      stop: critical checkpoint
    */
   
    animationTargetLeft = getTrackLeft(assign({
      slideIndex: animationTargetSlide,
      trackRef: this.track
    }, this.props, this.state));

    finalTargetLeft = getTrackLeft(assign({
      slideIndex: finalTargetSlide,
      trackRef: this.track
    }, this.props, this.state));

    if (this.props.infinite === false) {
      if (animationTargetLeft === finalTargetLeft) {
        animationTargetSlide = finalTargetSlide;
      }
      animationTargetLeft = finalTargetLeft;
    }

    if (this.props.beforeChange) {
      this.props.beforeChange(this.state.currentSlide, finalTargetSlide);
    }
    if (this.props.lazyLoad) {
      let slidesToLoad = getOnDemandLazySlides(assign({}, this.props, this.state, {currentSlide: animationTargetSlide}))
      if (slidesToLoad.length > 0) {
        this.setState((prevState, props) => ({ lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)}))
        if (this.props.onLazyLoad) {
          this.props.onLazyLoad(slidesToLoad)
        }
      }
    }
    // Slide Transition happens here.
    // animated transition happens to target Slide and
    // non - animated transition happens to current Slide
    // If CSS transitions are false, directly go the current slide.

    if (this.props.useCSS === false) {
      this.setState({
        currentSlide: finalTargetSlide,
        trackStyle: getTrackCSS(assign({left: finalTargetLeft}, this.props, this.state))
      }, function () {
        if (this.props.afterChange) {
          this.props.afterChange(finalTargetSlide);
        }
      });

    } else {

      var nextStateChanges = {
        animating: false,
        currentSlide: finalTargetSlide,
        trackStyle: getTrackCSS(assign({left: finalTargetLeft}, this.props, this.state)),
        swipeLeft: null
      };
      callback = () => {
        this.setState(nextStateChanges, () => {
          if (this.props.afterChange) {
            this.props.afterChange(finalTargetSlide);
          }
          delete this.animationEndCallback;
        });
      };

      this.setState({
        animating: true,
        currentSlide: finalTargetSlide,
        trackStyle: getTrackAnimateCSS(assign({left: animationTargetLeft}, this.props, this.state))
      }, () => {
        if (this.props.asNavFor && this.props.asNavFor.innerSlider.state.currentSlide !== this.state.currentSlide) {
          this.props.asNavFor.innerSlider.slideHandler(index)
        }
        this.animationEndCallback = setTimeout(callback, this.props.speed);
      });

    }

    this.autoPlay();
  },
  play: function(){
    var nextIndex;

    // if (!this.state.mounted) {
    //   return false
    // }

    if (this.props.rtl) {
      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
    } else {
      if (canGoNext(Object.assign({}, this.props,this.state))) {
        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
      } else {
        return false;
      }
    }

    this.slideHandler(nextIndex);
  },
  autoPlay: function (autoplay=false) {
    if (this.autoplayTimer) {
      clearTimeout(this.autoplayTimer)
    }
    if (autoplay || this.props.autoplay) {
      this.autoplayTimer = setTimeout(this.play, this.props.autoplaySpeed)
    }
  },
  pause: function () {
    if (this.autoplayTimer) {
      clearTimeout(this.autoplayTimer)
      this.autoplayTimer = null
    }
  }
};

export default helpers;
