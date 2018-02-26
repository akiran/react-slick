import React, { Component } from 'react'
import Slider from '../src/slider'

export default class AsNavFor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      asNavFor: ''
    }
  }

  componentDidMount() {
    this.setState({ asNavFor: this.sliderRef })
  }
  
  render() {
    return (
      <div>
        <h2>First Slider</h2>
          <Slider ref={slider => this.sliderRef = slider}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
          </Slider>
        <h2>Second Slider</h2>
        <Slider asNavFor={this.state.asNavFor}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
        </Slider>
      </div>
    );
  }
}
