import React from 'react'
import {mount} from 'enzyme'
import sinon from 'sinon'
import Slider from '../src/slider'
import {InnerSlider} from '../src/inner-slider'
import {Track} from '../src/track'
import {createSliderReact} from './testUtils'
import defaultProps from '../src/default-props'

function createSliderChildren(noOfSlides){
  return Array.from(Array(noOfSlides).keys()).map(i => (
    <div key={i}><h3>{i+1}</h3></div>
  ))
}

describe('Slider components mount test', () => {

  const settings = {
    noOfSlides: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: false,
    breakpoint: null,
  }
  if(settings.centerMode){
    settings.slidesToScroll = 1 // always scroll by one when centerMode is enabled
  }
  const children = createSliderChildren(settings.noOfSlides)

  sinon.spy(InnerSlider.prototype, 'componentDidMount')
  const sliderComp = (
    <InnerSlider ref={slider => this.innerSlider = slider} {...settings} {...defaultProps}>
      {children}
    </InnerSlider>
  )
  const slider = mount(sliderComp)
  const track = slider.find(Track)

  test('testing props of innerSlider', () => {
    const props = slider.props()
    expect(props.slidesToShow).toBe(settings.slidesToShow)
    expect(props.slidesToScroll).toBe(settings.slidesToScroll)
    expect(props.children.length).toBe(settings.noOfSlides)
  })

  test('testing state of innerSlider', () => {
    // console.log(slider.state())
  })

  test('testing props of the track', () => {
    const props = track.props()
    // console.log(props)
    expect(props.children.length).toBe(settings.noOfSlides)
    expect(props.currentSlide).toEqual(settings.initialSlide || 0)
    // put a test for lazyLoadList in lazyLoad mode
  })
  
  test('test mounting of inner-slider', () => {
    expect(InnerSlider.prototype.componentDidMount.calledOnce).toBe(true)
  })
})
