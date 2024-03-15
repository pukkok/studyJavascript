const head = document.querySelector('head')
const link = document.createElement('link')
head.append(link)
const root = document.getElementById('root')
// const body
const button1 = document.createElement('button')
button1.innerText = '확인용'

root.append(button1)

const startJS = () => {
    document.body.innerHTML = `<script defer src='tester2.js'></script>`
}

button1.addEventListener('click', startJS)
