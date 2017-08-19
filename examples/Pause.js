import React, { Component } from 'react'
import Slider from '../src/slider'

export default class Pause extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      paused: false,
    }
    this.togglePause = this.togglePause.bind(this);
  }
      
  togglePause() {
    this.setState({paused: !this.state.paused});
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: !this.state.paused,
      autoplaySpeed: 2000,
      paused: this.state.paused,
    };
    return (
      <div>
        <h2>Pause Auto Play</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
        <button onClick={this.togglePause}>{ this.state.paused ? 'Play' : 'Pause' }</button>
      </div>
    );
  }
}