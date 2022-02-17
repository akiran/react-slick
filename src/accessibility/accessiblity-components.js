import React from 'react';

export function AccessibilityInstructions({ instructions }) {
    return (
        <p className="slick-instructions slick-sr-only">
            {instructions}
        </p>
    );
}

export function AccessibilityAutoPlayToggle({ isAutoPlaying, onToggle }) {
    return (
        <button type="button" className="slick-autoplay-toggle-button" onClick={onToggle}>
            {isAutoPlaying
                ? <span className="slick-pause-icon" aria-hidden="true" />
                : <span className="slick-play-icon" aria-hidden="true" />
            }
            {isAutoPlaying
                ? <span className="slick-pause-text slick-sr-only">Pause</span>
                : <span className="slick-play-text slick-sr-only">Play</span>
            }
        </button>
    );
}