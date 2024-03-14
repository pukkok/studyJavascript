const modal = document.querySelector('.modal')
const textBox = document.querySelector('.text-box')
const button = document.querySelectorAll('button')

const moveScroll = () => {
    document.body.style.overflow = "" // 문서의 스크롤바 보이게 하기
    modal.style.display='none'
}

const regret = () => {
    alert('취소누르면 안닫힘')
}

setTimeout(() => {
    modal.style.display='block'
    document.body.style.overflow = "hidden"
}, 2000);

button[0].addEventListener('click', moveScroll)
button[1].addEventListener('click', regret)