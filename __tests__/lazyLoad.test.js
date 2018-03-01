import { mount } from 'enzyme'
import { createInnerSliderWrapper } from './testUtils'
import assign from 'object-assign'
import { getRequiredLazySlides } from '../src/utils/innerSliderUtils'

const clickNext = wrapper => wrapper.find('.slick-next').simulate('click')
const clickPrev = wrapper => wrapper.find('.slick-prev').simulate('click')

const testSettings = settings => {
  let slider = createInnerSliderWrapper(settings)
  for (let click = 0; click < settings.noOfSlides+2; click++){
    let lazyLoadedList = slider.state().lazyLoadedList
    let expectedLazyLoadedList = getRequiredLazySlides(
      assign({}, slider.props(), slider.state())
    )
    expectedLazyLoadedList.forEach(slide => {
      expect(lazyLoadedList.indexOf(slide) >= 0).toEqual(true)
    })
    clickNext(slider)
  }

  slider = createInnerSliderWrapper(settings)
  for (let click = 0; click < settings.noOfSlides+2; click++){
    let lazyLoadedList = slider.state().lazyLoadedList
    let expectedLazyLoadedList = getRequiredLazySlides(
      assign({}, slider.props(), slider.state())
    )
    expectedLazyLoadedList.forEach(slide => {
      expect(lazyLoadedList.indexOf(slide) >= 0).toEqual(true)
    })
    clickPrev(slider)
  }

  slider = createInnerSliderWrapper(settings)
  for (let click = 0; click < settings.noOfSlides+2; click++){
    let lazyLoadedList =  slider.state().lazyLoadedList
    lazyLoadedList.forEach(slideIndex => {
      expect(slider.find(`[data-index=${slideIndex}]`).props().children !== undefined).toBe(true)
    })
  }
}

const tryAllConfigs = (settings, settingsList) => {
  let leaf = true
  for(let key of Object.keys(settings)) {
    if (Array.isArray(settings[key])) {
      leaf = false
      for (let val of settings[key]) {
        tryAllConfigs({...settings, [key]: val}, settingsList)
      }
    }
  }
  if (leaf) {
    if (settingsList.map(
        setting => JSON.stringify(setting)).indexOf(JSON.stringify(settings)) < 0) {
          settingsList.push(settings)
        }
  }
}

describe('LazyLoad test', () => {
  let settings = {
    lazyLoad: true,
    useCSS: false,
    speed: 0,
    noOfSlides: [7, 8],
    initialSlide: [0, 5],
    slidesToShow: [1, 3, 4],
    slidesToScroll: [1, 3],
    centerMode: [true, false]
  }
  let settingsList = []
  tryAllConfigs(settings, settingsList)
  // shuffle the list
  settingsList.sort(() => .5 - Math.random())
  settingsList.forEach((settings, index) => {
    if (Math.random() < .5) {
      test(`Testing config no. ${index}`, () => testSettings(settings))
    }
  })
})