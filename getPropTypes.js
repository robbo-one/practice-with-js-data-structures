module.exports = getPropTypes

function getPropTypes (obj) {
  const ourArray = []
   const value = Object.values(obj)
   for (i = 0; i < value.length; i ++) {
     ourArray.push (typeof value[i])
      console.log(value[i])
    }
    return ourArray
}