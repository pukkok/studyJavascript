const root = document.getElementById('root')

const section4 = document.createElement('section')
section4.className = 'section4'
const container = document.createElement('div')
container.className = 'container'

const div1 = document.createElement('div')
div1.className = 'img-box'
const img1 = document.createElement('img')
img1.src='./imgs/section4/main-img-banner-01.jpg'

const div2 = document.createElement('div')
div2.className = 'text-box'
const h1E1 = document.createElement('h1')
h1E1.innerText = '인테리어 시작하기'
const pE1 = document.createElement('p')
pE1.innerText = `인테리어 어디서부터 시작해야 할지 막막하시죠?
자재 선택부터 시공 방법까지 하나하나 알려드릴게요.
`
const buttonE1 = document.createElement('button')
buttonE1.innerText = '인테리어 시작하기'

const div3 = document.createElement('div')
div3.className = 'text-box'
const h1E2 = document.createElement('h1')
h1E2.innerText = '영림 정품 확인하기'
const pE2 = document.createElement('p')
pE2.innerText = `품질에 대한 자부심을 담은
영림의 제품에는 정품 마크가 표기되어 있습니다.
영림의 철학과 가치를 나타내는 정품 마크를 확인해보세요.`
const buttonE2 = document.createElement('button')
buttonE2.innerText = '영림 브랜드 아이덴티티'

const div4 = document.createElement('div')
div4.className = 'img-box'
const img2 = document.createElement('img')
img2.src = './imgs/section4/main-img-banner-02.jpg'

div1.append(img1)
div2.append(h1E1, pE1, buttonE1)
div3.append(h1E2, pE2, buttonE2)
div4.append(img2)
container.append(div1, div2, div3, div4)

section4.append(container)
root.append(section4)