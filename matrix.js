function getMatrix (n) {
  emptyArr = []
  for ( i = 0;i<n;i++){
    emptyArr.push(new Array(n).fill(0))
  }
   return emptyArr
}

function updateMatrix (matrix, coords, value) {

  let num1 = coords[0]
  let num2 = coords[1]

// matrix.splice(num1, 1, 1)




const theMatrix = matrix.map(val=>{

  val[num1][num2] = value

  return val

})

 matrix[num1][num2] = value

return (matrix)


}

module.exports = {
  getMatrix : getMatrix,
  updateMatrix : updateMatrix
}