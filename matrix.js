module.exports = {
    getMatrix: getMatrix,
    updateMatrix: updateMatrix

}
function getMatrix (n) {
    let newArr = []
    for (let i=0; i<n; i++){
        newArr.push(0)
    }
    let arr = []
    for (let i=0; i<n; i++){
        arr.push(newArr)
    }
    
    
    return arr
}


function updateMatrix (matrix, coords, value) {
    console.log(coords)
    matrix[coords[0]][coords[1]] = value
    return matrix
}
