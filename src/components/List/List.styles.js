import styled from 'styled-components'

import { colors } from '../../constants'

const Container = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(${colors.background.list});
  margin-bottom: 25px;

  @media (max-width: 400px) {
    width: 100%;
    max-width: 380px;
    min-width: 200px;
  }
`

const Header = styled.div`
  border-bottom: grey 1px solid;
  width: 95%;
  padding: 10px 0px 10px 0px;
`

const Title = styled.span`
  margin-right: 20px;
  margin-left: 10px;
`

const Pair = styled.span`
  color: ${colors.text.grey};
`

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 800px;
`

export default {
  Ul,
  Container,
  Header,
  Title,
  Pair,
}
