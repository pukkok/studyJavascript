const headBox = document.querySelector('.window')
const container = document.querySelector(`.container`)
const actions = document.querySelector('.actions')
const prev = document.querySelector(`.prev`)
const next = document.querySelector(`.next`)
let index = 1
let isDown // 마우스 클릭여부
let walk // 드래그한 거리
let startX // 마우스 클릭 시작점
let isOver // 사진의 절반을 못넘은 경우 true
let timer
let widthOfPhoto = 50;
let data

const moveToRight = (e) => {
    index--
    container.style.marginLeft = `${-1 * index * widthOfPhoto}vw`
    if(index === 0){
        console.log('마지막 사진')
        setTimeout(() => {
            container.style.transition = "none"
            container.style.opacity = "0"
            index = 5
            container.style.marginLeft = `${-1 * index * widthOfPhoto}vw`
            container.style.opacity = "1"
            setTimeout(() => {
                container.style.transition = ".5s ease-in-out" 
            }, 50);
        }, 500);
    }
}
const moveToLeft = (e) => {
    index++
    container.style.marginLeft = `${-1 * index * widthOfPhoto}vw`
    
    if(index === 6){
        console.log('마지막 사진')
        setTimeout(() => {
            container.style.transition = "none"
            container.style.opacity = "0"
            index = 1
            container.style.marginLeft = `${-1 * index * widthOfPhoto}vw`
            container.style.opacity = "1"
            setTimeout(() => {
                container.style.transition = ".5s ease-in-out" 
            }, 50);
        }, 500);
    }
}

const handleMouseDown = (e) => {
    console.log('down')
    isDown = true
    startX = e.clientX
}

const px2vw = (px) =>{
    return px / document.documentElement.clientWidth * 100
}

const handleMouseMove = (e) => {
    // console.log('move')
    if(isDown){
        // console.log('드래그')

        walk = e.pageX - startX // 마우스 드래그한 거리
        walk2vw = px2vw(Math.abs(walk)) // 마우스 드래그한 거리의 절대값을 vw 단위로 환산
        // console.log(walk, walk2vw + `vw`)

        if (walk < 0) { // 왼쪽으로 드래그한 경우
            if(walk2vw < 50/2){ // 드래그한 거리가 슬라이드 너비의 절반을 넘지 못한 경우
                // console.log('다음사진')
                container.style.marginLeft = (-1 * index * widthOfPhoto - walk2vw) + `vw`
                isOver = true
            } else {
                throttling(moveToLeft) // 다음 사진으로 이동
                isOver = false
            }

        } else { // 오른쪽으로 드래그한 경우
            if(walk2vw < 50/2){ // 드래그한 거리가 슬라이드 너비의 절반을 넘지 못한 경우
                // console.log('이전사진')
                container.style.marginLeft = (-1 * index * widthOfPhoto + walk2vw) + `vw`
                isOver = true
            } else {
                throttling(moveToRight) // 다음 사진으로 이동
                isOver = false
            }
        }
    }
}

const handleMouseUp = () => {
    console.log('up', isOver)
    isDown = false

    if(isOver){
        container.style.marginLeft = `${-1 * index * widthOfPhoto}vw`
        isOver = false
    }
}
const handleMouseLeave = () => {
    // console.log('leave')
    isDown = false
}

const throttling = (handler) => { // handler : 함수 파라미터로 전달받아서 내부에서 실행하는 함수
    if(!timer){
        timer = setTimeout(() => {
            handler() // 함수 내부로 전달된 moveToRight, moveToLeft 함수를 실행함
            timer = null
        }, 500)
    }
}

const sizeControl = document.querySelector('.sizeCon')

const changeValue = () =>{ 
    headBox.style.width = `${widthOfPhoto}vw`
    headBox.style.height = `${widthOfPhoto}vh`
    container.style.width = `calc(${widthOfPhoto}vw * 7)`
    container.style.marginLeft = `${-1 * index * widthOfPhoto}vw`
}

const screenMode = () => {
    if(sizeControl.innerText === '+'){
        widthOfPhoto=100
        changeValue()
        headBox.style.marginBottom = 0
        sizeControl.innerText = '-'
        actions.style.display = 'none'
    }else{
        widthOfPhoto=50
        changeValue()
        headBox.style.marginBottom = `2rem`
        sizeControl.innerText = '+'
        actions.style.display = 'block'
    }
}
// const screenMode = () => {
//         widthOfPhoto=50
//         headBox.style.width = `${widthOfPhoto}vw`
//         headBox.style.height = `${widthOfPhoto}vh`
//         container.style.width = `calc(${widthOfPhoto}vw * 7)`
//         container.style.marginLeft = `${-1 * index * widthOfPhoto}vw`
//         sizeControl.innerText = '+'
//         console.log (container.style.width)
// }

sizeControl.addEventListener('click', screenMode)

prev.addEventListener('click', () => throttling(moveToRight))
next.addEventListener('click', () => throttling(moveToLeft))

container.addEventListener('mousedown', handleMouseDown)
container.addEventListener('mousemove', handleMouseMove)
container.addEventListener('mouseup', handleMouseUp)
container.addEventListener('mouseleave', handleMouseLeave)