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

  return (
    <S.Container>
      <S.OrderBook>
        <List title="Ask" pair={kraken.pair[0]}>
          {ask.length > 0 &&
            ask.map((e, key) => (
              <ListItem
                data={e}
                key={key}
                right
                width={(Number(e[1]) / ask[ask.length - 1][1]) * 100}
              />
            ))}
        </List>

        <List title="Bid" pair={kraken.pair[0]}>
          {bid.length > 0 &&
            bid.map((e, key) => (
              <ListItem
                data={e}
                key={key}
                left
                color="red"
                width={(Number(e[1]) / bid[bid.length - 1][1]) * 100}
              />
            ))}
        </List>
      </S.OrderBook>
      <List title="Trades" pair={kraken.pair[0]}>
        {trades.map((e, key) => (
          <ListItem data={e} key={key} />
        ))}
      </List>
    </S.Container>
  )
}

export default App
