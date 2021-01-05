function getMatrix (n) {
  // console.log (n)
    // console.log(math.matrix([n, n]))
    //return math.zeros(n, n)
    let matrix = new Array(n)
    for (i = 0; i < matrix.length; i++){
        matrix[i] = new Array(n)
        matrix[i].fill(0)

    }
    return matrix
    console.log(matrix)
    
}

function updateMatrix (matrix, coords, value) {
    // console.log(coords, value)
  //  return matrix.map((value) => {
   // return 
   // })

   matrix[coords[0]][coords[1]] = value
   return matrix
}

module.exports = {
    getMatrix: getMatrix,
    updateMatrix: updateMatrix
}