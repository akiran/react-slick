import React from 'react'
import { mount } from 'enzyme'
import { html as beautify_html } from 'js-beautify'
import { clickNext } from '../../__tests__/testUtils'
import FocusOnSelect from '../FocusOnSelect'

describe('FocusOnSelect Tests', () => {
  test('Activity Test', () => {
    const slider = mount(<FocusOnSelect />)
    expect(slider.find('div.slick-current').props()['data-index']).toEqual(0)
    expect(beautify_html(slider.html())).toMatchSnapshot()
    slider.find('[data-index=2]').simulate('click')
    expect(slider.find('div.slick-current').props()['data-index']).toEqual(2)
    expect(beautify_html(slider.html())).toMatchSnapshot()
  })
})
