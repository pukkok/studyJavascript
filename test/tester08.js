const circle = document.getElementById('circle');


const moveCircle = (e) => {
    // console.log(e.clientX, e.clientY)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
    circle.classList.remove('on')
}
let addOn = setInterval(() => {
    circle.classList.add('on')
}, 1000);

const clickCirle = () => {
    circle.style.backgroundImage = `url("./라이언.png")`
    circle.classList.remove('on')
}

window.addEventListener('mousemove', moveCircle)
window.addEventListener('mousedown', clickCirle)

