module.exports = getPropTypes

function getPropTypes (obj) {
  const types = []
  const values = Object.values(obj)
  for (let i = 0; i < values.length; i++) {
    types.push(typeof values[i])
  }
  return types
}
