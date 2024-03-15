// /** 재귀함수 함수도 객체다 */
// function factorial(n){
//     if(factorial[n]) return factorial[n] // 이미 계산결과가 있으면 저장한 값 사용
//     console.log('fact!',n)
//     if(n === 0 || n === 1) return 1 // 종료조건
//     else{
//         /** 함수도 객체다 */
//         factorial[n] = n * factorial(n-1) // 계산한 팩토리얼 기억
//         return factorial[n]
//     } 
// }

// console.log(factorial(9)+ factorial(3) + factorial(6))

function getInfo(friend1, friend2){
    console.log(this)
    console.log(friend1, friend2)
}
const pukkok = {
    name : 'pukkok',
    age : 32,
    city : 'sejong',
}
const victoria = {
    name: 'victoria',
    age: 17,
    city : 'seoul'
}
// this binding(바인딩) : 동적으로 this 값 변경해주는 것
// call, apply, bind => 사용 방법에 차이만 있지 기능은 똑같다!

getInfo.call(pukkok, '영희', '철수')
getInfo.call(victoria, '영희', '철수') // call의 parameter는 각각 넣는다

getInfo.apply(pukkok, ['영희', '철수']) // apply의 parameter는 배열형태로 들어가야 한다.

getInfo.apply(pukkok, ['영희', '철수']) // apply의 parameter는 배열형태로 들어가야 한다.

bindedGetInfo1 = getInfo.bind(pukkok) // bind는 this값 바인딩을 한번 해야한다.
bindedGetInfo1('영희', '철수') // bind는 인자값 전달을 따로한다