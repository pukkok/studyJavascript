const kitchenItems = ['타임리스 키친', '에센셜 키친', '키친 구성기기', '키친 상판/하드웨어']
const builtInItems = ['여닫이 붙박이장', '슬라이딩 붙박이장', '드레스룸', '현관장', '모듈수납장']

const kitchen = document.createElement('section')
kitchen.className = 'first-section kitchen'
const kitchenBg = document.createElement('div')
kitchenBg.className = 'kitchen-bg'
const kitchenContainer = document.createElement('div')
kitchenContainer.className = 'container'

const subNav = document.createElement('nav')
subNav.className = 'sub-nav'

subNav.append(makeList(kitchenItems, "a" ,"","키친 전체보기"), makeList(builtInItems, "a", "", "붙박이장 전체보기"))

kitchenContainer.append(subNav)
kitchen.append(kitchenBg, kitchenContainer)
root.append(kitchen)