import { sortBy, remove, findIndex } from 'lodash'

const parseArray = (arr, newData) => {
  const newArray = arr

  newData.forEach(e => {
    if (Number(e[1]) === 0) {
      remove(newArray, n => n[0] === e[0])
    } else if (findIndex(newArray, elem => elem[0] === e[0]) >= 0) {
      const index = findIndex(newArray, elem => elem[0] === e[0])

      newArray.splice(index, 1, e)
    } else {
      newArray.push(e)
    }
  })

  sortBy(newArray, e => Number(e[0]))

  return newArray
}

export default parseArray
