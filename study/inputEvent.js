const colorBox = document.querySelector('.color-box')
const colorInput = document.getElementById('color-input')
const colorList = document.querySelector('.color-list')

// 서버에서 가져오지만 가상으로 색상목록을 서버에서 가져왔다고 가정하고 배열로 정의
const colors = ['orange', 'blue', 'brown', 'green', 'red', 'skyblue']

let index = -1 // 화살표키로 선택한 색상에 대한 인덱스값
let prevIndex = -1 // 화살표키로 이전에 선택한 색상에 대한 인덱스값

// 색상목록을 화면에 보여주기 위한 함수
const addColors = (colors) => {
    for(let color of colors){
        console.log(color)
        const item = `<div class=color-item>${color}</div>`
        colorList.innerHTML += item
    }
}

const selectColor = (e) => { // 사용자가 화살표 키로 색상을 선택할 때 하이라이트 적용하기
    console.log(e.keyCode) // 키값의 숫자
    if(e.keyCode){
        changeHighLightItem(e.keyCode) // 사용자가 선택한 색상에 대한 인덱스값 변경하기
        unsetHighLightItem(prevIndex) // 사용자가 직전에 선택한 색상에 적용된 하이라이트 해제
        highLightColorItem(index) // 사용자가 현재 선택한 색상에 하이라이트 적용
    }
}

const changeHighLightItem = (key) => {
    prevIndex = index // 현재 사용자가 선택한 색상에 대한 인덱스값 저장
    if(key === 40){ // 아래쪽 화살표 키를 누른 경우
        index++
        if(index > colors.length -1){
            index = 0 // 마지막 색상에서 다시 첫번째 색상으로 이동하면서 하이라이트 적용
        }
    }else if(key === 38){ // 위쪽 화살표 키를 누른 경우
        index--
        if(index < 0){
            index = colors.length -1 // 마지막 색상으로 이동
        }
    }else if(key === 13){ // 엔터키 누른경우 사용자가 색상을 선택한 경우
        setBackground(colors[index]) // 배경색 변경
    }
    console.log('직전에 선택한 색상: ', prevIndex, colors[prevIndex])
    console.log('현재 선택한 색상: ', index, colors[index])
}

const highLightColorItem = (colorIndex) => {
    if(colorIndex >= 0 && colorIndex < colors.length){
        const colorItem = document.querySelectorAll('.color-item')[colorIndex] // 전체 색상목록
        colorItem.classList.add('highlight')
    }
}
const unsetHighLightItem = (colorIndex) => {
    if(colorIndex >= 0 && colorIndex < colors.length){
        const colorItem = document.querySelectorAll('.color-item')[colorIndex] // 전체 색상목록
        colorItem.classList.remove('highlight')
    }
}

const typeColor = (e) => {
    console.log(e.target.value)

    if(e.target.value !== ''){
        console.log('사용자가 뭔가 입력함')
        colorList.classList.add('show')
        // 키 이벤트가 동작하도록 하기
        colorInput.addEventListener('keyup', selectColor)
    } else {
        console.log('입력값 없음')
        colorList.classList.remove('show')
        // 키 이벤트를 해제해서 사용자가 색상을 선택하지 못하도록 하기
        colorInput.removeEventListener('keyup', selectColor)
    }
}

const initHighlight = () => {
    unsetHighLightItem(index) // 현재 선택된 색상에 대한 하이라이트 해제
    index = -1
    prevIndex = -1
}

const setBackground = (color) => {
    console.log('선택한 색상 :', color)
    colorInput.value = color
    colorList.classList.remove(`show`)
    colorBox.style.backgroundColor = color
    initHighlight() // 하이라이트 적용 초기화
    // 키 이벤트 해제하기 - 색상목록이 보이지 않는데 키로 색상을 선택하면 안됨
    colorInput.removeEventListener('keyup', selectColor)
}

const setColor = (e) => {
    if(e.target.className === 'color-item'){
        const pickedColor = e.target.innerText
        setBackground(pickedColor) // 배경색 변경
    }
}

addColors(colors)

// 사용자가 뭔가 타이핑할때 이벤트 발생하고 처리하기
colorInput.addEventListener('input', typeColor)
colorList.addEventListener('click', setColor)

