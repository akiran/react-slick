### react-slick

[![Backers on Open Collective](https://opencollective.com/react-slick/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/react-slick/sponsors/badge.svg)](#sponsors) [![Join the chat at https://gitter.im/akiran/react-slick](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/akiran/react-slick?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

##### Carousel component built with React. It is a react port of [slick carousel](http://kenwheeler.github.io/slick/)

## [Documentation](http://react-slick.neostack.com)

### Installation

**npm**

```bash
npm install react-slick
```

**yarn**

```bash
yarn add react-slick
```

⚠️ Also install slick-carousel for css and font

```bash
npm install slick-carousel
@import "~slick-carousel/slick/slick.css";
@import "~slick-carousel/slick/slick-theme.css";
```

or add cdn link in your html

```html
<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
```

### [PlayGround](https://codesandbox.io/s/zzloxr09mp)

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

<a href="https://opencollective.com/react-slick/donate" target="_blank">
  <img src="https://opencollective.com/react-slick/donate/button@2x.png?color=blue" width=300 />
</a>

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/akiran/react-slick/graphs/contributors"><img src="https://opencollective.com/react-slick/contributors.svg?width=890" /></a>

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/react-slick#backer)]

<a href="https://opencollective.com/react-slick#backers" target="_blank"><img src="https://opencollective.com/react-slick/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/react-slick#sponsor)]

<a href="https://opencollective.com/react-slick/sponsor/0/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/1/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/2/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/3/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/4/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/5/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/6/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/7/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/8/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/9/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/9/avatar.svg"></a>
