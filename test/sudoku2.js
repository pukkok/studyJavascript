const root = document.getElementById('root')

const h1 = document.createElement('h1')
h1.innerText = '스도쿠 풀이'

const table = document.createElement('table')
table.className = 'sdoku-box'

const tbody = document.createElement('tbody')
table.append(tbody)

const gridSize = 9;
const solveButton = document.createElement('button')
solveButton.innerText = '스도쿠 생성'

for(let row=0; row<9; row++){
    const tableRow = document.createElement('tr')
    for(let col=0; col<9; col++){
        const cell = document.createElement('td')
        const input = document.createElement('input')
        input.type = 'number'
        input.id = `cell-${row}-${col}`
        input.className = 'cell'
        cell.append(input)
        tableRow.append(cell)
    }
    tbody.append(tableRow)
} 

root.append(h1, table, solveButton)

async function solveSudoku(){
    const sudokuArray = []
    
    for(let row = 0; row < gridSize; row++){
        sudokuArray[row] = []
        for(let col = 0; col < gridSize; col++){
            const cellId = `cell-${row}-${col}`
            const cellValue = document.getElementById(cellId).value
            sudokuArray[row][col] = cellValue !== '' ? parseInt(cellValue) : 0
        }
    }
    
    for(let row = 0; row < gridSize; row++){
        for(let col = 0; col < gridSize; col++){
            const cellId = `cell-${row}-${col}`
            const cell = document.getElementById(cellId)
            
            if(sudokuArray[row][col] !== 0){
                cell.classList.add('user-input')
            }
        }
    }
    
    if(solveSudokuHelper(sudokuArray)){
        for(let row = 0; row < gridSize; row++){
            for(let col = 0; col < gridSize; col++){
                const cellId = `cell-${row}-${col}`
                const cell = document.getElementById(cellId)
                
                if(!cell.classList.contains('user-input')){
                    cell.value = sudokuArray[row][col]
                    cell.classList.add('solved')
                    await sleep(20)
                }
            }
        }
    }else{
        alert('가능한 스도쿠가 존재하지 않습니다.')
    }
}

function solveSudokuHelper(board){
    
    for(let row=0; row<gridSize; row++){
        for(let col=0; col<gridSize; col++){
            if(board[row][col] === 0){
                for(let num = 1; num <= 9; num++){
                    if(isValidMove(board, row, col, num)){
                        board[row][col] = num
                        
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

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
solveButton.addEventListener('click', solveSudoku)