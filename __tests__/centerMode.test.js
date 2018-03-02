import { mount } from 'enzyme'
import assign from 'object-assign'
import { getRequiredLazySlides } from '../src/utils/innerSliderUtils'
import { createInnerSliderWrapper, clickNext, clickPrev, tryAllConfigs } from './testUtils'
import { getTrackLeft } from '../src/mixins/trackHelper'


const actualTrackLeft = wrapper => wrapper.find('.slick-track').props().style.transform
  .match(/translate3d\((\d+)px/i)[1]

const testSettings = settings => {
  // console.log('settings:', settings)
  let slider = createInnerSliderWrapper(settings)
  for(let click = 0; click < settings.noOfSlides + 2; click++) {
    let trackLeft = parseInt(actualTrackLeft(slider))
    // console.log('=> next ', trackLeft)
    let spec = assign({}, slider.props(), slider.state(), {
      slideIndex: slider.state().currentSlide,
      trackRef: null,
    })
    let expectedTrackLeft = getTrackLeft(spec)
    expect(trackLeft).toEqual(expectedTrackLeft)
    clickNext(slider)
  }
  slider = createInnerSliderWrapper(settings)
  for(let click = 0; click < settings.noOfSlides + 2; click++) {
    let trackLeft = parseInt(actualTrackLeft(slider))
    // console.log('=> prev ', trackLeft)
    let spec = assign({}, slider.props(), slider.state(), {
      slideIndex: slider.state().currentSlide,
      trackRef: null,
    })
    let expectedTrackLeft = getTrackLeft(spec)
    expect(trackLeft).toEqual(expectedTrackLeft)
    clickPrev(slider)
  }
}

describe('CenterMode test', () => {
  let settings = {
    useCSS: false,
    speed: 0,
    centerMode: true,
    noOfSlides: [7, 8],
    initialSlide: [0, 5],
    slidesToShow: [1, 3, 4],
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