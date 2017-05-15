export default function canGoNext(opts){
  var canGo = true;
  if (!opts.infinite) {
    if (opts.centerMode) {
      // check if current slide is last slide
      if (opts.currentSlide >= (opts.slideCount - 1)) {
        canGo = false;
      }
    } else {
      // check if all slides are shown in slider
      if (opts.slideCount <= opts.slidesToShow ||
        opts.currentSlide >= (opts.slideCount - opts.slidesToShow)) {
        canGo = false;
      }
    }
  }
  return canGo;
}
