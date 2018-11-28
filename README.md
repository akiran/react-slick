### This project is patched react-slick[https://github.com/akiran/react-slick/tree/master] library.

Main patch: impoved ondemand lazy-loading strategy: when slider is loaded and first slide is shown,
4 more slides(images) are preloaded into the DOM.

But this lazy-loading strategy works correctly only if: `slidesToShow = 1` and `slidesToScroll = 1`
