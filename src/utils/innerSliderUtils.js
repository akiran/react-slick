
// return list of slides that need to be loaded and are not in lazyLoadedList
export const getOnDemandLazySlides = spec => {
  let onDemandSlides = []
  let startIndex = lazyStartIndex(spec)
  let endIndex = lazyEndIndex(spec)
  for (let slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex)
    }
  }
  return onDemandSlides
}

// return list of slides that need to be present
export const getRequiredLazySlides = spec => {
  let requiredSlides = []
  let startIndex = lazyStartIndex(spec)
  let endIndex = lazyEndIndex(spec)
  for (let slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex)
  }
  return requiredSlides

}

// startIndex that needs to be present
export const lazyStartIndex = spec => spec.currentSlide - slidesOnLeft(spec)
// endIndex that needs to be present but is exclusive
export const lazyEndIndex = spec => spec.currentSlide + slidesOnRight(spec)

// no of slides on left of current in active frame
export const slidesOnLeft = spec => (
  spec.centerMode
    ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) 
    : 0
)

// no of slides on right of current in active frame
export const slidesOnRight = spec => (
  spec.centerMode
  ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0)
  : spec.slidesToShow
)

// get width of an element
export const getWidth = elem => elem && elem.offsetWidth || 0

// get height of an element
export const getHeight = elem => elem && elem.offsetHeight || 0

// in case of swipe event, get direction of the swipe event
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

// whether or not we can go next
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

// given an object and a list of keys, return new object with given keys
export const extractObject = (spec, keys) => {
  let newObject = {}
  keys.forEach( key => newObject[key] = spec[key])
  return newObject
}

