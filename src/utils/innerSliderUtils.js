
// Following function expects props and states from InnerSlider component
// and returns a list of slides that need to be loaded in order to complete the list frame
export const getOnDemandLazySlides = spec => {
  /*
  @TODO: call onLazyLoad event here
  */
  let onDemandSlides = []
  // you might wanna use trackUtils functions for it
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

export const getWidth = elem => elem && elem.offsetWidth || 0

export const getHeight = elem => elem && elem.offsetHeight || 0

export const getSwipeDirection = (touchObject, verticalSwiping=false) => {
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);
  if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
  }
  if ((swipeAngle <= 45) && (swipeAngle >= 0) || (swipeAngle <= 360) && (swipeAngle >= 315)) {
      return 'left';
  }
  if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
      return 'right';
  }
  if (verticalSwiping === true) {
    if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
      return 'up';
    } else {
      return 'down';
    }
  }

  return 'vertical';

}

export const canGoNext = spec => {
  let canGo = true
  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false
    } else if (spec.slideCount <= spec.slidesToShow ||
      spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false
    }
  }
  return canGo
}
