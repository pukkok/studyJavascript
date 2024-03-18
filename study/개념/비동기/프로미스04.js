function loadScript(src) {
    return new Promise((resolve, reject)=>{
        let script = document.createElement('script')
        script.src = src
        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`))
        document.head.append(script)
    })
}

// loadScript('비동기01script.js')
// .then((script)=>{
//     loadScript('비동기01main.js')
//     return loadScript('비동기01build.js')
// })
// .then((script)=>{
//     loadend()
//     executeMain()
//     buildSomething()
// })

// loadScript('비동기01script.js')
// .then((script)=> loadScript('비동기01main.js'))
// .then((script)=> loadScript('비동기01build.js'))
// .then((script)=>{
//     loadend()
//     executeMain()
//     buildSomething()
// })

// 한번에 스크립트를 볼수있는 장점이 있지만 콜백지옥이 되버린다.
loadScript('비동기01script.js').then(script1 => {
    loadScript('비동기01main.js').then(script2=>{
        loadScript('비동기01build.js').then(script3=>{
            loadend()
            executeMain()
            buildSomething()
            console.log(script1, script2, script3)
        })
    })
})