
const brand = ['Made in Younglim', 'Life with Younglim', 'Identity of Younglim']
const product = ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루', '인테리어 필름']
const interior = ['인테리어 시작하기', '인테리어 스타일 제안', '리모델링 사례']
const depth2Item = [brand, product, interior, [], []]


const root = document.getElementById('root')

const header = document.createElement('header')
const nav = document.createElement('nav')
header.append(nav)
const main = document.createElement('main')
const section1 = document.createElement('section')
section1.className='section1'
main.append(section1)
root.append(header, main)

console.log('작동확인')
const makeNavigation = () => {
    const div1 = document.createElement('div')
    div1.className = 'logo-box'
    const logo = document.createElement('div')
    logo.className = 'logo'
    const a = document.createElement('a')
    logo.append(a)
    div1.append(logo)

    const depth1 = ['브랜드', '제품', '인테리어 솔루션', '매거진.Y', '쇼룸 안내']

    const div2 = document.createElement('div')
    div2.className = 'main-nav'
    
    const ul1 = document.createElement('ul')
    depth1.forEach((list)=>{
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText=list
        li.append(a)
        ul1.append(li)
    })
    div2.append(ul1)

    const userIcons = ['search', 'favorite', 'person']

    const div3 = document.createElement('div')
    div3.className = 'user-nav'
    const ul2 = document.createElement('ul')
    userIcons.forEach((icon)=>{
        const li = document.createElement('li')
        const span = document.createElement('span')
        span.className='material-symbols-outlined'
        span.innerText = icon
        li.append(span)
        ul2.append(li)
    })
    div3.append(ul2)

    nav.append(div1, div2, div3)
}

makeNavigation()

const makeDepth2 = () => {
    const depth2 = document.createElement('nav')
    depth2.className = 'depth2'
    const div1 = document.createElement('div')
    div1.className = 'depth1-name'
    const div2 = document.createElement('div')
    div2.className = 'depth2-nav'
    depth2.append(div1, div2)
    header.append(depth2)
}
makeDepth2()

/** 배열 값을 a태그에 innerText로 입력 ul > li > a 생성 */
const initDepth2Item = (arr) => {
    const ul = document.createElement('ul')
    arr.forEach((item)=>{
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = item
        li.append(a)
        ul.append(li)
    })
    return ul
}

const matchingDepth2 = (e) => {
    const depth2 = document.querySelector('.depth2')
    const depth1Name = document.querySelector('.depth1-name')
    const depth2Nav = document.querySelector('.depth2-nav')
    const list = document.querySelectorAll('.main-nav ul li a')
    
    // depth2.style.top='-400px'
    let result
    list.forEach((li, i)=>{
        if(e.target === li){
            depth1Name.innerHTML = ''
            depth2Nav.innerHTML = ''
            depth1Name.innerText = e.target.innerText
            result = initDepth2Item(depth2Item[i])
            depth2Nav.append(result)
        }
    })
    
}

const mainNavUl = document.querySelector('.main-nav ul')

mainNavUl.addEventListener('mouseover', matchingDepth2)