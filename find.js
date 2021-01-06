function find (arr, searchDetails) {
    console.log(arr.find(contacts => searchDetails))
    return arr.find(contacts => {
        if(contacts ) {
            return true
        }
    })
}

module.exports = find
