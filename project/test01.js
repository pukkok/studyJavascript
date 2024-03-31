const navItem = {
  depth1 : ['브랜드', '제품', '인테리어 솔루션', '매거진.Y', '쇼룸 안내'],
  depth2 : {
    "브랜드" : ['Made in Younglim', 'Life with Younglim', 'Identity of Younglim'],
    "제품" : ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루', '인테리어 필름'],
    "인테리어 솔루션" : ['인테리어 시작하기', '인테리어 스타일 제안', '리모델링 사례']
  },
}

const root = document.getElementById('root')

const header = document.createElement('header')
const nav = document.createElement('nav')

const section = document.createElement('section')
section.className = 'first-section'

header.append(nav)
root.append(header, section)

const makeDepth1 = () => {
  const depth1Box = document.createElement('div')
  depth1Box.className = 'depth1-box container'

  /** 로고부분 */
  const logoBox = document.createElement('div')
  logoBox.className = 'logo-box'
  const a = document.createElement('a')
  a.href = '/project/index.html'
  a.target = '_self'
  const logo = document.createElement('div')
  logo.className = 'logo'
  a.append(logo)
  logoBox.append(a)

  const depth1 = document.createElement('div') 
  depth1.className = 'depth1'
  const depth1Ul = document.createElement('ul')
  navItem.depth1.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.innerText = item

    li.append(a)
    depth1Ul.append(li)
  })
  depth1.append(depth1Ul)

  const userIcons = ['search', 'like', 'login']

  const userBox = document.createElement('div')
  userBox.className = 'user-box'
  const userUl = document.createElement('ul')
    userIcons.forEach(icon => {
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.className = icon
        li.append(div)
        userUl.append(li)
    })
    userBox.append(userUl)

  depth1Box.append(logoBox, depth1, userBox)
  nav.append(depth1Box)
}
makeDepth1()

const depth2Box = document.createElement('div')
depth2Box.className = 'depth2-box'
const makeDepth2 = (depth1) => {

  const container = document.createElement('div')
  container.className = 'container'
  
  const depth2 = document.createElement('div')
  depth2.className = 'depth2'

  const depth1Name = document.createElement('div')
  depth1Name.className = 'name'
  const h4 = document.createElement('h4')
  h4.innerText = depth1
  depth1Name.append(h4)

  const depth2Ul = document.createElement('ul')
  navItem.depth2[depth1].forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.innerText = item
    li.append(a)
    depth2Ul.append(li)
  })

  depth2.append(depth1Name, depth2Ul)
  container.append(depth2)
  depth2Box.append(container)
  nav.append(depth2Box)
}

function loadJson () {
  return fetch("./subPage/category.json")
  .then(res => res.json())
}

const makeDepth3 = () => {
  const depth3 = document.createElement('div')
  loadJson()
  .then(data => console.log(data))
}

loadJson()
.then(data => {
  console.log(data.kitchen)
})

let prevLi
function overEvent (e) {
  const depth1List = document.querySelectorAll('.depth1 a')
  depth1List.forEach((li, i) => {
    switch(e.target) {
      case li : {
        li.classList.add('on')
        switch (prevLi !== undefined){
            case prevLi !==li : prevLi.classList.remove('on')
            break
        }
        prevLi = li
        switch (i<3) {
          case true : {
            depth2Box.innerHTML= ''
            makeDepth2(li.innerText)
          }
          break
          case false : {
            depth2Box.innerHTML= ''
          }
          break
        }
      }
      break
    }
  })

}

window.addEventListener('mouseover', overEvent)

function changeCode (word) {
  switch(word){
    case "키친" : return "kitchen"
    case "붙박이장" : return "builtIn"
    case "바스" : return "bath"
    case "타일" : return "tile"
    case "도어" : return "door"
    case "중문" : return "partition"
    case "창호" : return "window"
    case "몰딩/월/마루" : return "molding"
    case "인테리어필름" : return "interiorFilm"
  }
}