import { changeSlide } from "../src/utils/innerSliderUtils";

describe("changeSlide", () => {
  it("should not pass to before 0 when not infinite", function() {
    const settings = {
      slidesToScroll: 1,
      slidesToShow: 1,
      slideCount: 10,
      currentSlide: 0,
      targetSlide: 0,
      lazyLoad: false,
      infinite: false
    };

    const targetSlide = changeSlide(settings, { message: "previous" });
    expect(targetSlide).toEqual(0);
  });

  it("should not pass to after last slide when not infinite", function() {
    const settings = {
      slidesToScroll: 1,
      slidesToShow: 1,
      slideCount: 10,
      currentSlide: 9,
      targetSlide: 9,
      lazyLoad: false,
      infinite: false
    };

    const targetSlide = changeSlide(settings, { message: "next" });
    expect(targetSlide).toEqual(9);
  });
});
