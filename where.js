module.exports = where

function where (arr, searchDetails) {
  const found = []
  for (const obj of arr) {
    let match = true
    Object.keys(searchDetails).forEach(key => {
      match = match && obj[key] === searchDetails[key]
    })
    if (match) found.push(obj)
  }
  return found
}
