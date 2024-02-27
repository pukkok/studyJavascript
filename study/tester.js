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

for(let color of colors){
    const colorItem = document.createElement('div')
    colorItem.className = `color-item`
    colorItem.innerText = color
    colorList.append(colorItem)
}

const showList = (e) => {
    if(e.target.className === `arrow`){
        if(e.target.innerText === '▽'){
            colorList.style.display = 'block'
            arrow.innerText = '△'
        } else {
            colorList.style.display = 'none'
            arrow.innerText = '▽'
        }
    } else {
        colorList.style.display = 'none'
        arrow.innerText = '▽'
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
        index++
        if(index>colors.length-1){
        index=0
        }
        changeList()
        if(arrow.innerText === '▽'){
            colorList.style.display = 'block'
            arrow.innerText = '△'
        }
    }
    else if(e.keyCode === 38){
        index--
        if(index<0){
        index=colors.length-1
        }
        changeList()

    }
    else if(e.keyCode === 13){
        colorBox.style.backgroundColor = colors[index]
        inputColor.value = colors[index]
        showList(e)
        clearEvent(index)
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

const clearEvent = (index) => {
    container.removeEventListener('keyup', arrowShowList)
    index=-1
    colorList.querySelectorAll('.color-item')[index]
    prevIndex=-1
}
const restartEvent = (e) => {
    if(e.keyCode === 40){
        container.addEventListener('keyup', arrowShowList)
    }
}

container.addEventListener('keyup', restartEvent)

container.addEventListener('keyup', arrowShowList)
container.addEventListener('click', clickList)
container.addEventListener('input', inputText)
window.addEventListener('click', showList)