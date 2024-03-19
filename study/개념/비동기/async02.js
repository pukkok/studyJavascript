async function showAvatar(){
    // JSON으로부터 사용자정보 조회
    let response = await fetch('프로미스06(user).json')
    let user = await response.json()

    // 깃허브 프로필 정보 조회
    let gitHubResponse = await fetch(`https://api.github.com/users/${user.name}`)
    let githubUser = await gitHubResponse.json()

    // 프로필 사진 보여주기
    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    document.body.append(img)

    // 3초 대기
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 3000)
    })

    img.remove()
    return githubUser // resolve 호출과 동일함
}

showAvatar()
.then(githubUser => alert(`${githubUser.name}의 이미지를 성공적으로 출력하였습니다.`))