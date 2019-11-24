import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { GlobalStyle } from '../src/styles'

addDecorator(withInfo)

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
))

// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.js$/), module)
