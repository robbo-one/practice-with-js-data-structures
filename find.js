module.exports = find

function find (arr, searchDetails) {
  const key = Object.keys(searchDetails)[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === searchDetails[key]) {
      return arr[i]
    }
  }
}
