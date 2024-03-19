const pTag1 = document.querySelector('.first-parallel')
const pTag2 = document.querySelector('.second-parallel')

const textArr1 = 'pukkok breakfast pukkok lunch pukkok dinner pukkok delicious pukkok'.split(' ')
const textArr2 = 'Chicken Pizza Hamburger Salad Sushi Bibimbab Gimbab Ramyeon'.split(' ')

function initTexts(el, textArray){
    textArray.push(...textArray)
    for(let i=0; i<textArray.length; i++){
        el.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)

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
    count1+=5
    count2+=5

    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1)

    window.requestAnimationFrame(animate)
}
animate()

window.addEventListener('wheel', ()=>{
    count1 +=30
    count2 +=30
})