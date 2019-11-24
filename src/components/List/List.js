import React from 'react'
import PropTypes from 'prop-types'

import S from './List.styles'

const List = ({ children }) => <S.Ul>{children}</S.Ul>

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default List
