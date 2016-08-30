import React, { Component } from 'react'
import Slider from '../src/slider'

export default class DynamicSlides extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [1, 2, 3, 4, 5, 6]
    }
    this.click = this.click.bind(this)
  }
  click() {
    const {slides}  = this.state
    this.setState({
      slides: slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    })
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2>Dynamic slides</h2>
        <button className='button' onClick={this.click}>Click to change slide count</button>
        <Slider {...settings}>
          {this.state.slides.map(function (slide) {
            return <div key={slide}><h3>{slide}</h3></div>
          })}
        </Slider>
      </div>
    );
  }
}