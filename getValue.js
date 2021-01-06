const { TestScheduler } = require("jest")

module.exports = getValue

function getValue (obj, key) {
  
 return obj[key]

}