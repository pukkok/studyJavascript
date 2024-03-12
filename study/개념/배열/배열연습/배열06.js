// --- 연습 1 ---

// let rows = 5
// let columns = 2
// const _2dArr = new Array(rows)

// for(let i=0; i<rows; i++){
//     const element = new Array(columns)

//     for(let j=0; j<columns; j++){
//         element[j] = (columns*i+1)+j
//     }

//     _2dArr[i] = element
// }
// console.log(_2dArr)

// --- 연습 2 ---

// function build2DArray(rows, columns){
//     // 구현하기
//     const arr = new Array(rows)
//     for(let i=0; i<rows; i++){
//         const element = new Array(columns).fill(0)
//         arr[i] = element
//     }
//     return arr
// }

// console.log(build2DArray(7, 3))

// --- 연습 3 ---

// const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]

// let fruitArr = []

// fruits.forEach((data)=> {
//     const obj = {}
//     obj.name = data[0]
//     obj.price = data[1]
//     fruitArr.push(obj)
// })

// console.log(fruitArr)

// --- 연습 4 ---

// const fruits = [['apple', 570, 32], ['orange', 270, 65], ['strawberry', 30, 120]]

// let fruitsArr = []

// fruits.forEach((fruit)=>{
//     const arr = []
//     arr.push(fruit[0], fruit[1]*fruit[2])
//     console.log(arr)
//     return fruitsArr.push(arr)
// })

// console.log(fruitsArr)

// let fruitObj = []

// fruitsArr.forEach((data)=>{
//     let obj = {}
//     obj.name = data[0]
//     obj.price = data[1]
//     return fruitObj.push(obj)
// })

// console.log(fruitObj)