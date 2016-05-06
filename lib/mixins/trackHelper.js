'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ReactDOM = require('./ReactDOM');

var _ReactDOM2 = _interopRequireDefault(_ReactDOM);

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error('Keys Missing', spec);
};

var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

  var trackWidth;

  if (spec.variableWidth) {
    trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
  } else if (spec.centerMode) {
    trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
  } else {
    trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
  }

  var style = {
    opacity: 1,
    width: trackWidth,
    WebkitTransform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
    transform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
    transition: '',
    WebkitTransition: '',
    msTransform: 'translateX(' + spec.left + 'px)'
  };

  // Fallback for IE8
  if (!window.addEventListener && window.attachEvent) {
    style.marginLeft = spec.left + 'px';
  }

  return style;
};

exports.getTrackCSS = getTrackCSS;
var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

  var style = getTrackCSS(spec);
  // useCSS is true by default so it can be undefined
  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
  return style;
};

exports.getTrackAnimateCSS = getTrackAnimateCSS;
var getTrackLeft = function getTrackLeft(spec) {

  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth']);

  var slideOffset = 0;
  var targetLeft;
  var targetSlide;

  if (spec.fade) {
    return 0;
  }

  if (spec.infinite) {
    if (spec.slideCount > spec.slidesToShow) {
      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
    }
    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
        if (spec.slideIndex > spec.slideCount) {
          slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
        } else {
          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
        }
      }
    }
  }

  if (spec.centerMode) {
    if (spec.infinite) {
      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    } else {
      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    }
  }

  targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;

  if (spec.variableWidth === true) {
    var targetSlideIndex;
    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
      targetSlide = _ReactDOM2['default'].findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
    } else {
      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
      targetSlide = _ReactDOM2['default'].findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
    }
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (spec.centerMode === true) {
      if (spec.infinite === false) {
        targetSlide = _ReactDOM2['default'].findDOMNode(spec.trackRef).children[spec.slideIndex];
      } else {
        targetSlide = _ReactDOM2['default'].findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
      }

      targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
      targetLeft += (spec.listWidth - targetSlide.offsetWidth) / 2;
    }
  }

  return targetLeft;
};
exports.getTrackLeft = getTrackLeft;