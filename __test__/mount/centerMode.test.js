import { getJQuerySlickDetails } from "../jQSlickUtils";
import { getReactSlickDetails } from "../reactSlickUtils";

let settings = {
  infinite: true,
  speed: 0,
  useCSS: false,
  noOfSlides: 5,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true
};
let actions = {
  clickNext: 0,
  clickPrev: 0,
  clickSequence: []
};
let keys = {
  currentSlide: true,
  activeSlides: true,
  clonedSlides: true,
  allSlides: true
};

const testsUtil = (settings, actions, keys) => {
  const jqDetails = getJQuerySlickDetails(settings, actions, keys);
  const reactDetails = getReactSlickDetails(settings, actions, keys);
  test("checking current slide jQuery vs react", () => {
    expect(reactDetails.currentSlide).toEqual(parseInt(jqDetails.currentSlide));
  });
  test("checking active slides jQuery vs react", () => {
    expect(reactDetails.activeSlides).toEqual(jqDetails.activeSlides);
  });

  // Following two tests fail
  test("checking cloned slides jQuery vs react", () => {
    expect(reactDetails.clonedSlides.map(slide => slide.index)).toEqual(
      jqDetails.clonedSlides.map(slide => slide.index)
    );
  });
  test("checking all slides jQuery vs react", () => {
    expect(reactDetails.allSlides.map(slide => slide.index)).toEqual(
      jqDetails.allSlides.map(slide => slide.index)
    );
  });
};

describe("InnerSlider component tests: Part 1", () => {
  testsUtil(settings, actions, keys);
});
describe("InnerSlider component tests: Part 2", () => {
  settings.slidesToScroll = 2;
  testsUtil(settings, actions, keys);
});
describe("InnerSlider component tests: Part 3", () => {
  actions.clickNext = 2;
  testsUtil(settings, actions, keys);
});
describe("InnerSlider component tests: Part 4", () => {
  actions.clickPrev = 2;
  testsUtil(settings, actions, keys);
});
describe("InnerSlider component tests: Part 5", () => {
  actions.clickNext = 6;
  testsUtil(settings, actions, keys);
});
describe("InnerSlider component tests: Part 6", () => {
  actions.clickPrev = 6;
  testsUtil(settings, actions, keys);
});
describe("InnerSlider component tests: Part 7", () => {
  actions.clickSequence = ["n", "n", "n", "n", "n", "n", "p", "p", "p"];
  testsUtil(settings, actions, keys);
});
describe("InnerSlider component tests: Part 8", () => {
  actions.clickSequence = ["p", "p", "p", "p", "p", "p", "n", "n", "n"];
  testsUtil(settings, actions, keys);
});
