export function getPreClones({ slidesToShow, centerMode, unslick }){
  if (unslick) return 0
  return slidesToShow + (centerMode ? 1: 0)
}

export function getPostClones({ slideCount, unslick }){
  if (unslick) return 0
  return slideCount
}

export function getTotalSlides({  slideCount, slidesToShow, centerMode, unslick }){
  if (slideCount === 1) {
    return 1
  }
  return getPreClones({ slidesToShow, centerMode, unslick }) + slideCount + getPostClones({ slideCount, unslick })
}

export function siblingDirection({ currentSlide, targetSlide, slidesToShow, centerMode, rtl}) {
  if (targetSlide > currentSlide) {
    if (targetSlide > currentSlide + slidesOnRight(slidesToShow, centerMode, rtl)) {
      return 'left'
    }
    return 'right'
  } else {
    if (targetSlide < currentSlide - slidesOnLeft(slidesToShow, centerMode, rtl)) {
      return 'right'
    }
    return 'left'
  }
}

export function slidesOnRight(slidesToShow, centerMode, rtl) {
  // returns no of slides on the right of active slide
  if (centerMode) {
    let right = (slidesToShow - 1) / 2 + 1
    if (rtl && slidesToShow % 2 === 0) right += 1
    return right
  }
  if (rtl) {
    return 0
  }
  return slidesToShow - 1
}

export function slidesOnLeft(slidesToShow, centerMode, rtl) {
  // returns no of slides on the left of active slide
  if (centerMode) {
    let left = (slidesToShow - 1) / 2 + 1
    if (!rtl && slidesToShow % 2 === 0) left += 1
    return left
  }
  if (rtl) {
    return slidesToShow - 1
  }
  return 0
}