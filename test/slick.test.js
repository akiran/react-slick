import Slider from '../src/slider.jsx';
import props from '../src/default-props.js';

const {
  renderIntoDocument,
  findRenderedComponentWithType,
  scryRenderedDOMComponentsWithClass
} = React.addons.TestUtils;

describe('Slick test', () => {

  context('when rendering with default slide class', () => {
    let slides;

    before(() => {
      const component = renderIntoDocument(
        <Slider {...props}>
          <div><h1>Something</h1></div>
        </Slider>
      );
      const slider = findRenderedComponentWithType(component, Slider);
      slides = scryRenderedDOMComponentsWithClass(slider, 'slick-slide');
    });

    it('renders slides with the default class', () => slides.should.not.be.empty());

    it('renders the correct amount of slides', () => slides.should.length(3));
  });

  context('when rendering with custom slide class', () => {
    let slides;

    before(() => {
      const slidesClass = 'customClass';
      const component = renderIntoDocument(
        <Slider {...props} slidesClass={slidesClass}>
          <div><p>Random text</p></div>
          <div><p>Random text</p></div>
        </Slider>);
      const slider = findRenderedComponentWithType(component, Slider);
      slides = scryRenderedDOMComponentsWithClass(slider, slidesClass);
    });

    it('contains slides with the custom class', () => slides.should.not.be.empty());

    it('has the right amount of slides', () => slides.should.length(4));

    it('also contains the default class', () =>
      slides[0].className.should.containEql('slick-slide'));
  });
});
