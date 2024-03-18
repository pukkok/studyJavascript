function loadScript(src) {
    return new Promise((resolve, reject)=>{
        let script = document.createElement('script')
        script.src = src
        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`))
        document.head.append(script)
    })

}


// 브로드캐스팅 - 방송 프로그램을 모든 프로그램 구독자에게 동시에 방영
const promise = loadScript('비동기01script.js') // 프로미스 객체 반환

// 첫번째 팬(fan)
promise.then(script => console.log(`${script.src} 로딩 성공`))
.catch(err => console.log(err))

// 두번째 팬
promise.then(script => console.log(`두번째 팬에게 앨범제작 완료 소식이 전달되었습니다.`))

// 세번째 팬
promise.then(script => console.log('세번째 팬에게 앨범제작 완료 소식이 전달되었습니다.'))