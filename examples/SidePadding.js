import React, { Component } from 'react'
import Slider from '../src/slider'

export default class SidePadding extends Component {
  render() {
    const settings = {
      infinite: true,
      sidePadding: '60px',
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Side Padding</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
        </Slider>
      </div>
    );
  }
}
