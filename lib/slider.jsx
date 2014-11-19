var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var cx = require('react/lib/cx');
var EventHandlersMixin = require('./mixins/event-handlers');
var HelpersMixin = require('./mixins/helpers');

var Slider = React.createClass({
  mixins: [EventHandlersMixin, HelpersMixin],
  getInitialState: function () {
    return {
      animating: false,
      dragging: false,
      // autoPlayTimer: null,
      currentDirection: 0,
      currentLeft: null,
      currentSlide: 0,
      direction: 1,
      // $dots: null,
      // listWidth: null,
      // listHeight: null,
      // loadIndex: 0,
      // $nextArrow: null,
      // $prevArrow: null,
      slideCount: null,
      slideWidth: null,
      // $slideTrack: null,
      // $slides: null,
      // sliding: false,
      slideOffset: 0, // move the slide for animation
      swipeLeft: null,
      // $list: null,
      touchObject: {
        startX: 0,
        curX: 0,
      },
      // transformsEnabled: false, // Not supporting this
      // added for react
      trackStyle: {}

    };
  },
  getDefaultProps: function () {
    return {
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    };
  },
  componentDidMount: function () {
    var slideCount = this.getSlideCount();
    var slideWidth = this.getDOMNode().getBoundingClientRect().width;
    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
    }, function () {
      // getCSS function needs previously set state
      var trackStyle = this.getCSS(this.getLeft(0));
      this.setState({trackStyle: trackStyle});
    });
  },
  renderDots: function () {
    var classes, dotOptions;
    var dots = React.Children.map(this.props.children, function (child, index) {
      classes = {
        'slick-active': (this.state.currentSlide === index)
      };
      dotOptions = {
        message: 'index',
        index: index
      };
      return <li className={cx(classes)}><button onClick={this.changeSlide.bind(this, dotOptions)}>{index}</button></li>;
    }.bind(this));

    return (
      <ul className='slick-dots' style={{display: 'block'}}>
        {dots}
      </ul>
    );
  },
  renderSlides: function () {
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
  renderTrack: function () {
    var count = this.getSlideCount();
    var lastSlideClone = cloneWithProps(this.props.children[count - 1], {});
    var firstSlideClone = cloneWithProps(this.props.children[0], {});
    return (
      <div ref='track' className='slick-track' style={this.state.trackStyle}>
        <div key={-1} className='slick-slide slick-cloned' style={this.getSlideStyle()}>
          {lastSlideClone}
        </div> 
        { this.renderSlides() }
        <div className='slick-slide slick-cloned' style={this.getSlideStyle()}>
          {firstSlideClone}
        </div>  
      </div>
    );
  },
  render: function () {
    return (
      <div className='slick-initialized slick-slider' >
        <div className='slick-list' onMouseDown={this.swipeStart} onMouseMove={this.swipe} onMouseUp={this.swipeEnd} onMouseLeave={this.swipeEnd}>
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