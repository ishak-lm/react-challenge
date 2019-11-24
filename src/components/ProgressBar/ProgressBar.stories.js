import React from 'react'
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs'

import ProgressBar from './ProgressBar'

export default {
  title: '01 - ProgressBar',
}

export const StoryProgressBar = () => (
  <ProgressBar
    width={number('Width', 12, { range: true, min: 0, max: 100 })}
    color={select('Color', ['green', 'red'])}
    right={boolean('Right', true)}
    left={boolean('Left', false)}
  />
)

StoryProgressBar.story = {
  decorators: [withKnobs],
  parameters: { options: { selectedPanel: 'storybook/knobs/panel' } },
}
