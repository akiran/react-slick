import {
  createInnerSliderWrapper, createInnerSlider
} from '../testUtils'
import {getJQuerySlickDetails} from '../jQSlickUtils'

describe('InnerSlider component tests with lazyload', () => {
  
  let settings = {
    infinite: true,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    useCSS: false,
    noOfSlides: 5,
    lazyLoad: true
  }

  test('testing few initial props of innerSlider', () => {
    const slider = createInnerSliderWrapper(settings)
    const props = slider.props()
    expect(props.slidesToShow).toBe(settings.slidesToShow)
    expect(props.slidesToScroll).toBe(settings.slidesToScroll)
    expect(props.children.length).toBe(settings.noOfSlides)
    expect(props.lazyLoad).toEqual(settings.lazyLoad)
  })

  test('currentSlide changes during next clicks', () => {
    const keys = {
      currentSlide: true,
    }
    const slider = createInnerSliderWrapper(settings)
    let currentSlideIndex = settings.initialSlide || 0

    for(let click = 0; click < settings.noOfSlides; click++){
      const jqDetails = getJQuerySlickDetails(settings, {clickNext: click}, keys)
      // test below fails on slidesToShow: 3, slidesToScroll: 2, noOfSlides: 5
      expect(slider.state().currentSlide).toEqual(parseInt(jqDetails.currentSlide.index))
      slider.find('.slick-next').simulate('click')
      currentSlideIndex += settings.slidesToScroll || 1
      if (currentSlideIndex >= settings.noOfSlides) {
        currentSlideIndex = 0
      }
    }
  })

})