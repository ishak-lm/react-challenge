import styled from 'styled-components'

const Li = styled.li`
  height: 25px;
  display: flex;
  justify-content: space-around;
  position: relative;
  align-items: center;
`

const Span = styled.span`
  z-index: 1;
  font-size: 12px;
  width: 50px;
  text-align: right;
`

export default {
  Li,
  Span,
}
