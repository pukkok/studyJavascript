// try{
//     alert('try 블록시작')
//     if(confirm('에러를 만드시겠습니까?')) 이상한_코드()

// }catch(err){
//     alert('catch 블록실행')
// }finally{
//     alert('finally 블록 마침 !')
// }

// function fib(n){
//     if(n < 0 || Math.trunc(n) != n){
//         throw new Error('음수나 정수가 아닌 값은 처리할 수 없습니다.')
//     }
//     return n <= 1 ? n : fib(n-1) + fib(n-2)
// }
// /** Date.now() 현재시간 나타냄 */
// const start = Date.now() // 측정을 시작하는 시점

// try{
//     result = fib(8)
// }catch(e){
//     result = 0
// }finally{
//     //연산을 끝내고 최종연산 시간을 계산함
//     diff = Date.now() - start
// }

// console.log(result || '에러발생')
// console.log(`연산시간 : ${diff}ms`)


// function func(){
//     "use strict"
//     try{
//         user = 1
//     }finally{
//         console.log('프로세스가 종료되었습니다.')
//     }
// }
// func()
// console.log('함수가 종료됨')
// // return 이 있더라도 finally는 실행되고 마지막에 return 된다.

window.onerror = function(message, url, line, col, error){
    console.log(`${message}\n At ${line}:${col} of ${url}`)
}

function readData(){
    badFunc() // 에러발생
}
readData()