export function getPreClones({ slidesToShow, centerMode }){
  return slidesToShow + (centerMode ? 1: 0)
}

export function getPostClones({ slideCount }){
  return slideCount
}

export function getTotalSlides({  slideCount, slidesToShow, centerMode, }){
  if (slideCount === 1) {
    return 1
  }
  return getPreClones({ slidesToShow, centerMode }) + slideCount + getPostClones({ slideCount })
}