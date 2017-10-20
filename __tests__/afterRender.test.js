import React from 'react';
import {mount} from 'enzyme';
import Slider from '../src/index';

class SliderWithAfterRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wasAfterRenderCalled: 0
    }
    this.afterRender = this.afterRender.bind(this)
  }
  afterRender(slider) {
    this.setState({
      wasAfterRenderCalled: this.state.wasAfterRenderCalled+1
    })
  }
  render() {
    return (
      <Slider afterRender={this.afterRender}>
        <div>slide1</div>
        <div>slide2</div>
        <div>slide3</div>
        <div>slide4</div>
      </Slider>
    )
  }
}

describe('afterRender Hook', function() {
  it('should be called after initialization', function() {
    const wrapper = mount(<SliderWithAfterRender />);
    // you can probably achieve the same with spies, kept the convention of the other tests
    expect(wrapper.state().wasAfterRenderCalled).toEqual(1);
  });

  it('should be dispatched on resize', function() {
    const wrapper = mount(<SliderWithAfterRender />);
    window.dispatchEvent(new Event("resize", {cancellable: true, bubbles: true}))
    window.dispatchEvent(new Event("resize", {cancellable: true, bubbles: true}))
    expect(wrapper.state().wasAfterRenderCalled).toEqual(3);
    
    
  })
});
