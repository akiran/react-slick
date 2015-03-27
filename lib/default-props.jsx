var React = require('react');

var defaultProps = {
    className: '',
    // accessibility: true,
    adaptiveHeight: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: '50px',
    cssEase: 'ease',
    customPaging: function(onClick, index, element) {
      return <button onClick={onClick}>{index}</button>;
    },
    dots: false,
    dotsClass: 'slick-dots',
    draggable: true,
    easing: 'linear',
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    // lazyLoad: 'ondemand',
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
    // waitForAnimate: true,
    afterChange: null
};

module.exports = defaultProps;
