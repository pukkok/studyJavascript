const parent = document.querySelector('.parent')
const child = document.querySelector(`.child`)

const clickbody = () => {
    console.log('body click')
}

const hideParent = () =>{
    console.log('parent click')
    parent.classList.add('hide')
}
const popup = (e) => {
    e.stopPropagation() // 이벤트 버블링 방지
    console.log('child click')
}

child.addEventListener('click', popup, false) //디폴트 : 이벤트 버블링
parent.addEventListener('click', hideParent)