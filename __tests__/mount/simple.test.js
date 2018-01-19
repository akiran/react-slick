import {
  createInnerSliderWrapper
} from '../testUtils'

describe('InnerSlider component mount tests', () => {

  let settings = {
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 2,
    useCSS: false,
    noOfSlides: 5,
  }
  
  test('testing few initial props of innerSlider', () => {
    const slider = createInnerSliderWrapper(settings)
    const props = slider.props()
    expect(props.slidesToShow).toBe(settings.slidesToShow)
    expect(props.slidesToScroll).toBe(settings.slidesToScroll)
    expect(props.children.length).toBe(settings.noOfSlides)
  })
  
  test('currentSlide changes during next clicks', () => {
    const slider = createInnerSliderWrapper(settings)
    let currentSlideIndex = settings.initialSlide || 0
    for(let click = 0; click < 2*settings.noOfSlides+2; click++){
      expect(slider.state().currentSlide).toEqual(currentSlideIndex)
      slider.find('.slick-next').simulate('click')
      currentSlideIndex += settings.slidesToScroll || 1
      if (currentSlideIndex >= settings.noOfSlides) {
        currentSlideIndex = 0
      }
    }
  })
  
  test('currentSlide changes during prev clicks', () => {
    const slider = createInnerSliderWrapper(settings)
    let currentSlideIndex = settings.initialSlide || 0
    for(let click = 0; click < 2*settings.noOfSlides+2; click++){
      expect(slider.state().currentSlide).toEqual(currentSlideIndex)
      slider.find('.slick-prev').simulate('click')
      currentSlideIndex -= settings.slidesToScroll || 1
      if (currentSlideIndex < 0) {
        currentSlideIndex = settings.noOfSlides - 1
      }
    }
  })
  
})