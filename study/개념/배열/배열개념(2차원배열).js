// --- 2차원 배열 --------------------------------------

// --- 예제 1 ---

// const _2dArray = [] // 2차원 배열
// const rows = 5
// const columns = 2

// for(let i=0; i<rows; i++){
//     const element = []
    
//     for(let j=0; j<columns; j++){
//         element.push((columns*i+1) + j)
//     }
//     _2dArray.push(element)
// }
// console.log(_2dArray)

// --- 예제 2 ---

// const rows = 5
// const columns = 2
// const _2dArray = new Array(rows)

// for(let i=0; i<rows; i++){
//     const element = new Array(columns)
    
//     for(let j=0; j<columns; j++){
//         element[j] = (columns*i+1)+j
//     }

//     _2dArray[i] = element
// }
// console.log(_2dArray)

// --- 예제 3 ---

// const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]

// for(let fruit of fruits){
//     for(let i in fruit){ // 배열도 객체다
//         switch(i){
//             case '0': console.log('name :', fruit[i])
//             break
//             case '1': console.log('price :', fruit[i])
//             break
//         }
//     }
// }

// --- 예제 4 --- 재고량 랜덤추가 --- 

// const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]

// for(let fruit of fruits){
//     fruit.push(Math.floor(Math.random()*100+1)) // 1~100 숫자중 랜덤값으로 재고량 추가
// }
// console.log(fruits)

// --- 예제 5 --- delete

// const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]

// delete 방법
// delete fruits[1]
// console.log(fruits)

// splice 방법
// fruits.splice(1, 1)
// console.log(fruits)

// console.log(fruits.toString()) // 모든 변수(객체이므로)는 toString 메서드를 상속받는다.
// console.table(fruits) // 표로 보기

// --- 예제 6 --- 데이터 가공 --- 객체 => 배열 ---

// const persons = [
//     {name: 'sunrise', age: 23},
//     {name: 'victoria', age: 19},
//     {name: 'daniel', age: 28},
//     {name: 'ammy', age: 21},
//     {name: 'smith', age: 32},
// ]

// for(let i in persons){
//     persons[i] = [persons[i].name, persons[i]['age']]
// }
// console.log(persons)

// --- 예제 7 --- 데이터 가공 --- 배열 => 객체 ---

// const persons = [
//     [
//         "sunrise",
//         23
//     ],
//     [
//         "victoria",
//         19
//     ],
//     [
//         "daniel",
//         28
//     ],
//     [
//         "ammy",
//         21
//     ],
//     [
//         "smith",
//         32
//     ]
// ]
// for(let i in persons){
//     persons[i] = {name: persons[i][0], age: persons[i][1]}
// }
// console.log(persons)

// --- 예제 8 --- 1차원 배열로 변환 ---

// let _1dArray = []
// const persons = [
//     [
//         "sunrise",
//         23
//     ],
//     [
//         "victoria",
//         19
//     ],
//     [
//         "daniel",
//         28
//     ],
//     [
//         "ammy",
//         21
//     ],
//     [
//         "smith",
//         32
//     ]
// ]

// for(let person of persons){
//     _1dArray = _1dArray.concat(person)
// }
// console.log(_1dArray)

// --- 예제 9 --- 2차원 배열로 변환

// const persons = [
//     "sunrise",
//     23,
//     "victoria",
//     19,
//     "daniel",
//     28,
//     "ammy",
//     21,
//     "smith",
//     32
// ]

// const columns = 2
// const rows = persons.length / columns
// const _2dArray = new Array(rows).fill(0)

// for(let i=0; i<rows; i++){
//     const person = new Array(columns).fill(0)
//     for(let j=0; j<columns; j++){
//         person[j] = persons[columns*i+j]
//     }
//     _2dArray[i] = person
// }
// console.table(_2dArray)
