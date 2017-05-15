'use strict';
import ReactDOM from 'react-dom';
import assign from 'object-assign';

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

  const trackChildren = (spec.slideCount + 2 * spec.slidesToShow);

  if (!spec.vertical) {
    if (spec.variableWidth) {
      trackWidth = (spec.slideCount + 2*spec.slidesToShow) * spec.slideWidth;
    } else if (spec.centerMode) {
      trackWidth = (spec.slideCount + 2*(spec.slidesToShow + 1)) * spec.slideWidth;
    } else {
      trackWidth = (spec.slideCount + 2*spec.slidesToShow) * spec.slideWidth;
    }
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

export var getTrackLeft = function (spec) {

  checkSpecKeys(spec, [
   'slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow',
   'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);

  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (spec.fade) {
    return 0;
  }

  if (spec.infinite) {
    if (spec.slideCount >= spec.slidesToShow) {
      slideOffset = (spec.slideWidth * spec.slidesToShow) * -1;
      verticalOffset = (spec.slideHeight * spec.slidesToShow) * -1;
    }
    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
          if(spec.slideIndex > spec.slideCount) {
            slideOffset = ((spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth) * -1;
            verticalOffset = ((spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight) * -1;
          } else {
            slideOffset = ((spec.slideCount % spec.slidesToScroll) * spec.slideWidth) * -1;
            verticalOffset = ((spec.slideCount % spec.slidesToScroll) * spec.slideHeight) * -1;
          }
      }
    }
  } else {

    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
          var slidesToOffset = spec.slidesToShow - (spec.slideCount % spec.slidesToScroll);
          slideOffset = slidesToOffset * spec.slideWidth;
      }
    }
  }



  if (spec.centerMode) {
    if(spec.infinite) {
      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    } else {
      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    }
  }

  if (!spec.vertical) {
    targetLeft = ((spec.slideIndex * spec.slideWidth) * -1) + slideOffset;
  } else {
    targetLeft = ((spec.slideIndex * spec.slideHeight) * -1) + verticalOffset;
  }

  if (spec.variableWidth === true) {
      var targetSlideIndex;
      if(spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
          targetSlide = ReactDOM.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
      } else {
          targetSlideIndex = (spec.slideIndex + spec.slidesToShow);
          targetSlide = ReactDOM.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
      }
      targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
      if (spec.centerMode === true) {
          if(spec.infinite === false) {
              targetSlide = ReactDOM.findDOMNode(spec.trackRef).children[spec.slideIndex];
          } else {
              targetSlide = ReactDOM.findDOMNode(spec.trackRef).children[(spec.slideIndex + spec.slidesToShow + 1)];
          }

          if (targetSlide) {
            targetLeft = targetSlide.offsetLeft * -1 + (spec.listWidth - targetSlide.offsetWidth) / 2;
          }
      }
  }

  return targetLeft;
};
