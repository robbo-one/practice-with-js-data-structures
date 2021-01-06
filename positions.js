module.exports = {
    getFirst: getFirst,
    getLast: getLast,
}

function getFirst (arr) {
  return arr[0]
}

function getLast (arr) {
   return arr[arr.length - 1]
  //  const lastPos = arr.length -1
  //  return arr[lastPos]
}
