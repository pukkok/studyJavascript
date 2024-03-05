const box = document.getElementById('box') // 마리오
const bar = document.getElementById('bar') // 땅
const FPS = 60 // 프레임
const gravity = 1 // 중력 가속도
const limitBottom = bar.offsetTop - bar.offsetHeight
const jumpHeight = 60 // 중력가속도 1px 보다 크게 반대방향으로 줘서 점프

let vy = 0 // y방향 속도
let vx = 20 // x방향 속도 (등속운동)
let isDead = false // 캐릭터 상태
let isJumping = false // 점프 가능 여부
let jumpKey = false // 점프키 활성화 여부

const down = () => {
    let topStyle = box.offsetTop

    vy += gravity
    topStyle += vy

    if(vy >= jumpHeight){
        jumpKey = false
    }

    if(isDead && topStyle > limitBottom + 700){
        alert('게임 오버')
        clearInterval(timerId)
    }

    if(!isDead && !jumpKey && topStyle >= limitBottom){
        topStyle = limitBottom
            vy=0
            isJumping = true // 그라운드(땅)에 내려앉았을때 점프가능하게 변경
    }
    
    // console.log('속도: ', topStyle)
    box.style.top = topStyle + 'px'

}

const timerId = setInterval(down, 1000/FPS);

const move = (e) => {

    let leftStyle = parseInt(box.offsetLeft)
    if(e.keyCode === 39){ // 우측 화살표
        box.style.backgroundImage = 'url(super-mario-right.jpg)'     
        leftStyle += vx
        if(leftStyle > bar.offsetWidth){
            isDead = true
        }
    }
    if(e.keyCode === 37){ // 좌측 화살표
        box.style.backgroundImage = 'url(super-mario-left.jpg)'     
        if(leftStyle > 0){
            leftStyle -= vx
        }
    }
    if(e.keyCode === 32 || e.keyCode === 38){
        if(isJumping){
            vy = -jumpHeight // 점프 크기
            isJumping = false // 한번만 점프함
            jumpKey = true
        }
    }
    box.style.left = leftStyle + 'px'
}

window.addEventListener('keydown', move)