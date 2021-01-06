module.exports = where

function where (arr, searchDetails) {
  const newArray = arr.filter(thing => thing.id == searchDetails.id)
  return newArray
}

