const root = document.getElementById('root')

const section4 = document.createElement('section')
section4.className = 'section4'
const container = document.createElement('div')
container.className = 'container'

const div1 = document.createElement('div')
div1.className = 'text-box'
const h1 = document.createElement('h1')
h1.innerText = '매거진.Y'
const div2 = document.createElement('div')
div2.className = 'card-container'
const div3 = document.createElement('div')
div3.className = 'card'

div1.append(h1)
div2.append(div3)
container.append(div1, div2)
section4.append(container)
root.append(section4)

