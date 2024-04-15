
let questions = [
    'apple', 'eagle', 'fruit', 'class', 'input',
    'style', 'value', 'color', 'white', 'fight',
    'lunch', 'lemon', 'screw' 
]

// let tests = [
//     'abc', 'abcd', 'abccde'
// ]

let correct = questions[Math.floor(Math.random()*questions.length)].toUpperCase()
console.log(correct)
// let correct = tests[Math.floor(Math.random()*tests.length)].toUpperCase()
// console.log(correct)



let count = 0



const root = document.getElementById('root')

const counter = document.createElement('span')
counter.innerText = 0 + '초'
setInterval(() => {
    counter.innerText = count++ + '초'
}, 1000);

const wordle = document.createElement('section')
wordle.className='wordle'
const inputBox = document.createElement('div')
inputBox.className='input-box'
const makeInputList = () => {
    for(let i=0; i<correct.length; i++){
        const input = document.createElement('input')
        input.type = 'text'
        input.className = 'present'
        inputBox.prepend(input)
    }
}
makeInputList()

const button = document.createElement('button')
button.innerText = '제출'
wordle.append(inputBox, button)
root.append(counter, wordle)

function inputEvent(){
    const inputs = document.querySelectorAll('.present')
    inputs[0].focus()
    
    function engCheckValue(e){ // 영어만 입력가능하도록 막기
        if(e.target.value){
            e.target.value = e.target.value.replace(/[^A-Za-z]/ig, '')
        }
    }
    
    function inputOption(e){ // 입력값 e.code값으로 변경
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            e.target.blur() // 없으면 마지막 단어 입력에 문제 발생
            e.target.value = e.code[3]
            if(e.target.nextElementSibling){
                if(e.target.nextElementSibling.classList.contains('present')){
                    e.target.nextElementSibling.focus()
                }
            }else{
                e.target.focus()
            }
        }

        if(e.code === 'ArrowLeft'){
            if(e.target.previousElementSibling){
                e.target.previousElementSibling.focus()
            }
        }
        
        if(e.code === 'ArrowRight'){
            if(e.target.nextElementSibling){
                e.target.nextElementSibling.focus()
            }else{
                e.target.focus()
            }
        }
    }
    
    inputs.forEach(input => {
        input.addEventListener('input', engCheckValue)
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
    const inputs = Array.from(document.querySelectorAll('.present'))

    const validA = inputs.every((input, i)=> {
        return input.value // 전부 입력했는지 확인
    })

    if(validA) {
        inputs.forEach((input, i) => {
            input.classList.remove('present')
                if(input.value === correct[i]){ // 정답
                    input.classList.add('correct')
                }else if(correct.includes(input.value)){ // 포함은 한다
                    input.classList.add('include')
                }else{
                    input.classList.add('wrong')
                }
        })
    }else{
        alert('단어를 전부 입력해주세요')
        return
    }

    
    if(
    inputs.every((input)=>{ // 전부 맞췄다면
        return input.classList.contains('correct')
    })
    ){
        alert(`성공`)
        return
    }
        
    const lifePoint = document.querySelectorAll('.input-box input').length / 5
    
    if(lifePoint > 9){
        alert('game Over')
        inputs.forEach((input, i) => {
            input.value = correct[i]
            input.classList.remove(...input.classList)
            input.classList.add('correct')
        })
    }else{
        makeInputList()
        wordle.prepend(inputBox)
        inputEvent()
    }

}


button.addEventListener('click', checkWord)

function clickButton(e){
    if(e.code === 'Enter'){
        checkWord()
    }
}

window.addEventListener('keyup', clickButton)