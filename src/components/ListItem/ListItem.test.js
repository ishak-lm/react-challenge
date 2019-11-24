/* global describe it expect */
import React from 'react'
import { mount } from 'enzyme'

import ListItem from './ListItem'

describe('ListItem', () => {
  const wrapper = mount(<ListItem data={['234', '235', '34']} />)

  expect(wrapper).toMatchSnapshot()

  it('should have the correct default props', () => {
    expect(wrapper.props()).toMatchObject({
      width: 100,
      color: 'green',
      right: false,
      left: false,
    })
  })
})
