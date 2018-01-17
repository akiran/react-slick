// this is for fetching details after initializing react and jquery slicks
// and compare those details to see if things are going different

import {createSliderReact, createSliderJQuery} from './testUtils'
import $ from 'jquery'
import * as slickCarousel from 'slick-carousel'
import util from 'util'

function fetchDetails(slider){
  const slidesList = $(slider).find('.slick-slide')
  let slidesDetails = {
    noOfSlides: slidesList.length,
    totalSlides: [],
    activeSlides: [],
    currentSlides: []
  }
  for(let slide of slidesList){
    let curSlideDetails = {}
    curSlideDetails['data-slick-index'] = $(slide).attr('data-slick-index')
    if($(slide).hasClass('slick-active')){
      slidesDetails.activeSlides.push({
        text: $(slide).find('div').find('div').find('h3').text(),
        index: $(slide).attr('data-slick-index')
      })
    }
    if($(slide).hasClass('slick-current')){
      slidesDetails.currentSlides.push({
        text: $(slide).find('div').find('div').find('h3').text(),
        index: $(slide).attr('data-slick-index')
      })
    }
    curSlideDetails['text'] = $(slide).text()
    slidesDetails.totalSlides.push(curSlideDetails)
  }
  return slidesDetails
}

function returnDetails(settings){
  // initialize react slider
  // const slider = mount(createSliderReact(settings))
  // initialize jquery slider
  document.body.innerHTML = `
  <section class="regular slider">
    ${createSliderJQuery(settings.noOfSlides)}
  </section>
  `
  $('.regular.slider').slick({
    ...settings, 
  })
  let detailsObject = {
    afterRightClicks: {}
  }
  // find all the slides
  detailsObject.originalChildrenLength = settings.noOfSlides
  for(let click = 0; click < 5; click++){
    let details = fetchDetails($('.regular.slider'))
    detailsObject.afterRightClicks[`${click}`] = details
    $('.slick-next').click()
  }
  
  document.body.innerHTML = `
  <section class="regular slider">
    ${createSliderJQuery(settings.noOfSlides)}
  </section>
  `
  $('.regular.slider').slick({
    ...settings, 
  })
  detailsObject.afterLeftClicks = {}
  // find all the slides
  detailsObject.originalChildrenLength = settings.noOfSlides
  for(let click = 0; click < 5; click++){
    let details = fetchDetails($('.regular.slider'))
    detailsObject.afterLeftClicks[`${click}`] = details
    $('.slick-prev').click()
  }
  console.log('Entire details object is as follows')
  console.log(util.inspect(detailsObject, {showHidden: false, depth: null}))
}

const settings = {
  infinite: true,
  noOfSlides: 5,
  slidesToShow: 3,
  slidesToScroll: 2,
  useCSS: false,
  speed: 0,
  centerMode: true,
}

returnDetails(settings)

test('fake test to manipulate jest', function(){
  expect(1).toBe(1)
})