/* global describe it expect */

import kraken from './kraken'

describe('kraken constants', () => {
  it('should be equal', () => {
    expect(kraken).toEqual({
      subsribeUrl: 'wss://ws.kraken.com',
    })
  })
})
