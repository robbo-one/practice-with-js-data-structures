module.exports = find

function find (arr, searchDetails) {
  let key = Object.keys(searchDetails)[0]
   const newArray = arr.find(thing => {
     return thing[key] == searchDetails[key]
   })
   return newArray
}
