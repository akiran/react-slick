import React from 'react'
import Slider from '../src/slider'
import {mount} from 'enzyme'
import $ from 'jquery'
import * as slickCarousel from 'slick-carousel' // defining slick in global environment

// finds active slide number in the last transition in the forward direction
export function activeSlideInLastTransition(noOfSlides, slidesToShow, slidesToScroll){
    let currentSlide = 0
    while(currentSlide < noOfSlides){
        currentSlide += slidesToScroll
    }
    return currentSlide - slidesToScroll
}

// create a react-slider with given noOfSlides and other props
// variable widths are ignored for now for simplicity
export function createSliderReact({noOfSlides, ...props}){
  let children = []
  for(let i = 0; i < noOfSlides; i++){
    children.push(i)
  }
  return (
    <Slider {...props}>
      {children.map(i => <div key={i}><h3>{i+1}</h3></div>)}
    </Slider>
  )
}

// creates a dom string, containing children of slick children
export function createSliderJQuery(noOfSlides){
  let children = []
  for(let i = 0; i < noOfSlides; i++){
    children.push(`<div><h3>${i+1}</h3></div>`)
  }
  return children.join('')
}

// performs the very basic tests while clicking next or prev
export function testSliderScroll({direction, ...settings}){
  const {noOfSlides, slidesToShow, slidesToScroll, initialSlide} = settings
  // initialize react slider
  const slider = mount(createSliderReact(settings))
  // initialize jquery slider
  document.body.innerHTML = `
  <section class="regular slider">
    ${createSliderJQuery(noOfSlides)}
  </section>
  `
  $('.regular.slider').slick({
    ...settings, 
  })
  // console.log('setings:', settings)
  
  let expectedSlideIndex = initialSlide || 0
  for(let click = 0; click < 2*noOfSlides + 2; click++){
    let activeSlides = slider.find('.slick-slide.slick-active')
    let $activeSlides = $('.regular.slider').find('div.slick-active')
    expect(activeSlides.length).toEqual(slidesToShow || 1)
    expect($activeSlides.length).toEqual(slidesToShow || 1)
    let firstActiveSlide = activeSlides.first()
    let $firstActiveSlide = $activeSlides.first()
    // console.log('classes', $firstActiveSlide.attr('data-slick-index'))
    // console.warn('currentSlide:', firstActiveSlide.prop('data-index'), 'expected slide', expectedSlideIndex)
    expect(firstActiveSlide.prop('data-index')).toEqual(expectedSlideIndex % noOfSlides)
    expect(parseInt($firstActiveSlide.attr('data-slick-index'))).toEqual(expectedSlideIndex % noOfSlides)
    if(direction === 'next'){
      // click the next arrow button
      slider.find('.slick-next').simulate('click')
      $('button.slick-next').click()
      expectedSlideIndex += slidesToScroll || 1
      if(expectedSlideIndex >= noOfSlides){
        expectedSlideIndex = 0
      }
    } else {
      // click on the prev arrow button
      slider.find('.slick-prev').simulate('click')
      $('button.slick-prev').click()
      expectedSlideIndex -= slidesToScroll || 1
      if(expectedSlideIndex < 0){
        expectedSlideIndex = activeSlideInLastTransition(noOfSlides, slidesToShow, slidesToScroll)
      }
    }
  }
}

// function to run tests on a slider,
// scrolls slider to the right by clicking right arrow several times
// scrolls slider to the left by clicking left arrow several times
export function testSlider(settings){
  const settings1 = {direction: 'next', ...settings}
  const settings2 = {direction: 'prev', ...settings}
  testSliderScroll(settings1)
  testSliderScroll(settings2)
}

test('fake test to manipulate jest', () => {
  expect(1).toBe(1)
})