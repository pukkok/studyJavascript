// 함수도 객체이다 - 프로퍼티와 메서드를 가질수 있다.

// function add(a, b){
//     return a + b
// }
// add['description'] = 'add to numbers'
// add['parameter-info'] = function(){
//     console.log(`parameters: ${add.name} function needs ${add.length} parameters`)
// }

// console.dir(add)

// console.log('---- 함수 정보 ----')
// console.log('description: ', add['description'])

// add['parameter-info']()

// const a= 3, b=5


// function subtract(a, b){
//     return a < b  ? b-a : a-b
// }

// console.log(subtract(a, b))

// -----------------------------------------------------

const launguage = ['korean', 'japanese', 'english', 'chinese', 'russian']

// 배열을 깊은복사하는 함수 (깊은복사 : 주소 위치를 다른곳을 가리킴)

// const copyArr = (arr) => {
//     const copiedArr = []
    
//     arr.forEach(Element => {
//         copiedArr.push(Element)
//     })
//     return copiedArr
// }

// const copiedArr = copyArr(launguage)
// console.log(copiedArr)
// console.log('두 배열이 동일한지 검사: ', launguage === copiedArr)

// function copyArr(arr){
//     const copiedArr = []
    
//     arr.forEach(Element => {
//         copiedArr.push(Element)
//     })
//     return copiedArr
// }

// function 키워드를 사용하면 함수 위쪽에 있어도 동작함
// 함수표현식(const선언)은 함수 호이스팅이 불가능하다. (위쪽을 읽을수 없다)

// -------------------

// 함수선언과 화살표 함수의 차이?
// this, 생성자함수로 사용가능 여부, arguments 객체 존재유무

// console.log(this) // 객체 안의 메서드를 화살표함수로 작성하면 객체 외부의 전역에 위치한 this값 참조
// (브라우저에서의  전역의 this는 윈도우 객체)

// const music = {
//     name: '금요일에 만나요',
//     artist: 'IU',
//     release: '2013-12-30',
//     info(){
//             console.log(`${this.name} - ${this.artist} 는 ${this.release} 에 발매되었습니다.`)
//         }
//         // info: () => { //사용 못함
//         //     console.log(this) // 화살표 함수 사용시 this는 윈도우 객체
//         //     console.log(`${this.name} - ${this.artist} 는 ${this.release} 에 발매되었습니다.`)
//         // }
//     }
    
// music.info()

// ----------------------------------------------------------------------------

// function Music(){
//     this.name = '보고 싶다'
//     this.artist = '김범수'
//     this.release = '2002-12-17'

//     const music = {
//         name: '금요일에 만나요',
//         artist: 'IU',
//         release: '2013-12-20',
//         info: () => { // 화살표 함수는 내부에 자체적인 this 값이 없다.
//             console.log(this)
//             console.log(`${this.name} - ${this.artist} 는 ${this.release} 에 발매되었다.`)
//         }
//     }
//     return music
// }

// const music = new Music()
// music.info()

// --------------------------------------------------------

// function Music(){ 
//     //함수선언 방식은 생성자 함수를 만들수 있다. 
//     //화살표 함수는 생성자 함수를 만들지 못한다.
//     this.name = '보고 싶다' // 멤버변수
//     this.artist = '김범수'
//     this.release = '2002-12-17'
// }

// const music = new Music()

// -------------------------------------------------------

// arguments 객체 : 유사배열 (객체 + 배열의 끔찍한 혼종)
// function add(a, b){
//     console.log(arguments) // arguments 객체

//     // console.log(arguments[0])
//     // console.log(arguments[1])
//     // console.log(arguments.length)
//     // console.log(arguments.callee)
//}

// const add = (a, b) => {
//     console.log(arguments) // 화살표 함수는 argument 자체가 없음
// }

// add('apple', 'banana')
// add('pineapple', 'watermelon')

// ---- 함수 이름짓기 ---------------------
// 뭔가를 생성하는 함수
// create ... 
// build ...

// 뭔가를 조회하는 함수
// get ...
// read ...

// 뭔가를 변경하는 함수
// set ...
// write ...
// update ...

// 뭔가를 검사하는 함수
// check ...
// validate ...

// 뭔가를 보여주는 함수
// show ...
// display ...

// -------------------------------------------------------------

// function add(a, b){
//     a = a || 0
//     b = b || 0
//     return a + b
// }

// function add(a=0, b=0, c=a+b){
//     return a + b + c
// }

// ?? 널 병합 연산자 (Nullish coalescing operator)
// a, b 값이 null 이나 undefined 인 경우 기본값 설정
// function add(a, b){
//     a = a ?? 0
//     b = b ?? 0
//     return a + b
// }

// console.log(add(3, 5))
// console.log(add(3))
// console.log(add())
// console.log(add('', ''))

// -------------------------------------------------------

// function copyArr(arr){
//     if(!Array.isArray(arr)) return
//     if(arr.length === 0) return

//     const copiedArr = []
//     for(let element of arr){
//         copiedArr.push(element)
//     }
//     return copiedArr
// }
// const copiedArr = copyArr()
// console.log(copiedArr)

// console.log(copyArr(3))
// console.log(copyArr('apple'))
// console.log(copyArr(false))
// console.log(copyArr([]))
// console.log(copyArr({}))
// console.log(copyArr(null))


