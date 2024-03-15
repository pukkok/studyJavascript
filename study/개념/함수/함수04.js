// 클로저를 활용하면 서로 다른 기능을 하는 함수를 계속 생성할 수 있다.
// 함수 팩토리 (function factory)

// function multiplyXtimes(x){
//     function multiply(y){
//         return x * y
//     }
//     return multiply
// }

// const multiply3times = multiplyXtimes(3) // 3배 해주는 클로저 함수

// 커링(currying) - 함수를 순차적으로 부분적으로 실행함
// console.log(multiplyXtimes(3)(4))

// console.log(multiply3times(4))
// console.log(multiply3times(13))

// 프라이빗 멤버변수 & 프라이빗 메서드
// : 객체 내부에서만 사용할 수 있는 변수나 메서드

// function initCount(){
//     let _cnt = 0 // 프라이빗 멤버변수 (외부에서 못건드림)
//     function _updateCount(diff){ // 프라이빗 메서드
//         _cnt += diff
//     }
//     return {
//         increaseCount(){
//             _updateCount(1)
//         },
//         decreaseCount(){
//             _updateCount(-1)
//         },
//         get cnt(){
//             return _cnt
//         }
//     }
// }

// const counter1 = initCount() // 카운팅 기능을 수행하는 객체 (모듈패턴, 클로저)
// const counter2 = initCount()
// const counter3 = initCount()

// counter1.increaseCount() // 퍼블릭 메서드
// console.log(counter1.cnt)

// counter2.increaseCount()
// counter2.increaseCount()
// counter2.increaseCount()
// counter2.decreaseCount()
// console.log(counter2.cnt)

// counter3.decreaseCount()
// counter3.decreaseCount()
// counter3.decreaseCount()
// counter3.decreaseCount()
// counter3.increaseCount()
// console.log(counter3.cnt)

// const popupBtns = document.querySelectorAll('.popup')

// function addPopupEvents(){
//     popupBtns.forEach((btn, i) =>{
//         btn.onclick = function(){ // 이벤트핸들러 함수 등록
//         return alert(i+1)
//     }})
// }
// addPopupEvents()


// 즉시실행함수(IIFE = Immediately-invoked function expression)
// 라이브러리 만들때 자주 사용 - 제이쿼리(변수충돌을 막기 위함)
// 프라이빗 변수, 클로저, 즉시실행함수 - 은닉화, 캡슐화, 변수충돌 방지


const fruits = ['apple', 'banana', 'orange']

// 라이브러리 (underscore.js)
const _ = (function(){
    const _ = {}
    _.getFruits = function(){
        return this._fruits
    }
    _.setFruits = function(fruits){
        this._fruits = fruits
    }
    return _
})()

_.setFruits(fruits)
console.log(_.getFruits())

const products = ['paper', 'cosmetic', 'coke']

const $ = (function(){ 
// 내가 새로운 라이브러리를 만드려고 하는데 외부에 있는 전역변수와
// 충돌이 날것 같으면 즉시 실행함수로 묶어줘서 캡슐화하여 막을수 있다.
    const _ = {}
    _.getProducts = function(){
        return this._products
    }
    _.setProducts = function(products){
        this._products = products
    }
    return _
})()

$.setProducts(products)
console.log($.getProducts())