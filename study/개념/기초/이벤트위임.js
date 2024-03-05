const fruitContainer = document.getElementById('fruits')
const fruits = document.querySelectorAll('.fruit')
let prevTarget = null // 이전에 클릭된 요소

const moveToRight = (e) => {
    console.log(e.target)
    
    // 이전에 클릭한 타겟의 위치 초기화
    if(prevTarget !== null){
        prevTarget.style.marginLeft = '0px'
    }
    // 동일한 버튼 눌렀을때
    if(prevTarget === e.target){
        prevTarget.target.style.marginLeft = '0px'
        // if(prevTarget.style.marginLeft === '100px'){
        // }
    }
    
    // 현재 클릭한 타겟(요소)의 위치 변경
    if(e.target.className === `fruit`){
    e.target.style.marginLeft = '100px'
    prevTarget = e.target // 이전에 클릭된 요소 저장
    }
}

fruitContainer.addEventListener('click', moveToRight) // dom 객체 - 메서드 (dom api)
