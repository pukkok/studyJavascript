const app = document.getElementById('app')

function randomNumberExtractor(){
  let randomNumber = Math.floor(Math.random()*9)+1
  return randomNumber
}

const box = document.createElement('div')
box.className = 'sdoku-box'

function sudoku(){
 
  const standardBoard = [
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

  let board = JSON.parse(JSON.stringify(standardBoard))

  const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let count = true

  while(count){
    count = false
    for(let i=0; i<9; i++){
      for(let j=0; j<9; j++){
        let available_row = []
        let available_col = []
        let available_matrix = []
        let current_loc = []
        let available_final = []
        if(board[i][j] === 0){
          count = count || true
          

          available_row = numberArr.filter((num)=>!board[i].includes(num))

          for(let key of board){
            available_col = numberArr.filter(num => num!==key[j])
          }

          current_loc = [Math.floor((i+1)/3), Math.floor(j+1)/3]
          for(let ii = current_loc[0]*3; ii< current_loc[0]*3+3; ii++){
            for(let jj= current_loc[1]*3; jj<current_loc[1]*3+3; jj++){
              available_matrix.push(board[ii][jj])
            }
          }

          available_matrix = numberArr.fill(num => !available_matrix.includes(num))

          available_final = [...available_col, ...available_row, ...available_matrix]

          if(available_final.length === 1){
            board[i][j] = available_final.shift()
          }

        }
      }
    }
  }

  return board
}

let a = sudoku()
console.log(a)




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

app.append(box)
initNumber()
