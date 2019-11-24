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
          pair: kraken.pair,
          subscription: {
            name: 'trade',
          },
        }),
      )
    }

    client.onmessage = e => {
      const data = JSON.parse(e.data)

      if (Array.isArray(data)) {
        setTrades(oldArray => [...oldArray, data[1][0].slice(0, 3)])
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
