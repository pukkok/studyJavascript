const main = document.querySelector('main')
const sections = main.querySelectorAll('section')
const clientHeight = document.documentElement.clientHeight // 브라우저 높이
const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)
let index = 0, timer

const nav = document.querySelector('nav')

const changeWidth = (e) => {
    nav.style.marginRight = '100px'
}

const clearWidth = (e) => {
    if(e.target === nav){
        nav.style.marginRight = '0px'
    }
}

nav.addEventListener('mouseover', changeWidth)
nav.addEventListener('mouseleave', clearWidth)

const mainBox = document.querySelector('.main-box')
const navLi1 = document.querySelectorAll('.sub-menu li')
const prev = document.querySelector('.main-menu span')


const changePage = (e) => {
    if(e.target === prev){
        mainBox.classList.remove('alpha')
        mainBox.classList.add('number')
        // nav.style.right = '-100px'
        // nav.style.left = '100vw'
    }
    if(e.target === navLi1[0]){
        mainBox.classList.add('alpha')
        // nav.style.position = 'absolute'
        nav.style.right = '-100vw'
    }
    console.log(e.target)
}

nav.addEventListener('click', changePage)

// const throttling = (handler, e) => {
//     if(!timer){
//         timer = setTimeout(() => {
//             handler(e)
//             timer = null
//         }, 500);
//     }
// }

// const changeSlide = (e) =>{
//     console.log('scroll', e.deltaY)

//     if(e.deltaY > 0){// scroll을 내린 경우
//         index++
//         if(index > sections.length - 1){
//             index = 0
//         } 
//     } else { //scroll을 올린 경우
//         index--
//         if(index < 0){
//             index = sections.length -1
//         }  
//     }
//     console.log(index)

//     // 애니메이션 초기화
//     sections.forEach((section, i) => {
//         if(index !== i){
//             section.style.transition = 'none'
//             setTimeout(() => {
//                 section.style.opacity = '0'
//                 section.style.height = '0'
//                 section.style.transition = '1s ease-in-out'
//             }, 1000);
//         }
//     })

//     // 현재 슬라이드에 애니메이션 적용
//     const section = sections[index]
//     section.style.opacity ='1'
//     section.style.height = '100vh'
// }
// window.addEventListener('wheel', (e) => throttling(changeSlide, e)) // 마우스 휠 이벤트