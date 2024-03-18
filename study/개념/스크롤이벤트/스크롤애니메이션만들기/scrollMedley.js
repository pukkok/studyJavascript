const fistLine = document.querySelector('.first-line')
const secondLine = document.querySelector('.second-line')

let count1 = 0
let count2 = 0

function marqueeText(count, element, direction){

    if (count > element.scrollWidth / 2){
        element.style.transform = `translateX(0)`
        count = 0
    }
    element.style.transform = `translateX(${count * direction}px)`
    return count
}

function animate () {
    count1++
    count2++

    count1 = marqueeText(count1, fistLine, -1)
    count2 = marqueeText(count2, secondLine, 1)

    window.requestAnimationFrame(animate)
}
animate()

window.addEventListener('wheel', ()=>{
    count1 +=15
    count2 +=15
})