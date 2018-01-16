import React from 'react'
import Slider from '../src/slider'
import {mount, render} from 'enzyme'
import {
  activeSlideInLastTransition, createSliderReact,
  createSliderJQuery
} from './testUtils'
import $ from 'jquery'
// require('slick-carousel')
import * as slickCarousel from 'slick-carousel'


// performs the very basic tests while clicking next or prev
function testSliderScroll({direction, ...settings}){
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
    noOfSlides,
    slidesToShow,
    slidesToScroll,
    initialSlide
  })
  let expectedSlideIndex = initialSlide || 0
  for(let click = 0; click < 2*noOfSlides + 2; click++){
    let activeSlides = slider.find('.slick-slide.slick-active')
    let $activeSlides = $('.regular.slider').find('div.slick-active')
    expect(activeSlides.length).toEqual(slidesToShow || 1)
    expect($activeSlides.length).toEqual(slidesToShow || 1)
    let firstActiveSlide = activeSlides.first()
    // console.warn('currentSlide:', firstActiveSlide.prop('data-index'), 'expected slide', expectedSlideIndex)
    expect(firstActiveSlide.prop('data-index')).toEqual(expectedSlideIndex % noOfSlides)
    if(direction === 'next'){
      // click the next arrow button
      slider.find('.slick-next').simulate('click')
      expectedSlideIndex += slidesToScroll || 1
      if(expectedSlideIndex >= noOfSlides){
        expectedSlideIndex = 0
      }
    } else {
      // click on the prev arrow button
      slider.find('.slick-prev').simulate('click')
      expectedSlideIndex -= slidesToScroll || 1
      if(expectedSlideIndex < 0){
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
  // const _noOfSlides = [12]
  // const _slidesToShow = [10]
  // const _slidesToScroll = [1]

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

describe('jquery slick test1', () => {
  test('running basic jquery test', () => {
    document.body.innerHTML = `
    <section class="regular slider">
      ${createSliderJQuery(5)}
    </section>
    `
    $('.regular.slider').slick()
    const slides = $('div.slick-slide')
    // console.warn('slides', slides.length)
    // // console.warn('content:', $('.slick-slide.slick-active').find('div').find('div').find('h3').text())
    // $('.slick-next.slick-arrow').click()
    // // console.warn('content:', $('.slick-slide.slick-active').find('div').find('div').find('h3').text())
    expect(1).toBe(1)
  })
})
