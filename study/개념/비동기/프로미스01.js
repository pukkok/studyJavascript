// const promise = new Promise((resolve, reject) => {
//     //비동기 처리코드 사용할때
//     // resolve 나 reject 는 한개만 사용가능하다.
//     // resolve('완료')
//     // reject(new Error('...')) // 코드 실행 x
//     // setTimeout(() => resolve('...'), 1000) // 코드실행 x

//     //동기로 실행도 가능
//     resolve(123)
// })

// console.log(promise)

const promise = new Promise((resolve, reject)=> {
    setTimeout(() => resolve('완료'), 1000)
    // setTimeout(() => reject(new Error('에러 발생')), 1000)
})

// promise
// .then(
//     // resolve 실행되면 첫번째 실행, reject 실행되면 두번째 실행
//     result => alert(result), // resolve를 호출했을때 실행
//     err => alert(err), // reject를 호출했을때 실행 => catch로 빼서 쓰자
//     //하지만 가독성을 위해 이렇게 쓰지말자 좀
// )

promise
.finally(()=> alert('프로미스가 준비되었습니다.'))
.then(result => alert(result))
.finally(()=> alert('두번째 프로미스'))
.catch(err => alert(err))
.finally(()=> alert('프로미스가 끝났습니다.'))