'use strict';
import ReactDOM from 'react-dom';
import assign from 'object-assign';
import { getPreClones, getPostClones, getTotalSlides } from '../utils/trackUtils'

// checks if spec is the superset of keys in keysArray, i.e., spec contains all the keys from keysArray
var checkSpecKeys = function (spec, keysArray) {
  return keysArray.reduce((value, key) => {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error('Keys Missing', spec);
};

export var getTrackCSS = function(spec) {
  checkSpecKeys(spec, [
    'left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth'
  ]);

  var trackWidth, trackHeight;
  const trackChildren = (spec.slideCount + 2 * spec.slidesToShow); // this should probably be getTotalSlides
  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transition: '',
    WebkitTransition: '',
    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)',
  };
  if (spec.fade) {
    style = {
      opacity: 1
    }
  }
  
  if (trackWidth) {
    assign(style, { width: trackWidth });
  }

  if (trackHeight) {
    assign(style, { height: trackHeight });
  }

  // Fallback for IE8
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + 'px';
    } else {
      style.marginTop = spec.left + 'px';
    }
  }

  return style;
};

export var getTrackAnimateCSS = function (spec) {
  checkSpecKeys(spec, [
    'left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase'
  ]);

  var style = getTrackCSS(spec);
  // useCSS is true by default so it can be undefined
  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
  return style;
};

// gets total length of track that's on the left side of current slide
export var getTrackLeft = function (spec) {

  checkSpecKeys(spec, [
   'slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow',
   'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);
  
  const {slideIndex, trackRef, infinite, centerMode, slideCount, slidesToShow,
    slidesToScroll, slideWidth, listWidth, variableWidth, slideHeight, fade, vertical} = spec

  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (fade || spec.slideCount === 1) {
    return 0;
  }

  let slidesToOffset = 0
  if(infinite){
    slidesToOffset = -getPreClones(spec) // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children
    if (slideCount % slidesToScroll !== 0 && (slideIndex + slidesToScroll) > slideCount){
      slidesToOffset = -(slideIndex > slideCount ? (slidesToShow - (slideIndex - slideCount)) : slideCount % slidesToScroll)
    }
    // shift current slide to center of the frame
    if(centerMode){
      slidesToOffset += parseInt(slidesToShow / 2)
    }
  } else {
    if(slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount){
      slidesToOffset = slidesToShow - (slideCount % slidesToScroll)
    }
    if(centerMode){
      slidesToOffset = parseInt(slidesToShow / 2)
    }
  }
  slideOffset = slidesToOffset * slideWidth
  verticalOffset = slidesToOffset * slideHeight

  if (!vertical) {
    targetLeft = ((slideIndex * slideWidth) * -1) + slideOffset;
  } else {
    targetLeft = ((slideIndex * slideHeight) * -1) + verticalOffset;
  }

  if (variableWidth === true) {
      var targetSlideIndex;
      var lastSlide = ReactDOM.findDOMNode(trackRef).children[slideCount - 1];
      var max = -(lastSlide.offsetLeft) + listWidth - lastSlide.offsetWidth;
      targetSlideIndex = (slideIndex + getPreClones(spec));
      targetSlide = ReactDOM.findDOMNode(trackRef).childNodes[targetSlideIndex];
      targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
      if (centerMode === true) {
          targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex
          targetSlide = ReactDOM.findDOMNode(trackRef).children[targetSlideIndex]
          targetLeft = 0
          for (let slide = 0; slide < targetSlideIndex; slide++) {
            targetLeft -= ReactDOM.findDOMNode(trackRef).children[slide].offsetWidth
          }
          targetLeft += (listWidth - targetSlide.offsetWidth) / 2
      }
      if (spec.infinite === false && targetLeft < max) {
        targetLeft = max;
      }
  }

  return targetLeft;
};
