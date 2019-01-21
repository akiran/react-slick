"use strict";

import React from "react";
import Play from "../assets/images/play.svg";
import Pause from "../assets/images/pause.svg";

export class PlayPauseButton extends React.PureComponent {
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
      className: "slick-play-pause-button",
      "aria-label": this.props.isPaused
        ? this.props.accessibilityPlayLabel
        : this.props.accessibilityPauseLabel,
      onClick: handler
    };

    return (
      <button type="button" {...playPauseButtonProps}>
        <span
          dangerouslySetInnerHTML={{
            __html: this.props.isPaused ? Play : Pause
          }}
        />
      </button>
    );
  }
}
