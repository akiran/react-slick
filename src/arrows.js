'use strict';

import React from 'react';
import classnames from 'classnames';
import Helpers from './mixins/helpers';

export var PrevArrow = React.createClass({

  clickHandler: function (options, e) {
    if (e) { e.preventDefault(); }
    this.props.clickHandler(options, e);
  },
  render: function () {
    var prevClasses = {'slick-arrow': true, 'slick-prev': true};
    var prevHandler = this.clickHandler.bind(this, {message: 'previous'});

    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
      prevClasses['slick-disabled'] = true;
      prevHandler = null;
    }

    var prevArrowProps = {
      key: '0',
      'data-role': 'none',
      className: classnames(prevClasses),
      style: {display: 'block'},
      onClick: prevHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var prevArrow;

    if (this.props.prevArrow) {
      prevArrow = React.cloneElement(this.props.prevArrow, { ...prevArrowProps, ...customProps });
    } else {
      prevArrow = <button key='0' type='button' {...prevArrowProps}> Previous</button>;
    }

    return prevArrow;
  }
});


export var NextArrow = React.createClass({
  clickHandler: function (options, e) {
    if (e) { e.preventDefault(); }
    this.props.clickHandler(options, e);
  },
  render: function () {
    var nextClasses = {'slick-arrow': true, 'slick-next': true};
    var nextHandler = this.clickHandler.bind(this, {message: 'next'});

    if (!Helpers.canGoNext(this.props)) {
      nextClasses['slick-disabled'] = true;
      nextHandler = null;
    }

    var nextArrowProps = {
      key: '1',
      'data-role': 'none',
      className: classnames(nextClasses),
      style: {display: 'block'},
      onClick: nextHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var nextArrow;

    if (this.props.nextArrow) {
      nextArrow = React.cloneElement(this.props.nextArrow, { ...nextArrowProps, ...customProps });
    } else {
      nextArrow = <button key='1' type='button' {...nextArrowProps}> Next</button>;
    }

    return nextArrow;
  }
});
