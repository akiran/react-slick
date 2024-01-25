//Test fix of #1813: In infinite mode, when slidesToShow equal to the length of slides, infinite functionality is not working.

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Slider from "../../src/index";

import {
  activeSlide,
  activeSlides,
  clickNext,
  clickPrevious,
  getActiveButton,
  getActiveSlidesCount,
  getActiveSlidesText,
  getButtons,
  getButtonsLength,
  getButtonsListItem,
  getClonesCount,
  getCurrentSlide,
  getSlidesCount,
  hasClass
} from "../../test-utils";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

describe("Multiple Items with slidesToShow = slides count in infinite mode", function() {
  it("should have 9 actual slides and (9(pre) + 9(post)) clone slides", function() {
    //Todo: Need to fix extra clones
    const { container } = render(<MultipleItems />);
    expect(getSlidesCount(container)).toEqual(27);
    expect(getClonesCount(container)).toEqual(18);
  });
  it("should have 9 active slides", function() {
    const { container } = render(<MultipleItems />);
    expect(getActiveSlidesCount(container)).toEqual(9);
  });
  it("should have 3 dots", function() {
    const { container } = render(<MultipleItems />);
    expect(getButtonsLength(container)).toEqual(3);
  });
  it("should show first 9 slides", function() {
    const { container } = render(<MultipleItems />);
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ]);
  });
  it("should show slides from 4 when next button is clicked", function() {
    const { container } = render(<MultipleItems />);
    clickNext(container);
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual([
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "1",
      "2",
      "3"
    ]);
  });
  it("should show slides from 7 when previous button is clicked", function() {
    const { container } = render(<MultipleItems />);
    clickPrevious(container);
    expect(getActiveButton(container)).toEqual(["3"]);
    expect(getActiveSlidesText(container)).toEqual([
      "7",
      "8",
      "9",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ]);
  });
  it("should show slides first 9 slides when first dot is clicked", function() {
    const { container } = render(<MultipleItems />);
    fireEvent(
      getButtons(container)[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ]);
  });
  it("should show slides from 4 when middle dot is clicked", function() {
    const { container } = render(<MultipleItems />);
    fireEvent(
      getButtons(container)[1],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual([
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "1",
      "2",
      "3"
    ]);
  });
  it("should show slides from 7 when last dot is clicked", function() {
    const { container } = render(<MultipleItems />);
    fireEvent(
      getButtons(container)[2],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["3"]);
    expect(getActiveSlidesText(container)).toEqual([
      "7",
      "8",
      "9",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ]);
  });
});
