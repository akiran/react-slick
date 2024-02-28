import React from "react";

import { render } from "@testing-library/react";
import { clickNext } from "../../test-utils";
import AdaptiveHeightPartialSlider from "../AdaptiveHeightPartialSlider";

const originalOffsetHeight = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  "offsetHeight"
);

const mockOffsetHeight = {
  configurable: true,
  get() {
    return this.firstChild.firstChild.dataset.offsetheigth || -1;
  }
};

describe("AdaptiveHeightPartialSlider", () => {
  beforeAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetHeight",
      mockOffsetHeight
    );
  });

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetHeight",
      originalOffsetHeight
    );
  });

  test("Renders the AdaptiveHeightPartialSlider component with initial height of 10px for the first slide", () => {
    const { container } = render(<AdaptiveHeightPartialSlider />);
    expect(container.querySelector(".slick-list")).toHaveStyle({
      height: "10px"
    });
  });

  test("Changes the height to 20px for the second slide after clicking next", () => {
    const { container } = render(<AdaptiveHeightPartialSlider />);
    clickNext(container);
    expect(container.querySelector(".slick-list")).toHaveStyle({
      height: "20px"
    });
  });
});
