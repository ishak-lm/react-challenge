import { sortBy, remove, findIndex } from 'lodash'

const parseArray = (arr, newData, isAsk) => {
  const newArray = arr

  let total = 0

  newData.forEach(e => {
    if (Number(e[1]) === 0) {
      remove(newArray, n => n[0] === e[0])
    } else if (findIndex(newArray, elem => elem[0] === e[0]) >= 0) {
      const index = findIndex(newArray, elem => elem[0] === e[0])

      newArray.splice(index, 1, e.slice(0, 2))
    } else {
      newArray.push(e.slice(0, 2))
    }
  })

  sortBy(newArray, e => Number(e[0]))

  return newArray.map(e => [
    isAsk ? Number(e[1]).toFixed(1) : Number(e[0]).toFixed(4),
    (total += Number(e[1])).toFixed(1),
    isAsk ? Number(e[0]).toFixed(4) : Number(e[1]).toFixed(1),
  ])
}

export default parseArray
