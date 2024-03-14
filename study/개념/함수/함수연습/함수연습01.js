// 연습 1

function findMaxValue(...args){
    let result = 0
    args.reduce((i,arg)=>{
        i = +i || 0
        arg = +arg || 0
        result = i
        return i > arg ? i : arg
    },0)
    return result
}

// 테스트 케이스 
console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [],'zip', "2045.8", 'zip', 54, "1024"))

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