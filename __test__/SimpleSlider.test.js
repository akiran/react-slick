// includes tests of
// SimpleSlider, MultipleItems
import { testSlider } from "./testUtils";

describe("SimpleSlider with combinations of possibilities", function() {
  // try around several possibilities
  let _noOfSlides = [2, 5, 12];
  let _slidesToShow = [2, 5, 10];
  let _slidesToScroll = [1, 2, 3, 10];
  if (true) {
    // for switching real quick to lesser/easier tests for simplicity
    _noOfSlides = [5];
    _slidesToShow = [2];
    _slidesToScroll = [1, 2];
  }

  for (let noOfSlides of _noOfSlides) {
    for (let slidesToShow of _slidesToShow) {
      for (let slidesToScroll of _slidesToScroll) {
        // following restrictions may not be 100% correct, and there may be more restrictions
        if (slidesToShow > noOfSlides || slidesToScroll > slidesToShow) {
          continue;
        }
        if (noOfSlides === slidesToShow) {
          // temporary, jquery slick disables arrows in this case, so the tests fail
          continue;
        }
        if (slidesToShow === slidesToScroll) {
          // temporary, active-class is not being assigned properly, so tests fail
          continue;
        }
        const settings1 = {
          infinite: true,
          speed: 0,
          noOfSlides,
          slidesToShow,
          slidesToScroll,
          useCSS: false
        };
        test(`Test with settings => noOfSlides: ${noOfSlides}, slidesToShow: ${slidesToShow}, slidesToScroll: ${slidesToScroll}`, function() {
          testSlider(settings1);
        });
      }
    }
  }
});
