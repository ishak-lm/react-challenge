import React from 'react'

// Hooks
import { Trades, Books } from '../../hooks'

// Components
import { List, ListItem } from '../../components'

// Styles
import S from './App.styles'

// Constants
import { kraken } from '../../constants'

const App = () => {
  const trades = Trades()
  const { ask, bid } = Books()

  console.log('trade -> ', trades)

  return (
    <S.Container>
      <S.OrderBook>
        <List title="Ask" pair={kraken.pair[0]}>
          {ask.map(e => (
            <ListItem data={e} />
          ))}
        </List>
        <List title="Bid" pair={kraken.pair[0]}>
          {bid.map(e => (
            <ListItem data={e} />
          ))}
        </List>
      </S.OrderBook>
      <List title="Trades" pair={kraken.pair[0]}>
        {trades.map(e => (
          <ListItem data={e} />
        ))}
      </List>
    </S.Container>
  )
}

export default App
