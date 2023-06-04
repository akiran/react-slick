<div style="text-align:center">

# React-Slick

</div>

<img src="https://user-images.githubusercontent.com/102548637/236898690-2ceb993f-5335-4bfa-bb6c-ca9fe7ae2883.png" alt="React Slick" width="300" />

React-Slick is a useful and intuitive carousel component built with React. 

This tool enables one to build beautiful and responsive carousels that effectively integrate into a variety of web application projects. React-Slick has efficient documentation and an engaging community, which makes it the perfect tool to use when building dynamic & interactive carousel slideshows for any web application. 

To get setup, please look below at the table of contents.

## Links to Contents:
- [Link to documentation](http://react-slick.neostack.com/)
- [Link to Installation](https://github.com/akiran/react-slick#installation)
- [Link to npm package](https://www.npmjs.com/package/react-slick)
- [Link to playground](https://codesandbox.io/s/ppwkk5l6xx)
- [Link to community Discord](https://discord.gg/z7stRE4Cyb)
- [Link to contributing guidelines](https://github.com/akiran/react-slick/blob/master/CONTRIBUTING.md)
- [Link to MIT License](https://github.com/akiran/react-slick/blob/master/LICENSE)







## [Documentation](http://react-slick.neostack.com)






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

export default function SimpleSlider() {
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

## Community

Join our [discord channel](https://discord.gg/z7stRE4Cyb) to discuss react-slick bugs and ask for help


## Contributing

Please see the [contributing guidelines](./CONTRIBUTING.md)