/** 렉시컬 스코프
    현재 함수 위치에서 눈에 보이는 곳(함수 스코프)에 변수가 있으면 사용가능
    함수 스코프는 함수 호출시가 아니라 함수정의시 정해진다.
*/

// const fruit = 'apple' // 전역변수

// function printA() { // 전역함수(글로벌 스코프)
//     const fruit = 'banana' // 지역변수
//     // console.log(fruit)
//     printB()
// }
// function printB() {
//     console.log(fruit)
// }
// printA()
// printB()

// function printC(){
//     const fruit = 'pineaplle'
//     function printD(){
//         console.log(fruit)
//     }
//     printD()
// }
// printC()

// 스코프체인 (scope chain) ; 현재 스코프에서 자신이 가지지 않은(찾을수 없는) 변수값이 있다면
// 한단계 상위 스코프씩 올라가서 연쇄적으로 찾는다.

// const global = 3 // 전역변수 (상위 스코프)

// function globalFunction(){
//     const localOuter = 1 // 외부함수의 지역변수
//     function localFunction(){
//         const local = 1
//         return global + localOuter + local
//     }
//     return localFunction()
// }

// console.log(globalFunction())

// 콜백함수 : 함수 인자로 전달되서 함수 내부에서 실행이 되는 함수

// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

// function map(f, arr){
//     const newArr = []
//     for(let i in arr){
//         newArr[i] = f(arr[i])
//     }
//     return newArr
// }
// function str2num(el){
//     return +el // parseInt(el)
// }

// const numbersParsed = map(str2num, numbers)
// console.log(numbersParsed)

// function add(a, b){
//     return a + b
// }
// function subtract(a, b){
//     return a - b
// }
// function multiply(a, b){
//     return a * b
// }
// function divide(a, b){
//     return a / b
// }

// function calculator(mode, a, b, ...funcs){
//     let ret = null
//     switch(mode){
//         case '+' : 
//             ret = funcs[0](a, b) 
//             break
//         case '-' : 
//             ret = funcs[1](a, b) 
//             break
//         case '*' : 
//             ret = funcs[2](a, b) 
//             break
//         case '/' : 
//             ret = funcs[3](a, b) 
//             break
//     }
//     return ret
    
// }

// const ret1 = calculator('+', 3, 4, add, subtract, multiply, divide)
// const ret2 = calculator('-', 3, 4, add, subtract, multiply, divide)
// const ret3 = calculator('*', 3, 4, add, subtract, multiply, divide)
// const ret4 = calculator('/', 3, 4, add, subtract, multiply, divide)

// console.log(ret1)
// console.log(ret2)
// console.log(ret3)
// console.log(ret4)


// 클로저 : 외부함수가 내부함수를 반환하면서 지역변수들을 메모리에 저장하면서
// 독립적인 실행환경을 생성함
// function initCount(){
//     let cnt = 0 // 지역변수
//     function increaseCount(){
//         cnt++
//         return cnt
//     }
//     return increaseCount
// }

// const cnt1 = initCount()
// const cnt2 = initCount()
// const cnt3 = initCount()

// cnt1()
// console.log(cnt1())

// cnt2()
// cnt2()
// console.log(cnt2())

// cnt3()
// cnt3()
// cnt3()
// console.log(cnt3())

// 1. 독립적인 실행환경을 생성함
// 2. 각각의 클로저의 변수는 다르게 업데이트 가능
// 3. 지역변수는 메모리에서 사라지지 않는다.
// 4. 지역변수는 함수실행에 의해서만 조회나 변경이 가능하다
// (변수의 캡슐화, 은닉화) 안전한 코드 작성가능

// -------------------------------------------------

// function increaseCount(cnt){
//     return ++cnt
// }

// let cnt1 = 0
// let cnt2 = 0
// let cnt3 = 0

// cnt1 = increaseCount(cnt1)

// cnt2 = increaseCount(cnt2)
// cnt2 = increaseCount(cnt2)

// cnt3 = increaseCount(cnt3)
// cnt3 = increaseCount(cnt3)
// cnt3 = increaseCount(cnt3)

// console.log(cnt1)
// console.log(cnt2)
// console.log(cnt3)

// ------------------------------------------------

function makeAdder(){
    let a=0 // 지역변수
    let b=0
    let c=0
    function addNums(){
        return ++a + ++b + ++c
    }
    return addNums
}

const adder1 = makeAdder() // 더하기 기능을 하는 함수를 생성함
const adder2 = makeAdder()
const adder3 = makeAdder()

// console.log(adder1(),adder1())
// console.log(adder2())
// console.log(adder3())

function testClosure(){
    let a=0
    function add(b){
        return a+b
    }
    return add
}
const add1 = testClosure()
// add1(2)
console.log(add1(2))