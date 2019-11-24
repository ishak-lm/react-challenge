import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import List from './List'

export default {
  title: '02 - List',
}

export const StoryList = () => (
  <List title={text('Title', 'Book')} pair={text('Pair', 'ETH/BTC')}>
    <li>Storybook</li>
  </List>
)

StoryList.story = {
  decorators: [withKnobs],
  parameters: { options: { selectedPanel: 'storybook/knobs/panel' } },
}
