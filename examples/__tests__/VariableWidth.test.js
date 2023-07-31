import React from "react";
import VariableWidth from "../VariableWidth";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { html as beautify_html } from "js-beautify";
import {
  getActiveSlide,
  clickNext,
  clickPrevious,
  hasClass,
  getActiveSlides,
  getActiveSlidesCount,
  getActiveSlidesText,
  getButtons,
  getButtonsListItem,
  getCurrentSlide
} from "../../test-utils";

describe("Variable Width example", () => {
  it("should have 18 slides (6(preclone) + 6(actual) + 6(postclone))", function() {
    const { container } = render(<VariableWidth />);
    //Should be 18
    expect(container.getElementsByClassName("slick-slide").length).toBe(18);
  });
  it("should have 12 clone slides", function() {
    const { container } = render(<VariableWidth />);
    //Should be 12
    expect(container.getElementsByClassName("slick-cloned").length).toBe(12);
  });
  it("should have 1 current slide", function() {
    const { container } = render(<VariableWidth />);
    expect(
      container.querySelectorAll(".slick-slide.slick-current").length
    ).toBe(1);
    expect(getCurrentSlide(container).textContent).toBe("100");
  });
  it("should have 1 active slide", function() {
    const { container } = render(<VariableWidth />);
    expect(container.querySelectorAll(".slick-slide.slick-active").length).toBe(
      1
    );
    expect(
      Array.from(getActiveSlide(container).children).map(e => e.textContent)[0]
    ).toBe("100");
  });
  it("should have 6 dots", function() {
    const { container } = render(<VariableWidth />);
    expect(
      container.getElementsByClassName("slick-dots")[0].children.length
    ).toBe(6);
  });
  it("should have 1 active dot", function() {
    const { container } = render(<VariableWidth />);

    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
  });
  it("should have a prev arrow", function() {
    const { container } = render(<VariableWidth />);
    expect(container.getElementsByClassName("slick-prev").length).toBe(1);
  });
  it("should have a next arrow", function() {
    const { container } = render(<VariableWidth />);
    expect(container.getElementsByClassName("slick-next").length).toBe(1);
  });
  it("should got to next slide when next button is clicked", function() {
    const { container } = render(<VariableWidth />);
    clickNext(container);
    expect(
      container.querySelectorAll(".slick-slide.slick-active")[0].textContent
    ).toBe("200");
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
    expect(
      container.querySelectorAll(".slick-dots")[0].children[1]
    ).toHaveClass("slick-active");
  });
  it("should goto previous slide when prev button is clicked", function() {
    const { container } = render(<VariableWidth />);
    clickPrevious(container);
    expect(
      container.querySelectorAll(".slick-slide.slick-active")[0].textContent
    ).toBe("175");
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
    expect(
      container.querySelectorAll(".slick-dots")[0].children[5]
    ).toHaveClass("slick-active");
  });
  it("should goto 4th slide when 4th dot is clicked", function() {
    const { container } = render(<VariableWidth />);
    fireEvent(
      container.querySelectorAll(".slick-dots button")[3],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesText(container)[0]).toEqual("300");
    expect(getActiveSlidesCount(container)).toEqual(1);
    expect(hasClass(getButtonsListItem(container)[3], "slick-active")).toEqual(
      true
    );
  });
});
