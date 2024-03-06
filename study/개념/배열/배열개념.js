// const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat']
// const searchAnimal1 = animals.indexOf('cat') // 처음으로 나오는 ('값')의 인덱스을 찾는다
// const searchAnimal2 = animals.indexOf('cat', 3) // 검색을 시작할 위치를 변경한다 (index = 3)
// const searchAnimal3 = animals.indexOf('giraffe') // 없을 경우 -1 출력
// console.log(searchAnimal3)

//-------while 반복문으로 배열안의 같은값의 모든 인덱스 찾기 --------

// 배열안의 모든 cat의 인덱스 찾기
// const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat', 'giraffe', 'duck', 'cat']
// const animalToSearch = 'cat'
// const 찾은인덱스배열 = []

// let 인덱스찾기 = animals.indexOf(animalToSearch)
// //반복문
// while(인덱스찾기 !== -1){
//     찾은인덱스배열.push(인덱스찾기)
//     인덱스찾기 = animals.indexOf(animalToSearch, 인덱스찾기+1)
// }
// console.log(찾은인덱스배열)

//---배열에 아이템이 있으면 추가, 없으면 추가하지 말아보기 ----------

// const 야채배열 = ['potato', 'tomato', 'chillies', 'green-pepper']

// const 야채배열업데이트 = (야채배열, 야채) => {
//     if(야채배열.indexOf(야채) === -1){
//         야채배열.push(야채)
//         console.log(`새로운 야채추가 ${야채}`)
//     }else{
//         console.log(`${야채} 는 이미 있어`)
//     }
// }

// 야채배열업데이트(야채배열, 'spinach')
// 야채배열업데이트(야채배열, 'spinach')
// 야채배열업데이트(야채배열, 'tomato')
// 야채배열업데이트(야채배열, 'tomato')

//---문자열도 배열이다---------------------------------------------

// let str = 'Widget with id'

// console.log(str.indexOf('Widget')) //0번 인덱스
// console.log(str.indexOf('widget')) //-1 대소문자 구분함
// console.log(str.indexOf('id')) // 1번 인덱스 Widget 안에 id를 찾아냄
// console.log(str.indexOf('id', 2)) // 1번인덱스 다음부터 찾기

// if(str.indexOf('Widget') !== -1){ //인덱스 비교 조심하기
//     console.log('찾았다')
// }

//---lastIndexOf 거꾸로 찾기(뒤부터)-------------------------------

// const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat']
// const searchedAnimal = animals.lastIndexOf('cat')
// console.log(searchedAnimal)

//---find 메서드 --------------------------------------------------
// [배열].find(판별함수)

// 판별함수
// function 판별함수이름(배열요소, 인덱스, 배열){
//     return 판별조건
//}

// --- 예제 1 ---

// const 과일배열 = ['apple', 'banana', 'orange', 'watermelon']

// const 과일찾기 = 과일배열.find((과일)=>{
//     return 과일.length > 6
// })

// console.log(과일찾기)

// const 다른함수 = (과일) => { // 함수 빼서 사용도 가능
//     return 과일.length > 6
// }
// const 과일찾기2 = 과일배열.find(다른함수)

// --- 예제 2 ---

const 인벤토리 = [
    { 과일명 : 'apples', 수량: 2},
    { 과일명 : 'bananas', 수량: 0},
    { 과일명 : 'cherries', 수량: 5},
]

const isCherries = (과일) => {
    return 과일.과일명 === 'cherries'
}

인벤토리.find(isCherries)

console.log(인벤토리.find(isCherries))
console.log(인벤토리.find((과일)=>{
    return 과일.과일명 === 'cherries'
}))

// --- 예제 3 --- 소수값찾기 ---

// function isPrime(el, index, array){
//     let start = 2
//     while(start <= Math.sqrt(el)){ //sqrt = 루트
//         if(el % start === 0){
//             return false
//         }
//         start++
//     }
//     return el > 1
// }

// console.log([4, 6, 8, 12].find(isPrime))
// console.log([4, 5, 8, 12].find(isPrime)) //5
// console.log([4, 7, 12, 13].find(isPrime)) //7

// --- findIndex 인덱스 찾기 --------------------------------

// --- 예제 1 ---

// const fruits = ['apple', 'banana', 'orange', 'watermelon']

// function 판별함수(el){
//     return el.length > 6
// }

// const foundedIndex = fruits.findIndex(판별함수)
// console.log(foundedIndex)

// // --- 예제 2 --- 소수갑 찾기 ---

// function isPrime(el){
//     // 짝수 판단
//     if(el % 2 === 0 || el < 2){
//         return false
//     }
//     // 홀수 검사 (3의 배수, 5의 배수, 7의 배수, 9의 배수)
//     for(let factor = 3; factor <= Math.sqrt(el); factor+=2){
//         if(el % factor === 0){
//             return false // 함수 종료
//         }
//     }
//     return true
// }

// console.log([4, 6, 8, 9, 12].findIndex(isPrime)) // -1, not found
// console.log([4, 6, 7, 9, 12].findIndex(isPrime)) // 2 (array[2] is 7)
// console.log([4, 9, 12, 13, 17].findIndex(isPrime))
// console.log([4, 9, 12, 17].findIndex(isPrime))

// --- includes 메서드 ------------------------------------------

// --- 예제 1 ---

// const seasons = ['spring', 'summer', 'autumn', 'winter']

// console.log(seasons.includes('summer'))
// console.log(seasons.includes('cat'))

// const title = 'Harry Potter'

// console.log(title.includes('t'))

// console.log('Widget with id'.includes('id')) // Widget에서 찾은 id
// console.log('Widget with id'.includes('id', 4)) // 4번 인덱스 이후부터 찾은 id

// --- 예제 2 ---

// const arr = ['a', 'b', 'c', 'd', 'e']
// // 배열 메서드에서 검색 시작점을 배열 뒤부터 설정할 수 있다면
// // 뒤에서부터 -1로 순서를 찾을수도 있다.

// console.log(arr.includes('c'))
// console.log(arr.includes('c', 3))
// console.log(arr.includes('c', -3))

// --- filter 함수 -------------------------------------------
// [배열].filter(판별함수)

// --- 예제 1 ---

// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// // filter 메서드 : 판별함수에서 true를 반환하는 배열요소만 필터링해서 새로운 배열에 담아줌
// function isShort(word){
//     return word.length < 5
    
//     //같은내용
//     // if(word.length < 5){
//     //     return true
//     // }else return false
// }

// const wordsFiltered = words.filter(isShort)
// // filter 메서드의 반환값 : 조건에 따라 필터링된 새로운 배열
// // filter 메서드 : 원본은 변경되지 않음

// console.log(wordsFiltered)

// --- 예제 2 ---

// function isbigEnough(value){
//     return value < 10
// }

// const filtered = [12, 5, 8, 130, 44].filter(isbigEnough)

// console.log(filtered)

// --- 예제 3 ---

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17]

// function isPrime(el){
//     for(let i = 2; i<el; i++){
//         if(el % i === 0){
//             return false
//         }
//     }
//     return el > 1
// }

// console.log(array.filter(isPrime))

// --- 예제 4 ---

// const fruits = ["apple", "banana", "grapes", "mango", "orange"]

// function filterItems(arr, query){
//     return arr.filter(el => el.toLowerCase().includes(query.toLowerCase()))
// }

// console.log(filterItems(fruits, 'ap'))
// console.log(filterItems(fruits, 'an'))

// --- 예제 5 ---

// const arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: "undefined" },
// ]

// let invalidEntries = 0

// const 필터링 = (item) => {
//     if(Number.isInteger(item.id) && item.id > 0){
//         return true // 유효한 id
//     }
//     // 유효하지 않은 아이디
//     invalidEntries++
//     return false
// }

// const 걸러낸arr = arr.filter(필터링)
// console.log(걸러낸arr)
// console.log('유효하지 않은 아이디 개수: ', invalidEntries)

// --- some 메서드 ---------------------------------------
// [배열].some(판별함수)

// --- 예제 1 ---

// const numbers = [32, 6, 4, 13, 9, 57]

// const is3의배수 = (el) => {
//     return el % 3 === 0
// }

// console.log(numbers.some(is3의배수))

// --- 예제 2 ---

// const is10보다큰수 = (el, i, arr) => {
//     return el > 10
// }

// console.log([2, 5, 8, 1, 4].some(is10보다큰수))
// console.log([12, 5, 8, 1, 4].some(is10보다큰수))

// --- 예제 3 ---

// const fruits = ["apple", "banana", "mango", "guava"]

// const 포함여부판단 = (arr, keyword)  => {
//     return arr.some(value => value === keyword)
// }

// console.log(포함여부판단(fruits, 'kela'))
// console.log(포함여부판단(fruits, 'banana'))

// --- 예제 4 ---

// const TRUTHY_VALUES = ["true", 1, false, "false"]

// const 불리언판단기 = (value) => {
//     if(typeof value === 'string'){
//         value = value.toLocaleLowerCase().trim() //데이터 재가공 // trim 공백제거
//     }
//     return TRUTHY_VALUES.some(t => t === value)
// }

// console.log(불리언판단기(false))
// console.log(불리언판단기("FALSE  "))
// console.log(불리언판단기(1))
// console.log(불리언판단기(true))

// --- every 메서드 ------------------------------------
// [배열].every(판별함수)

// --- 예제 1 ---

// const numbers = [32, 6, 4, 13, 9, 57]

// function is3의배수(el){
//     return el % 3 === 0
// }

// console.log(numbers.every(is3의배수))

//  --- 예제 2 --- 코딩면접에 나올수도 있는 문제 ---

// const isSubset = (arr1, arr2) => {
//     return arr2.every(el => arr1.includes(el))
// }

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])) // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])) // false

// ---- forEach 메서드 --- map 메서드 --------------------
// forEach : 새로운 배열을 반환하지 않음
// map : 새로운 배혈을 반환함
// 공통점 : 데이터를 다른 형태로 재가공

// --- 예제 1 ---

// const currentTime = [3, 8, 23] // [시, 분, 초]
// const timeStr = []

// currentTime.forEach((time)=>{
//     timeStr.push(`${time < 10 ? '0' + time : time}`)
// })

// console.log(`********* currentTime ***********`)
// console.log(timeStr.join(':'))// join 문자열로 변경

// --- 예제 2 ---

// const userIDs = ['victoria', 'sun', 'johseb', 'syleemomo', 'hannah', 'shara', 'martin', 'gorgia', 'nana', 'dannel']

// userIDs.forEach((userId)=>{
//     console.log(userId + '@gmail.com') // 사용자 ID -> 사용자 이메일 정보
// })

// --- 예제 3 ---

// 웹사이트의 사용자 평점의 합계

// const ratings = [5, 4, 5] // 데이터베이스에서 가져온 사용자 평점
// let sum = 0

// ratings.forEach((rate)=>{
//     sum += rate
// })
// console.log(sum)

// --- 예제 4 ---

// forEach를 사용하면 비어있는 값이 있을 경우 건너뛴다
// const arr = [2, 5, , 9]

// console.log(arr)
// arr.forEach((num, i)=>{
//     console.log(`a[${i}] = ${num}`)
// })

// --- 예제 5 ---
// 배열에서 shift 를 사용하면 인덱스를 -1씩 이동한다
// 인덱스가 0이었던 첫번째 엘리먼트는 인덱스가 -1이 되면서 삭제된다
// forEach에서 shift를 사용하면 배열을 변환한 상태로 forEach를 진행한다

// const words = ['one', 'two', 'three', 'four']

// words.forEach((word)=>{
//     console.log(word)
//     if(word === 'two'){
//         words.shift()
//     }
// })

// --- 예제 6 --- 배열 평탄화 --- 재귀 ---
// JSON.parse(JSON.stringify(배열)) 배열 복제해서 쓸때 => 아예 다른 배열임
// ... = 대괄호 해제
// const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]] // 중첩배열 (3차원 배열)

// const flatten = (arr) => {
//     const result = []
//     arr.forEach((el)=>{
//         if(Array.isArray(el)){ // 배열인지 아닌지 구분할때 사용
//             result.push(...flatten(el))
//         }else{
//             result.push(el)
//         }
//     })

//     return result
// }

// console.log(flatten(nested)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]