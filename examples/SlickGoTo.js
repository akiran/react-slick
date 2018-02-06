import React, { Component } from 'react'
import Slider from '../src/slider'
import { baseUrl } from './config'

export default class SlickGoTo extends Component {
  constructor(props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
    this.changeSlider = this.changeSlider.bind(this)
    this.state = {
      slideIndex: 0,
      updateCount: 0,
    }
  }

  changeHandler(e) {
    this.sliderWrapper.slider.slickGoTo(e.target.value)
  }

  changeSlider(){
    this.setState({
      slideIndex: this.sliderWrapper.slider.innerSlider.state.currentSlide
    })
  }

  changeUpdateCount(e) {
    this.setState({
      updateCount: this.state.updateCount + 1
    }, () => console.log(`test state after update: ${this.state.updateCount}`))
  }
  
  render() {
    return (
      <div>
        <h2>Slick Go To</h2>
        <input onChange={this.changeHandler} value={this.state.slideIndex} 
          type='range' min={0} max={3} />
        <SliderWrapper 
          ref={sliderWrapper => this.sliderWrapper = sliderWrapper}  
          beforeChange={this.changeUpdateCount.bind(this)}
          afterChange={this.changeSlider.bind(this)}
          slideIndex={this.state.slideIndex}
          updateCount={this.state.updateCount}
        />
      </div>
    );
  }
}

class SliderWrapper extends React.Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    // certain condition here, perhaps comparison between this.props and nextProps
    // and if you want to update slider on setState in parent of this, return true, otherwise return false
    if (this.props.updateCount !== nextProps.updateCount) {
      return false
    }
    return true
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: this.props.afterChange,
      beforeChange: this.props.beforeChange,
    };
    return (
      <Slider ref={slider => this.slider = slider} {...settings}>
        <div><img src={baseUrl + '/abstract01.jpg'} /></div>
        <div><img src={baseUrl + '/abstract02.jpg'} /></div>
        <div><img src={baseUrl + '/abstract03.jpg'} /></div>
        <div><img src={baseUrl + '/abstract04.jpg'} /></div>
      </Slider>
    )
  }
}