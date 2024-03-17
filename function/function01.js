let workerComment =`
${workerComments}
`
postMessage(workerComment)
function workerComments (){

/** 재귀함수, 함수도 객체다 */
function factorial(n){
    if(factorial[n]) return factorial[n] // 이미 계산결과가 있으면 저장한 값 사용
    console.log('fact!',n)
    if(n === 0 || n === 1) return 1 // 종료조건
    else{
        /** 함수도 객체다 */
        factorial[n] = n * factorial(n-1) // 계산한 팩토리얼 기억
        return factorial[n]
    } 
}

console.log(factorial(9)+ factorial(3) + factorial(6))

}
workerComments()
