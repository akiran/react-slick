import React, { Component } from 'react'
import Slider from '../src/slider'

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.refs.slider.next()
  }
  previous() {
    this.refs.slider.previous()
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider ref='slider' {...settings}>
          <div key={1}><h3>1</h3></div>
          <div key={2}><h3>2</h3></div>
          <div key={3}><h3>3</h3></div>
          <div key={4}><h3>4</h3></div>
          <div key={5}><h3>5</h3></div>
          <div key={6}><h3>6</h3></div>
        </Slider>
        <button onClick={this.previous}>Previous</button>
        <button onClick={this.next}>>Next</button>
      </div>
    );
  }
}
