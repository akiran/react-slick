export const getPreClones = spec => {
  if(spec.unslick || !spec.infinite) {
    return 0
  }
  if (spec.variableWidth) {
    return spec.slideCount
  }
  return spec.slidesToShow + (spec.centerMode ? 1 : 0)
}


export const getPostClones = spec => {
  if (spec.unslick || !spec.infinite) {
    return 0
  }
  return spec.slideCount
}

export const getTotalSlides = spec => spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec)

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