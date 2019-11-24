/* global describe it expect */
import React from 'react'
import { mount } from 'enzyme'

import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  describe('Default Progressbar', () => {
    const wrapper = mount(<ProgressBar />)

    it('should have the correct default props', () => {
      expect(wrapper.props()).toMatchObject({
        width: 100,
        color: 'green',
        right: false,
        left: false,
      })
    })
  })

  describe('Progressbar with Props', () => {
    const wrapper = mount(<ProgressBar width={47} color="red" right />)

    expect(wrapper).toMatchSnapshot()

    it('should have the correct default props', () => {
      expect(wrapper.props()).toMatchObject({
        width: 47,
        color: 'red',
        right: true,
        left: false,
      })
    })
  })
})
