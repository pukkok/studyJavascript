const main = document.querySelector('main')
const sections = document.querySelectorAll('section')
let timer, angle = 0 // degree
let index = 0
const speedOfSlide = 0.1 // 스크롤 내린 양의 20%

const throttling = (handler, e) => {
    if(!timer){
        timer = setTimeout(() => {
           handler(e) 
           timer = null
        }, 100);
    }
}

const intializeStyle = (sections) => {
    sections.forEach((section) => {
        section.style.opacity = '0' // 기존 슬라이드 숨기기
        section.style.transform = `translateX(-50%)`
        section.style.transition = 'none' // 다음슬라이드 나올때 감자기 회전하는 것을 막기 위함
    });
}

const changeSlide = (e) => {
    console.log('scroll', e.deltaY)
    
    if(e.deltaY > 0){
        angle += parseInt(e.deltaY * speedOfSlide)
        console.log(angle)

        if(angle > 360){
            angle = 0 // 다음 슬라이드의 플립을 위한 angle 초기화
            intializeStyle(sections)
        }

        if(Math.abs(angle -90) < 10){ //90도 +-20도 근처
            angle += 180 // 다음 슬라이드의 위상은 270도부터 시작함 (flip)
            index++
            if(index > sections.length -1){
                index = 0 
            }
            // 기존 슬라이드를 숨기고, transition을 잠깐 제거해야 됨
            intializeStyle(sections)
        }
        const section = sections[index]
        section.style.opacity = '1'
        section.style.transform = `translateX(-50%) rotateY(${angle}deg)`
        
        setTimeout(() => {
            section.style.transition = `1s ease-in-out` // 트랜지션 초기화
        }, 50);
    }

}

document.addEventListener('wheel', (e)=> throttling(changeSlide, e))