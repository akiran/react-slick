import {
  clickNext,
  clickPrevious,
  getSlides,
  getCurrentSlide,
  hasClass,
  getClonesCount
} from "../test-utils";
import { createInnerSliderWrapper } from "./testUtils";

// given slider and actions objects, and simulates given actions
function simulateActions(slider, actions) {
  if (actions.clickNext) {
    for (let click = 0; click < actions.clickNext; click++) {
      clickNext(slider);
    }
  }
  if (actions.clickPrev) {
    for (let click = 0; click < actions.clickPrev; click++) {
      clickPrevious(slider);
    }
  }
  if (actions.clickSequence) {
    for (let click of actions.clickSequence) {
      if (click === "n") {
        clickNext(slider);
      } else if (click === "p") {
        clickPrevious(slider);
      } else {
        // not a valid action for now
      }
    }
  }
  // console.log('after simulating actions, state of slider:', slider.state())
}

function fetchDetails(container, keys) {
  let details = { ...fetchDOMDetails(container, keys) };
  if (keys.currentSlide) {
    details.currentSlide = getCurrentSlide(container).textContent;
  }
  return details;
}

function fetchDOMDetails(slider, keys) {
  let details = {};
  let currentSlide = null,
    activeSlides = [],
    allSlides = [],
    clonedSlides = [],
    visibleSlides = []; // currently no way to find these
  //Array.from(getSlides(slider)).forEach(e=>console.log(Array.from(e.getElementsByTagName("h3")).length));
  Array.from(getSlides(slider)).forEach((slide, index) => {
    const slideObj = {
      index: slide.getAttribute("data-index"),
      value:
        Array.from(slide.getElementsByTagName("h3")).length === 1
          ? slide.querySelector("h3").textContent
          : "..."
    };
    allSlides.push(slideObj);
    if (hasClass(slide, "slick-current")) {
      currentSlide = slideObj;
    }
    if (hasClass(slide, "slick-active")) {
      activeSlides.push(slideObj);
    }
    if (hasClass(slide, "slick-cloned")) {
      clonedSlides.push(slideObj);
    }
  });
  if (keys.currentSlide) {
    details.currentSlide = currentSlide;
  }
  if (keys.activeSlides) {
    details.activeSlides = activeSlides;
  }
  if (keys.allSlides) {
    details.allSlides = allSlides;
  }
  if (keys.clonedSlides) {
    details.clonedSlides = clonedSlides;
  }
  if (keys.visibleSlides) {
    details.visibleSlides = visibleSlides;
  }
  return details;
}

export function getReactSlickDetails(settings, actions, keys) {
  const slider = createInnerSliderWrapper(settings);
  simulateActions(slider, actions);
  return fetchDetails(slider, keys);
}

/*
settings: [...sliderProps, noOfSlides],
actions: [clickNext, clickPrev, clickSequence],
keys: [currentSlide, activeSlides, clonedSlides, allSlides, visibleSlides]
*/

test("fake test", () => {
  expect(1).toBe(1);
});
