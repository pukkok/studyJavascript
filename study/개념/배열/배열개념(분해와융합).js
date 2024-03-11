// --- slice 자르기 ---
// 개발할때 원본변경하는 배열 메서드 자제하기
// 원본 배열을 사용하는 다른 개발자의 코드도 이상해짐

// --- 예제 1 ---

// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// // const sliceWords = words.slice(2,4) // 2 ~ 4전까지 2, 3만 자른다
// const sliceWords = words.slice(-4,-1) // -4 ~ -1전까지 -4, -3, -2만 자른다
// // console.log(sliceWords)
// // console.log(words) // 원본 변경 x

// --- 예제 2 ---

// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// const slicedMovies = movies.slice(1, 3)
// // movies[1].title = '다른 영화 타이틀'
// // slicedMovies[0].title = '슬라이스 타이틀 변경' 
// // 둘다 얕은 복사이기때문에 원본, 복사본 둘다 변경됨 (주소가 같다)

// // console.log(slicedMovies)
// // console.log(movies)

// --- 예제 3 --- 얕은 복사 ---

// let myHonda = {
//     color : 'red',
//     wheels : 4,
//     engine : {cylinders: 4, size: 2.2}
// }

// let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
// let newCar = myCar.slice(0, 2)

// console.log("myCar = " + JSON.stringify(myCar))
// console.log('newCar = ' + JSON.stringify(newCar))
// console.log("myCar[0].color = " + myCar[0].color)
// console.log('newCar[0].color = ' + newCar[0].color)

// myHonda.color = 'purple'
// console.log('The new color of my honda is ' + myHonda.color)
// console.log('The new color of my car is ' + myCar[0].color)
// console.log('The new color of new car is ' + newCar[0].color)

// --- 예제 4 ---

// let str = 'stringify'
// console.log(str.slice(0,5)) // 0부터 5 전까지 = 0~4 strin
// console.log(str.slice(0,1)) // s

// 구조분해 === 비구조화 할당 : ES5 최신문법(destructuring assignment)
// 배열이나 객체에서 필요한 값(사용하려는 값)만 뽑아주는 것
// 배열에서 특정 요소를 추출해서 따로 저장
// 객체에서 특정 프로퍼티값을 추출해서 따로 저장

// --- 예제 1 ---

// const fruits = ['apple', 'banana', 'orange', 'lemon', 'watermelon']
// // const [firstFruit] = fruits
// // const [,,thirdFruit] = fruits // , 개수로 위치 찾기
// // const [lastFruit] = fruits.reverse() // 뒤에서부터 찾을때는 reverse 이용하기
// const [first, second, ...rest] = fruits // 첫번째 요소 추출, ... 배열 풀기 [] 배열로 묶기
// // ...(스프레드) 연산자는 맨 뒤에서만 사용 가능
// // 객체일때 {}

// // console.log(firstFruit)
// // console.log(thirdFruit)
// // console.log(lastFruit)
// console.log(first)
// console.log(second)
// console.log(rest)
// rest[2] = 'abc'
// console.log(rest)
// console.log(fruits)

// --- 예제 2 ---

// let a, b
// [a=5, b=7] = [1]
// console.log(a)
// console.log(b)

// --- 예제 3 ---

// let a = 1
// let b = 3;

// [a, b] = [b, a]
// console.log(a)
// console.log(b)

// 같은 내용

// let a = 1
// let b = 3
// let temp // 임시 변수

// temp = a // temp : 1
// a = b // a : 3
// b = temp // b : 1
// console.log(a)
// console.log(b)

// --- 예제 4 ---

// function f(){
//     return [1, 2, 3]
// }
// let a, b
// [a, , b] = f()
// console.log(a, b)

// 배열 합치기 --- concat, 스프레드연산자 - 여러개의 배열을 하나로 합치기

// --- 예제 1 ---

// const words = ['car', 'mobile', 'sun', 'foot', 'pen']
// const numbers = [1, 2, 3]
// let unitedArr = words.concat(numbers) // words 뒤에 number 합치기
// //같은 기능
// let unitedArr2 = [...words, ...numbers]
// console.log(unitedArr)
// console.log(unitedArr2)

// --- reduce 배열을 넣어서 값 하나로 추출 ---

// --- 예제 1 ---

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const sum = numbers.reduce((accumulator, number)=>accumulator+number, 0)  
// // accumulator 누적, 축적
// // console.log(sum)

// let accumulator = 0
// for(let number of numbers){
//     accumulator += number
// }
// console.log(accumulator)

//reduce 메서드의 콜백함수 : 리듀서(reducer)

// --- 예제 2 ---
// coord : 좌표
// const coords = [{x:1, y:2}, {x:5, y:5}, {x:3, y:4}]
// const vectorSum = coords.reduce((accumulator, coord) =>{
//     accumulator = {x: accumulator.x + coord.x, y: accumulator.y + coord.y}
//     return accumulator
// }, {x : 0 ,y : 0})
// console.log(vectorSum)

// --- 예제 3 ---

// nest = 중첩된
// flatten 평탄화

// const nestedArr = [ // 2차원 배열 => 1차원 배열로
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ]


// const flattenedArr = nestedArr.reduce((accumulator, arrInside)=>{
//     // return accumulator.concat(arrInside)
//     return [...accumulator, ...arrInside]
// }, [])
// console.log(flattenedArr)

// --- 예제 4 ---

// var names = ["Alice", "Bob","Bruce", "Bruce", "Tiff", "Bruce","Bob", "Alice"]

// const countedNames = names.reduce((allNames, name)=>{
//     if(name in allNames){ // in : 객체에 해당하는 프로퍼티가 존재하는지 검사
//         allNames[name]++
//     }else{
//         allNames[name] = 1
//     }
//     return allNames
// }, {})
// console.log(countedNames)

// --- 예제 5 ---

// const people = [
//     { name: "Alice", age: 21 },
//     { name: "Max", age: 20 },
//     { name: "Jane", age: 20 },
// ];

// const groupBy = (objectArr, property) => { // 첫번째 인자 : 분류하려는 목록, 두번째 인자 : 분류 기준
//     return objectArr.reduce((acc, obj)=>{
//         const key = obj[property]
//         if(!acc[key]){
//             acc[key] = []
//         }
//         acc[key].push(obj)
//         return acc // reducer 리턴
//     }, {})
// }
// const groupedPeople = groupBy(people, "age")
// console.log(groupedPeople)

// --- 예제 6 ---

// const friends = [
//     {
//       name: "Anna",
//       books: ["Bible", "Harry Potter"],
//       age: 21,
//     },
//     {
//       name: "Bob",
//       books: ["War and peace", "Romeo and Juliet"],
//       age: 26,
//     },
//     {
//       name: "Alice",
//       books: ["The Lord of the Rings", "The Shining"],
//       age: 18,
//     },
// ];

// const extractvalue = (arr, property) => {
//     return arr.reduce((acc, obj)=>{
//         return [...acc, ...obj[property]]
//     }, [])
// }

// const arrBookList = extractvalue(friends, "books")

// console.log(arrBookList)

// --- 예제 7 ---

// const arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4] // 메서드 체이닝, 함수 체이닝
// const result = arr.sort().reduce((acc, number)=>{
//     if(acc.length === 0 || acc[acc.length -1] !== number){
//         acc.push(number)
//     }
//     return acc
// }, [])
// console.log(result)

// join : 배열 -> 문자열로 변환 -------------------
// split : 문자열 -> 배열로 변환

// --- 예제 1 ---

// const fruits = ['apple', 'banana', 'orange']
// const fruitsStr = fruits.join(' & ') // join(' ') join 안쪽의 내용으로 구분하기
// console.log(fruitsStr)

// const str = ''
// const strSeperated = str.split() // split()안쪽에 구분문자가 없을경우 통째로 배열에 입력 **
// console.log(strSeperated)

// const sentence = 'I joined swimming club in my highschool'
// const sentenceSeperated = sentence.split(' ', 3) // 빈 문자열을 주면 한 문자씩 반환 , 3개만

// const sentence = 'I (joined) swimming <club> in my highschool'
// const sentenceSeperated = sentence.split(/[()<>]/)

// const sentence = 'I^,^joined^,^swimming^,^club^,^in^,^my^,^highschool'
// const sentenceSeperated = sentence.split([`^,^`])
// console.log(sentenceSeperated)

// --- 예제 2 ---

// const sentence = 'I joined swimming club in my highschool. that club was awsome !'
// const foundedKeyword = sentence.split(' ').filter(word => word === 'club')
// console.log(foundedKeyword.length)

// --- 예제 3 ---

// const sentence = '?죠밌재 트립크스바자'
// // const splitedSentence = sentence.split('').reverse().join('')
// const splitedSentence = sentence.split('').reverse().join('')
// console.log(splitedSentence)

// --- 예제 4 ---

// const sentence = 'I joined swimming club in my highschool. that club was awsome !'

// const modifiedSentence = sentence
//                         .split(' ')
//                         .map(word => word = word === 'club' ? `${word} 🏊` : word)
//                         .join(' ')
// console.log(modifiedSentence)