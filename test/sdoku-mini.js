const app = document.getElementById('app')

function randomNumberExtractor(){
  let randomNumber = Math.floor(Math.random()*4)+1
  return randomNumber
}

const box = document.createElement('div')
box.className = 'sdoku-box'

// tr은 9줄
// td는 1~9까지

// 1,1 1,2 1,3 1,4
// 2,1 2,2 2,3 2,4
// 3,1 3,2 3,3 3,4
// 4,1 4,2 4,3 4,4

let firstLine = []
let secondLine = []
let thirdLine = []
let fourthLine = []

function makeLine (arr) {
  while(arr.length < 4){
    let num = randomNumberExtractor()
    if(arr.includes(num)){
      num = randomNumberExtractor()
    }else{
      arr.push(num)
    }
  }
  return arr
}

let x = []
for(let i=0; i<4; i++){
  let y = []
  while(y.length < 4){
    let num = randomNumberExtractor()
    if(y.includes(num)){
      num = randomNumberExtractor()
    }else y.push(num)
  }
  x.push(y)
}

console.log(x)


let a = makeLine(firstLine)
let b = makeLine(secondLine)
let c = makeLine(thirdLine)
let d = makeLine(fourthLine)

// console.log({a, b, c, d})




