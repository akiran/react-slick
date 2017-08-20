'use strict';
import React from 'react';
import {shallow, mount} from 'enzyme';
import SimpleSlider from '../SimpleSlider';

describe('Simple Slider', function() {
  it('should have 8 slides (6 actual and 2 clone slides)', function() {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-slide').length).toEqual(8);
  });
  it('should have 2 clone slides', function() {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-cloned').length).toEqual(2);
  });
  it('should have 1 active slide', function() {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-slide.slick-active').length).toEqual(1);
  });
  it('should have 6 dots', function() {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-dots').children().length).toEqual(6);
  });
  it('should have 1 active dot', function() {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-dots .slick-active').length).toEqual(1);
  });
  it('should have a prev arrow', function () {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-prev').length).toEqual(1);
  });
  it('should have a next arrow', function () {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-next').length).toEqual(1);
  });

  it('should got to second slide when next button is clicked', function () {
    const wrapper = mount(<SimpleSlider />);
    wrapper.find('.slick-next').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('2');
    expect(wrapper.find('.slick-dots .slick-active').length).toEqual(1);
    expect(wrapper.find('.slick-dots').childAt(1).hasClass('slick-active')).toEqual(true)
  });
  it('should goto last slide when prev button is clicked', function() {
    const wrapper = mount(<SimpleSlider />);
    wrapper.find('.slick-prev').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('6');
    expect(wrapper.find('.slick-dots .slick-active').length).toEqual(1);
    expect(wrapper.find('.slick-dots').childAt(5).hasClass('slick-active')).toEqual(true)
  })
  it('should goto 4th slide when 4th dot is clicked', function() {
    const wrapper = mount(<SimpleSlider />);
    wrapper.find('.slick-dots button').at(3).simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('4');
    expect(wrapper.find('.slick-dots .slick-active').length).toEqual(1);
    expect(wrapper.find('.slick-dots').childAt(3).hasClass('slick-active')).toEqual(true)
  })
});
