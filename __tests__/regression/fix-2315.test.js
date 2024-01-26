// Test fix of #2315: Slider crashing after a state change in parent component
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { getCurrentSlideContent, getSlidesCount } from "../../test-utils";
import { GenericSliderComponent } from "../TestComponents";

function TestSlider() {
  const [count, setCount] = React.useState();

  return (
    <div>
      <button className="increment-button" onClick={() => setCount(count + 1)}>
        Increment {count}
      </button>
      <GenericSliderComponent slidesCount={6} settings={{ count }} />
    </div>
  );
}

describe("State change in parent component of slider", () => {
  it("Slider shoud work afer clicking on Increment button", function() {
    const { container } = render(<TestSlider />);
    fireEvent(
      container.getElementsByClassName("increment-button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    // Throws an error "Maximum update depth exceeded." if the bug exists
    expect(getCurrentSlideContent(container)).toEqual("1");
    expect(getSlidesCount(container)).toEqual(13);
  });
});
