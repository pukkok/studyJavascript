// async는 프로미스 객체를 반환한다
// state 값이 fulfilled => return에 성공했다
// state 값이 rejected => return에 성공했다

// await키워드는 async 안에서만 작동한다 밖에서는 작동x 에러남

async function f(){
    alert(5) //1
    let promise = new Promise((resolve, reject)=>{ //4
        setTimeout(()=> resolve('완료!'), 1000) // 비동기 코드
    })
    let result = await promise
    alert(result)
}

async function f2(){
    return alert(3) //2
}

f()
f2()
alert('함수 아래쪽 코드 실행') //3