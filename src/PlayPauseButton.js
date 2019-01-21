"use strict";

import React from "react";

const playSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 356">
    <path d="M.3-1v357l280.5-178.5L.3-1z" />
  </svg>
);

const pauseSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 354">
    <path d="M.1 353.6h109V0H.1v353.6zM162.5 0v353.6h109V0h-109z" />
  </svg>
);

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
        {this.props.isPaused ? playSvg : pauseSvg}
      </button>
    );
  }
}
