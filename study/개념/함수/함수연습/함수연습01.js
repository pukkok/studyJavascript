// 연습 1

// function findMaxValue(...args){
//     let result = 0
//     args.reduce((i,arg)=>{
//         i = +i || 0
//         arg = +arg || 0
//         result = i
//         return i > arg ? i : arg
//     },0)
//     return result
// }

// // 테스트 케이스 
// console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
// console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [],'zip', "2045.8", 'zip', 54, "1024"))

// 연습 2

// function Movie(title, author, release){
//     this.title = title
//     this.author = author
//     this.release = release

//     this.printMovieInfo = () => { // 화살표 함수는 this가 없다
//         getInfo = () => { // 화살표 함수는 this가 없다
//             return `${this.title}-${this.author}는 ${this.release}에 발매되었다.`
//         }
//         console.log(getInfo()) 
//     }
// }


// const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")
// movie.printMovieInfo()

// 연습 3

// 피타고라스
// function getDistance (...args){
//     let result = 0
//     args.reduce((coord, second)=>{
//         coord.x = second.x-coord.x
//         coord.y = second.y-coord.y
//         result = Math.sqrt(coord.x**2+coord.y**2)
//         return coord
//     },{x:0, y:0})
//     return result
// }

// console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14}))
// console.log(getDistance({x: 3, y: 4}))

// 연습 4

// countDuplication 함수 구현하기 
// function countDuplication(key, ...args){
//     let count = 0
//     args.reduce((i, data)=>{
//         i++
//         if(data===key){
//             count++
//         }
//         return i
//     },0)
//     return count
// }

// 테스트 케이스 
// console.log(countDuplication('cat', 'apple', 'cat', 'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) // 4

// function add(...args){
//     let result = 0
//     // console.log(args)
//     args.reduce((i, j)=>{
//         j = +j ?? 0 // 나머지 필터
//         if(!isNaN(j)) i += j
//         result = i
//         return i
//     },0)
//     return result
//     // 구현하기
// }

// // 테스트 케이스
// console.log(add(3, null, 19, false, '9', [], 7, {}, '', 34, 'earth', '3.9')) // 75.9

// divider 함수 구현하기
// function divider(x, ...args){
//     if(x==0) return args
//     let result = args.map(arg => {
//        return arg / x  
//     })
//     return result
// }

// // 테스트 케이스 
// console.log(divider(2, 39, 4, 7, 28, 62, 28))
// console.log(divider(0, 39, 4, 7, 28, 62, 28))

// const numbers = [121, 23, 345, 43, 59]

// function pickIndex(len){
//     return Math.floor(Math.random() * len)
// }
// function shuffle(arr){
//     // 구현하기
//     console.log(arr)
//     for(let i in arr){
//         let rIndex = pickIndex(arr.length);
//         [arr[i] , arr[rIndex]] = [arr[rIndex], arr[i]]
//         return arr
//     }
// }

// console.log(shuffle(numbers))

// 연습 1

// const fruit = 'apple'
// let printB = null

// // 구현하기
// const printA = () => {
//     const fruit = 'banana'
//     printB = () => {
//         return console.log(fruit)    
//     }
//     return printB()
// }

// printA() // banana
// printB() // banana

// 연습 2

// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]
// const filterSeoul = (arr) => {
//     let filtering = arr.filter((el)=>{
//         return el.city === 'seoul'
//         })
//     return filtering
// }

// const filter = (callbackF, arr) => {
//     return callbackF(arr)
// }

// const seoulFriends = filter(filterSeoul, friends)
// console.log(seoulFriends)

// 연습 3

// function add(a, b){
//     return a + b
// }
// function subtract(a, b){
//     return a - b
// }
// function multiply(a, b){
//     return a * b
// }
// function divider(a, b){
//     return a / b
// }
// function pow(a, b){
//     // 구현하기
//     return a**b
// }

// function calculator(mode, a, b, ...funcs){
//     let ret = null
//     switch(mode){
//         case '+':
//             ret = funcs[0](a, b)
//             break
//         case '-':
//             ret = funcs[1](a, b)
//             break
//         case '*':
//             ret = funcs[2](a, b)
//             break
//         case '/':
//             ret= funcs[3](a, b)
//             break
//         case '^':
//             ret = funcs[4](a, b)
//             break
//     }
//     return ret
// }

// // 테스트 케이스
// const ret1 = calculator('+', 3, 4, add, subtract, multiply, divider, pow)
// const ret2 = calculator('-', 3, 4, add, subtract, multiply, divider, pow)
// const ret3 = calculator('*', 3, 4, add, subtract, multiply, divider, pow)
// const ret4 = calculator('/', 3, 4, add, subtract, multiply, divider, pow)
// const ret5 = calculator('^', 3, 4, add, subtract, multiply, divider, pow)

// console.log(ret1)
// console.log(ret2)
// console.log(ret3)
// console.log(ret4)
// console.log(ret5)

// 연습 4

// const comment = '너는 진짜 못말리는 바보 똥개 그지다 !'

// /** 코멘트 넣으면 비속어 필터링됨 */
// const filteringInsult = () => {
//     const insults = ['바보', '똥개', '그지', '멍청이']
//     /** 필터링 함수 */
//     const filterKeyword = (arr, keyword) => {
//         return arr.filter(word => !word.includes(keyword))
//     }
//     /** 키워드별로 필터링 돌리기 */
//     const filtering = (separateString) => {
//         insults.forEach(insult => {
//             separateString = filterKeyword(separateString, insult)
//         })
//         return console.log(separateString)
//     }    

//     /** (문자열, 구분) 문자열로 넣고 구분문자(default=' ') 넣으면 됨 */
//     function separateStr(str, delimeter = ' '){
//         return filtering(str.split(delimeter))    
//     }
//     return separateStr
// }

// const filtered = filteringInsult()
// filtered('안녕 바보야 키득키득 멍청이')
// filtered('니가 뭔데 바보야')

// 연습 5

// const animals = ['cat', 'lion', 'turtle', 'dog', 'pig']
// const fruits = ['apple', 'banana', 'strawberry', 'pineapple', 'pear']
// function search(){
//     function searchItemInCategory(category, key){
//         return category.filter(item => item === key)[0]
//     }
//     return searchItemInCategory
// }

// const searchAnimal = search()
// console.log(searchAnimal(animals, 'turtle'))

// console.log(searchItemInCategory(animals, 'turtle')) // searchItemInCategory 내부의 category 변수에는 접근하지는 못하지만 외부인자에 의하여 수정이 가능함
// console.log(searchItemInCategory(animals, 'pig'))
// console.log(searchItemInCategory(animals, 'banana'))

// console.log(searchItemInCategory(fruits, 'strawberry'))
// console.log(searchItemInCategory(fruits, 'apple'))
// console.log(searchItemInCategory(fruits, 'lion'))

// 연습 6

const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

function Person(name, age, city, friends){
    this.name = name
    this.age = age
    this.city = city

    // 초기값이 배열이나 객체인 경우 깊은복사로 저장 및 조회하기
    let _friends = JSON.parse(JSON.stringify(friends)) // 전역변수 friends 는 참조만 하고 프라이빗 변수 _friends 는 외부에서 변경하지 못하도록 깊은복사로 저장함

    this.getFriends = function(){
        return JSON.parse(JSON.stringify(_friends)) // 프라이빗 변수 _friends 를 보호하기 위하여 깊은복사로 조회함
    }

}
Person.prototype = {
    get friends(){
        return this.getFriends() 
    },
    filterFriendsInMyCity(){ 
        return this.friends.filter(friend => friend.city === this.city) 
    },
}


const person = new Person('영희', 23, 'daegu', friends)

console.log(person.friends === friends) // 전역변수 friends 와 프라이빗변수 _friends 주소가 다름을 확인함 (복사본을 저장하기 때문)
person.friends[0].name =  "태양" // 프라이빗 변수 _friends 를 변경하지 못함 (복사본을 조회하기 때문)

console.log(person.friends) 
console.log(person.filterFriendsInMyCity())

const person2 = new Person('철수', 35, 'seoul', friends)
console.log(person2.friends) 
console.log(person2.filterFriendsInMyCity())