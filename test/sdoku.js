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

let coords = JSON.parse(JSON.stringify(standardBox))
coords.forEach(coord => {
  coord.fill(0)
})
let result = coords[x][y]

let arrX = []
let arrY = []
let arrZ1 = []

for(let x=0; x<3; x++){
  for(let y=0; y<3; y++){
    let num = randomNumberExtractor()
    while(arrZ1.includes(num)){
      num = randomNumberExtractor()
    }
    coords[x][y] = num
    arrZ1.push(num)
  }
}

let arrZ2 = []

let xline = [...arrZ1].slice(0,3)
let xline2 = [...arrZ1].slice(3,6)
let xline3 = [...arrZ1].slice(6,9)

for(let x=0; x<3; x++){
  for(let y=3; y<6; y++){
    if(arrZ2.length< 3){
      let num = randomNumberExtractor()
      while(xline.includes(num) || arrZ2.includes(num)){
        num = randomNumberExtractor()
      }
      coords[x][y] = num
      arrZ2.push(num)
    }else if(arrZ2.length<6){
      let num = randomNumberExtractor()
      while(xline2.includes(num) || arrZ2.includes(num)){
        num = randomNumberExtractor()

      }
      coords[x][y] = num
      arrZ2.push(num)
    }else{
      let num = randomNumberExtractor()
      while(xline3.includes(num) || arrZ2.includes(num)){
        num = randomNumberExtractor()
      }
      coords[x][y] = num
      arrZ2.push(num)
    }
  }
}

let arrZ3 = []
let xline_double = [...xline, ...arrZ2.slice(0,3)]
let xline2_double = [...xline2, ...arrZ2.slice(3,6)]
let xline3_double = [...xline3, ...arrZ2.slice(6,9)]

for(let x=0; x<3; x++){
  for(let y=6; y<9; y++){
    if(arrZ3.length< 3){
      let num = randomNumberExtractor()
      while(xline_double.includes(num) || arrZ3.includes(num)){
        num = randomNumberExtractor()
        
      }
      coords[x][y] = num
      arrZ3.push(num)
    }else if(arrZ3.length<6){
      let num = randomNumberExtractor()
      while(xline2_double.includes(num) || arrZ3.includes(num)){
        num = randomNumberExtractor()
        
      }
      coords[x][y] = num
      arrZ3.push(num)
    }else{
      let num = randomNumberExtractor()
      while(xline3_double.includes(num) || arrZ3.includes(num)){
        num = randomNumberExtractor()
        
      }
      coords[x][y] = num
      arrZ3.push(num)
    }
  }
}

let arrZ4 = []
let yline = [coords[0][0], coords[1][0], coords[2][0]]
let yline2 = [coords[0][1], coords[1][1], coords[2][1]]
let yline3 = [coords[0][2], coords[1][2], coords[2][2]]

for(let y=0; y<3; y++){
  for(let x=3; x<6; x++){
    if(arrZ4.length< 3){
      let num = randomNumberExtractor()
      while(yline.includes(num) || arrZ4.includes(num)){
        num = randomNumberExtractor()
        
      }
      coords[x][y] = num
      arrZ4.push(num)
    }else if(arrZ4.length<6){
      let num = randomNumberExtractor()
      while(yline2.includes(num) || arrZ4.includes(num)){
        num = randomNumberExtractor()
        
      }
      coords[x][y] = num
      arrZ4.push(num)
    }else{
      let num = randomNumberExtractor()
      while(yline3.includes(num) || arrZ4.includes(num)){
        num = randomNumberExtractor()
        
      }
      coords[x][y] = num
      arrZ4.push(num)
    }
  }
}

let arrZ7 = []
let yline_double = [...yline, coords[3][0], coords[4][0], coords[5][0]]
let yline2_double = [coords[3][1], coords[4][1], coords[5][1]]
let yline3_double = [coords[3][2], coords[4][2], coords[5][2]]

for(let y=0; y<3; y++){
  for(let x=6; x<9; x++){
    if(arrZ7.length< 3){
      let num = randomNumberExtractor()
      while(yline_double.includes(num) || arrZ7.includes(num)){
        num = randomNumberExtractor()
        
      }
      coords[x][y] = num
      arrZ7.push(num)
    }else if(arrZ7.length<6){
      let num = randomNumberExtractor()
      while(yline2_double.includes(num) || arrZ7.includes(num)){
        num = randomNumberExtractor()
        
      }
      coords[x][y] = num
      arrZ7.push(num)
    }else{
      let num = randomNumberExtractor()
      while(yline3_double.includes(num) || arrZ7.includes(num)){
        num = randomNumberExtractor()
        
      }
      coords[x][y] = num
      arrZ7.push(num)
    }
  }
}

console.log(coords)










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

      data.innerText = `${coords[x][y]}`

      box.append(data)
    }
  }
  return box 
}

app.append(box)
initNumber()



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