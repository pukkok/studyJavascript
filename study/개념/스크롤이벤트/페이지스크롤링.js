const main = document.querySelector('main')
const sections = main.querySelectorAll('section')
const clientHeight = document.documentElement.clientHeight // 브라우저 높이
const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)
let index = 0, timer

const throttling = (handler, e) => {
    if(!timer){
        timer = setTimeout(() => {
            handler(e)
            timer = null
        }, 1000);
    }
}

const changeSlide = (e) =>{
    console.log('scroll', e.deltaY)

    if(e.deltaY > 0){// scroll을 내린 경우
        index++
        if(index > sections.length - 1){
            index = 0
        } 
    } else { //scroll을 올린 경우
        index--
        if(index < 0){
            index = sections.length -1
        }  
    }
    console.log(index)

    // 애니메이션 초기화
    sections.forEach((section, i) => {
        if(index !== i){
            section.style.transition = 'none'
            setTimeout(() => {
                section.style.opacity = '0'
                section.style.height = '0'
                section.style.transition = '1s ease-in-out'
            }, 1000);
        }
    })

    // 현재 슬라이드에 애니메이션 적용
    const section = sections[index]
    section.style.opacity ='1'
    section.style.height = '100vh'

}
window.addEventListener('wheel', (e) => throttling(changeSlide, e)) // 마우스 휠 이벤트