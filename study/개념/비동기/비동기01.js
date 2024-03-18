// 1. 서버에서 데이터를 가져오는경우
// 2. 고화질의 이미지를 로딩하는 경우
// 3. 스크립트 파일을 로딩하는 경우

// ------------------------------------

// function loadScript(src, callback) {
//     const script = document.createElement('script')
//     script.src = src
//     script.onload = () => callback(script)
//     document.head.append(script)
// }
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(script) {
//     // 콜백 함수는 스크립트 로드가 끝나면 실행됩니다.
//     console.log(`${script.src}가 로드되었습니다.`)
//     console.log(_)
// })

// 어떤 작업이 끝나고나서 콜백함수를 비동기적으로 실행하는 것을 
// 콜백기반(callback-based) 비동기 프로그래밍이라고 부른다.

// ----------------------------------------

function loadScript(src, callback){ // 스크립트 태그를 동적으로 생성하고, html 문서에 마운트
    const script = document.createElement('script')
    script.src = src // 비동기처리
    script.onload = () => callback(null, script) // 로딩이 끝난 시점
    script.onerror = () => callback(new Error(`${src} 파일을 로딩하는 중에 에러가 발생하였습니다.`)) // 실패했을때를 생각해보자
    document.head.append(script)
}

// loadScript('비동기01script.js', (script) => {
//     // 첫번째 스크립트 파일의 로딩이 끝난 시점
//     loadend()
//     loadScript('비동기01main.js', ()=> {
//         //두번째 스크립트 파일의 로딩이 끝난 시점
//         executeMain()
//         loadScript('비동기01build.js', ()=> {
//             buildSomething()
//         })
//     })
// })
// 콜백지옥 파고파고 들어간다


loadScript('비동기01script.js' ,callback1)

function callback1(error, script){
    // 첫번째 스크립트 로딩이 완료된 시점
    if(error){
        alert(error)
    }else{
        loadend() 
        loadScript('비동기01main.js', callback2)
    }
}
// 오류우선 콜백 : 에러처리를 위해 에러를 위에 배치
function callback2(error, script){
    // 두번째 스크립트 로딩이 완료된 시점
    if(error){
        alert(error)
    }else{
        executeMain()
        loadScript('비동기01build.js', callback3)
    }
}

function callback3(error, script){
    // 세번째 스크립트 로딩이 완료된 시점
    if(error){
        alert(error)
    }else{
        buildSomething()
    }
}



