
let questions = ['apple', 'eagle', 'fruit', 'class', 'input', 'style', 'value', 'color']
let correct = questions[Math.floor(Math.random()*questions.length)].toUpperCase()
console.log(correct)

const root = document.getElementById('root')

const wordle = document.createElement('section')
wordle.className='wordle'
const inputBox = document.createElement('div')
inputBox.className='input-box'
for(let i=0; i<5; i++){
    const input = document.createElement('input')
    input.type = 'text'
    input.className = 'present'
    inputBox.append(input)
}

const button = document.createElement('button')
button.innerText = '제출'
wordle.append(inputBox, button)
root.append(wordle)

function inputEvent(){
    const inputs = document.querySelectorAll('.present')
    inputs[0].focus()
    
    function checkValue(e){ // 영어만 입력가능하도록 막기
        if(e.target.value){
            e.target.value = e.target.value.replace(/[^A-Za-z]/ig, '')
        }
    }
    
    function inputOption(e){ // 입력값 key값으로 변경
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
           e.target.blur()
           e.target.value = e.code[3]
           if(e.target.nextElementSibling && e.target.nextElementSibling.classList.contains('present')){
            e.target.nextElementSibling.focus()
           }
        }
    }
    
    inputs.forEach(input => {
        input.addEventListener('input', checkValue)
    })
    inputs.forEach(input => {
        input.addEventListener('keyup', inputOption)
    })
}
inputEvent()

const checkWord = () => {
    // 위치까지 맞으면 - 초록색
    // 위치는 안맞으면 - 노란색
    // 다 안맞으면 - 회색
    const inputs = document.querySelectorAll('.present')

    inputs.forEach((input, i)=> {
        if(input.value){
            input.classList.remove('present')
            if(input.value === correct[i]){ // 정답
                input.classList.add('correct')
            }else if(correct.includes(input.value)){ // 포함은 한다
                input.classList.add('include')
            }else{
                input.classList.add('wrong')
            }        
        }
    })

    for(i=0; i<inputs.length; i++ ){
        const input = document.createElement('input')
        input.type='text'
        input.className = 'present'
        inputBox.prepend(input)
    }
    wordle.prepend(inputBox)

    inputEvent()
}


button.addEventListener('click', checkWord)