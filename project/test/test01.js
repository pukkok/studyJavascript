const root = document.getElementById('root')

const tester = document.createElement('section')
tester.className = 'tester-section'
const container = document.createElement('div')
container.className = 'container'

const cardBox = document.createElement('div')
cardBox.className = 'card-box'

for(i=0; i<6; i++){
    const card = document.createElement('div')
    card.className = 'card'
    cardBox.append(card)
}

container.append(cardBox)
tester.append(container)
root.append(tester)

const cards = document.querySelectorAll('.card')

cards[0].innerHTML=`
<h1>LIFESTYLE<br> DESIGN BEYOND MATERIAL</h1>
<h4>다양한 라이프스타일 속에서 최적화된 당신의 주거 공간을 디자인합니다.
    가치 있는 당신의 일상을 위한 취향에 딱 맞는 인테리어 디자인을 만나보세요.</h4>
`
 