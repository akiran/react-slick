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
  let currentSlide = null, // no way to find it
    activeSlides = [],
    allSlides = [],
    clonedSlides = [],
    visibleSlides = [] // no way to find these
  slider.find('div.slick-slide').forEach((slide, index) => {
    const slideObj = {
      index: slide.prop('data-index').toString(),
      value: slide.find('h3').length === 1 ? slide.find('h3').text() : '...'
    }
    allSlides.push(slideObj)
    if(slide.hasClass('slick-active')){ activeSlides.push(slideObj) }
    if(slide.hasClass('slick-cloned')) { clonedSlides.push(slideObj) }
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

// let settings = {
//   infinite: true,
//   speed: 0,
//   useCSS: false,
//   lazyLoad: true,
//   noOfSlides: 5,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// }
// let actions = {
//   clickNext: 0,
//   clickPrev: 0,
//   clickSequence: []
// }
// let keys = {
//   currentSlide: true,
//   activeSlides: true,
//   clonedSlides: true,
//   allSlides: true,
// }

// const details = getReactSlickDetails(settings, actions, keys)
// console.log('details:', details)
test('fake test', () => {
  expect(1).toBe(1)
})