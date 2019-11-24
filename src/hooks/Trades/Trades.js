import { useState, useEffect } from 'react'

import { kraken } from '../../constants'

const Trades = () => {
  const [trades, setTrades] = useState([])

  const client = new WebSocket(kraken.subsribeUrl)

  const iniWebSocket = () => {
    client.onopen = () => {
      console.log('WebSocket Client Connected')

      client.send(
        JSON.stringify({
          event: 'subscribe',
          pair: ['MLN/BTC'],
          subscription: {
            name: 'book',
          },
        }),
      )
    }

    client.onmessage = e => {
      const data = JSON.parse(e.data)

      if (Array.isArray(data)) {
        setTrades(oldArray => [...oldArray, data[1][0]])
      }
    }

    client.onclose = () => {
      iniWebSocket()
    }
  }

  useEffect(() => {
    iniWebSocket()

    return () => {
      client.close()
    }
  }, [])

  return trades
}

export default Trades
