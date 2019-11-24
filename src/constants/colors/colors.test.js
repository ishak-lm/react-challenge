/* global describe it expect */

import colors from './colors'

describe('Colors constants', () => {
  it('should be equal', () => {
    expect(colors).toEqual({
      progressBar: {
        green: '20, 30, 19',
        red: '42, 16, 20',
      },
      text: {
        listElem: '156, 162, 164',
        title: '255, 255, 255',
      },
      background: {
        list: '29, 38, 44',
        body: '47, 57, 63',
      },
    })
  })
})
