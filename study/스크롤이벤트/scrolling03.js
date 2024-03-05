const container = document.querySelector('.container')
const items = document.createElement('div')
const prevBtn = document.querySelector('.control.before')
const nextBtn = document.querySelector('.control.after')
let isDown = false
let startX
let scrollX // 가로 스크롤바의 현재 위치
const gap = 10

for(i=0; i<20; i++){
    let div = document.createElement('div')
    div.className = 'item'
    div.innerText = i+1
    container.append(div)
}
const delta = document.querySelector('.item').offsetWidth + gap

const moveToLeft = () => {
    container.scrollLeft += delta
}
const moveToRight = () => {
    container.scrollRight -= delta
}




const handleMouseDown = (e) => {
    isDown = true
    container.classList.add('active')
    startX = e.pageX // 클릭시 마우스 드래그 시작점 저장
    scrollX = container.scrollLeft
}
const handleMouseMove = (e) => {
    if(!isDown) return
    const walk = e.pageX - startX  // 마우스 드래그한 이동거리(벡터)
    container.scrollLeft = scrollX - walk // 가로스크롤바 위치를 마우스 드래그한 거리만큼 이동(변경)
}
const handleMouseUp = (e) => {
    isDown = false
    container.classList.remove('active')
}
const handleMouseLeave = (e) => {
    isDown = false
    container.classList.remove('active')
}

container.addEventListener('mousedown', handleMouseDown)
container.addEventListener('mousemove', handleMouseMove)
container.addEventListener('mouseup', handleMouseUp)
container.addEventListener('mouseleave', handleMouseLeave)

prevBtn.addEventListener('click', moveToRight)
nextBtn.addEventListener('click', moveToLeft)