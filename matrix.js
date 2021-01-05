function getMatrix (n) {
  let newArr = []
  for (let i = 0; i < n; i++) {
    newArr.push([])
    for (let j = 0; j < n; j++) {
      newArr[i].push(0)
    }
  }
  return newArr
}

function updateMatrix (matrix, coords, value) {
  let x = coords[0]
  let y = coords[1]
  // let newArr = []
  for (let i = 0; i < matrix.length; i++) {
    // newArr.push([])
    for (let j = 0; j < matrix.length; j++) {
      // newArr[i].push(0)
      if (x === i && y === j) {
        matrix[i].splice(j, i, value)
        // newArr[i].pop()
        // newArr[i].push(value)
      }
    }
  }
  // console.log(newArr)
  return matrix
}

module.exports = {
  getMatrix: getMatrix,
  updateMatrix: updateMatrix
}