function getPropTypes (obj) { 
    let array = Object.values(obj)
    return array.map((value)=> {
        return typeof value
    })
    
}

module.exports = getPropTypes