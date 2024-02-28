const container = document.querySelector('.container')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
let i = 0

for(let i=0; i<20; i++){
    let list = document.createElement('div')
    list.className = 'list'
    container.append(list)
}

const lists = document.querySelectorAll('.list')

function prevlist(){
    i-=2
    window.scrollTo(0,0)
    console.log(i)
}
function nextlist(){
        let coords = lists[i].getBoundingClientRect()
        let y = coords.bottom
        window.scrollTo({top:y, behavior: 'smooth'})
        console.log(i)
}


prev.addEventListener('click', prevlist)
next.addEventListener('click', nextlist)

// 클릭 이벤트로 타겟 이동
// const scrollToItem = (e) => {
//     if(e.target.classList.contains('item')){
//         e.target.scrollIntoView({ behavior: "smooth", inline: "center" })
//     }
// }

// container.addEventListener('click', scrollToItem)