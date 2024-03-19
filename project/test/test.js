const root = document.getElementById('root')
const main = document.createElement('main')
const section1 = document.createElement('section')
section1.className='section1'
const div = document.createElement('div')
div.className = 'test-box'

section1.append(div)
main.append(section1)
root.append(main)

let currentX = 0
let startX = div.getBoundingClientRect()
console.log(startX.right)

function downPoint(e){
    currentX = e.pageX
    return currentX
}

function movePoint(e){
    // console.log('무브',e.pageX)
    // let movePointer = e.pageX
    // return movePointer
}

/** startX +-5 , = curX  */

function upPoint(e){
    console.log(startX)
    console.log(currentX)
    let endX = e.pageX
    if(startX.right >= currentX-5 || startX <= currentX+5){
        console.log('작동')
        div.style.width = 500 + endX-currentX + 'px'
    }
    console.log(endX)
    return 
}

// function resizeBox(){
//     let a = downPoint(e)
//     let b = 
// }

window.addEventListener('pointerdown', downPoint)
window.addEventListener('pointermove', movePoint)
window.addEventListener('pointerup', upPoint)

// div.addEventListener('click', resizeBox)