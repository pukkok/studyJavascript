// 연습 1

// const animal = {
//     jumps: null
// }
// const rabbit = {
//     __proto__: animal,
//     jumps: true
// }
  
// console.log( rabbit.jumps ) // ? true

// delete rabbit.jumps

// console.log( rabbit.jumps ) // ? null

// delete animal.jumps

// console.log( rabbit.jumps ) // ? undefined

// 연습 2

// const head = {
//     glasses: 1
// }

// const table = {
//     __proto__: head,
//     pen: 3
// }

// const bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
// }

// const pockets = {
//     __proto__: bed,
//     money: 2000
// }

// console.log('pockets.pen',pockets.pen)
// console.log('bed.glasses',bed.glasses)

// 연습 3

// const animal = {
//     eat() {
//         this.full = true
//     }
// }

// const rabbit = {
//     __proto__: animal
// }

// rabbit.eat() // rabbit에 생김

// console.log(rabbit)

// 연습 4

const hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
}

const speedy = {
    __proto__: hamster
}

const lazy = {
    __proto__: hamster
}

// 햄스터 speedy가 음식을 먹습니다.

speedy.stomach = []
lazy.stomach =[]

speedy.eat("apple")

console.log( speedy.stomach ) // apple

// 햄스터 lazy는 음식을 먹지 않았는데 배에 apple이 있다고 나오네요. 왜 그럴까요? lazy는 배가 비어있도록 고쳐주세요.
console.log( lazy.stomach ) // apple