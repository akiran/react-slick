import {createInnerSliderWrapper} from './testUtils'

// given slider and actions objects, and simulates given actions
function simulateActions(slider, actions){
  const nextArrow = slider.find('.slick-next')
  const prevArrow = slider.find('.slick-prev')
  if(actions.clickNext){
    for(let click = 0; click < actions.clickNext; click++){
      nextArrow.simulate('click')
    }
  }
  if(actions.clickPrev){
    for(let click = 0; click < actions.clickPrev; click++){
      prevArrow.simulate('click')
    }
  }
  if(actions.clickSequence){
    for(let click of actions.clickSequence){
      if(click === 'n'){
        nextArrow.simulate('click')
      } else if(click === 'p') {
        prevArrow.simulate('click')
      } else {
        // not a valid action for now
      }
    }
  }
  // console.log('after simulating actions, state of slider:', slider.state())
}

function fetchDetails(slider, keys){
  let details = {...fetchDOMDetails(slider, keys)}
  if(keys.currentSlide){
    details.currentSlide = slider.state().currentSlide.toString()
  }
  return details
}

function fetchDOMDetails(slider, keys){
  let details = {}
  let currentSlide = null,
    activeSlides = [],
    allSlides = [],
    clonedSlides = [],
    visibleSlides = [] // currently no way to find these
  slider.find('div.slick-slide').forEach((slide, index) => {
    const slideObj = {
      index: slide.prop('data-index').toString(),
      value: slide.find('h3').length === 1 ? slide.find('h3').text() : '...'
    }
    allSlides.push(slideObj)
    if(slide.hasClass('slick-active')){ activeSlides.push(slideObj) }
    if(slide.hasClass('slick-cloned')) { clonedSlides.push(slideObj) }
    if(slide.hasClass('slick-current')) { currentSlide = slideObj }
  })
  if(keys.currentSlide) { details.currentSlide = currentSlide }
  if(keys.activeSlides) { details.activeSlides = activeSlides }
  if(keys.allSlides) { details.allSlides = allSlides }
  if(keys.clonedSlides) { details.clonedSlides = clonedSlides }
  if(keys.visibleSlides) { details.visibleSlides = visibleSlides }
  return details
}

export function getReactSlickDetails(settings, actions, keys){
  const slider = createInnerSliderWrapper(settings)
  simulateActions(slider, actions)
  return fetchDetails(slider, keys)
}

/*
settings: [...sliderProps, noOfSlides],
actions: [clickNext, clickPrev, clickSequence],
keys: [currentSlide, activeSlides, clonedSlides, allSlides, visibleSlides]
*/

test('fake test', () => {
  expect(1).toBe(1)
})