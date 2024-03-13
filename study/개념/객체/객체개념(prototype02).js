// 프로토타입 마무리

// const animal = {
//     walk() {
//         if (!this.isSleeping) {
//         alert(`동물이 걸어갑니다.`)
//         }
//     },
//     sleep() {
//         this.isSleeping = true
//     },
//     eats : true
// }
  
// const rabbit = {
//     name: "하얀 토끼",
//     jumps: true,
//     __proto__: animal
// }

// const bird = {
//     name: '작은 참새',
//     __proto__: animal
// }

// const snake = {
//     name: '무서운 뱀',
//     __proto__: animal
// }

// animal 공유하는지 확인
// rabbit.sleep()
// bird.sleep()
// snake.sleep()
// console.log(rabbit)
// console.log(bird)
// console.log(snake)

// console.log(Object.keys(rabbit)) // 객체 자신의 프로퍼티만 조회
// for(let prop in rabbit) console.log(prop) // 상속받은 프로퍼티를 포함해서 조회

// for(let prop in rabbit){
//     const isOwn = rabbit.hasOwnProperty(prop) // 자신의 프로퍼티인지 확인
//     if(isOwn){
//         console.log(`객체 자신의 프로퍼티 : ${prop}`)
//     }else{
//         console.log(`상속받은 프로퍼티 : ${prop}`)
//     }
// }

// const book = {
//     name: 'javascript',
//     price: 21000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria'],
//     getInfo: function(){
//         console.log(this)
//         console.log('--- 책의 정보 ---')
//         console.log('제목 : ', this.name)
//         console.log('가격 : ', this.price)
//         console.log('초판 : ', this.release)
//         console.log('저자 : ', this.authors.join(' '))
//     }
// }

// book.getInfo()

function Book(name, price, release, authors){ // 생성자 함수 -> 객체 생성
    this.name = name // 멤버변수
    this.price = price
    this.release = release
    this.authors = authors
}

Book.prototype = {
    getInfo(){ // 메서드인 경우
        console.log('--- 책의 정보 ---')
        console.log('제목 : ', this.name)
        console.log('가격 : ', this.price)
        console.log('초판 : ', this.release)
        console.log('저자 : ', this.authors.join(' '))
    },
    discount(){
        if(this.name === 'python'){
            this.price -= 1000
        }
    },
    get getPrice(){ // getter
        return this.price
    },
    set addAuthors(newAuthor){ // 개발 코드 중복은 최소화
        this.authors.push(newAuthor)
    }
}

const book1 = new Book('javascript', 21000, '2019-12-03', ['mark', 'victoria']) // 변수 넣어서 사용

const book2 = new Book('python', 18700, '2022-01-07', ['sunrise'])

// console.dir(Book) // 클래스나 생성자 함수로 생성된 객체 -> 인스턴스(instance)
// console.log(Book.prototype)

book1.discount()
book1.addAuthors = 'pukkok'
// console.log(book1.authors)
// console.log(book1.getPrice)

book2.discount()
// console.log(book2.getPrice)


// 객체 정렬하기
const obj = {'a': 35, 'b': 24, 'c': 29, 'd': 15, 'e': 19}
const data = Object.entries(obj) // 배열로 변경
data.sort((a, b) => a[1] - b[1])
// console.log(data)

// ---------------------------

const book = {
    name: 'javascript',
    price: 21000,
    release: '2019-12-03',
    authors: ['mark', 'victoria']
}

// 객체 안에 있는지 없는지 확인할때(객체의 프로퍼티 유무 체크) in 키워드 사용
//for in문 아니어도 in 사용 가능
// console.log('price' in book) // in의 property는 무조건 문자열로
// console.log('title' in book)
// 같은기능
// 차이점
// hasOwnProperty : 자기 자신의 프로퍼티만 검사
// in : 상속 받은 프로퍼티도 포함해서 검사

// console.log(book.hasOwnProperty('price'))
// console.log(book.hasOwnProperty('title'))

// 객체안의 밸류값 바꾸고싶을때 // 리액트때 많이 쓸거에요

// const newBook = {
//     ...book, // 객체의 프로퍼티를 다 풀어헤쳐서 새로운 객체에 복사
//     release: '변경된 릴리즈',
//     price: '가격 업데이트'
// }

// console.log(book)
// console.log(newBook)

// 얕은 복사 - 프로퍼티의 배열이나 객체의 주소값만 복사하기

/** 얕은 복사 : 객체나 배열은 주소복사이기 때문에 
    원본 객체나 배열의 프로퍼티나 배열요소를 변경하면
    복사본의 객체나 배열의 프로퍼티나 배열요소도 동일하게 변경
    객체나 배열을 제외한 원시타입(문자열, 숫자, 논리)은 값복사이기 때문에
    원본의 값을 변경하면 복사본은 바뀌지 않는다. */

// const target = Object.assign({}, book)
// book.price = 3300
// console.log(book)
// console.log(target)

// 깊은 복사
// const target2 = JSON.parse(JSON.stringify(book))

// 얕은 복사
// const target3 = {...book}

// 프로퍼티 이름 변경 - 구조분해
// 객체의 구조분해시 조회하는 프로퍼티 이름과 변수이름이 동일해야 한다
// const { name : bookName, authors : bookAuthors } = book // 구조분해 = 비구조화 할당
// console.log(bookName, bookAuthors)


// --------------------------------------------------------------------------

// const { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 }
// console.log(a)
// console.log(b)
// console.log(rest)

// --------------

// const o = { p: 42, q: true }
// const { p: foo, q: bar } = o
// console.log(foo, bar)

// const {a : aa = 10, b : bb = 5} = {a:3}
// console.log(aa) // a=3이 복사되서 나옴
// console.log(bb)

// ----------------------------------------------------------------------

// function drawES5chart(options){
//     // 유효성 검증 // 비구조화 할당 안한경우
//     options = options === undefined ? {} : options
//     const size = options.size === undefined ? 'big' : options.size
//     const coords = options.coords === undefined ? {x:0, y:0} : options.coords
//     const radius = options.radius === undefined ? 25 : options.radius
//     console.log(size, coords, radius)

// }

// function drawES5chart({size = 'big', coords = {x:0, y:0}, radius = 25 } = {}){
//     console.log(size, coords, radius)
//     // 실제 코드

// }

// drawES5chart({
//     coords : {x: 18, y: 30},
//     radius : 30,
// })

// --------------------------------------------------------------------

// const metadata = {
//     title: "Scratchpad",
//     translations: [
//       {
//         locale: "de",
//         localization_tags: [],
//         last_edit: "2014-04-14T08:43:37",
//         url: "/de/docs/Tools/Scratchpad",
//         title: "JavaScript-Umgebung",
//       },
//     ],
//     url: "/ko/docs/Tools/Scratchpad",
// }

// const {title, translations: [{url : translationsUrl, last_edit}]} = metadata

// console.log(translationsUrl)
// console.log(last_edit)

// ------------------------------------------------------------------

// const people = [
//     {
//       name: "Mike Smith",
//       family: {
//         mother: "Jane Smith",
//         father: "Harry Smith",
//         sister: "Samantha Smith",
//       },
//       age: 35,
//     },
//     {
//       name: "Tom Jones",
//       family: {
//         mother: "Norah Jones",
//         father: "Richard Jones",
//         brother: "Howard Jones",
//       },
//       age: 25,
//     },
// ]

// for(let {name : n, family : {father : f}} of people){
//     console.log(n, f)
// }

// ----------------------------------------------------------------

// const userID = ({ id }) => {
//     return id
// }
// const whois = ({ displayName : dName, fullName : { firstName : fName }}) => {
//     console.log(dName, fName)
// }

// const user = {
//     id: 42,
//     displayName: "jdoe",
//     fullName: {
//         firstName: "John",
//         lastName: "Doe",
//     },
// }

// console.log('아이디 : ', userID(user))
// whois(user)

// --- setter 와 getter ---------------------------------------------

// let user = {
//     get name(){
//         return this._name // 멤버변수
//     },
//     set name(value){
//         // 유효성 검증 (캡슐화, 은닉화)
//         if(value.length < 4){
//             alert('입력한 회원이름이 너무 짧습니다.')
//             return // 사용자 이름 변경 못하도록 막음
//         }
//         this._name = value
//     },
// }

// user.name = '변경하려는 이름' 
// /** 외부에서는 접근자 프로퍼티(setter)를 사용해서
//  *  안전하게 객체의 프로퍼티 값은 변경함*/ 
// console.log(user.name)

// console.log(user._name) // 불러올수는 있다. 하지만 사용하기위해 만든값 x

// user.name = '짧은'
// console.log(user.name)


/** getter, setter 사용하는이유
 *  1. 캡슐화, 은닉화 -> 데이터를 조회하거나 저장할때 유효성 검증
 *  2. 객체의 프로퍼티 값이 변경되었지만 사용은 하고 싶을때
 *  -> 기존의 객체들은 변경되기 전의 프로퍼티 값을 사용하고 있을테니까
 */
function User(name, birthday){
    this.name = name,
    this.birthday = birthday
}
User.prototype = {
    get age(){
        let todayYear = new Date().getFullYear()
        return todayYear - this.birthday.getFullYear()
    }
}
let john = new User('John', new Date(1992, 6, 1))
console.log(john.birthday)
console.log(john.age)
