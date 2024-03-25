const root = document.getElementById('root')

const section3 = document.createElement('section')
section3.className='section3'

const div1 = document.createElement('div')
div1.className = 'container'

const div2 = document.createElement('div')
div2.className = 'text-box'

const h1E1 = document.createElement('h1')
h1E1.innerText = `Modern`
const h1E2 = document.createElement('h1')
h1E2.innerText = `Natural`
const h1E3 = document.createElement('h1')
h1E3.innerText = `Classic`
const h1E4 = document.createElement('h1')
h1E4.innerText = `Unique`
const h2 = document.createElement('h2')

const div3 = document.createElement('div')
div3.className = 'img-box'

for(i=0; i<3; i++){
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.src=`./imgs/section3/main-2-img-modern-${i+1}.jpg`
    div.append(img)
    div3.append(div)
}


div2.append(h1E1, h1E2, h1E3, h1E4)
div1.append(div2, div3)
section3.append(div1)
root.append(section3)