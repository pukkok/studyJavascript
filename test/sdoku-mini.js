const root = document.getElementById('root')

function randomNumber(){
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


function solveSudokuHelper(board){
    
  for(let row=0; row<gridSize; row++){
      for(let col=0; col<gridSize; col++){
          if(board[row][col] === 0){
              for(let num = 1; num <= 9; num++){
                  if(isValidMove(board, row, col, num)){
                      board[row][col] = randomNumber()
                      
                      if(solveSudokuHelper(board)){
                          return true
                      } 
                      
                      board[row][col] = 0
                  }
                  
              }
              return false // 방법이 없음
          }
      }
  }
  return true // 끝
}

function isValidMove(board, row, col, num){
  
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
              return false // conflict found
          }
      }
  }
  
  return true // no conflict found
}

console.log(standardBox)
solveSudokuHelper(standardBox)

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

      // data.innerText = `${coordBoard[x][y]}`

      box.append(data)
    }
  }
  return box 
}

root.append(box)
initNumber()
