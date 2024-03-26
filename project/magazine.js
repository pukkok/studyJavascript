const magazine = [
    {img : "./imgs/magazine/magazine01.jpg", h4 : "TV CF 속 그공간, 그 제품", p : "2021 영림의 다양한 신제품들을 담은 현장 속 인테리어 살펴보기"},
    {img : "./imgs/magazine/magazine02.jpg", h4 : "새로운 꿈을 꾸며 내일을 설계하는 집", p : "눈이 펑펑 오던 어느 겨울, 고요하게 눈이 쌓인 전원주택 마을을 방문했다"},
    {img : "./imgs/magazine/magazine03.jpg", h4 : "2021 영림 TV CF 광고 촬영 비하인드", p : "토탈인테리어 브랜드 '영림'의 첫 TV CF 촬영 비하인드 스토리, 지금 공개합니다."},
    
]

const root = document.getElementById('root')

const section4 = document.createElement('section')
section4.className = 'section4'
const container = document.createElement('div')
container.className = 'container'

const div1 = document.createElement('div')
div1.className = 'text-box'
const h1 = document.createElement('h1')
h1.innerText = '매거진.Y'
const p = document.createElement('p')
p.innerText = `영림만의 소식을 여러분들께 전합니다.
브랜드 소식과 인테리어에 대한 우리의 다양한 이야기를 기록합니다.`
const div2 = document.createElement('div')
div2.className = 'card-container'

magazine.forEach(item => {
    const div3 = document.createElement('div')
    div3.className = 'card'
    const img = document.createElement('img')
    img.src = item.img
    const h4 = document.createElement('h4')
    h4.innerText =item.h4
    const p = document.createElement('p')
    p.innerText =item.p
    div3.append(img, h4, p)
    div2.append(div3)
})
const div4 = document.createElement('div')
div4.className = 'indicator-line'
const hr = document.createElement('hr')

const span = document.createElement('span')
const a = document.createElement('a')
a.innerText='자세히 보기'
div4.append(span, hr)
div1.append(h1, p)
container.append(div1, div2, div4, a)
section4.append(container)
root.append(section4)

/**매거진.Y
 * 
 * 브랜드 소식과 인테리어에 대한 우리의 다양한 이야기를 기록합니다.
 * 시간이 흘러도 변치않는 가치 since 1984 더 깊은 디테일 영림과 합께합니다.
 */