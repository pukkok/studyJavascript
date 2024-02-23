const popupBtn = document.getElementById('popup')

// popup.onclick = () => {
//     alert('팝업창')
// }

const popUp = () => { // 비동기 메모리에 등록
    alert('팝업창')
    popupBtn.removeEventListener('click', popUp)
}

const setBtnColor = () => {
    popupBtn.style.background = 'skyblue'
}

const unsetBtnColor = () => {
    popupBtn.style.background = ''
}

const test = (e) => { // e : 이벤트 객체 (지역변수)
    console.log(e)
    console.log(e.target)

    e.target.classList.add('circle')
    // const targetStyle = e.target.style

    // targetStyle.all = 'unset'
    // targetStyle.position = 'absolute'
    // targetStyle.left = '500px'
    // targetStyle.width = '200px'
    // targetStyle.height = '70px'
    // targetStyle.textAlign = 'center'
    // targetStyle.borderRadius = '50%'
    // targetStyle.transition = `all ease 2.5s`
}

// popupBtn.addEventListener('click', popUp)
popupBtn.addEventListener('click', test)
popupBtn.addEventListener('mouseover', setBtnColor)
popupBtn.addEventListener('mouseout', unsetBtnColor)

