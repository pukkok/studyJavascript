const userName = document.getElementById('user-name') // 사용자 이름 입력창
const userEmail = document.getElementById('user-email') // 사용자 연락처 입력창
const userAge = document.getElementById('user-age') // 사용자 나이 입력창
const userList = document.getElementById('user-list') // 사용자 리스트 출력 위치

const inputs = document.querySelectorAll('#form input')

const submitBtn = document.getElementById('user-add') //  사용자 추가 버튼
let users = [] // 사용자 리스트 배열

const isValid = () => {
    if(users.includes('')){
        alert('아직 덜썼음')
        return false
    }else return true
}

const buildElement = () => {
    const userEl = document.createElement('div')
    userEl.className = 'user'
    userEl.innerText = `
    name : ${users[0]} 
    email : ${users[1]}
    age : ${users[2]} 
    `
    userList.append(userEl)
}

const addUser = () => {
    
    if(isValid()){
        buildElement()
        inputs.forEach(input=>input.value='')
    }

}

users = Array.from(inputs).map((input)=>{
    return input.value
})
const inputUserText = () => {
    users = Array.from(inputs).map((input)=>{
        return input.value
    })
}

inputs.forEach((input) => {
    input.addEventListener('input', inputUserText)
})

submitBtn.addEventListener('click', addUser)