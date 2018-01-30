import React, { Component } from 'react'
import Slider from '../src/slider'

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 4,
      speed: 500,
    };
    const settings2 = {
      ...settings,
      infinite: false
    }
    const settings3 = {
      ...settings,
      slidesToShow: 3
    }
    const settings4 = {
      ...settings,
      slidesToShow: 3,
      infinite: false
    }
    return (
      <div>
        <h2>Center Mode</h2>
        <h4>Infinite, Even</h4>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
        <h4>Finite, Even</h4>
        <Slider {...settings2}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
        <h4>Infinite, Odd</h4>
        <Slider {...settings3}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </Slider>
        <h4>Finite, Odd</h4>
        <Slider {...settings4}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </Slider>
      </div>
    );
  }
}
