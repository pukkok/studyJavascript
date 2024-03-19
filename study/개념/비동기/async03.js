// (async () => {
//     let response = await fetch('프로미스06(user).json')
//     let user = response.json()
//     return user
// })().then(user => console.log(user))

// -------------------------------------

// class Thenable{
//     constructor(num){
//         this.num = num
//     }
//     then(resolve, reject){ // executor 함수와 유사함
//         alert(resolve)
//         // 비동기 코드
//         setTimeout(()=> resolve(this.num * 2), 1000)
//     }
// }

// async function f(){
//     let result = await new Thenable(1)
//     alert(result)
// }
// f()

// class Waiter{
//     async wait(){
//         const result = await Promise.resolve(1)
//         return result
//     }
// }

// new Waiter() // 객체
// .wait()
// .then(result => console.log(result))

async function f(){
    try{
        let response = await fetch('http://유효하지 않은 주소')
    }catch(err){
        // alert(err) // TypeError : failed to fetch
        if(err instanceof TypeError){
            console.log('유효하지 않은 서버주소에 요청을 보냈습니다. URL 주소를 확인하세요')
            throw err
        }
    }
}
f().catch(err => {
    console.log(err, '외부에서 err처리해도됨')
})