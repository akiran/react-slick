
// Following function expects props and states from InnerSlider component
// and returns a list of slides that need to be loaded in order to complete the list frame
export const getOnDemandLazySlides = spec => {
  /*
  @TODO: call onLazyLoad event here
  */
  let onDemandSlides = []
  let paddedSlides = parseInt(spec.centerPadding) > 0 ? 1 : 0
  // two variables below don't care about rtl mode, fix later
  // you might wanna use trackUtils functions for this
  let slidesOnLeft = spec.centerMode ? Math.floor(spec.slidesToShow / 2) + paddedSlides : 0
  let slidesOnRight = spec.centerMode ? Math.floor(spec.slidesToShow / 2) + paddedSlides : spec.slidesToShow
  let startIndex = spec.currentSlide - slidesOnLeft
  let endIndex = spec.currentSlide + slidesOnRight
  for (let slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex)
    }
  }
  return onDemandSlides
}