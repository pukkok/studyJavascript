const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
const root = document.getElementById('root')

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

    root.append(productBox)
    productBox.append(productImgBox, productName, porductDescription)
    productImgBox.append(productImg)
    
}

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(product){
    // const productBox = buildElement(product)
    // root.append(productBox)
   // 구현하기
}

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)

    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    
    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)
})