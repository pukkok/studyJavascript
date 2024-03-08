const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
const root = document.getElementById('root')
const btn = document.querySelector('#price-btn')
const searchInput = document.getElementById('search-input')
let isPrice = false
let inputValue = ''


// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// product 객체의 image_link, name, price, description 프로퍼티 사용하기
function buildElement(product){
    // 상품정보로부터 dom 객체를 생성하기 

    const productBox = document.createElement('div')
    productBox.className = 'product'
    const productImgBox = document.createElement('div')
    productImgBox.className = 'product-img'
    const productImg = document.createElement('img')
    productImg.src = `${product.image_link}`
    const productName = document.createElement('div')
    productName.className = 'product-name'
    productName.innerText = `${product.name}(${product.price}) `
    const porductDescription = document.createElement('div')
    porductDescription.className = 'product-description'
    porductDescription.innerText = `${product.description}`

    productBox.append(productImgBox, productName, porductDescription)
    productImgBox.append(productImg)

    return productBox
}

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(product){
    root.append(product)
}

const sortElement = (a, b) => {
    // if(a.price > b.price) return 1
    // if(a.price < b.price) return -1
    // return 0
    return a.price - b.price
}




fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    // console.log(products)

    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    
    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)

    // price sort
    let priceSorts = [...products].sort(sortElement)
    console.log(priceSorts)
    const productsPriceSortRefined = priceSorts.map(buildElement)

    // 가격 정렬 토글
    const priceSortProduct = () =>{
        root.innerHTML=''
        if(!isPrice){
            isPrice = true
            productsPriceSortRefined.forEach(displayProduct)
        }else{
            isPrice = false
            productsRefined.forEach(displayProduct)
        }
    }

    btn.addEventListener('click', priceSortProduct)
    let filtering = (products) => products.filter((product)=>{
        return product.product_type === inputValue
    })
    
    //keyCode 13 enter
    const inputProductType = (e) => {
        inputValue = e.target.value
        // console.log(e.target.value)
        if(e.keyCode === 13){
            root.innerHTML=''
            if(!isPrice){
                filtering(products).map(buildElement).forEach(displayProduct)
            }else{
                filtering(priceSorts).map(buildElement).forEach(displayProduct)
            }
        }

    }

    searchInput.addEventListener('keydown', inputProductType)
})

// 정렬 후 검색
// 1) 가격순으로 정렬된 상태에서 상품유형을 검색하면 추려진 상품들도 정렬이 되어서 보여져야 한다. 

// 검색 후 정렬
// 2) 상품유형으로 검색하여 추려진 상품들은 Price 버튼을 클릭하면 가격순으로 정렬이 되어야 한다.
