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



// productSelectBtn.onclick = function(){
//     if(productSelectBtn.classList.contains('on')){
//         productSelectBtn.classList.remove('on')
//         productUl.style.display = 'none'
//     }else{
//         productSelectBtn.classList.add('on')
//         productUl.style.display = 'block'
//     }
// }
// function clickSelect(){
//     productSelect.click()
// }

function clickSelect(e){
    console.log(e.target)
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

subNav.append(makeList(kitchenItems, "a" ,"","키친 전체보기"), makeList(builtInItems, "a", "", "붙박이장 전체보기"))

selectContainer.append(productSelectBtn, productUl)
kitchenContainer.append(selectContainer, subNav)
kitchen.append(kitchenBg, kitchenContainer)
root.append(kitchen)