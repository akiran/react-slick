// Test fix of #2414: Extra clones in infinite mode when there is only one slide or unslick is true
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import {
  getCurrentSlideContent,
  getSlidesCount,
  getActiveSlidesCount,
  getClonesCount,
  hasArrows,
  hasDots
} from "../../test-utils";
import { GenericSliderComponent } from "../TestComponents";

function SliderWithOneSlide() {
  const settings = {
    dots: true,
    infinite: true
  };
  return <GenericSliderComponent slidesCount={1} settings={settings} />;
}

function SliderWithUnslick() {
  const settings = {
    dots: true,
    infinite: true,
    unslick: true
    // slidesToShow: 2
  };
  return <GenericSliderComponent slidesCount={2} settings={settings} />;
}

describe("Slider with one slide", function() {
  it("should have 1 active slide", function() {
    const { container } = render(<SliderWithOneSlide />);
    expect(getActiveSlidesCount(container)).toEqual(1);
  });
  it("should not have any clones", function() {
    const { container } = render(<SliderWithOneSlide />);
    expect(getClonesCount(container)).toEqual(0);
  });
  it("should no have dots and arrows", function() {
    const { container } = render(<SliderWithOneSlide />);
    expect(hasArrows(container)).toEqual(false);
    expect(hasDots(container)).toEqual(false);
  });
});

describe("Slider with unslick=true", function() {
  // Remove skip on this test after fixing the unslick issue
  it.skip("should have all slides active", function() {
    const { container } = render(<SliderWithUnslick />);
    expect(getActiveSlidesCount(container)).toEqual(2);
  });
  it("should not have any clones", function() {
    const { container } = render(<SliderWithUnslick />);
    expect(getClonesCount(container)).toEqual(0);
  });
  it("should no have dots and arrows", function() {
    const { container } = render(<SliderWithUnslick />);
    expect(hasArrows(container)).toEqual(false);
    expect(hasDots(container)).toEqual(false);
  });
});
