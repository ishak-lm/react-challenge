import React from 'react'
import PropTypes from 'prop-types'

import S from './ProgressBar.styles'

const ProgressBar = ({ width, color, right, left }) => (
  <S.ProgressBar width={width} color={color} right={right} left={left} />
)

ProgressBar.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool,
}

ProgressBar.defaultProps = {
  width: 100,
  color: 'green',
  right: false,
  left: false,
}

export default ProgressBar
