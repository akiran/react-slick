'use strict';

import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';
import assign from 'object-assign';
import classnames from 'classnames';

var getSlideClasses = (spec) => {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
    console.log();
  } else {
    index = spec.index;
  }

  slickCloned = (index < 0) || (index >= spec.slideCount);
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (spec.currentSlide === index);
    if ((index > spec.currentSlide - centerOffset - 1) && (index <= spec.currentSlide + centerOffset)) {
      slickActive = true;
    }
  } else {
    slickActive = (spec.currentSlide <= index) && (index < spec.currentSlide + spec.slidesToShow);
  }
  return classnames({
    'slick-slide': true,
    'slick-active': slickActive,
    'slick-center': slickCenter,
    'slick-cloned': slickCloned
  });
};

var getSlideStyle = function (spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = 'relative';
    style.left = -spec.index * spec.slideWidth;
    style.opacity = (spec.currentSlide === spec.index) ? 1 : 0;
    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
  }

  return style;
};

var renderSlides = function (spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var count = React.Children.count(spec.children);
  var child;

  React.Children.forEach(spec.children, (elem, index) => {
    var childOnClickOptions = {
      message: 'children',
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };

    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
      child = elem;
    } else {
      child = (<div></div>);
    }

    var childStyle = getSlideStyle(assign({}, spec, {index: index}));
    slides.push(cloneWithProps(child, {
      key: index,
      'data-index': index,
      className: getSlideClasses(assign({index: index}, spec)),
      style: childStyle,
      onClick: spec.focusOnSelect.bind(null, childOnClickOptions)
    }));

    // variableWidth doesn't wrap properly.
    if (spec.infinite && spec.fade === false) {
      var infiniteCount = spec.variableWidth ? spec.slidesToShow + 1 : spec.slidesToShow;

      if (index >= (count - infiniteCount)) {
        key = -(count - index);
        preCloneSlides.push(cloneWithProps(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses(assign({index: key}, spec)),
          style: childStyle,
          onClick: this.props.focusOnSelect.bind(null, childOnClickOptions)
        }));
      }

      if (index < infiniteCount) {
        key = count + index;
        postCloneSlides.push(cloneWithProps(child, {
          key: key,
          'data-index': key,
          className: getSlideClasses(assign({index: key}, spec)),
          style: childStyle,
          onClick: this.props.focusOnSelect.bind(null, childOnClickOptions)
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

export var Track = React.createClass({
  render: function () {
    var slides = renderSlides.call(this, this.props);
    return (
      <div className='slick-track' style={this.props.trackStyle}>
        { slides }
      </div>
    );
  }
});
