import React, { Component } from 'react'
import Slider from '../src/slider'

export default class SlideChangeHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      called: 0
    }
    this.afterRender = this.afterRender.bind(this)    
  }

  afterRender(slider) {
    this.setState({called: this.state.called+1}, () => console.log(this.state.called))
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      afterRender: this.afterRender,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>afterRender Hook</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}
