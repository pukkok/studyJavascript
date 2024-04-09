const app = document.getElementById('app')

function randomNumberExtractor(){
  let randomNumber = Math.floor(Math.random()*9)+1
  return randomNumber
}

const box = document.createElement('div')
box.className = 'sdoku-box'

const standardBox = [
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
  [6, 6, 6, 7, 7, 7, 8, 8, 8]
]

let x = 0
let y = 0

let vvvv = new Array(9).fill(false)
let vbox = [vvvv]
console.log(vbox)

let coords = JSON.parse(JSON.stringify(standardBox))
let result = coords[x][y]

let arr0 = []
let arrY = []
// coords[0][0] = randomNumberExtractor()
// arr0.push(coords[0][0])

for(let i=0; i<9; i++){
  let num = randomNumberExtractor()    

  while(arr0.includes(num)){
    num = randomNumberExtractor()
  }

  coords[0][i] = num
  arr0.push(coords[0][i])


  while(arrY.includes(num)){
    num = randomNumberExtractor()
  }
}

console.log(coords)
console.log(arr0)

// for(let x=0; x<9; x++){
//   for(let y=0; y<9; y++){
//     coords[0][0] = randomNumberExtractor()

//     arr0.push(coords[0][0])

//     let num = randomNumberExtractor()    
//     if(coords[0][0] === num){
//       num = randomNumberExtractor()
//     }else{
//       coords[0][1] = num
//       let num2 = randomNumberExtractor()
//       if(coords[0][1] === num2){
//         num2 = randomNumberExtractor()
//       }else{
//         coords[0][2] = num2
//       }

//     }

//   }
// }





// 1끼리는 1~9를 다 가지고 있어야함




function initNumber () {
  for(let x=0; x<9; x++){
    for(let y=0; y<9; y++){
      const data = document.createElement('div')
      data.className = `data ${y}-${x}`

      if(x<3){
        if(y<3){
          data.classList.add('small-box1') 
        }else if(y<6){
          data.classList.add('small-box2')
        }else{
          data.classList.add('small-box3')
        }
      }else if(x<6){
        if(y<3){
          data.classList.add('small-box4') 
        }else if(y<6){
          data.classList.add('small-box5')
        }else{
          data.classList.add('small-box6')
        }
      }else{
        if(y<3){
          data.classList.add('small-box7') 
        }else if(y<6){
          data.classList.add('small-box8')
        }else{
          data.classList.add('small-box9')
        }
      }

      data.innerText = `${x}, ${y}`

      box.append(data)
    }
  }
  return box 
}

app.append(box)
initNumber()


function randomArr () {
  let Arr1 = []
  while (Arr1.length < 9){
    let num = randomNumberExtractor()
    if(Arr1.includes(num)){
      num = randomNumberExtractor()
    }else{
      Arr1.push(num)
    }
  }
  return Arr1
}


// 3 * 3 박스에 숫자 9개 1~9
// 1 * 9 라인에 숫자 9개
// 9 * 1 라인에 숫자 9개








































function standard (arr) {
  let rNum = randomNumberExtractor()
  
  while(arr.length<9){
    if(arr.includes(rNum)){
      rNum = randomNumberExtractor()
    }else{
      arr.push(rNum)
    }
  }
  
  return arr
}

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
    box.append(row)
  } 
  app.append(box)
}
// makeLine()