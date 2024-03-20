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
    const divbox = document.createElement('div')
    const div = document.createElement('div')
    div.className = 'img-box'
    const div2 = document.createElement('div')
    div2.className = 'text-box'
    const ul = document.createElement('ul')
    for(i=0; i<3; i++){
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText=`${i+1}`
        li.append(a)
        ul.append(li)
    }
    div2.append(ul)
    divbox.append(div, div2)
    section1.append(divbox)
}
makeSection1Item()
makeSection1Item()
