import React from 'react'

// Hooks
import { Trades } from '../../hooks'

// Components
import { List, ListItem } from '../../components'

// Styles
import S from './App.styles'

// Constants
import { kraken } from '../../constants'

const App = () => {
  const trades = Trades()

  console.log('trade -> ', trades)

  return (
    <S.Container>
      <List title="Trades" pair={kraken.pair[0]}>
        {trades.map(e => (
          <ListItem data={e} />
        ))}
      </List>
    </S.Container>
  )
}

export default App
