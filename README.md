### react-slick

[![Backers on Open Collective](https://opencollective.com/react-slick/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/react-slick/sponsors/badge.svg)](#sponsors) [![Join the chat at https://gitter.im/akiran/react-slick](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/akiran/react-slick?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

##### Carousel component built with React. It is a react port of [slick carousel](http://kenwheeler.github.io/slick/)

## [Documentation](http://react-slick.neostack.com)

### :warning: Alert

:construction: react-slick@0.27._ releases are experimental.  
:white_check_mark: **Use react-slick@0.26 in production** until we make our next stable release (react-slick@0.28)  
:pray: We invite you to test react-slick@0.27._ in dev environment and report any breaking changes.

### Installation

**npm**

```bash
npm install react-slick --save
```

**yarn**

```bash
yarn add react-slick
```

**Also install slick-carousel for css and font**

```bash
npm install slick-carousel

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

or add cdn link in your html

```html
<link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
```

### [PlayGround](https://codesandbox.io/s/ppwkk5l6xx)

### Example

```js
import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
```

### Props

For all available props, go [here](https://react-slick.neostack.com/docs/api/).

### Methods

For all available methods, go [here](https://react-slick.neostack.com/docs/api#methods)

### Development

Want to run demos locally

```bash
git clone https://github.com/akiran/react-slick
cd react-slick
npm install
npm start
open http://localhost:8080
```

## Contributing

Please see the [contributing guidelines](./CONTRIBUTING.md)
