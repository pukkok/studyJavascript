const container = document.querySelector('.container')
const items = document.querySelectorAll('.item')
// const text = document.body.querySelector('p')
const text = document.querySelector('p')
const VD = document.querySelector('iframe')
const documentHeight = document.documentElement.clientHeight

let offset =  -100
let distFromBottom // 브라우저 하단에서 요소의 하단 모서리까지 거리

window.addEventListener('scroll', (e)=>{
    distFromBottom = documentHeight - text.getBoundingClientRect().bottom
    if(distFromBottom > offset){
        text.classList.add('fade')
    }
    items.forEach((item)=>{
        distFromBottom = documentHeight - item.getBoundingClientRect().bottom
        if(distFromBottom > offset){
            item.classList.add('fade')
        }
    })
    distFromBottom = documentHeight - VD.getBoundingClientRect().bottom
    if(distFromBottom>offset){
        VD.classList.add('fade')
    }
})