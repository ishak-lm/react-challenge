import React from 'react'
import PropTypes from 'prop-types'

import S from './List.styles'

const List = ({ title, pair, children }) => (
  <S.Container>
    <S.Header>
      <S.Title>{title}</S.Title>
      <S.Pair>{pair}</S.Pair>
    </S.Header>
    <S.Ul>{children}</S.Ul>
  </S.Container>
)

List.propTypes = {
  title: PropTypes.string.isRequired,
  pair: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default List
