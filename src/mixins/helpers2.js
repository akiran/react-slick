'use strict';

var checkSpecKeys = function (spec, keysArray) {
  return keysArray.reduce((value, key) => {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error('Keys Missing', spec);
};

export var getTrackCSS = function(spec) {
  checkSpecKeys(spec, [
    'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'left'
  ]);

  var trackWidth;

  if (spec.variableWidth) {
    trackWidth = (spec.slideCount + 2*spec.slidesToShow) * spec.slideWidth;
  } else if (spec.centerMode) {
    trackWidth = (spec.slideCount + 2*(spec.slidesToShow + 1)) * spec.slideWidth;
  } else {
    trackWidth = (spec.slideCount + 2*spec.slidesToShow) * spec.slideWidth;
  }

  var style = {
    opacity: 1,
    width: trackWidth,
    WebkitTransform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
    transform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
    transition: '',
    WebkitTransition: ''
  };

  return style;
};

export var getTrackAnimateCSS = function (spec) {
  var style = getTrackCSS(spec);
  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
  return style;
};

export var getTrackLeft = function (spec) {

  checkSpecKeys(spec, [
   'slideIndex', 'infinite', 'centerMode', 'slideCount', 'slidesToShow',
   'slidesToScroll', 'slideWidth', 'trackRef', 'listWidth']);

  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  if (spec.infinite === true) {
    if (spec.slideCount > spec.slidesToShow) {
     slideOffset = (spec.slideWidth * spec.slidesToShow) * -1;
    }
    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
          if(spec.slideIndex > spec.slideCount) {
            slideOffset = ((spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth) * -1;
          } else {
            slideOffset = ((spec.slideCount % spec.slidesToScroll) * spec.slideWidth) * -1;
          }
      }
    }
  }
  if (spec.centerMode === true && spec.infinite === true) {
      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2) - spec.slideWidth;
  } else if (spec.centerMode === true) {
      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
  }

  targetLeft = ((spec.slideIndex * spec.slideWidth) * -1) + slideOffset;

  if (spec.variableWidth === true) {
      var targetSlideIndex;
      if(spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
          targetSlide = spec.trackRef.getDOMNode().childNodes[spec.slideIndex];
      } else {
          targetSlideIndex = (spec.slideIndex + spec.slidesToShow);
          targetSlide = spec.trackRef.getDOMNode().childNodes[targetSlideIndex];
      }
      targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
      if (spec.centerMode === true) {
          if(spec.infinite === false) {
              targetSlide = spec.trackRef.getDOMNode().childNodes[spec.slideIndex];
          } else {
              targetSlide = spec.trackRef.getDOMNode().childNodes[(spec.slideIndex + spec.slidesToShow + 1)];
          }

          targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
          targetLeft += (spec.listWidth - targetSlide.offsetWidth) / 2;
      }
  }

  return targetLeft;
};
