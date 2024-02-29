const container = document.querySelector('.container')
const items = document.querySelectorAll('.item')

const clientHeight = document.documentElement.clientHeight

const Radius = 350


let scrollHeight = Math.max( //문서의 높이
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight,    
        )

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

const changeCenter = () => {
    const coords = container.getBoundingClientRect() //컨테이너 좌표 구하기
    const xCenter = (coords.right - coords.left) / 2 // 컨테이너의 x방향 중심점 // (coords.width) / 2
    const yCenter = (coords.bottom - coords.top) / 2 // 컨테이너의 y방향 중심점 // coords.height / 2
    return [xCenter, yCenter]
}


const circleItems = () => {
    const [xCenter, yCenter] = changeCenter() // 원의 중심을 다시 계산해주는 코드
    
    // 컨테이너의 중심점을 기준으로 아이템을 원의 형태로 배치
    items.forEach((item, i)=>{ // 아이템의 위치를 다시 계산하고 그려주는 코드
        const [x, y] = setPosition(xCenter, yCenter, Radius, 360/items.length * (i+1))
        item.style.cssText = `
        left : ${x}px;
        top : ${y}px;
        `
    })
}

circleItems()
window.addEventListener('scroll', scrollCircle)
window.addEventListener('resize', circleItems) // 브라우저 크기가 변경될때