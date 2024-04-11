const app = document.getElementById('app')

function randomNumber(){
    return Math.floor(Math.random()*9)+1
}

const box = document.createElement('div')
box.className = 'sdoku-box'
const box2 = document.createElement('div')
box2.className = 'sdoku-box'
const box3 = document.createElement('div')
box3.className = 'sdoku-box'
const box4 = document.createElement('div')
box4.className = 'sdoku-box'

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

let changeBoard = JSON.parse(JSON.stringify(standardBox))
changeBoard.forEach(num => {
  num.fill(0)
})

const findCoord = (x , y) => changeBoard[x][y]

const resultBoard = []
let xline = JSON.parse(JSON.stringify(changeBoard))
let yline = JSON.parse(JSON.stringify(changeBoard))
let matrix = []
let board = JSON.parse(JSON.stringify(changeBoard))

let sb = []
let sb2 = []
let sb3 = []
let sb4 = []
let sb5 = []
let sb6 = []
let sb7 = []
let sb8 = []
let sb9 = []

for(let i=0; i<9; i++){
  for(let j=0; j<9; j++){
    xline[i][j] = [i, j]
    yline[i][j] = [j, i]

    let caseA = i%9
    let caseB = j%9
    if(caseA < 3 && caseB < 3){
      sb.push([i, j])
    }else if(caseA < 3 && caseB<6){
      sb2.push([i, j])
    }else if(caseA < 3 && caseB<9){
      sb3.push([i, j])
    }else if(caseA < 6 && caseB<3){
      sb4.push([i, j])
    }else if(caseA < 6 && caseB<6){
      sb5.push([i, j])
    }else if(caseA < 6 && caseB<9){
      sb6.push([i, j])
    }else if(caseA < 9 && caseB<3){
      sb7.push([i, j])
    }else if(caseA < 9 && caseB<6){
      sb8.push([i, j])
    }else if(caseA < 9 && caseB<9){
      sb9.push([i, j])
    }
  }
}

matrix.push(sb, sb2, sb3, sb4, sb5, sb6, sb7, sb8, sb9)



for(let x=0; x<9; x++){
  for(let y=0; y<9; y++){
    let coord = findCoord(x,y)
    if(x===0 && y===0) {
      board[x][y] = randomNumber()
      xline[x][y] = board[x][y]
      yline[y][x] = board[x][y]
      matrix[x][y] = board[x][y]
    }
    
    let num = randomNumber()
    if(x===0 && y<9){
      board[x][y] = randomNumber()
      xline[x][y] = board[x][y]
      yline[y][x] = board[x][y]
      matrix[x][y] = board[x][y]
    }
  }
}

console.log('x', xline)
console.log('y', yline)
console.log('m', matrix)

console.log(board)

function initNumber (box, arr) {
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

      data.innerText = arr[x][y]

      box.append(data)
    }
  }
  
  return box 
}

app.append(box, box2, box3, box4)
initNumber(box, xline)
initNumber(box2, yline)
initNumber(box3, matrix)
initNumber(box4, board)

