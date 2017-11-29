import React, { Component } from 'react'
import Slider from '../src/slider'
import {baseUrl} from './config'

class FullScreenArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props
    }
  }
  click(event, onClick) {
    onClick();
  }
  render() {
    const {className, style, onClick} = this.state.props;
    return (
        <a className="fullscreen-button" onClick={(e) => this.click(e, onClick)} ></a>
    );
  }
}

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      fullscreenArrow: <FullScreenArrow />
    };
    return (
      <div>
        <h2> Lazy LoadFullscreen</h2>
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
