import React, { Component } from 'react'
import Slider from '../src/slider'

export default class AsNavFor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      refAccess: false,
    }
  }
  
  render() {
    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
          <Slider asNavFor={this.slider2} 
            ref={slider => {
              if (this.state.refAccess) return
              this.slider1 = slider
              this.setState({ refAccess: true })
            }} 
            fade={true}
            >
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Slider>
        <h4>Second Slider</h4>
        <Slider asNavFor={this.slider1} 
          ref={slider => {
            if (this.state.refAccess) return
            this.slider2 = slider
            this.setState({ refAccess: true })
          }} 
          slidesToShow={3} 
          centerMode={true}
        >
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
