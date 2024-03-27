/**매거진 파트 */

const magazine = [
    {img : "./imgs/magazine/magazine01.jpg", h4 : "TV CF 속 그공간, 그 제품", p : "2021 영림의 다양한 신제품들을 담은 현장 속 인테리어 살펴보기"},
    {img : "./imgs/magazine/magazine02.jpg", h4 : "새로운 꿈을 꾸며 내일을 설계하는 집", p : "눈이 펑펑 오던 어느 겨울, 고요하게 눈이 쌓인 전원주택 마을을 방문했다"},
    {img : "./imgs/magazine/magazine03.jpg", h4 : "2021 영림 TV CF 광고 촬영 비하인드", p : "토탈인테리어 브랜드 '영림'의 첫 TV CF 촬영 비하인드 스토리, 지금 공개합니다."},
]

const section4 = document.createElement('section')
section4.className = 'section4'
const s4Container = document.createElement('div')
s4Container.className = 'container'

const s4Div1 = document.createElement('div')
s4Div1.className = 'text-box'
const s4H1 = document.createElement('h1')
s4H1.innerText = '매거진.Y'
const s4P = document.createElement('p')
s4P.innerText = `영림만의 소식을 여러분들께 전합니다.
브랜드 소식과 인테리어에 대한 우리의 다양한 이야기를 기록합니다.`
const s4Div2 = document.createElement('div')
s4Div2.className = 'card-container'

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
    s4Div2.append(div3)
})
const s4Div4 = document.createElement('div')
s4Div4.className = 'indicator-line'
// const s4Hr = document.createElement('hr')

const s4Span = document.createElement('span')
const s4A = document.createElement('a')
s4A.innerText='자세히 보기'
s4Div4.append(s4Span)
s4Div1.append(s4H1, s4P)
s4Container.append(s4Div1, s4Div2, s4Div4, s4A)
section4.append(s4Container)
root.append(section4)