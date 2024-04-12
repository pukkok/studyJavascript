let 답들 = ['apple', 'eagle', 'fruit', 'class', 'input', 'style', 'value', 'color']
let 답 = 답들[Math.floor(Math.random()*답들.length)]
console.log(답)

const btn = document.querySelector('button')
let component = document.createElement('div')

const inputs = document.querySelectorAll('.input')
function inputMaxLength(e){
    let x = e.target.value.split('').pop()

    if(e.target.value.length > 1){
       e.target.value = x
    }
}
// if(input.value.length > 1){
//     input.value = input.value.substr(0, 1)
// }

inputs.forEach(input=>{
    input.addEventListener('input', inputMaxLength)
})
const 채점 = () => {
    // 위치까지 맞으면 - 초록색
    // 위치는 안맞으면 - 노란색
    // 다 안맞으면 - 회색
    inputs.forEach((input, i)=> {
        input.length===1
        if(input.value === 답[i]){ // 정답
            input.style.backgroundColor = 'green'
            input.style.color = 'white'
        }else if(답.includes(input.value)){ // 포함은 한다
            input.style.backgroundColor = 'orange'
        }else{
            input.style.backgroundColor = 'grey'
        }
    })

    for(i=0; i<inputs.lenth; i++ ){
        let input = document.createElement('input')
        input.className = 'input'
        component.append(input)
    }
    document.body.append(component)
}

btn.addEventListener('click', 채점)