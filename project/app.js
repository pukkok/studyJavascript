const root = document.getElementById('root')
const header = document.createElement('header')
const main = document.createElement('main')

const section1 = document.createElement('section')
section1.className = 'section1'

main.append(section1)
root.append(header, main)

const makeHeaderList = () => {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    for(i=0; i<10; i++){
        const li = document.createElement('li')
        const a = document.createElement('a')
        li.append(a)
        ul.append(li)
    }
    nav.append(ul)
    header.append(nav)
}
// makeHeaderList()

const makeSection1Item = () => {
    const div1 = document.createElement('div')
    // div1.innerText= '11'
    div1.className = 'img-box'
    const divImg = document.createElement('div')
    const div2 = document.createElement('div')
    div2.className = 'text-box'
    const h1 = document.createElement('h1')
    h1.className = 'title'
    const h4 = document.createElement('h4')
    h4.className = 'text'
    const button = document.createElement('button')
    button.innerText = 'More'
    div1.append(divImg)
    div2.append(h1, h4, button)
    section1.append(div1, div2)
}
makeSection1Item()

const imgBox = document.querySelector('.img-box')
const divImg = document.querySelector('.img-box div')
const startPage = () => {
    imgBox.style.width = '100%'
    imgBox.style.height = '100%'
    divImg.style.bottom = '0'
    setTimeout(() => {
        document.body.style.overflowY = 'scroll'
    }, 500);
}

window.addEventListener('wheel', startPage)