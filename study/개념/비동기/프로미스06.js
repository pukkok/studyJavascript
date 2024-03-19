// fetch('프로미스06(user).json')
// .then(function(response){ // 텍스트 호출할때
//     return response.text()
// })
// .then(function(text){
//     alert(text)
// })

// fetch는 프로미스 객체를 반환하는 window의 메서드다
function loadJson(url){
    return fetch(url)
    .then(response => response.json())
}
function loadGithubUser(name){
    return fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json()) // response.json() : JSON 문자열 -> 자바스크립트 객체형태로 변환
}
function showAvatar(githubUser){
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.src = githubUser.avatar_url
        img.className = 'promise-avatar-example'
        document.body.append(img)

        setTimeout(()=>{
            img.remove()
            resolve(githubUser)
        },3000)
    })
}

loadJson('프로미스06(user).json')
.then(user => loadGithubUser(user.name))
.then(showAvatar)
.then(githubUser => alert(`${githubUser.name}의 이미지가 성공적으로 출력되었습니다.`))