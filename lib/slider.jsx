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
      // listWidth: null,
      // listHeight: null,
      // loadIndex: 0,
      slideCount: null,
      slideWidth: null,
      // sliding: false,
      // slideOffset: 0, 
      swipeLeft: null,
      touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
      },
       
      // added for react
      trackStyle: {}

      // Removed
      // transformsEnabled: false,
      // $nextArrow: null,
      // $prevArrow: null,
      // $dots: null,
      // $list: null,
      // $slideTrack: null,
      // $slides: null,
    };
  },
  getDefaultProps: function () {
    return {
      settings: {
        accessibility: true,
        adaptiveHeight: false,
        // appendArrows: $(element),
        // appendDots: $(element),
        arrows: true,
        asNavFor: null,
        // prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        // nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        // customPaging: function(slider, i) {
        //     return '<button type="button" data-role="none">' + (i + 1) + '</button>';
        // },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        fade: false,
        focusOnSelect: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        onBeforeChange: null,
        onAfterChange: null,
        onInit: null,
        onReInit: null,
        onSetPosition: null,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rtl: false,
        slide: 'div',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        // useCSS: true,
        variableWidth: false,
        vertical: false,
        // waitForAnimate: true
      }
    };
  },
  componentDidMount: function () {
    var slideCount = React.Children.count(this.props.children);
    var slideWidth = this.getDOMNode().getBoundingClientRect().width;
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
    var count = React.Children.count(this.props.children);
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