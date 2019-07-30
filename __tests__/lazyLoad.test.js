import { mount } from "enzyme";
import assign from "object-assign";
import { getRequiredLazySlides } from "../src/utils/innerSliderUtils";
import {
  createInnerSliderWrapper,
  clickNext,
  clickPrev,
  tryAllConfigs
} from "./testUtils";

const testSettings = settings => {
  let slider = createInnerSliderWrapper(settings);
  for (let click = 0; click < settings.noOfSlides + 2; click++) {
    let lazyLoadedList = slider.state().lazyLoadedList;
    let expectedLazyLoadedList = getRequiredLazySlides(
      assign({}, slider.props(), slider.state())
    );
    expectedLazyLoadedList.forEach(slide => {
      expect(lazyLoadedList.indexOf(slide) >= 0).toEqual(true);
    });
    clickNext(slider);
  }

  slider = createInnerSliderWrapper(settings);
  for (let click = 0; click < settings.noOfSlides + 2; click++) {
    let lazyLoadedList = slider.state().lazyLoadedList;
    let expectedLazyLoadedList = getRequiredLazySlides(
      assign({}, slider.props(), slider.state())
    );
    expectedLazyLoadedList.forEach(slide => {
      expect(lazyLoadedList.indexOf(slide) >= 0).toEqual(true);
    });
    clickPrev(slider);
  }

  slider = createInnerSliderWrapper(settings);
  for (let click = 0; click < settings.noOfSlides + 2; click++) {
    let lazyLoadedList = slider.state().lazyLoadedList;
    lazyLoadedList.forEach(slideIndex => {
      expect(
        slider.find(`[data-index=${slideIndex}]`).props().children !== undefined
      ).toBe(true);
    });
  }
};

describe("LazyLoad test", () => {
  let settings = {
    lazyLoad: true,
    useCSS: false,
    speed: 0,
    noOfSlides: [7, 8],
    initialSlide: [0, 5],
    slidesToShow: [1, 3, 4],
    slidesToScroll: [1, 3],
    centerMode: [true, false]
  };
  let settingsList = [];
  tryAllConfigs(settings, settingsList);
  // shuffle the list
  settingsList.sort(() => 0.5 - Math.random());
  settingsList.forEach((settings, index) => {
    if (Math.random() < 0.5) {
      test(`Testing config no. ${index}`, () => testSettings(settings));
    }
  });
});
