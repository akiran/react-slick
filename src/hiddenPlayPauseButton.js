"use strict";

import React from "react";

export class HiddenPlayPauseButton extends React.PureComponent {
  clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  }
  render() {
    let handler = this.clickHandler.bind(this);

    let playPauseButtonProps = {
      "data-role": "none",
      className: "sr-only",
      onClick: handler
    };

    return (
      <button type="button" {...playPauseButtonProps}>
        {this.props.isPaused
          ? this.props.accessibilityPlayLabel
          : this.props.accessibilityPauseLabel}
      </button>
    );
  }
}
