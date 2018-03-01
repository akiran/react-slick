import React from 'react';
import { mount } from 'enzyme';
import MultipleItems from '../MultipleItemsRTL';

/*
 This is simply to demonstrate that using rtl maintains functionality.
 Visual verification should be done as the bugs with parent containers with
 dir="rtl" are quite difficult to verify programmatically.
 */
describe('Multiple Items', function () {
  it('should show first 3 slides', function () {
    const wrapper = mount(<MultipleItems />);
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("1");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("2");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("3");
  });
  it('should show slides from 4 to 6 when next button is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-next').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("4");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("5");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("6");
  });
  it('should show last 3 slides when previous button is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-prev').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("7");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("8");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("9");
  });
  it('should show first 3 slides when middle dot is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-dots button').at(0).simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("1");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("2");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("3");
  });
  it('should show slides from 4 to 6 when middle dot is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-dots button').at(1).simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("4");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("5");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("6");
  });
  it('should show last 3 slides when last dot is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-dots button').at(2).simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("7");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("8");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("9");
  });

})