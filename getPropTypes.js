module.exports = getPropTypes

function getPropTypes (obj) {
  let newArray = []
  for (let i in obj)  {
      newArray.push(typeof obj[i])
  }
  return newArray 
}
