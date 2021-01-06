module.exports = getPropTypes

function getPropTypes (obj) {
    return Object.values(obj).map(x => typeof x)
}
