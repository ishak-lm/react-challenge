import React from 'react'
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs'

import ListItem from './ListItem'

export default {
  title: '03 - ListItem',
}

export const StoryListItem = () => (
  <ListItem
    data={['123', '5432', '23424']}
    width={number('Width', 60, { range: true, min: 0, max: 100 })}
    color={select('Color', ['green', 'red'])}
    right={boolean('Right', true)}
    left={boolean('Left', false)}
  />
)

StoryListItem.story = {
  decorators: [withKnobs],
  parameters: { options: { selectedPanel: 'storybook/knobs/panel' } },
}
