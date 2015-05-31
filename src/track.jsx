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

var renderSlides = (spec) => {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var count = React.Children.count(spec.children);

  React.Children.forEach(spec.children, (child, index) => {
    var infiniteCount;
    slides.push(cloneWithProps(child, {
      key: index,
      'data-index': index,
      className: getSlideClasses(assign({index: index}, spec)),
      style: assign({}, {width: spec.slideWidth}, child.props.style)
    }));

    if (spec.infinite) {

      infiniteCount = spec.centerMode ? spec.slidesToShow + 1 : spec.slidesToShow;

      if (index >= (count - infiniteCount)) {
        key = -(count - index);
        preCloneSlides.push(cloneWithProps(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses(assign({index: key}, spec)),
          style: assign({}, {width: spec.slideWidth}, child.props.style)
        }));
      }

      if (index < infiniteCount) {
        key = count + index;
        postCloneSlides.push(cloneWithProps(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses(assign({index: key}, spec)),
          style: assign({}, {width: spec.slideWidth}, child.props.style)
        }));
      }
    }
  });

  return preCloneSlides.concat(slides, postCloneSlides);
};

var Track = React.createClass({
  render: function () {
    var slides = renderSlides(this.props);
    return (
      <div className='slick-track' style={this.props.trackStyle}>
        { slides }
      </div>
    );
  }
});

module.exports = Track;
