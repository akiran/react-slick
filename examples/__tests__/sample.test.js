import React from 'react'
import {mount} from 'enzyme'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <button onClick={() => this.setState({count: this.state.count + 1})}>
        Count {this.state.count}
      </button>
    )
  }
}

describe('sample counter test', function () {
  it('mutliple counts', function () {
    const wrapper = mount(<Counter />)
    wrapper.simulate('click').simulate('click')
    expect(wrapper.text()).toEqual('Count 2')
  });
});
