import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { html as beautify_html } from "js-beautify";
import {
  activeSlide,
  clickNext,
  clickPrevious,
  getButtons,
  getCurrentSlide
} from "../../test-utils";
import FocusOnSelect from "../FocusOnSelect";

describe("FocusOnSelect Tests", () => {
  test("Activity Test", () => {
    const { container } = render(<FocusOnSelect />);
    expect(
      parseInt(getCurrentSlide(container).getAttribute("data-index"))
    ).toEqual(0);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
    Array.from(container.getElementsByClassName("slick-slide")).map(e =>
      e.getAttribute("data-index") == "2"
        ? fireEvent(
            e,
            new MouseEvent("click", { bubbles: true, cancelable: true })
          )
        : null
    );
    expect(
      parseInt(getCurrentSlide(container).getAttribute("data-index"))
    ).toEqual(2);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
