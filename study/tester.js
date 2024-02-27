const root = document.getElementById('root')
const container = document.createElement('div')
container.id = `container`
const inputColor = document.createElement('input')
inputColor.className = 'input-color'
inputColor.type = 'text'
inputColor.placeholder = 'Select color'
const arrow = document.createElement('span')
arrow.className = 'arrow'
arrow.innerText = '▽' // △
const colorList = document.createElement('div')
colorList.className = 'color-list'

const colorBox = document.createElement('div')
colorBox.className = 'color-box'

root.append(container, colorBox)
container.append(inputColor, arrow, colorList)

let index = -1
let prevIndex = -1
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
let isOpened = false

for(let color of colors){
    const colorItem = document.createElement('div')
    colorItem.className = `color-item`
    colorItem.innerText = color
    colorList.append(colorItem)
}

const showList = (e) => {
    console.log(e.target)
    if(e.target.className === `arrow`){
        if(e.target.innerText === '▽'){
            colorList.style.display = 'block'
            arrow.innerText = '△'
            isOpened = true
        } else {
            colorList.style.display = 'none'
            arrow.innerText = '▽'
            isOpened = false
        }
    } else {
        colorList.style.display = 'none'
        arrow.innerText = '▽'
        isOpened = false
    }
}

const inputText = (e) => {
    if(e.target.className === 'input-color'){
        let color = e.target.value
        colorBox.style.backgroundColor = color
    }
}

const clickList = (e) => {
    if(e.target.className === 'color-item'){
        let color = e.target.innerText
        colorBox.style.backgroundColor = color
        inputColor.value = color
    }
}

const arrowShowList = (e) => {
   
    console.log(e.keyCode)
    prevIndex = index
    if(e.keyCode === 40){
        console.log("리스트 보여주기")
        index++
        if(index>colors.length-1){
        index=0
        }
        changeList()
        if(arrow.innerText === '▽'){
            colorList.style.display = 'block'
            arrow.innerText = '△'
            isOpened = true
        }
    }
    else if(isOpened && e.keyCode === 38){
        index--
        if(index<0){
        index=colors.length-1
        }
        changeList()

    }
    else if(isOpened && e.keyCode === 13){
        colorBox.style.backgroundColor = colors[index]
        inputColor.value = colors[index]
        showList(e)
        // clearEvent(index)
        isOpened = false
    }
}

const changeList = () => {
    if(index>=0 && index<colors.length){
        if(prevIndex>-1){
        let prevItem = colorList.querySelectorAll('.color-item')[prevIndex]
        prevItem.style.backgroundColor = '#0e1111'
        }
        let item = colorList.querySelectorAll('.color-item')[index]
        item.style.backgroundColor = 'blueviolet'       
    }
}
const syncArrowShowList = (e) => {
    arrowShowList(e)
}

const clearEvent = (index) => {
    colorList.querySelectorAll('.color-item')[index]
    container.removeEventListener('keyup', arrowShowList)
    index=-1
    prevIndex=-1
}

function initKeyUp(e){
    let selectedItem = colorList.querySelectorAll('.color-item')[index]
    selectedItem.style.backgroundColor = '#0e1111'
    index = -1
    prevIndex = -1
    console.log(e.target)
    const colorItems = colorList.querySelectorAll('.color-item')
    for(let colorItem of colorItems){
        colorItem.style.backgroundColor = ""
    }
}

container.addEventListener('keyup', arrowShowList)
container.addEventListener('click', clickList)
container.addEventListener('input', inputText)
window.addEventListener('click', showList)
colorList.addEventListener('mouseenter', initKeyUp)