import React, { Component } from 'react'
import Slider from '../src/slider'

export default class UnevenSetsFinite extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 3,
      slidesToShow: 4
    };
    return (
      <div>
        <h2>Uneven sets (finite)</h2>
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
          <div><h3>10</h3></div>
          <div><h3>11</h3></div>
        </Slider>
      </div>
    );
  }
}