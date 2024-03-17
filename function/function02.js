let workerComment =`
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

1. this binding(바인딩) : 동적으로 this 값 변경해주는 것
2. call, apply, bind => 사용 방법에 차이만 있지 기능은 똑같다!

getInfo.call(pukkok, '영희', '철수')
getInfo.call(victoria, '영희', '철수')  
2-1. call의 parameter는 각각 넣는다

getInfo.apply(pukkok, ['영희', '철수'])  
2-2. apply의 parameter는 배열형태로 들어가야 한다.

bindedGetInfo1 = getInfo.bind(pukkok) 
2-3. bind는 this값 바인딩을 한번 해야한다.

bindedGetInfo1('영희', '철수') 
2-4. bind는 인자값 전달을 따로한다
`
postMessage(workerComment)

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