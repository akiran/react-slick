import React, { Component } from 'react'
import Slider from '../src/slider'
import {baseUrl} from './config'

export default class SlickGoTo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slickGoTo: 0
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    // this.setState({slickGoTo: e.target.value});
    this.refs.slider.slickGoTo(e.target.value)
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // slickGoTo: this.state.slickGoTo || 0
    };
    return (
      <div>
        <h2>Slick Go To</h2>
        <input onChange={this.changeHandler} initialValue={0} type='range' min={0} max={3} />
        <Slider ref='slider' {...settings}>
          <div><img src={baseUrl + '/abstract01.jpg'} /></div>
          <div><img src={baseUrl + '/abstract02.jpg'} /></div>
          <div><img src={baseUrl + '/abstract03.jpg'} /></div>
          <div><img src={baseUrl + '/abstract04.jpg'} /></div>
        </Slider>
      </div>
    );
  }
}