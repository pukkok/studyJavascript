const root = document.getElementById('root')

function randomNumber(){
  return Math.floor(Math.random()*9)+1
}

let gridSize = 9
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

let board = JSON.parse(JSON.stringify(standardBox))

board.forEach(line => {
    line.fill(0)
})

let matrix1 = []
let matrix2 = []
let matrix3 = []

function makeMatrix (min, max, arr){
    for(let x=min; x<max; x++){
        for(let y=min; y<max; y++){
          let num = randomNumber()
          while(arr.includes(num)){
            num = randomNumber()
          }
          board[x][y] = num
          arr.push(num)
        }
    }
}

// makeMatrix(0, 3, matrix1)
// makeMatrix(3, 6, matrix2)
// makeMatrix(6, 9, matrix3)

// function makeSudoku(board){    
//     for(let row=0; row<gridSize; row++){
//         for(let col=0; col<gridSize; col++){
//             if(board[row][col] === 0){
//                 for(let num = 1; num <= 9; num++){
//                     if(isValidSudoku(board, row, col, num)){
//                         board[row][col] = num
                        
//                         if(makeSudoku(board)){
//                             return true
//                         }
                        
//                         board[row][col] = 0
//                     }
                    
//                 }
//                 return false
//             }
//         }
//     }
//     return true
// }
let a = []
function makeSudoku(board){    
    for(let row=0; row<gridSize; row++){
        for(let col=0; col<gridSize; col++){
            let num = randomNumber()
            if(board[row][col] === 0){
                for(let x = 0; x < 9; x++){
                  
                    if(isValidSudoku(board, row, col, num)){
                        board[row][col] = num
                        
                        if(makeSudoku(board)){
                            return true
                        }
                        
                        board[row][col] = 0
                    }
                  
                }
                return false
            }
        }
    }
    return true
}


function isValidSudoku(board, row, col, num){
  
  // row, col 확인
  for(let i=0; i<gridSize; i++){
      if(board[row][i] === num || board[i][col] === num){
          return false
      }
  }
  
  // 3 x 3 배열 확인
  const startRow = Math.floor(row/3)*3
  const startCol = Math.floor(col/3)*3
  
  for(let i= startRow; i<startRow+3; i++){
      for(let j=startCol; j<startCol+3; j++){
          if(board[i][j] === num){
              return false
          }
      }
  }
  
  return true
}

makeSudoku(board)

let numberIncludeCheck = JSON.parse(JSON.stringify(board))
numberIncludeCheck.forEach(line => {
    line.sort((a,b) => a-b)
})
console.log(numberIncludeCheck)


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

      data.innerText = `${board[x][y]}`

      box.append(data)
    }
  }
  return box 
}

root.append(box)
initNumber()
