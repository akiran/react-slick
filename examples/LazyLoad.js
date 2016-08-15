import React, { Component } from 'react'
import Slider from '../src/slider'
import {baseUrl} from './config'

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div>
        <h2> Lazy Load</h2>
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
