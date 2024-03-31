
const brand = ['Made in Younglim', 'Life with Younglim', 'Identity of Younglim']
const product = ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루', '인테리어 필름']
const interior = ['인테리어 시작하기', '인테리어 스타일 제안', '리모델링 사례']
const depth2Item = [brand, product, interior, [], []]

const root = document.getElementById('root')

const header = document.createElement('header')
const nav = document.createElement('nav')
nav.className='depth1'
header.append(nav)

root.append(header)

console.log('작동확인')
/** main-nav 생성 depth1 생성 */
const makeDepth1 = () => {
    const navBox = document.createElement('div')
    navBox.className = 'nav-container'
    const div1 = document.createElement('div')
    div1.className = 'logo-box'
    const a = document.createElement('a')
    a.href = '/project/index.html'
    a.target = '_self'
    const logo = document.createElement('div')
    logo.className = 'logo'
    a.append(logo)
    div1.append(a)

    const depth1 = ['브랜드', '제품', '인테리어 솔루션', '매거진.Y', '쇼룸 안내']

    const div2 = document.createElement('div')
    div2.className = 'main-nav'
    const mainUl = makeList(depth1, 'a')
    div2.append(mainUl)

    const userIcons = ['search', 'like', 'login']

    const div3 = document.createElement('div')
    div3.className = 'user-nav'
    const userUl = document.createElement('ul')
    userIcons.forEach(icon => {
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.className = icon
        li.append(div)
        userUl.append(li)
    })
    div3.append(userUl)

    navBox.append(div1, div2, div3)
    nav.append(navBox)
}

makeDepth1()

/** depth2 생성 */
const makeDepth2 = () => {
    const depth2 = document.createElement('nav')
    depth2.className = 'depth2'
    const navBox = document.createElement('div')
    navBox.className = 'nav-container'
    const div1 = document.createElement('div')
    div1.className = 'mainlist-name'
    const div2 = document.createElement('div')
    div2.className = 'depth2-nav list-container'
    const div3 = document.createElement('div')
    div3.className = 'depth3 list-container'
    navBox.append(div1, div2, div3)
    depth2.append(navBox)
    header.append(depth2)
}
makeDepth2()

const depth2 = document.querySelector('.depth2')
const depth2Nav = document.querySelector('.depth2-nav')

/** depth2 리스트 생성 */
const matchingDepth2 = (e) => {
    const depth1Name = document.querySelector('.mainlist-name')
    const list = document.querySelectorAll('.main-nav ul li a')
    let result
    list.forEach((li, i)=>{
        if(e.target === li){
            depth1Name.innerHTML = ''
            depth2Nav.innerHTML = ''
            depth1Name.innerText = e.target.innerText
            result = makeList(depth2Item[i], 'a')
            // 제품일때 호버시 애로우 추가
            if(i===1){
                depth2Nav.classList.add('add-arrow')
            }else{
                depth2Nav.classList.remove('add-arrow')
            }
            
            // 3번째 네비게이션까지만 뎁스2 내리기
            if(i<3){
                depth2.style.top = 0;
                depth2.style.opacity = 1;
            }
            else{
                depth2.style.top = '-500px'
                depth2.style.opacity = 0;
            }
            depth2Nav.append(result)
        }
    })
}

const mainNavUl = document.querySelector('.main-nav ul')

mainNavUl.addEventListener("mouseover", matchingDepth2)

/** 헤더 닫을시 depth2종료 */
const closeDepth2 = (e) => {
    if(e.target === header){
        depth2.style.top= '-500px'
        depth2.style.opacity = 0
    }
}
header.addEventListener('mouseleave', closeDepth2)

function check (e) {
    const depth3 = document.querySelector('.depth2 .nav-container .depth3')
    if(depth2Nav.classList.contains('add-arrow')){
        const productList = document.querySelectorAll('.depth2 .add-arrow ul li')
        productList.forEach((li, i)=>{
            if(li===e.target){
                depth3.innerHTML=''
                depth3.style.display='flex'
                makeDepth3(i)
            }
        })
    }else{
        depth3.innerHTML=''
        depth3.style.display='none'
    }
}
depth2Nav.addEventListener('mouseover', check)

function makeDepth3 (i) {

    const innerUl = [
    `<ul>
        <li>키친 알아보기</li>
        <li>키친 전체보기
            <ul>
                <li>타임리스 키친</li>
                <li>에센셜 키친</li>
                <li>키친 구성기기</li>
                <li>키친 상판/하드웨어</li>
            </ul>
        </li>
        <li>붙박이장 전체보기
            <ul>
                <li>여닫이 붙박이장</li>
                <li>슬라이딩 붙박이장</li>
                <li>드레스룸</li>
                <li>현관장</li>
                <li>모듈수납장</li>
            </ul>
        </li>        
    </ul>`,

    `
    <ul>
        <li>바스 알아보기</li>
        <li>바스 전체보기
            <ul>
                <li>타임리스바스</li>
                <li>에센셜 바스</li>
                <li>바스 구성기기</li>
            </ul>
        </li>
        <li>타일</li>
    </ul>`,

    `<ul>
        <li>도어알아보기</li>
        <li>아펠도어</li>
        <li>ABS 도어</li>
        <li>멤브레인 도어</li>
        <li>타공도어</li>
        <li>키즈도어</li>
        <li>기능성 도어</li>
        <li>하드웨어</li>
        <li>도어 시스템</li>
        <li>도어 프레임</li>
    </ul>`,
    
    `<ul>
        <li>중문알아보기</li>
        <li>3연동 중문</li>
        <li>양개 중문</li>
        <li>슬림 알루미늄 중문</li>
        <li>기타 중문</li>
        <li>폴딩도어</li>
        <li>파티션</li>
        <li>유리옵션</li>
        <li>중문 시스템</li>
        <li>중문 프레임</li>
    </ul>`,

    `<ul>
        <li>창호 알아보기</li>
        <li>창호 전체보기
            <ul>
                <li>발코니창</li>
                <li>베이직창</li>
                <li>시스템창</li>
                <li>하드웨어</li>
                <li>영림프라임알루미늄</li>
            </ul>
        </li>
    </ul>`,

    `<ul>
        <li>몰딩/월/마루 알아보기</li>
        <li>몰딩</li>
        <li>스타일월</li>
        <li>월판넬</li>
        <li>벽장식</li>
        <li>마루</li>
    </ul>`,
    
    `<ul>
        <li>인테리어필름&시트</li>
    </ul>`
    ]

    const div1 = document.createElement('div')
    
    div1.innerHTML = innerUl[i]

    document.querySelector('.depth2 .nav-container .depth3').append(div1)
    
}

let preScrollTop = 0;
const openHeader = () => {
    const logo = document.querySelector('.logo')
    let nextScrollTop = window.scrollY;
    header.style.transition = '.2s'
    if(window.scrollY < 1){
        header.style.top = 0
        header.classList.remove('white-mode')

    }else if(preScrollTop < nextScrollTop) {
        header.style.top = '-70px'
    }
	else if(preScrollTop > nextScrollTop){
        header.style.top = 0
        header.classList.add('white-mode')
    }
	preScrollTop = nextScrollTop;

}

window.addEventListener('scroll' , openHeader)

/** 배열 값, tagName, tagClassname ex) innerText로 입력 ul > li > a 생성 */
function makeList (arr, xTag, classname='', ulText='') {
    const ul = document.createElement('ul')
    if(ulText) ul.innerText = ulText
    
    arr.forEach((item)=>{
        const li = document.createElement('li')
        const tag = document.createElement(xTag)
        if(classname) tag.className = classname
        tag.innerText = item
        li.append(tag)
        ul.append(li)
    })
    return ul
}