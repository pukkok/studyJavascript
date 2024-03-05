const example = document.getElementById('example')
const button = document.querySelector('button')

const isHidden = (ele) => { // 요소가 웹화면에 보이는지 체크
    return !ele.offsetWidth && !ele.offsetHeight
}

console.log(getComputedStyle(example).height)

if(isHidden(example)){
    console.log('화면에 보이지 않습니다')
}

const moveScrollbar = () => {
    example.scrollTop = 0
}

button.addEventListener('click', moveScrollbar)