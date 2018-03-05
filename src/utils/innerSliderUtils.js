
// Following function expects props and states from InnerSlider component
// and returns a list of slides that need to be loaded in order to complete the list frame
export const getOnDemandLazySlides = spec => {
  /*
  @TODO: call onLazyLoad event here
  */
  let onDemandSlides = []
  // you might wanna use trackUtils functions for this
  let startIndex = lazyStartIndex(spec)
  let endIndex = lazyEndIndex(spec)

  for (let slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex)
    }
  }
  return onDemandSlides
}

export const getRequiredLazySlides = spec => {
  let requiredSlides = []
  let startIndex = lazyStartIndex(spec)
  let endIndex = lazyEndIndex(spec)
  for (let slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex)
  }
  return requiredSlides

}

export const lazyStartIndex = spec => spec.currentSlide - slidesOnLeft(spec)
export const lazyEndIndex = spec => spec.currentSlide + slidesOnRight(spec) // endIndex is exclusive

// may be compared with trackutils equivalents for betterment
export const slidesOnLeft = spec => (
  spec.centerMode
    ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) 
    : 0
)

// may be compared with trackutils equivalents for betterment
export const slidesOnRight = spec => (
  spec.centerMode
  ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0)
  : spec.slidesToShow
)
