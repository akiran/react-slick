'use strict';

import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';
import assign from 'object-assign';
import classnames from 'classnames';

var getSlideClasses = (spec) => {
  var slickActive, slickCenter, slickCloned;
  var centerOffset;

  slickCloned = (spec.index < 0) || (spec.index >= spec.slideCount);
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (spec.currentSlide === spec.index);
    if ((spec.index > spec.currentSlide - centerOffset - 1) && (spec.index <= spec.currentSlide + centerOffset)) {
      slickActive = true;
    }
  } else {
    slickActive = (spec.currentSlide === spec.index);
  }
  return classnames({
    'slick-slide': true,
    'slick-active': slickActive,
    'slick-center': slickCenter,
    'slick-cloned': slickCloned
  });
};

var getSlideStyle = function (spec) {
  var style = {
    width: spec.slideWidth
  };

  if (spec.fade) {
    style.position = 'relative';
    style.left = -spec.index * spec.slideWidth;
    style.opacity = (spec.currentSlide === spec.index) ? 1 : 0;
    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
  }

  return style;
};

var renderSlides = (spec) => {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var count = React.Children.count(spec.children);
  var child, childStyle;

  React.Children.forEach(spec.children, (elem, index) => {
    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
      child = elem;
    } else {
      childStyle = (<div></div>);
    }

    var infiniteCount;
    var childCSS = getSlideStyle(assign({}, spec, {index: index}));
    slides.push(cloneWithProps(child, {
      key: index,
      'data-index': index,
      className: getSlideClasses(assign({index: index}, spec)),
      style: assign({}, childCSS, childStyle)
    }));

    // variableWidth doesn't clone children properly. centerMode clones too many
    // children than necessary.
    if (spec.infinite && spec.fade === false) {
      infiniteCount = spec.slidesToShow;

      if (index >= (count - infiniteCount)) {
        key = -(count - index);
        preCloneSlides.push(cloneWithProps(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses(assign({index: key}, spec)),
          style: assign({}, {width: spec.slideWidth}, childStyle)
        }));
      }

      if (index < infiniteCount) {
        key = count + index;
        postCloneSlides.push(cloneWithProps(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses(assign({index: key}, spec)),
          style: assign({}, {width: spec.slideWidth}, childStyle)
        }));
      }
    }
  });

  return preCloneSlides.concat(slides, postCloneSlides);
};

export var Track = React.createClass({
  render: function () {
    var slides = renderSlides(this.props);
    return (
      <div className='slick-track' style={this.props.trackStyle}>
        { slides }
      </div>
    );
  }
});
