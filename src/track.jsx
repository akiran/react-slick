'use strict';

import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';
import assign from 'object-assign';

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
        // className: this.getSlideClasses(index),
        // style: assign({}, this.getSlideStyle(), child.props.style)
        style: assign({}, child.props.style)
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
            // className: this.getSlideClasses(key),
            // style: assign({}, this.getSlideStyle(), child.props.style)
            style: assign({}, child.props.style)
          }));
        }

        if (index < infiniteCount) {
          key = count + index;
          postCloneSlides.push(cloneWithProps(child, {
            key: key,
            'data-index': key,
            // className: this.getSlideClasses(key),
            // style: assign({}, this.getSlideStyle(), child.props.style)
            style: assign({}, child.props.style)
          }));
        }
      }
    }.bind(this));

    return preCloneSlides.concat(slides, postCloneSlides);
  },
  render: function () {
    return (
      <div ref='track' className='slick-track'>
        { this.renderSlides() }
      </div>
    );
  }
});

module.exports = Track;
