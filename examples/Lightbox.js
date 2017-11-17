import React, { Component } from 'react'
import Slider from '../src/slider'
import {baseUrl} from './config'

export default class Lightbox extends Component {
  render() {
    const settings = {
      lightbox: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500
    };
    return (
      <div>
        <h2>Lightbox</h2>
        <div>Click on any slide to open a lightbox</div>
        <Slider {...settings}>
          <div><img src={baseUrl + '/abstract01.jpg'} /></div>
          <div><img src={baseUrl + '/abstract02.jpg'} /></div>
          <div><img src={baseUrl + '/abstract03.jpg'} /></div>
          <div><img src={baseUrl + '/abstract04.jpg'} /></div>
        </Slider>
      </div>
    );
  }
}
