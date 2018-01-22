// this is for fetching details after initializing react and jquery slicks
// and compare those details to see if things are going different

import {createSliderReact, createJQuerySliderChildren, activeSlideInLastTransition} from './testUtils'
import $ from 'jquery'
import * as slickCarousel from 'slick-carousel'
import util from 'util'
import js_beautify, {html as html_beautify} from 'js-beautify'

// simulates actions from given actions object
// takes document from the scope from where it's called
function simulateActions(actions){
  if(actions.clickNext){
    for(let click = 0; click < actions.clickNext; click++){
      $('.slick-next').click()
    }
  }
  if(actions.clickPrev){
    for(let click = 0; click < actions.clickPrev; click++){
      $('.slick-prev').click()
    }
  }
  if(actions.clickSequence){
    for(let click of actions.clickSequence){
      if(click === 'n'){
        $('.slick-next').click()
      } else if (click === 'p') {
        $('.slick-prev').click()
      } else {
        // that's right, you can't even write n/p properly
      }
    }
  }
}

// takes an object of keys and returns those details
/* Possible keys can be one of the following
currentSlide(index and value), activeSlides(index and value), 
allSlides(index and value), clonedSlides(index and value)
*/
function fetchDetails(keys){
  let details = {}
  let currentSlide = null,
    activeSlides = [],
    allSlides = [],
    clonedSlides = [],
    visibleSlides = []
  for (let slide of $('div.slick-slide')){
    const slideObj = {
      index: $(slide).attr('data-slick-index'),
      value: $(slide).find('div').find('div').find('h3').text()
    }
    allSlides.push(slideObj)
    if($(slide).hasClass('slick-current')){ currentSlide = slideObj.index }
    if($(slide).hasClass('slick-active')){ activeSlides.push(slideObj) }
    if($(slide).hasClass('slick-cloned')){ clonedSlides.push(slideObj) }
    if($(slide).attr('aria-hidden') == 'false'){ visibleSlides.push(slideObj) }
  }
  if(keys.currentSlide) { details.currentSlide = currentSlide }
  if(keys.activeSlides) { details.activeSlides = activeSlides }
  if(keys.allSlides) { details.allSlides = allSlides }
  if(keys.clonedSlides) { details.clonedSlides = clonedSlides }
  if(keys.visibleSlides) { details.visibleSlides = visibleSlides }
  return details
}

// creates a jQuery slick with given settings and
// performs the given actions
// returns the given keys
export function getJQuerySlickDetails(settings, actions, keys){
  // create new slider
  document.body.innerHTML = `
  <section class="regular slider">
  ${createJQuerySliderChildren(settings.noOfSlides)}
  </section>
  `
  $('.regular.slider').slick({
    ...settings
  })
  simulateActions(actions)
  // console.log(html_beautify($('.regular.slider').html()))
  return fetchDetails(keys)
}

const settings = {
  infinite: true,
  noOfSlides: 5,
  slidesToShow: 3,
  slidesToScroll: 2,
  useCSS: false,
  speed: 0,
}
const actions = {
  clickNext: 2,
  clickPrev: 1,
  clickSequence: ['n', 'p', 'n']
}
const keys = {
  activeSlides: true,
  visibleSlides: true,
  allSlides: true,
}

test('testing getJQuerySlickDetails utility', () => {
  const details = getJQuerySlickDetails(settings, actions, keys)
  expect(details.activeSlides).toEqual(details.visibleSlides)
})
