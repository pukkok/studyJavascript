const root = document.getElementById('root')
const inputBox = document.createElement('div')
inputBox.className = 'input-box'
const inputLogin = document.createElement('input')
inputLogin.placeholder = '아이디 입력'
const inputPassword = document.createElement('input')
inputPassword.placeholder = '패스워드 입력'
const checkValid = document.createElement('button')
checkValid.innerText = '확인'

const lightBox = document.createElement('div')
const pTag = document.createElement('p')
lightBox.className = 'light-box'
for(i=0; i<3; i++){
    const span = document.createElement('span')
    lightBox.append(span)
}
const lights = lightBox.querySelectorAll('span')
lights[0].className = 'on'

let check_eng = /[a-zA-Z]/ // 영문자
let check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/ //한글체크
let check_num = /[0-9]/ //숫자
let check_UpEng = /[A-Z]/ // 소문자
let check_LowEng = /[a-z]/ // 대문자
let check_spc = /[~!@#$%^&*()_+|<>?:{}]/ // 특수문자


inputBox.append(inputLogin, inputPassword)
root.append(inputBox, checkValid, lightBox, pTag)
pTag.innerText = '보안이 취약합니다'
pTag.style.color = 'red'

const checkLogin = () => {
    if(inputLogin.value !== ""){
        console.log('로그인중입니다')
    }
}

const isValids = {
    'number': check_num, 
    'au': check_UpEng, 
    'al': check_LowEng, 
    'spc': check_spc
}

const flags = {
    'number': false,
    'au': false, 
    'al': false,
    'spc': false,
}
    
const tester = (e) => {
    let count = 0
    let pwData = e.target.value

    for(let key in isValids){
        if(isValids[key].test(pwData)){
            flags[key] = true
        }else{
            flags[key] = false 
        }
    }

    for(let key in flags){
        if(flags[key]) {count++}
        // else {count--}
    }
    
    lights.forEach((light)=> {
        if(light.classList.contains('on')){
            light.classList.remove('on')
        }
    })

    if(count<2){
        lights[0].classList.add('on')
        pTag.innerText = '보안이 취약합니다'
        pTag.style.color = 'red'
    }else if(2<=count && count<=3){ 
        lights[1].classList.add('on')
        pTag.innerText = '아직 부족해요'
        pTag.style.color = 'orange'
    }else if(count>3){
        lights[2].classList.add('on')
        pTag.innerText = '안전 해요'
        pTag.style.color = 'green'
    }
}

    


const checkPassword = () => {
    let pwData = inputPassword.value

    if(pwData.length < 10){
        console.log('10자 이상으로 입력해주세요')
    }
    else if(check_num.test(pwData) && check_UpEng.test(pwData) && check_LowEng.test(pwData) && check_spc.test(pwData)){
        console.log('비밀번호 조건을 만족합니다.')
    }
    if(!check_num.test(pwData)){
        console.log('숫자를 포함해주세요')
    }
    if(!check_spc.test(pwData)){
        console.log('특수문자를 포함해주세요')
    }
    if(!check_UpEng.test(pwData)){
        console.log('대문자를 포함해주세요')
    }
    if(!check_LowEng.test(pwData)){
        console.log('소문자를 포함해주세요')
    }
    console.log('--------------------', count)
}


checkValid.addEventListener('click', checkPassword)
inputPassword.addEventListener('keyup', tester)