import React from "react";
import { fireEvent, render } from "@testing-library/react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Count {this.state.count}
      </button>
    );
  }
}

describe("sample counter test", function() {
  it("mutliple counts", function() {
    const { container } = render(<Counter />);
    const button = container.getElementsByTagName("Button")[0];
    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(button.textContent).toEqual("Count 2");
  });
});
