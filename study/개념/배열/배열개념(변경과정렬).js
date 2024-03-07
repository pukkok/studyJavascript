// ---- push ----------------------------------------
// push를 변수로 담을 경우 변경된 length값 출력

// --- 예제 1 ---
// const seasons = ['spring', 'summer', 'autumn']

// const arrLength = seasons.push('winter')

// console.log(seasons)
// console.log(arrLength)

// --- 예제 2 ---

// const multiplyBySix = []
// for(let i=1; i<100; i++){
//     multiplyBySix.push(i*6)
// }
// console.log(multiplyBySix)

// --- 예제 3 ---

// const movies = ['Harry Potter', 'Doctor Stranger', 'Iron Man', 'Spider Man', 'Widow']
// const moviesInfo = []

// const addMovieInfo = (movie, i) => {
//     moviesInfo.push({
//         title : movie,
//         id : i
//     })
// }

// movies.forEach(addMovieInfo)

// console.log(moviesInfo)

// --- 예제 4 ---

// const cities = ['seoul', 'busan', 'daegu']
// const citesToAdd = ['daejeon', 'ulsan']

// cities.push(...citesToAdd)
// console.log(cities)

// --- pop 메서드 -------------------------------------
// 마지막 엘레먼트(요소) 제거

// const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']
// console.log(companies.pop())
// console.log(companies)

// --- shift 메서드 ----------------------------------
// 첫번째 엘레먼트(요소) 제거

// --- 예제 1 ---
// const alphabets = ['a', 'b', 'c']
// const firstAlphabets = alphabets.shift()

// console.log(firstAlphabets)
// console.log(alphabets)

// //unshift 할경우 배열의 앞에다가 push
// //unshift를 변수로 담을 경우 변경된 length값 출력

// const arrLength = alphabets.unshift('d', 'e')

// console.log(arrLength)
// console.log(alphabets)

// --- 예제 2 ---
// 배열 앞에서 하나씩 제거하기

// const names = ["Andrew", "Edward", "Paul", "Chris", "John"]

// while((i = names.shift()) !== undefined){
//     console.log(i)
// }
// console.log(names)

// ---- splice 메서드 ----배열요소 추가, 변경, 삭제------------
// [배열].splice(변경 시작 인덱스, 삭제할 요소의 수, 추가할 요소 1, 추가할 요소2, ...)
// 반환값 = 제거된것들의 배열

// --- 예제 1 --- 2 --- 3 --- 4 --- 5 --- 6 ---

// const fruits = ['apple', 'orange', 'watermelon']

// // -- 1 --
// const removedFruits = fruits.splice(1, 0, 'banana', 'strawberry') //원본 변경 splice(1, 0, '') 1번 인덱스 자리에서 시작, 몇개 제거?, 추가요소1, 추가요소2 , ...

// // -- 2 --
// const removedFruits2 = fruits.splice(2,1) // 2번째 인덱스부터 1개 요소 제거

// // -- 3 --
// const removedFruits3 = fruits.splice(0, 3, 'pear', 'lemon')

// // -- 4 --
// const removedFruits4 = fruits.splice(fruits.length - 2, 1)

// // -- 5 --
// const removedFruits5 = fruits.splice(-2, 1) // 뒤부터 세기

// // -- 6 --
// const removedFruits6 = fruits.splice(2) // 삭제요소개수 default 1

// console.log(fruits)
// console.log(removedFruits)
// console.log(removedFruits2)
// console.log(removedFruits3)
// console.log(removedFruits4)
// console.log(removedFruits5)
// console.log(removedFruits6)

// --- sort 정렬하기 (원본) -------------------------------------------------------

// --- 예제 1 --- 문자졍렬 ---

// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// words.sort() // 알파벳순으로 정렬
// console.log(words)

// console.log(words.reverse()) // 배열 정렬 뒤에서부터로 바꾸기

// --- 예제 2 --- 숫자정렬 ---

// const numbers = [100, 3, -11, 394, 27, 4, 82, 6, 5, 94]

// numbers.sort() // 자바스크립트에서 비교는 맨 앞자리 수로 정렬한다
// console.log(numbers) // [100, 27, 3, 394, 4, 5, 6, 82, 94]

// // function 비교함수 이름(배열요소 1, 배열요소 2){
// // 	if(배열요소 1 > 배열요소 2) return 1 // 배열요소 1 이 크면 반환값 1을 설정함으로써 순서를 변경함
// //     if(배열요소 1 < 배열요소 2) return -1 // 배열요소 1이 작으면 반환값 -1을 설정함으로써 순서를 변경하지 않음
// //     return 0
// // }

// function compareNumbers(a, b){ // 숫자 오름차순 내림차순 정렬할때 사용하자
//     // if(a>b) return true
//     // if(a<b) return -1
//     // return 0
//     // 1일때는 순서변경, 0, -1 일때는 순서변경x
//     // truthy 값이면 이동, falsy 값이면 멈춤

//     return a - b // 오름차순
//     // return b - a // 내림차순
// }

// numbers.sort(compareNumbers)
// console.log(numbers)

// --- 예제 3 --- value값 기준으로 정렬 --- name값 기준으로 정렬 ---

const items = [
    { name: "Edward", value: 21 },
    { name: "Zeros", value: 37 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
]

items.sort((a, b)=>{ // value 정렬
    // if(a.value > b.value) return 1
    // if(a.value < b.value) return -1
    // return 0

    return a.value - b.value
})

// console.log('value정렬', items)

// items.sort((a, b)=>{ // name 정렬
//     const nameA = a.name.toUpperCase()
//     const nameB = b.name.toUpperCase()

//     if(nameA > nameB){
//         return 1
//     }
//     if(nameA < nameB){
//         return -1
//     }
//     return 0
    
// })

// console.log('name정렬', items)