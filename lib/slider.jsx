var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var cx = require('react/lib/cx');
var EventHandlersMixin = require('./mixins/event-handlers');
var HelpersMixin = require('./mixins/helpers');
var AnimationMixin = require('./mixins/animation');

var Slider = React.createClass({
  mixins: [EventHandlersMixin, HelpersMixin, AnimationMixin],
  getInitialState: function () {
    return {
      animating: false,
      slideCount: 0,
      slideWidth: 0,
      currentSlide: 0,
      animSlide: 0,
      currentDirection: 0,
      direction: 1, // 0 -> left, 1 -> right,
      slideOffset: 0
    };
  },
  getDefaultProps: function () {

  },
  componentDidMount: function () {
    this.setState({
      slideCount: this.getSlideCount(),
      slideWidth: this.getDOMNode().getBoundingClientRect().width,
    });
  },
  getDots: function () {
    return <div></div>;
  },
  getSlides: function () {
    var slides;
    slides = React.Children.map(this.props.children, function (child, index) {
      var slideClasses = {
        'slick-slide': true,
        'slick-active': (this.state.currentSlide === index)
      };
      return <div key={index} className={cx(slideClasses)} style={this.getSlideStyle()}>{child}</div>;
    }.bind(this));
    return slides;
  },
  getTrack: function () {
    var count = this.getSlideCount();
    var lastSlideClone = cloneWithProps(this.props.children[count - 1], {});
    var firstSlideClone = cloneWithProps(this.props.children[0], {});
    return (
      <div ref='track' className='slick-track' style={this.getTrackStyle()}>
        <div key={-1} className='slick-slide slick-cloned' style={this.getSlideStyle()}>
          {lastSlideClone}
        </div> 
        { this.getSlides() }
        <div className='slick-slide slick-cloned' style={this.getSlideStyle()}>
          {firstSlideClone}
        </div>  
      </div>
    );
  },
  render: function () {
    return (
      <div className='slick-initialized slick-slider'>
        <div className='slick-list'>
          {this.getTrack()}
        </div>
        <button ref='previous' type="button" data-role="none" className="slick-prev" style={{display: 'block'}} onClick={this.slideHandler.bind(this, {event: 'previous'})}> Previous</button>
        <button ref='next' type="button" data-role="none" className="slick-next" style={{display: 'block'}} onClick={this.slideHandler.bind(this, {event: 'next'})}>Next</button>
      </div>
    );
  }
});

module.exports = Slider;