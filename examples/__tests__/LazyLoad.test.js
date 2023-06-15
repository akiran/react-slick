import React from "react";
import LazyLoad from "../LazyLoad";
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

describe("Custom Paging example", () => {
  it("should have 13 slides (1(preclone) + 6(actual) + 1(postclone))", function() {
    const { container } = render(<LazyLoad />);
    expect(container.getElementsByClassName("slick-slide").length).toBe(6);
  });
  it("should have 3 clone slides", function() {
    const { container } = render(<LazyLoad />);
    expect(container.getElementsByClassName("slick-cloned").length).toBe(2);
  });
  it("should have 1 current slide", function() {
    const { container } = render(<LazyLoad />);
    expect(
      container.querySelectorAll(".slick-slide.slick-current").length
    ).toBe(1);
  });
  it("should have 1 active slide", function() {
    const { container } = render(<LazyLoad />);
    expect(container.querySelectorAll(".slick-slide.slick-active").length).toBe(
      1
    );
  });
  it("should have 6 dots", function() {
    const { container } = render(<LazyLoad />);
    expect(
      container.getElementsByClassName("slick-dots")[0].children.length
    ).toBe(4);
  });
  it("should have 1 active dot", function() {
    const { container } = render(<LazyLoad />);

    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
  });
  it("should have a prev arrow", function() {
    const { container } = render(<LazyLoad />);
    expect(container.getElementsByClassName("slick-prev").length).toBe(1);
  });
  it("should have a next arrow", function() {
    const { container } = render(<LazyLoad />);
    expect(container.getElementsByClassName("slick-next").length).toBe(1);
  });
  it("should got to next slide when next button is clicked", function() {
    const { container } = render(<LazyLoad />);
    clickNext(container);
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
    expect(
      container.querySelectorAll(".slick-dots")[0].children[3]
    ).toHaveClass("slick-active");
  });
  it("should goto previous slide when prev button is clicked", function() {
    const { container } = render(<LazyLoad />);
    clickPrevious(container);
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
    expect(
      container.querySelectorAll(".slick-dots")[0].children[1]
    ).toHaveClass("slick-active");
  });
  it("should goto 4th slide when 4th dot is clicked", function() {
    const { container } = render(<LazyLoad />);
    fireEvent(
      container.querySelectorAll(".slick-dots button")[3],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesCount(container)).toEqual(1);
    expect(hasClass(getButtonsListItem(container)[3], "slick-active")).toEqual(
      true
    );
  });
});
