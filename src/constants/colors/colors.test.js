/* global describe it expect */

import colors from './colors'

describe('Colors constants', () => {
  it('should be equal', () => {
    expect(colors).toEqual({
      progressBar: {
        green: '49, 61, 49',
        red: '56, 44, 50',
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
