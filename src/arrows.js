'use strict';

import React from 'react';
import classnames from 'classnames';
import Helpers from './mixins/helpers';

export class PrevArrow extends React.Component {
  clickHandler(options, e) {
    if (e) { e.preventDefault(); }
    this.props.clickHandler(options, e);
  }
  render() {
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
}


export class NextArrow extends React.Component {
  clickHandler(options, e) {
    if (e) { e.preventDefault(); }
    this.props.clickHandler(options, e);
  }
  render() {
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
}


export class FullscreenArrow extends React.Component {
  clickHandler(options, e) {
    if (e) { e.preventDefault(); }
    this.props.clickHandler(options, e);
  }
  render() {
    var fullscreenClasses = {'slick-arrow': true, 'slick-fullscreen': true};
    var fullscreenHandler = this.clickHandler.bind(this, {message: 'fullscreen'});


    var fullscreenArrowProps = {
      key: '2',
      'data-role': 'none',
      className: classnames(fullscreenClasses),
      style: {display: 'block'},
      onClick: fullscreenHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var fullscreenArrow;

    if (this.props.fullscreenArrow) {
      fullscreenArrow = React.cloneElement(this.props.fullscreenArrow, { ...fullscreenArrowProps, ...customProps });
    } else {
      fullscreenArrow = <button key='2' type='button' {...fullscreenArrowProps}> X</button>;
    }

    return fullscreenArrow;
  }
}
