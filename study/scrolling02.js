const container = document.querySelector('.container')
const items = document.querySelectorAll('.item')
const coords = container.getBoundingClientRect() //컨테이너 좌표 구하기
const clientHeight = document.documentElement.clientHeight
const xCenter = coords.width / 2 // 컨테이너의 x방향 중심점
const yCenter = coords.height / 2 // 컨테이너의 y방향 중심점
const Radius = 350
let scrollHeight = Math.max( //문서의 높이
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight,    
        )

// console.log(container.style.width)

const scrollCircle = () => {
   container.style.transform = `translate(-50%, -50%) rotate(${window.pageYOffset / (scrollHeight - clientHeight)*360}deg)`
}

const degToRad = (deg) => {
    return deg * (Math.PI/180)
}

// delta: degree 단위 -> 라디안 단위(radian)
const setPosition = (xc, yc, R, delta) => {
    const radian = degToRad(delta)
    return [R*Math.cos(radian)+xc, R*Math.sin(radian)+yc]
}

// 컨테이너의 중심점을 기준으로 아이템을 원의 형태로 배치
for(i=0; i<items.length; i++){
    const [x, y] = setPosition(xCenter, yCenter, Radius, 360/items.length * (i+1))
    items[i].style.cssText = `
    left : ${x}px;
    top : ${y}px;
    `
}

window.addEventListener('scroll', scrollCircle)