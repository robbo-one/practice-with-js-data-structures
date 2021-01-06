function find (arr, searchDetails) {
  const sdVal = Object.values(searchDetails).toString()
  const sdProp = Object.keys(searchDetails).toString()

  const arrMap = arr.find(val => {

    if (val[sdProp] && val[sdProp] === sdVal){

      return val

    }

  })
  return arrMap
}

module.exports = find