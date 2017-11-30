module.exports = {
  getMatrix: getMatrix,
  updateMatrix: updateMatrix
}

function getMatrix (n) {
  const matrix = new Array(n)
  matrix.fill(new Array(n))
  matrix.forEach(row => row.fill(0))
  return matrix
}

function updateMatrix (matrix, coords, value) {
  const row = coords[0]
  const col = coords[1]
  matrix[row][col] = value
  return matrix
}
