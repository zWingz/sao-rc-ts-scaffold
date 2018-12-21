import * as React from 'react'
import { shallow } from 'enzyme'
import {
  HelloWorld
} from '..'
describe('test ', () => {
  it('test ', () => {
    const wrapper = shallow(<HelloWorld/>)
    expect(wrapper.find('div').text()).toBe('hello world')
  })
})
