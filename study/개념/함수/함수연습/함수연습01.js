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

/** 코멘트 넣으면 비속어 필터링됨 */
// const filteringInsult = () => {
//     const insults = ['바보', '똥개', '그지', '멍청이', '시발', '개새끼', '메롱']
//     /** 필터링 함수 */
//     const filterKeyword = (arr, keyword) => {
//         return arr.filter(word => !word.includes(keyword))
//     }
//     /** 키워드별로 필터링 돌리기 */
//     const filtering = (separateString) => {
//         insults.forEach(insult => {
//             separateString = filterKeyword(separateString, insult)
//         })
//         return console.log(separateString.join(''))
//     }    

//     /** 구조(문자열, 구분) 문자열로 넣으면 됨. 구분(delimeter)문자(default=' ')*/
//     function separateStr(str, delimeter = ' '){
//         return filtering(str.split(delimeter))    
//     }
//     return separateStr
// }

// const filtered = filteringInsult()
// filtered('안녕 바보 멍청이 똥개 그지야 메롱')
// filtered('안녕 바보야 키득키득 멍청이')
// filtered('니가 뭔데 바보야')
// filtered('너는 바보야 똥개야 안녕')

// 연습 5

// const color = ['빨강', '파랑', '노랑']
// function search(arr){
//     arr = arr === '동물' ? ['cat', 'lion', 'turtle', 'dog', 'pig'] : arr
//     arr = arr === '과일' ? ['apple', 'banana', 'strawberry', 'pineapple', 'pear'] : arr 
        
//     /** 값을 넣으면 있는지 없는지 확인 가능 */
//     function searchItemInCategory(key){
//         return arr.filter(item => item === key)[0] ? `${key} 있음` : '목록에 없음'
//     }
//     return searchItemInCategory
// }

// const searchAnimal = search('동물')
// const searchColor = search(color)
// console.log(searchAnimal('cat'))
// console.log(searchAnimal('giraffe'))
// console.log(searchColor('빨강'))

// 연습 6

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

// function myInfo(name, age, city, friends){
//     let _friends = JSON.parse(JSON.stringify(friends)) // 전역변수 friends 는 참조만 하고 프라이빗 변수 _friends 는 외부에서 변경하지 못하도록 깊은복사로 저장함
//     let _name = ''
//     let myObj = {}
//     myObj['name'] = name
//     myObj['age'] = age
//     myObj['city'] = city
//     myObj['friends'] = _friends
//     return {
//         myObj,
//         filterFriendsInMyCity (){
//             let result = _friends.filter(friend => friend.city === city)
//             return result.length===0 ? '동네친구가 없어요' : result
//         },
//         get myFriends (){
//             return _friends
//         },
//         get name (){
//             return _name
//         },
//         set name(value){
//             _name = myObj[value] 
//         },
//     }
// }

// const minseok = myInfo('민석', 32, 'sejong', friends)
// console.log('동네친구 : ', minseok.filterFriendsInMyCity())
// console.log('내친구 : ', minseok.myFriends)


// 연습 7

const metadata = {
    title: "Scratchpad",
    translations: {
      info: {
        locale: "de",
        localization_tags: [],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung",
        time: {
          hour: 4
        }
      },
    },
    url: "/ko/docs/Tools/Scratchpad",
}

let test1 =  Object.values(metadata)
// console.log(test1)
test1.forEach(test => {
    if(typeof test === 'object'){
        test = Object.values(test)
        // console.log(test)
    }
})

// console.log(findKeyOfObj("title", metadata, 1))

console.log(findKeyOfObj("title", metadata, 3))

function findKeyOfObj(key, obj, i){
    let entries = Object.entries(obj)
    // console.log('key', key)
    // console.log('obj', obj)
    // console.log('i', i)
    function depth(){
        a = entries.map((entry)=>{
            if(i>0 && typeof entry[1]==='object'){
                console.log(i, entries)
                entries = Object.entries(entry[1])
                i--
                return depth()
            }else {
                console.log(i)
                return entries
            }
        })
        return a
    }
    function findKey(entries){
        console.log('a', entries)
        let findedKey = ''
        entries.filter((obj) =>{
            if(obj[0] === key) return findedKey = obj[1]
        }) 
        return findedKey
    }   
    return findKey(depth())
}