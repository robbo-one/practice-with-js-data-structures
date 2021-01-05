function getFirst (arr) {
    console.log(arr)
    return arr[0]
}

function getLast (arr) {
    console.log(arr)
    return arr[arr.length - 1]
}

module.exports = {
    getFirst: getFirst,
    getLast: getLast
}
