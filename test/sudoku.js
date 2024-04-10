const app = document.getElementById('app')

function randomNumber(){
    return Math.floor(Math.random()*9)+1
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

let changeBoard = JSON.parse(JSON.stringify(standardBox))
changeBoard.forEach(num => {
  num.fill(0)
})

const findCoord = (x , y) => changeBoard[x][y]

const resultBoard = []
let xline = []
let yline = []
let matrix = []
let board = [] 

let coords = []
let x = []
for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
        coords.push([i, j])
        x.push([i,j])
    }
    xline.push(x)
}

// coords.forEach((coord, i) => {
//     let x = []
//     if(i%9) x.push(coord)
//     xline.push(x)
// })

console.log(xline)

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

      data.innerText = 0

      box.append(data)
    }
  }
  return box 
}

app.append(box)
initNumber()

