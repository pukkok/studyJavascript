const selectItems = ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루', '인테리어필름']
const selectEngItems = ['kitchen/builtIn', 'bath/tile', 'door', 'partition', 'window', 'molding', 'interiorFilm']

const productSection = document.createElement('section')
productSection.className = 'first-section product'
const productBg = document.createElement('div')
productBg.className = 'product-bg'
const productContainer = document.createElement('div')
productContainer.className = 'container'

/** 셀렉트 박스 */
const productSelectBox = document.createElement('div')
productSelectBox.className = 'select-box'
const productSelectBtn = document.createElement('button')
productSelectBtn.className = 'product-select-btn'
productSelectBtn.innerText = selectItems[0]

const productSelectOption = document.createElement('ul')
productSelectOption.className = 'product-select-option'

/** 옵션 selectItems */
selectItems.forEach((item)=>{
    const productli = document.createElement('li')
    productli.innerText = item
    productSelectOption.append(productli)
})

const productBox = document.createElement('div')
productBox.className = 'product-box'

/** 서브네비게이션 생성 */
const productNav = document.createElement('nav')
productNav.className = 'product-nav'

const itemBox = document.createElement('div')
itemBox.className = 'item-box'

// 초기 사이드 네비게이션
loadJson("./category.json")
.then(data => {
    makeProductNav(data.kitchen, 'kitchen', productNav)
    makeProductNav(data.builtIn, 'builtIn', productNav)
})
        
// 초기 이미지
loadJson('./product.json')
.then(data => data.kitchen)
.then(datas => {
    datas.forEach(data => {
        if(data.type === 'timeless'){
            itemBox.append(makeImgBox('kitchen', data.img, data.name, data.concepts))
        }
    })
})

/** 필터 바 */
const filterBar = document.createElement('div')
filterBar.className = 'filter-bar'
const makeFilterBar = () => {
    const filterBtn = document.createElement('div')
    filterBtn.className = 'filter-btn'
    const filterH3 = document.createElement('h3')
    filterH3.innerText = '필터'
    const filterSelectBox = document.createElement('div')
    filterSelectBox.className = 'filter-select-box'

    const filterOptions = ['신제품순', '인기순', '제품명순']
    const filterOption = document.createElement('div')
    filterOption.className = 'filter-option'

    filterOptions.forEach(option => {
        const btn = document.createElement('button')
        btn.innerText = option
        filterOption.append(btn)
    })
    
    const filterIcons = document.createElement('div')
    const div1 = document.createElement('div')
    div1.className = 'small-mode'
    const icon1 = document.createElement('button')
    const div2 = document.createElement('div')
    div2.className = 'big-mode'
    const icon2 = document.createElement('button')
    
    div1.append(icon1)
    div2.append(icon2)
    
    filterIcons.append(div1, div2)
    
    filterSelectBox.append(filterOption, filterIcons)
    filterBtn.append(filterH3)

    filterBar.append(filterBtn, filterSelectBox)
}
makeFilterBar()


productSelectBox.append(productSelectBtn, productSelectOption)
productBox.append(productNav, itemBox)
productContainer.append(productSelectBox, filterBar, productBox)
productSection.append(productBg, productContainer)
root.append(productSection)

function loadJson(url){
    return fetch(url) // json 파일 읽기
    .then((response)=> response.json()) // 읽어온 파일 json변환
}

/** 배열, 클래스, 어펜딩태그*/
function appendingArrayList (arr, cName, appendTag){
    appendTag.classList.add('plus')
    const div = document.createElement('div')
    arr.forEach(list => {
        const button = document.createElement('button')
        div.className = cName
        button.innerText = list
        div.append(button)
        appendTag.append(div)
    })
    return appendTag
}

/** 프로덕트 네비게이션 만들기 data[key] / 어펜딩태그 */
function makeProductNav (data, cName, appendTag) {
    const dataBox = document.createElement('div')
    dataBox.className = 'data-box'
    if(cName) dataBox.classList.add(cName)

    data.main.forEach(mainData=> { /** 메인 리스트 만들기*/
        const mainList = document.createElement('div')
        const mainBtn = document.createElement('button')
        mainList.className = 'main-list'
        mainBtn.innerText = mainData
        mainList.append(mainBtn)
        dataBox.append(mainList)

        if(data.list){ /** 서브 리스트 만들기 */
            data.list.forEach(listData => {
                const subList = document.createElement('div')
                const subBtn = document.createElement('button')
                subList.className = "sub-list"
                subBtn.innerText = listData
                subList.append(subBtn)
                dataBox.append(subList)

                if(listData in data){
                    appendingArrayList(data[listData], 'plus-list', subList)
                }
            })
        }

        if(mainData in data){
            appendingArrayList(data[mainData], 'plus-list', mainList)
        }
    })
    appendTag.append(dataBox)
}

/** 상품목록 생성하기 */
function makeImgBox(part1, part2, name='', concepts=[]){
    const productItem = document.createElement('div')
    productItem.className = "product-item"
    const imgBox = document.createElement('div')
    imgBox.className = 'img-box'
    const img = document.createElement('img')
    img.src = `../imgs/product/${part1}/${part2}.jpg`
    const textBox = document.createElement('div')
    textBox.className = 'text-box'
    const h4 = document.createElement('h4')
    h4.innerText = name
    textBox.append(h4)
    concepts.forEach(concept => {
        const span = document.createElement('span')
        span.innerText = concept
        textBox.append(span)
    })

    imgBox.append(img)
    productItem.append(imgBox, textBox)
    return productItem
}


let activePrevBtn
function clickEvent(e){
    // console.log(e.target)

    /** 셀렉트 버튼 클릭 */
    if(e.target === productSelectBtn){
        if(productSelectBtn.classList.contains('on')){
            productSelectBtn.classList.remove('on')
            productSelectOption.style.display = 'none'
        }else{
            productSelectBtn.classList.add('on')
            productSelectOption.style.display = 'block'
        }
    }else{
        productSelectBtn.classList.remove('on')
        productSelectOption.style.display='none'
    }

    /** 셀렉트 옵션에 따라 프로덕트 네비게이션 변경 */
    let productSelectOptions = productSelectOption.querySelectorAll('li')
    productSelectOptions.forEach((option, i) => {
    if(e.target === option){
        if(e.target.innerText === selectItems[i]){
            productSelectBtn.innerText = selectItems[i] // 버튼 text변경
            splitItems = selectEngItems[i].split('/') 
            splitItems.forEach(splitItem=>{ // 프로덕트 네비게이션 변경
                productNav.innerHTML=''
                loadJson("./category.json")
                .then(data => data[splitItem])
                .then(data => makeProductNav(data, splitItem, productNav))
            })
        }
    }
    })

    /** 플러스 버튼 클릭시 플러스리스트 열기/닫기 */
    let plusBtn = document.querySelectorAll('.plus > button')
    plusBtn.forEach(btn => {
        if(e.target === btn) {
            if(btn.classList.contains('expand')) {
                btn.classList.remove('expand', 'active')
                btn.nextSibling.classList.remove('on')
            }else{
                btn.classList.add('expand', 'active')
                btn.nextSibling.classList.add('on')    
            }
        }
    })

    /**버튼 클릭시 프로덕트 이미지 전환 */
    const dataBoxes = document.querySelectorAll('.data-box')
    dataBoxes.forEach(box => {
        let navBtns = box.querySelectorAll('button')
        let key = [...box.classList][1]
        navBtns.forEach(btn => {
            if(e.target === btn){

                btn.classList.add('active')
                if(activePrevBtn !== undefined){
                    if(activePrevBtn !== btn) activePrevBtn.classList.remove('active')
                }
                activePrevBtn = btn

                switch (btn.innerText) {
                    case '키친 전체보기' :
                    case '붙박이장 전체보기':
                    case '바스 전체보기' :
                    case '창호 전체보기':
                        itemBox.innerHTML = ''
                        loadJson('./product.json')
                        .then(data => data[key])
                        .then(datas => {
                            datas.forEach(data => {
                                itemBox.append(makeImgBox(key, data.img, data.name, data.concepts)) 
                            })
                        })
                    break
                }

                let code = changeCode(btn.innerText)
                itemBox.innerHTML = ''
                loadJson('./product.json')
                .then(data => data[key])
                .then(datas => {
                datas.filter(data => {
                    if(data.type === code){
                        itemBox.append(makeImgBox(key, data.img, data.name, data.concepts)) 
                    }})
                })
            }
        })
    })

}

function inputItemBox (arr, key) {
    arr.forEach(data => {
        itemBox.append(makeImgBox(key, data.img, data.name, data.concepts))
    })
}

window.addEventListener('click', clickEvent)

function changeCode (word) {
    switch(word){        
        case '타임리스 키친' :
        case '타임리스 바스' : return 'timeless'

        case '에센셜 키친' :
        case '에센셜 바스' : return 'essential'

        case '키친 구성기기' :
        case '바스 구성기기' : return 'component'
        
        case '키친 상판/하드웨어' : return 'hardware'

        case '여닫이 붙박이장' : return 'hinged'
        case '슬라이딩 붙박이장' : return 'sliding'
        case '드레스룸' : return 'dressroom'
        case '현관장' : return 'frontdoor'
        case '모듈수납장' : return 'moduleCabinet'

        case '포세린' : return 'poserine'
        case '세라믹' : return 'ceramic'

        case '아펠도어' : return 'appel'
        case 'ABS도어' : return 'abs'
        case '멤브레인 도어' : return 'membrane'
        case '타공도어' : return 'perforated'
        case '키즈도어' : return 'kids'
        case '기능성도어' : 'functional'
        case '핸들' : return 'handle'
        case '경첩' : return 'hinge'
        case '부자재' : return 'subsidiary'

        case '도어 시스템' : 
        case '중문 시스템' : 
        case '시스템창' : return 'system'

        case '도어 프레임' :
        case '중문 프레임' : return 'frame'

        case '3연동 중문' : return 'threefold'
        case '양개 중문' : return 'double'
        case '슬림 알루미늄 중문' : 'aluminum'

        case '기타 하드웨어' :
        case '기타 중문' : return 'extra'
        case '폴딩도어' : return 'folding'
        case '파티션' : return 'partition'
        case '유리옵션' : return 'glass'

        case '발코니창' : return 'balcony'
        case '베이직창' : return 'basic'
        
        case '입면분할창' : return 'division'
        case '프로젝트창' : return 'project'
        case '학교창' : return 'school'
        case '크리센트' : return 'lock'

        case '래핑몰딩' : return 'wrapping'
        case 'PVC몰딩&렉스판' : return 'PVC'
        case '클래식 도장몰딩' : return 'classic'
        case '데코몰딩' : return 'deco'
        case '스타일월' : return 'styleWall'
        case '월판넬' : return 'wallPanel'
        case '아트월' : return 'artWall'
        case '벽선반' : return 'wallShelf'
        case '원목마루' : return 'woodenFloor'
        case '강마루' : return 'laminateFloor'
        case '인테리어필름&시트' : return 'interiorFilm'
    }
}