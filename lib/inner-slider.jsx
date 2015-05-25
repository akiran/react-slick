'use strict';

var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var classnames = require('classnames');
var EventHandlersMixin = require('./mixins/event-handlers');
var HelpersMixin = require('./mixins/helpers');
var initialState = require('./initial-state');
var defaultProps = require('./default-props');
var _assign = require('lodash.assign');

var Slider = React.createClass({
  mixins: [EventHandlersMixin, HelpersMixin],
  getInitialState: function () {
    return initialState;
  },
  getDefaultProps: function () {
    return defaultProps;
  },
  componentDidMount: function () {
    this.initialize(this.props);
  },
  componentWillReceiveProps: function(nextProps) {
    this.initialize(nextProps);
  },
  renderDots: function () {
    var dotOptions;
    var dots = [];
    if (this.props.dots === true && this.state.slideCount > this.props.slidesToShow) {
      for (var i=0; i <= this.getDotCount(); i += 1) {
        var className = classnames({
          'slick-active': (this.state.currentSlide === i * this.props.slidesToScroll)
        });
        dotOptions = {
          message: 'index',
          index: i
        };
        dots.push(<li key={i} className={className}><button onClick={this.changeSlide.bind(this, dotOptions)}>{i}</button></li>);
      }
      return (
        <ul className={this.props.dotsClass} style={{display: 'block'}}>
          {dots}
        </ul>
      );
    } else {
      return null;
    }
  },
  renderSlides: function () {
    var key;
    var slides = [];
    var preCloneSlides = [];
    var postCloneSlides = [];
    var count = React.Children.count(this.props.children);
    React.Children.forEach(this.props.children, function (child, index) {
      var infiniteCount;
      slides.push(cloneWithProps(child, {
        key: index,
        'data-index': index,
        className: this.getSlideClasses(index),
        style: _assign({}, this.getSlideStyle(), child.props.style)
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
            className: this.getSlideClasses(key),
            style: _assign({}, this.getSlideStyle(), child.props.style)
          }));
        }

        if (index < infiniteCount) {
          key = count + index;
          postCloneSlides.push(cloneWithProps(child, {
            key: key,
            'data-index': key,
            className: this.getSlideClasses(key),
            style: _assign({}, this.getSlideStyle(), child.props.style)
          }));
        }
      }
    }.bind(this));

    return preCloneSlides.concat(slides, postCloneSlides);
  },
  renderTrack: function () {
    return (
      <div ref='track' className='slick-track' style={this.state.trackStyle}>
        { this.renderSlides() }
      </div>
    );
  },
  renderArrows: function () {

    if (this.props.arrows === true) {
      var prevClasses = { 'slick-prev': true};
      var nextClasses = { 'slick-next': true};
      var prevHandler = this.changeSlide.bind(this, {message: 'previous'});
      var nextHandler = this.changeSlide.bind(this, {message: 'next'});

      if (this.props.infinite === false) {
        if (this.state.currentSlide === 0) {
          prevClasses['slick-disabled'] = true;
          prevHandler = null;
        }

        if (this.props.centerMode && !this.props.infinite)
        {
         if (this.state.currentSlide >= (this.state.slideCount - 1)) {
            nextClasses['slick-disabled'] = true;
            nextHandler = null;
          }
        }else
        {
          if (this.state.currentSlide >= (this.state.slideCount - this.props.slidesToShow)) {
            nextClasses['slick-disabled'] = true;
            nextHandler = null;
          }
        }
      }

      var prevArrowProps = {
        key: '0',
        ref: 'previous',
        'data-role': 'none',
        className: classnames(prevClasses),
        style: {display: 'block'},
        onClick: prevHandler
      };
      var prevArrow;

      if (this.props.prevArrow) {
        prevArrow = <this.props.prevArrow {...prevArrowProps} />;
      } else {
        prevArrow = <button type="button" {...prevArrowProps}> Previous</button>;
      }

      var nextArrowProps = {
        key: '1',
        ref: 'next',
        'data-role': 'none',
        className: classnames(nextClasses),
        style: {display: 'block'},
        onClick: nextHandler
      };
      var nextArrow;

      if (this.props.nextArrow) {
        nextArrow = <this.props.nextArrow {...nextArrowProps} />;
      } else {
        nextArrow = <button type="button" {...nextArrowProps}> Next</button>;
      }

      return [prevArrow, nextArrow];
    } else {
      return null;
    }
  },
  render: function () {
    var className = classnames('slick-initialized', 'slick-slider', this.props.className);
    return (
      <div className={className} >
        <div
          ref='list'
          className='slick-list'
          style={this.getListStyle()}
          onMouseDown={this.swipeStart}
          onMouseMove={this.state.dragging ? this.swipeMove: null}
          onMouseUp={this.swipeEnd}
          onMouseLeave={this.state.dragging ? this.swipeEnd: null}
          onTouchStart={this.swipeStart}
          onTouchMove={this.state.dragging ? this.swipeMove: null}
          onTouchEnd={this.swipeEnd}
          onTouchCancel={this.state.dragging ? this.swipeEnd: null}>
          {this.renderTrack()}
        </div>
        {this.renderArrows()}
        {this.renderDots()}
      </div>
    );
  }
});

module.exports = Slider;
