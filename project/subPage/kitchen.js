const selectItems = ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루', '인테리어필름']
const kitchenItems = ['타임리스 키친', '에센셜 키친', '키친 구성기기', '키친 상판/하드웨어']
const builtInItems = ['여닫이 붙박이장', '슬라이딩 붙박이장', '드레스룸', '현관장', '모듈수납장']

const kitchen = document.createElement('section')
kitchen.className = 'first-section kitchen'
const kitchenBg = document.createElement('div')
kitchenBg.className = 'kitchen-bg'
const kitchenContainer = document.createElement('div')
kitchenContainer.className = 'container'

const selectContainer = document.createElement('div')
selectContainer.className = 'select-container'
const productSelectBtn = document.createElement('button')
productSelectBtn.className = 'product-select-btn'
productSelectBtn.innerText = selectItems[0]

const productUl = document.createElement('ul')
productUl.className = 'product-ul'
productUl.id='product-ul'

selectItems.forEach((item)=>{
    const productli = document.createElement('li')
    productli.innerText = item
    productUl.append(productli)
})

const subNav = document.createElement('nav')
subNav.className = 'sub-nav'

/** 서브네비게이션 생성 */
subNav.append(makeList(kitchenItems, "a" ,"","키친 전체보기"), makeList(builtInItems, "a", "", "붙박이장 전체보기"))

selectContainer.append(productSelectBtn, productUl)
kitchenContainer.append(selectContainer, subNav)
kitchen.append(kitchenBg, kitchenContainer)
root.append(kitchen)

function loadJson(json1, json2){
    return fetch("./product.json") // json 파일 읽기
    .then((response)=> response.json()) // 읽어온 파일 json변환
    .then((json)=>{
        data = json[json1][json2]
        return data
    })
}
let essentialData = loadJson("kitchen", "essential")

function clickSelect(e){
    if(e.target === productSelectBtn){
        if(productSelectBtn.classList.contains('on')){
            productSelectBtn.classList.remove('on')
            productUl.style.display = 'none'
        }else{
            productSelectBtn.classList.add('on')
            productUl.style.display = 'block'
        }
    }else{
        productSelectBtn.classList.remove('on')
        productUl.style.display='none'
    }
}

window.addEventListener('click', clickSelect)