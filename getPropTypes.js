function getPropTypes (obj) {
  return Object.values(obj).map(value => typeof value)
}

module.exports = getPropTypes