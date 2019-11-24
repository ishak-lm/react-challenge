import { useState, useEffect } from 'react'

// Constants
import { kraken } from '../../constants'

// helpers
import { parseArray } from '../../helpers'

const Books = () => {
  const [ask, setAsk] = useState([])
  const [bid, setBids] = useState([])

  const client = new WebSocket(kraken.subsribeUrl)

  const iniWebSocket = () => {
    client.onopen = () => {
      console.log('WebSocket Client Connected')

      client.send(
        JSON.stringify({
          event: 'subscribe',
          pair: kraken.pair,
          subscription: {
            name: 'book',
            depth: 25,
          },
        }),
      )
    }

    client.onmessage = e => {
      const data = JSON.parse(e.data)

      if (Array.isArray(data)) {
        if (data[1].as) setAsk([...parseArray(ask, data[1].as, true)])

        if (data[1].bs) setBids([...parseArray(bid, data[1].bs)])

        if (data[1].a) setAsk([...parseArray(ask, data[1].a, true)])

        if (data[1].b) setBids([...parseArray(bid, data[1].b)])
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

  return { ask, bid }
}

export default Books
