const container = document.querySelector('.container')
const clientHeight = document.documentElement.clientHeight // 브라우저 높이
let scrollHeight = Math.max( //문서의 높이
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight,    
        )

// 클릭 이벤트로 타겟 이동
// const scrollToItem = (e) => {
//     if(e.target.classList.contains('item')){
//         e.target.scrollIntoView({ behavior: "smooth", inline: "center" })
//     }
// }

// container.addEventListener('click', scrollToItem)


//세로 스크롤링으로 가로 스크롤 하기

// container.scrollLeft : 컨테이너의 가로 스크롤 위치
// 가로방향 스크롤 거리 = 세로방향스크롤 거리 * 가로방향 스크롤 범위 / 세로방향 스크롤 범위
const scrollHorizontally = () => {
    container.scrollLeft = window.pageYOffset * (container.scrollWidth - container.clientWidth) / (scrollHeight - clientHeight)
}

window.addEventListener('scroll', scrollHorizontally)