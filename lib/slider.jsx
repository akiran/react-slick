var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var cx = require('react/lib/cx');
var EventHandlersMixin = require('./mixins/event-handlers');
var HelpersMixin = require('./mixins/helpers');
var initialState = require('./initial-state');
var defaultProps = require('./default-props');

var Slider = React.createClass({
  mixins: [EventHandlersMixin, HelpersMixin],
  getInitialState: function () {
    return initialState;
  },
  getDefaultProps: function () {
    return defaultProps;
  },
  componentDidMount: function () {
    var slideCount = React.Children.count(this.props.children);
    var slideWidth = this.getDOMNode().getBoundingClientRect().width/this.props.slidesToShow;
    var listWidth = this.refs.list.getDOMNode().getBoundingClientRect().width;
    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
      listWidth: listWidth
    }, function () {
      // getCSS function needs previously set state
      var trackStyle = this.getCSS(this.getLeft(0));
      this.setState({trackStyle: trackStyle});
    });
  },
  renderDots: function () {
    var classes, dotOptions;
    var dots = [];
    if (this.props.dots === true && this.state.slideCount > this.props.slidesToShow) {
      for (var i=0; i <= this.getDotCount(); i += 1) {
        classes = {
          'slick-active': (this.state.currentSlide === i)
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
    var slides = [];
    var preCloneSlides = [];
    var postCloneSlides = [];
    var count = React.Children.count(this.props.children);
    React.Children.forEach(this.props.children, function (child, index) {
      var slideClasses = {
        'slick-slide': true,
        'slick-active': (this.state.currentSlide === index)
      };
      slides.push(<div key={index} className={cx(slideClasses)} style={this.getSlideStyle()}>{child}</div>);

      if (index >= (count - this.props.slidesToShow)) {
        preCloneSlides.push(<div key={-(count - index)} className='slick-slide slick-cloned' style={this.getSlideStyle()}>{cloneWithProps(child, {})}</div>);
      }

      if (index < this.props.slidesToShow) {
        postCloneSlides.push(<div key={count + index} className='slick-slide slick-cloned' style={this.getSlideStyle()}>{cloneWithProps(child, {})}</div>);
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
  render: function () {
    return (
      <div className='slick-initialized slick-slider' >
        <div ref='list' className='slick-list' onMouseDown={this.swipeStart} onMouseMove={this.state.dragging ? this.swipeMove: null} onMouseUp={this.swipeEnd} onMouseLeave={this.state.dragging ? this.swipeEnd: null}>
          {this.renderTrack()}
        </div>
        <button ref='previous' type="button" data-role="none" className="slick-prev" style={{display: 'block'}} onClick={this.changeSlide.bind(this, {message: 'previous'})}> Previous</button>
        <button ref='next' type="button" data-role="none" className="slick-next" style={{display: 'block'}} onClick={this.changeSlide.bind(this, {message: 'next'})}>Next</button>
        {this.renderDots()}
      </div>
    );
  }
});

module.exports = Slider;