import { useState, useEffect } from 'react'

// Constants
import { kraken } from '../../constants'

// helpers
import { parseArray } from '../../helpers'

const Books = () => {
  const [ask, setAsk] = useState([])
  const [bid, setBids] = useState([])

  // const client = new WebSocket(kraken.subsribeUrl)

  // const iniWebSocket = () => {
  //   client.onopen = () => {
  //     console.log('WebSocket Client Connected')

  //     client.send(
  //       JSON.stringify({
  //         event: 'subscribe',
  //         pair: kraken.pair,
  //         subscription: {
  //           name: 'book',
  //         },
  //       }),
  //     )
  //   }

  //   client.onmessage = e => {
  //     const data = JSON.parse(e.data)

  //     if (Array.isArray(data)) {
  //       if (data[1].as) setAsk(oldArray => parseArray(oldArray, data[1].as))

  //       if (data[1].bs) setBids(oldArray => parseArray(oldArray, data[1].bs))

  //       if (data[1].a) setAsk(oldArray => parseArray(oldArray, data[1].a))

  //       if (data[1].b) setBids(oldArray => parseArray(oldArray, data[1].b))
  //     }
  //   }

  //   client.onclose = () => {
  //     iniWebSocket()
  //   }
  // }

  // useEffect(() => {
  //   iniWebSocket()

  //   return () => {
  //     client.close()
  //   }
  // }, [])

  return { ask, bid }
}

export default Books
