var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var cx = require('react/lib/cx');
var EventHandlersMixin = require('./mixins/event-handlers');
var HelpersMixin = require('./mixins/helpers');
var initialState = require('./initial-state');
var defaultProps = require('./default-props');
var _ = require('lodash');

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
    var classes, dotOptions;
    var dots = [];
    if (this.props.dots === true && this.state.slideCount > this.props.slidesToShow) {
      for (var i=0; i <= this.getDotCount(); i += 1) {
        classes = {
          'slick-active': (this.state.currentSlide === i * this.props.slidesToScroll),
        };
        dotOptions = {
          message: 'index',
          index: i
        };
        dots.push(<li key={i} className={cx(classes)}><button onClick={this.changeSlide.bind(this, dotOptions)}>{i}</button></li>);
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
      slides.push(cloneWithProps(child, {
        key: index,
        className: this.getSlideClasses(index),
        style: _.assign({}, this.getSlideStyle(), child.props.style)
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
            className: this.getSlideClasses(key),
            style: _.assign({}, this.getSlideStyle(), child.props.style)
          }));
        }

        if (index < infiniteCount) {
          key = count + index;
          postCloneSlides.push(cloneWithProps(child, {
            key: key,
            className: this.getSlideClasses(key),
            style: _.assign({}, this.getSlideStyle(), child.props.style)
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
    var prevClasses = { 'slick-prev': true};
    var nextClasses = { 'slick-next': true};
    var prevHandler = this.changeSlide.bind(this, {message: 'previous'});
    var nextHandler = this.changeSlide.bind(this, {message: 'next'});

    if (this.props.infinite === false) {
      if (this.state.currentSlide === 0) {
        prevClasses['slick-disabled'] = true;
        prevHandler = null;
      }
      if (this.state.currentSlide >= (this.state.slideCount - this.props.slidesToShow)) {
        nextClasses['slick-disabled'] = true;
        nextHandler = null;
      }
    }

    var prevArrow = <button key={0} ref='previous' type="button" data-role="none" className={cx(prevClasses)} style={{display: 'block'}} onClick={prevHandler}> Previous</button>;
    var nextArrow = <button key={1} ref='next' type="button" data-role="none" className={cx(nextClasses)} style={{display: 'block'}} onClick={nextHandler}>Next</button>;
    return [prevArrow, nextArrow];
  },
  render: function () {
    return (
      <div className={'slick-initialized slick-slider ' + this.props.className} >
        <div ref='list' className='slick-list' onMouseDown={this.swipeStart} onMouseMove={this.state.dragging ? this.swipeMove: null} onMouseUp={this.swipeEnd} onMouseLeave={this.state.dragging ? this.swipeEnd: null}>
          {this.renderTrack()}
        </div>
        {this.renderArrows()}
        {this.renderDots()}
      </div>
    );
  }
});

module.exports = Slider;