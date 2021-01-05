module.exports = {
  getMatrix : getMatrix,
  updateMatrix : updateMatrix
}

function getMatrix (n) {
  let matrix = []
  let biggerMatrix = []
  
  for(let i = 0; i < n; i++){
    matrix.push(0)
  }

  for(let i = 0; i < n; i++){
    biggerMatrix.push(matrix)
  }
  return biggerMatrix
}

function updateMatrix (matrix, coords, value) {
  let matrixCoords = coords[0]
  let matrixCoordsTwo = coords[1]
  matrix[matrixCoords][matrixCoordsTwo] = value
  return matrix
  //console.log(matrix, coords, value)
}
