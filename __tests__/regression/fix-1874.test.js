// Test fix of#1874:  "slick-current" is always on first slide despite initialSlide != 0

import React from "react";
import { render } from "@testing-library/react";

import { getCurrentSlideContent, clickNext } from "../../test-utils";
import { GenericSliderComponent } from "../TestComponents";

describe("currentSlide test with different initialSlide values", () => {
  it("currentSlide is 0 when initialSlide is 0", function() {
    const { container } = render(<GenericSliderComponent slidesCount={6} />);
    expect(getCurrentSlideContent(container)).toEqual("1");
    clickNext(container);
    expect(getCurrentSlideContent(container)).toEqual("2");
  });

  it("currentSlide is 2 when initialSlide is 2", function() {
    const { container } = render(
      <GenericSliderComponent slidesCount={6} settings={{ initialSlide: 2 }} />
    );
    expect(getCurrentSlideContent(container)).toEqual("3");
    clickNext(container);
    expect(getCurrentSlideContent(container)).toEqual("4");
  });
});
