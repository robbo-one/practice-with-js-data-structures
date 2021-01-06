function where (arr, searchDetails) {
  
  

if (Object.keys(searchDetails).length == 2){

const prop1 = Object.keys(searchDetails)[0].toString()
const prop2 = Object.keys(searchDetails)[1].toString()

const val1 = Object.values(searchDetails)[0].toString()
const val2 = Object.values(searchDetails)[1].toString()



 const answer2 = arr.filter(val => {

    if (val[prop1] == val1 && val[prop2] == val2){

      return val
    }


  })

return answer2
}

  // 123
  //skull island
  //78
  const sdVal = Object.values(searchDetails).toString()
  // id 
  //address
  // age
  const sdProp = Object.keys(searchDetails).toString()

  const answer = arr.filter(val => {


  if (val[sdProp]  == sdVal ) {
     
    return val[sdProp]

  }

  })
  

return answer

}

module.exports = where