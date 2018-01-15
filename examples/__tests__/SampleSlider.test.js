import React from 'react'
import Slider from '../../src/slider'
import {mount, render} from 'enzyme'

// variable widths are ignored for now for simplicity
function createSlider({noOfSlides, ...props}){
  // const {noOfSlides, ...props} = settings
  let children = []
  for(let i = 0; i < noOfSlides; i++){
    children.push(i)
  }
  return (
    <Slider {...props}>
      {children.map(i => <div key={i}><h3>{i}</h3></div>)}
    </Slider>
  )
}

// finds active slide number in the last transition in the forward direction
function activeSlideInLastTransition(noOfSlides, slidesToShow, slidesToScroll){
  let currentSlide = 0
  while(currentSlide < noOfSlides){
    currentSlide += slidesToScroll
  }
  return currentSlide - slidesToScroll
}

// performs the very basic tests while clicking next or prev
function testSliderScroll({direction, ...settings}){
  const slider = mount(createSlider(settings))
  const {noOfSlides, slidesToShow, slidesToScroll, initialSlide} = settings
  let expectedSlideIndex = initialSlide || 0
  for(let click = 0; click < 2*noOfSlides + 2; click++){
    let activeSlides = slider.find('.slick-slide.slick-active')
    expect(activeSlides.length).toEqual(slidesToShow || 1)
    let firstActiveSlide = activeSlides.first()
    // console.warn('currentSlide:', firstActiveSlide.prop('data-index'), 'expected slide', expectedSlideIndex)
    expect(firstActiveSlide.prop('data-index')).toEqual(expectedSlideIndex % noOfSlides)
    if(direction === 'next'){
      // console.warn('Next')
      slider.find('.slick-next').simulate('click')
      expectedSlideIndex += slidesToScroll || 1
      if(expectedSlideIndex >= noOfSlides){
        expectedSlideIndex = 0
      }
    } else {
      // console.warn('Previuos')
      slider.find('.slick-prev').simulate('click')
      expectedSlideIndex -= slidesToScroll || 1
      if(expectedSlideIndex < 0){
        // expectedSlideIndex = noOfSlides - 1
        expectedSlideIndex = activeSlideInLastTransition(noOfSlides, slidesToShow, slidesToScroll)
      }
    }
  }
}

// function to run tests on a slider
function testSlider(settings){
  const settings1 = {direction: 'next', ...settings}
  const settings2 = {direction: 'prev', ...settings}
  testSliderScroll(settings1)
  testSliderScroll(settings2)
}


describe('Slider with combinations of possibilities', function(){
  // try around several possibilities
  const _noOfSlides = [2, 5, 12]
  const _slidesToShow = [2, 5, 10]
  const _slidesToScroll = [1, 2, 3, 10]
  for(let noOfSlides of _noOfSlides){
    for(let slidesToShow of _slidesToShow){
      for(let slidesToScroll of _slidesToScroll){
        // following restrictions may not be 100% correct, and there may be more restrictions
        if(slidesToShow > noOfSlides || slidesToScroll > slidesToShow) {
          continue
        }
        const settings1 = {
          infinite: true,
          speed: 1,
          noOfSlides,
          slidesToShow,
          slidesToScroll,
          useCSS: false
        }
        test(`Test with settings => noOfSlides: ${noOfSlides}, slidesToShow: ${slidesToShow}, slidesToScroll: ${slidesToScroll}`, function(){
          testSlider(settings1)
        })
      }
    }
  }
})
