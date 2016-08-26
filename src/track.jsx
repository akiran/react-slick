'use strict';

import React from 'react';
import assign from 'object-assign';
import classnames from 'classnames';

var getSlideClasses = (spec) => {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = (index < 0) || (index >= spec.slideCount);
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
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

var getKey = (child, fallbackKey) => {
    // key could be a zero
    return (child.key === null || child.key === undefined) ? fallbackKey : child.key;
};

var renderSlides = function (spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var count = React.Children.count(spec.children);


  React.Children.forEach(spec.children, (elem, index) => {
    let child;
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
    var slickClasses = getSlideClasses(assign({index: index}, spec));
    var cssClasses;

    if (child.props.className) {
        cssClasses = classnames(slickClasses, child.props.className);
    } else {
        cssClasses = slickClasses;
    }

    const onClick = function(e) {
      child.props && child.props.onClick && child.props.onClick(e)
      spec.focusOnSelect(childOnClickOptions)
    }

    slides.push(React.cloneElement(child, {
      key: 'original' + getKey(child, index),
      'data-index': index,
      className: cssClasses,
      tabIndex: '-1',
      style: assign({outline: 'none'}, child.props.style || {}, childStyle),
      onClick
    }));

    // variableWidth doesn't wrap properly.
    if (spec.infinite && spec.fade === false) {
      var infiniteCount = spec.variableWidth ? spec.slidesToShow + 1 : spec.slidesToShow;

      if (index >= (count - infiniteCount)) {
        key = -(count - index);
        preCloneSlides.push(React.cloneElement(child, {
          key: 'precloned' + getKey(child, key),
          'data-index': key,
          className: cssClasses,
          style: assign({}, child.props.style || {}, childStyle),
          onClick
        }));
      }

      if (index < infiniteCount) {
        key = count + index;
        postCloneSlides.push(React.cloneElement(child, {
          key: 'postcloned' + getKey(child, key),
          'data-index': key,
          className: cssClasses,
          style: assign({}, child.props.style || {}, childStyle),
          onClick
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
