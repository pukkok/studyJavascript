const selectItems = ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루', '인테리어필름']

const testItems = [{
        kitchen : ['타임리스 키친', '에센셜 키친', '키친 구성기기', '키친 상판/하드웨어'],

}]

const kitchenItems = ['타임리스 키친', '에센셜 키친', '키친 구성기기', '키친 상판/하드웨어'] //전체
const builtInItems = ['여닫이 붙박이장', '슬라이딩 붙박이장', '드레스룸', '현관장', '모듈수납장'] //전체
const bathItems = ['타임리스 바스', '에센셜 바스', '바스 구성기기'] //전체
const tileItems = ['포세린', '세라믹'] //+
const doorItems = ['아펠도어', 'ABS도어', '멤브레인 도어', '타공도어', '키즈도어', '기능성도어','하드웨어','도어 시스템', '도어 프레임']
const partitionItmes = ['3연동 중문', '양개 중문', '슬림 알루미늄 중문', '기타 중문', '폴딩도어', '파티션', '유리옵션', '중문시스템', '중문프레임']
const windowItems = ['발코니창', '베이직창', '시스템창', '입면분할창', '프로젝트창', '학교창', '하드웨어'] //전체
const moldingItems = ['몰딩', '스타일월', '월판넬', '벽장식', '마루']
const interiorFilmItems = ['인테리어필름&시트']

const kitchen = document.createElement('section')
kitchen.className = 'first-section kitchen'
const kitchenBg = document.createElement('div')
kitchenBg.className = 'kitchen-bg'
const kitchenContainer = document.createElement('div')
kitchenContainer.className = 'container'

/** 셀렉트 박스 */
const selectContainer = document.createElement('div')
selectContainer.className = 'select-container'
const productSelectBtn = document.createElement('button')
productSelectBtn.className = 'product-select-btn'
productSelectBtn.innerText = selectItems[0]

const productUl = document.createElement('ul')
productUl.className = 'product-ul'

/** 옵션 selectItems */
selectItems.forEach((item)=>{
    const productli = document.createElement('li')
    productli.innerText = item
    productUl.append(productli)
})


const productBox = document.createElement('div')
productBox.className = 'product-box'

/** 서브네비게이션 생성 */
const subNav = document.createElement('nav')
subNav.className = 'sub-nav'
subNav.append(makeList(kitchenItems, "a" ,"","키친 전체보기"), makeList(builtInItems, "a", "", "붙박이장 전체보기"))

const itemBox = document.createElement('div')
itemBox.className = 'item-box'

selectContainer.append(productSelectBtn, productUl)
productBox.append(subNav, itemBox)
kitchenContainer.append(selectContainer, productBox)
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

/** 상품목록 생성하기 */
function makeImgBox(part1, part2, name='', concepts=[]){
    const tester = document.createElement('div')
    tester.className = "tester"
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
    tester.append(imgBox, textBox)
    return tester
}


loadJson("kitchen", "essential")
.then(datas => {
    datas.forEach(data=>{
        let productData = makeImgBox("kitchen", data.img, data.name, data.concepts)
        itemBox.append(productData)
    })
})


function clickEvent(e){
    console.log(e.target)

    let subNavList = subNav.querySelectorAll('ul li a')
    switch (e.target) {
        /** 셀렉트 박스 선택한 경우 */
        case productSelectBtn : {
            switch (productSelectBtn.classList.contains('on')) {
                case true : 
                productSelectBtn.classList.remove('on')
                productUl.style.display = 'none'
                break

                case false : 
                productSelectBtn.classList.add('on')
                productUl.style.display = 'block'
                break
            }
        }
        break

        default :
        productSelectBtn.classList.remove('on')
        productUl.style.display='none'
    }

    const itemList = productUl.querySelectorAll('li')
    selectItems.forEach((item, i) => {
        switch (e.target) {
            case itemList[i] : {
                productUl.innerHTML = ''
                productUl.append(makeList())
            }
        }
    })
    


    /** 서브메뉴 클릭시 동적 생성하기 */
    // console.log(subNavList[0].innerText)
    if(e.target === subNavList[0]){
        itemBox.innerHTML = ''
        loadJson("kitchen", "timeless")
        .then(datas => {
            datas.forEach(data=>{
                let productData = makeImgBox("kitchen", data.img, data.name, data.concepts)
                itemBox.append(productData)
            })
        })
    }
    else if(e.target === subNavList[1]){
        itemBox.innerHTML = ''
        loadJson("kitchen", "essential")
        .then(datas => {
            datas.forEach(data=>{
                let productData = makeImgBox("kitchen", data.img, data.name, data.concepts)
                itemBox.append(productData)
            })
        })
    }
    else if(e.target === subNavList[2]){
        itemBox.innerHTML = ''
        loadJson("kitchen", "component")
        .then(datas => {
            datas.forEach(data=>{
                let productData = makeImgBox("kitchen", data.img, data.name, data.concepts)
                itemBox.append(productData)
            })
        })
    }
}

window.addEventListener('click', clickEvent)