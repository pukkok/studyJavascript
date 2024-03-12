// prototype 상속

//animal의 프로퍼티와 메서드를 rabbit에서 사용가능
// const animal = { // 상속 프로퍼티
//     eats: true, 
//     walk(){
//         console.log('동물이 걷습니다.')
//     }
// }

// const rabbit = {
//     jumps: true,
//     __proto__ : animal
// }

// console.log(rabbit)

// // 옛날 문법
// rabbit.__proto__ = animal 

// // rabbit이 animal을 상속받는다. rabbit의 prototype 객체는 animal이다


// 최신 문법 프로토타입 자바스크립트에만 있음 면접질문 준비하기
// Object.setPrototypeOf(rabbit, animal)
// 폴리필: 구현되지 않는 구식 브라우저 동작하지 않는 함수나 메서드는 직접 만들어서 써야한다.
// 다른사람들이 만들어 놓은 함수나 메서드를 사용한다.


// 프로토타입 체인 : 위로 프로퍼티를 찾으면서 상속된곳을 올라가면서 찾아가는것

// const animal = { // 상속 프로퍼티
//     eats: true, 
//     walk(){
//         console.log('동물이 걷습니다.')
//     },
// }

// const rabbit = {
//     jumps: true,
//     __proto__ : animal
// }

// const longEar = {
//     earLength: 10, // 귀가좀 긴 토끼
//     __proto__: rabbit
// }

// longEar.walk()
// console.log(longEar.jumps)

// 프로토 타입은 순환이 불가능하다 (순환참조 불가)
// 프로토 타입은 객체나 null만 가능
// 프로토 타입은 동시에 2개에 객체에서 상속받을수 없다.
// (피라미드 형식으로 생각하자)
// * 프로토타입은 읽기전용이다
// 프로토타입 객체의 프로퍼티나 메서드는 읽을때만 사용하는 것이 좋다. 


const animal = { // 상속 프로퍼티
    eats: true, 
    walk(){
        console.log('동물이 걷습니다.')
    },
}

const rabbit = {
    __proto__ : animal
}

rabbit.walk = function(){
    console.log('토끼가 껑충껑충 뜁니다.')
}
rabbit.walk()

console.log(rabbit)
console.log(animal)

// 원본은 최대한 건들지 말자

const user = { // this: 객체 내부에서 사용하는 키워드
    name: 'john',
    surname: 'Smith',

    set fullName(value){ // value값은 문자열 // setter (객체의 특정 프로퍼티값을 변경하는 메서드)
        [this.name, this.surname] = value.split(' ')
    },
    get fullName(){ // getter : (객체의 특정 프로퍼티값을 조회하는 메서드)
        return `${this.name} ${this.surname}`
    }
}

const admin = {
    __proto__ : user, //user 객체를 상속받는다. admin 의 프로토타입은 user다.
    isAdmin: true // 일반 사용자(user)와 다른 프로퍼티
}

// 자바스크립트의 메서드나 함수의 this 값은 함수나 메서드를 호출한 객체를 가르킨다.

console.log(admin.fullName) // fullName : getter, setter의 함수이름 : 접근자 property

admin.fullName = 'Alice Cooper'

console.log(user)
console.log(admin)