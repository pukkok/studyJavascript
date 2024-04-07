const app = document.getElementById('app')

const lineNumbers = Array(9).fill(0)
// console.log(lineNumbers)

function extractRandomNumber(){
  let randomNumber = Math.floor(Math.random()*9)+1
  return randomNumber
}
let test = extractRandomNumber()
// console.log(test)

const table = document.createElement('table')

// tr은 9줄
// td는 1~9까지

function standard (arr) {
  let rNum = extractRandomNumber()
  
  while(arr.length<9){
    if(arr.includes(rNum)){
      rNum = extractRandomNumber()
    }else{
      arr.push(rNum)
    }
  }
  
  return arr
}

// function makefirstLine () {
//     let rArr = []
//     standard(rArr)
//     const row = document.createElement('tr')
//     rArr.forEach(num => {
//       const data= document.createElement('td')
//       data.innerText=num
//       row.append(data)
//     })
//     table.append(row)
  
//   app.append(table)
// }
// makefirstLine()

function makeLine () {
  for(let i=0; i<9; i++){
    let randomArr = []
    let prevRandomArr = []
    standard(randomArr)
    const row = document.createElement('tr')
    randomArr.forEach((num, i) => {
      const data = document.createElement('td')
      if(i===0){
        data.innerText = num
        prevRandomArr = [...randomArr]
      }else{
        if(prevRandomArr[i]===num){
          randomArr[i] = randomArr[i+1]
        }
        data.innerText = num
      }
      row.append(data)
    })
    table.append(row)
  } 
  app.append(table)
}
makeLine()