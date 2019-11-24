/* global describe it expect */
import React from 'react'
import { mount } from 'enzyme'

import List from './List'

describe('List', () => {
  const wrapper = mount(
    <List title="Story" pair="ETH/BTC">
      <li>Hello</li>
    </List>,
  )

  expect(wrapper).toMatchSnapshot()

  it('should have the correct default props', () => {
    expect(wrapper.contains(<li>Hello</li>)).toEqual(true)
  })
})
