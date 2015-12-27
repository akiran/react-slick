'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
    console.log();
  } else {
    index = spec.index;
  }

  slickCloned = index < 0 || index >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = spec.currentSlide === index;
    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }
  return (0, _classnames2['default'])({
    'slick-slide': true,
    'slick-active': slickActive,
    'slick-center': slickCenter,
    'slick-cloned': slickCloned
  });
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = 'relative';
    style.left = -spec.index * spec.slideWidth;
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
  }

  return style;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var count = _react2['default'].Children.count(spec.children);
  var child;

  _react2['default'].Children.forEach(spec.children, function (elem, index) {
    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
      child = elem;
    } else {
      child = _react2['default'].createElement('div', null);
    }
    var childStyle = getSlideStyle((0, _objectAssign2['default'])({}, spec, { index: index }));
    var slickClasses = getSlideClasses((0, _objectAssign2['default'])({ index: index }, spec));
    var cssClasses;

    if (child.props.className) {
      cssClasses = (0, _classnames2['default'])(slickClasses, child.props.className);
    } else {
      cssClasses = slickClasses;
    }

    slides.push(_react2['default'].cloneElement(child, {
      key: index,
      'data-index': index,
      className: cssClasses,
      style: (0, _objectAssign2['default'])({}, child.props.style || {}, childStyle)
    }));

    // variableWidth doesn't wrap properly.
    if (spec.infinite && spec.fade === false) {
      var infiniteCount = spec.variableWidth ? spec.slidesToShow + 1 : spec.slidesToShow;

      if (index >= count - infiniteCount) {
        key = -(count - index);
        preCloneSlides.push(_react2['default'].cloneElement(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses((0, _objectAssign2['default'])({ index: key }, spec)),
          style: (0, _objectAssign2['default'])({}, child.props.style || {}, childStyle)
        }));
      }

      if (index < infiniteCount) {
        key = count + index;
        postCloneSlides.push(_react2['default'].cloneElement(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses((0, _objectAssign2['default'])({ index: key }, spec)),
          style: (0, _objectAssign2['default'])({}, child.props.style || {}, childStyle)
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track = _react2['default'].createClass({
  displayName: 'Track',

  render: function render() {
    var slides = renderSlides(this.props);
    return _react2['default'].createElement(
      'div',
      { className: 'slick-track', style: this.props.trackStyle },
      slides
    );
  }
});
exports.Track = Track;