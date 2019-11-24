import styled from 'styled-components'

import { colors } from '../../constants'

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 380px;
  height: 800px;
  background-color: rgb(${colors.background.list});
`

export default {
  Ul,
}
