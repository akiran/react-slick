import React from 'react';
import {mount} from 'enzyme';
import Slider from '../src/index';

class SliderWithBeforeChange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: null,
    }
    this.afterChange = this.afterChange.bind(this)
  }
  afterChange(currentSlide) {
    console.log(currentSlide, 'afterChange')
    this.setState({
      currentSlide,
    })
  }
  render() {
    return (
      <Slider afterChange={this.afterChange}>
        <div>slide1</div>
        <div>slide2</div>
        <div>slide3</div>
        <div>slide4</div>
      </Slider>
    )
  }
}

describe('After change Slider', function() {
  it('should render', function() {
    const wrapper = mount(<SliderWithBeforeChange />);
    wrapper.find('.slick-next').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('slide2');
    expect(wrapper.state()).toEqual({currentSlide: 1})
    wrapper.find('.slick-next').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('slide3');
    expect(wrapper.state()).toEqual({currentSlide: 2})
    wrapper.find('.slick-prev').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('slide2');
    expect(wrapper.state()).toEqual({currentSlide: 1})
  });
});
