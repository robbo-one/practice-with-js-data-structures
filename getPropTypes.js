module.exports = getPropTypes

function getPropTypes (obj) {
  const types = []
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    types.push(typeof obj[keys[i]])
  }
  return types
}
