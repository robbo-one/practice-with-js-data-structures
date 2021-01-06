function getPropTypes (obj) {

const myArr = []

let answer = Object.values(obj)

  for (let value of answer) { 
    myArr.push(value)
} 

const realAnswer = myArr.map(val => {
  return typeof(val)
})

return realAnswer

}

module.exports = getPropTypes