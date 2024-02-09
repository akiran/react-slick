import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";

//Fix for "matchMedia not present, legacy browsers require a polyfill jest" error
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
