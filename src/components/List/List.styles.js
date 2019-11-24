import styled from 'styled-components'

import { colors } from '../../constants'

const Container = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  border-bottom: grey 1px solid;
  width: 95%;
`

const Title = styled.span``

const Pair = styled.span``

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
  Container,
  Header,
  Title,
  Pair,
}
