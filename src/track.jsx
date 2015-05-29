'use strict';

import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';
import assign from 'object-assign';
import classnames from 'classnames';

function getSlideClasses(spec) {
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
}

var Track = React.createClass({
  renderSlides: function () {
    var key;
    var slides = [];
    var preCloneSlides = [];
    var postCloneSlides = [];
    var count = React.Children.count(this.props.children);
    React.Children.forEach(this.props.children, (child, index) => {
      var infiniteCount;
      slides.push(cloneWithProps(child, {
        key: index,
        'data-index': index,
        className: getSlideClasses({
          index: index,
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
          slidesToShow: this.props.slidesToShow,
          centerMode: this.props.centerMode
        }),
        style: assign({}, {width: this.props.slideWidth}, child.props.style)
      }));

      if (this.props.infinite === true) {
        if (this.props.centerMode === true) {
            infiniteCount = this.props.slidesToShow + 1;
        } else {
            infiniteCount = this.props.slidesToShow;
        }

        if (index >= (count - infiniteCount)) {
          key = -(count - index);
          preCloneSlides.push(cloneWithProps(child, {
            key: key,
            'data-index': key,
            className: getSlideClasses({
              index: key,
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
              slidesToShow: this.props.slidesToShow,
              centerMode: this.props.centerMode
            }),
            style: assign({}, {width: this.props.slideWidth}, child.props.style)
          }));
        }

        if (index < infiniteCount) {
          key = count + index;
          postCloneSlides.push(cloneWithProps(child, {
            key: key,
            'data-index': key,
            className: getSlideClasses({
              index: key,
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
              slidesToShow: this.props.slidesToShow,
              centerMode: this.props.centerMode
            }),
            style: assign({}, {width: this.props.slideWidth}, child.props.style)
          }));
        }
      }
    }.bind(this));

    return preCloneSlides.concat(slides, postCloneSlides);
  },
  render: function () {
    var slides = this.renderSlides();
    return (
      <div className='slick-track' style={this.props.trackStyle}>
        { slides }
      </div>
    );
  }
});

module.exports = Track;
