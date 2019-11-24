import styled from 'styled-components'

import { colors } from '../../constants'

const ProgressBar = styled.div`
  position: absolute;
  width: ${({ width }) => `${width}%`};
  height: 25px;
  background-color: ${({ color }) => `rgb(${colors.progressBar[color]})`};
  right: ${({ right }) => (right ? 0 : 'inherit')};
  left: ${({ left }) => (left ? 0 : 'inherit')};
  z-index: 0;
`

export default {
  ProgressBar,
}
