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

header.append(nav)
root.append(header)

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
    li.innerText = item

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
    li.innerText = item
    if(depth1 === '제품') li.classList.add('product-item')
    depth2Ul.append(li)
  })

  depth2.append(depth1Name, depth2Ul)
  container.append(depth2)
  depth2Box.append(container)
  nav.append(depth2Box)
}

function loadCategroy () {
  return fetch("/project/subPage/category.json")
  .then(res => res.json())
}

let depth1Prev
let depth2Prev

const depth3 = document.createElement('div')
depth3.className = 'depth3'

const depth1List = document.querySelectorAll('.depth1 li')
function overEvent (e) {
  /** 뎁스 1 선택 */
  depth1List.forEach((list, i) => {
    if(e.target === list){
      list.classList.add('on')
      if(depth1Prev !== undefined){
        if(depth1Prev !== list) depth1Prev.classList.remove('on')
      }
      depth1Prev = list
      if(i<3){
        depth2Box.innerHTML= ''
        makeDepth2(list.innerText)
        nav.style.height=`${depth2Box.offsetHeight}px`
      }else{
        nav.style.height='70px'
            depth2Box.innerHTML= ''
      }
    }
  })
  
  /** 뎁스2 선택 */
  let productList = document.querySelectorAll('.depth2 .product-item')
  let depth2Container = document.querySelector('.depth2-box .container')
  productList.forEach(async list => {
    if(e.target === list){
      list.classList.add('on')
      if(depth2Prev !== undefined){
        if(depth2Prev !== list) depth2Prev.classList.remove('on')
      }
      depth2Prev = list

      if(list.innerText === '몰딩/월/마루'){
        let code = findCode('몰딩/월/마루')
        depth3.innerHTML = ''
        await makeDepth3(code)
        depth2Container.append(depth3)
        nav.style.height = `${100 + depth3.offsetHeight}px`
      }else{
        let keys = list.innerText.split('/')
        depth3.innerHTML = ''
        keys.forEach(async key => {
        let code = findCode(key)
        await makeDepth3(code)
        depth2Container.append(depth3)
        nav.style.height = `${100 + depth3.offsetHeight}px`
        })
      }
    }
    }
  )
}

function leaveEvent(e) {
  if(e.target === this){
    this.style.height = '70px'
    depth1List.forEach(li=>{
      li.classList.remove('on')
    })
  }
}

nav.addEventListener('mouseleave', leaveEvent)
window.addEventListener('mouseover', overEvent)

let preScrollTop = 0;
const openHeader = () => {
  let nextScrollTop = window.scrollY;
  if(window.scrollY < 1){
      header.style.top = 0
      nav.classList.remove('white-mode')

  }else if(preScrollTop < nextScrollTop) {
      header.style.top = '-70px'
  }
  else if(preScrollTop > nextScrollTop){
      header.style.top = 0
      nav.classList.add('white-mode')
  }
	preScrollTop = nextScrollTop;
}

window.addEventListener('scroll' , openHeader)




function findCode (word) {
  switch(word){
    case "키친" : return "kitchen"
    case "붙박이장" : return "builtIn"
    case "바스" : return "bath"
    case "타일" : return "tile"
    case "도어" : return "door"
    case "중문" : return "partition"
    case "창호" : return "window"
    case "몰딩/월/마루" : return "molding"
    case "인테리어 필름" : return "interiorFilm"
  }
}

function appendList (cName, item ,appendTag){
  const li = document.createElement('li')
  li.className = cName
  li.innerText = item
  appendTag.append(li)
}

async function makeDepth3 (code) {
  const ul = document.createElement('ul')
  await loadCategroy()
  .then(data => data[code])
  .then(data => {
    if(data.inform){
      appendList('main', data.inform, ul)
    }
    if(data.main){
      data.main.forEach(item => {
        appendList('main', item, ul)
      })
    }
    if(data.list){
      data.list.forEach(item => {
        appendList('list', item, ul)
      })
    }
    depth3.append(ul)
  })
}
