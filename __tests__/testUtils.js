import React from 'react'
import Slider from '../src/slider'

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
      {children.map(i => <div key={i}><h3>{i}</h3></div>)}
    </Slider>
  )
}

// creates a dom string, containing children of slick children
export function createSliderJQuery(noOfSlides){
  let children = []
  for(let i = 0; i < noOfSlides; i++){
    children.push(`<div><h3>${i}</h3></div>`)
  }
  return children.join('')
}