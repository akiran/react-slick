import React, { Component } from 'react'
import Slider from '../src/slider'

export default class IndentedSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      indent: 50
    };
    return (
      <div>
        <h2> Indented Slider</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Slider>
      </div>
    );
  }
}
