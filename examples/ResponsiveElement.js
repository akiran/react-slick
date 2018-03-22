import React, { Component } from 'react'
import Slider from '../src/slider'

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.element = null;
  }
  componentDidMount() {
    this.forceUpdate();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsiveElement: this.element,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }]
    };

    return (
      <div style={{ maxWidth: '70%', margin: '0 auto' }} ref={(el) => { this.element = el; }}>
        <h2> Responsive Element Size </h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
        </Slider>
      </div>
    );
  }
};
