/** 프로미스 체이닝 */
new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1) , 1000)
}).then((result)=>{
    alert(result) 
    return result * 2 
}).then((result)=>{
    alert(result)
    return result * 2
}).then((result)=>{
    alert(result)
    return result * 2
}).then((result)=>{
    alert(result)
})


// 체이닝과 다름 동시에 전부다 뿌림 (디스페치 경우는 별로 없다)
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve(1) , 1000)
// })
// // 전부다 각각이다 개별로 전달됨
// promise.then((result)=>{
//     alert(result)
//     return result * 2
// })

// promise.then((result)=>{
//     alert(result)
//     return result * 2
// })

// promise.then((result)=>{
//     alert(result)
//     return result * 2 
// })


new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1), 1000) // 1번
}).then((result)=>{ // 1번 then으로 이동
    console.log(result)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(result*2), 2000) // 2번
    })
}).then((result)=>{ // 2번 끝나고 then으로 이동
    console.log(result)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(result*2), 3000) // 3번
    })
}).then((result)=>{console.log(result)}) // 3번 끝나고 then으로 이동