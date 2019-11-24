import React from 'react'
import PropTypes from 'prop-types'

import S from './ListItem.styles'

import { ProgressBar } from '..'

const ListItem = ({ data, width, color, right, left }) => (
  <S.Li>
    <ProgressBar width={width} color={color} right={right} left={left} />
    {data.map((e, key) => (
      <S.Span key={key}>{e}</S.Span>
    ))}
  </S.Li>
)

ListItem.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool,
  data: PropTypes.array.isRequired,
}

ListItem.defaultProps = {
  width: 100,
  color: 'green',
  right: false,
  left: false,
}

export default ListItem
