import React, { Component } from 'react'
import Slider from '../src/slider'

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }
  play() {
    this.slider.slickPlay()
  }
  pause() {
    this.slider.slickPause()
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <h2>Auto Play & Pause with buttons</h2>
        <Slider ref={slider => this.slider = slider} {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
        <div style={{textAlign: 'center'}}>
          <button className='button' onClick={this.play}>Play</button>
          <button className='button' onClick={this.pause}>Pause</button>
        </div>
      </div>
    );
  }
}
