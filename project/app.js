const grid = document.getElementById('grid')
const root = document.getElementById('root')

const header = document.querySelector('header')
const underLine = document.querySelector('.under-line')

const mainNav = document.querySelector('.main-nav')
const mainNavLi = document.querySelectorAll('.product-nav li')

const depth2 = document.querySelector('header .depth2')
const depth2Sub = depth2.querySelectorAll('.sub')
const depth2SubPTag = depth2.querySelectorAll('.sub p')



    // underLine.style.width = e.target.offsetWidth + 'px'
    // underLine.style.left = e.target.offsetLeft + 'px'
    // underLine.style.top = e.target.offsetHeight + e.target.offsetTop + 'px'



function openDepth2(){
    
    depth2.style.top = '70px'
    depth2.style.backgroundColor = '#fff'
    depth2.style.opacity = '1'
}

const closeDepth2 = () => {
    depth2.style.top = '-300px'
    depth2.style.backgroundColor = 'transparent'
    depth2.style.opacity = '0'
}

mainNavLi.forEach((li)=>{
    li.addEventListener('mouseover', openDepth2)
})

header.addEventListener('mouseleave', closeDepth2)