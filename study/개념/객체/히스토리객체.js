const links = document.querySelectorAll('.page-link')
const root = document.getElementById('root')

//서버에서 페이지 내용 가져왔다고 가정하기
const pages = {
    home: "<h1>Home page</h1><button class='detail-link'>detail</button>",
    about: "<h1>About page</h1>",
    contact: "<h1>Contact page</h1>",
    detail: "<h1>Detail page</h1><button class='order-link'>order</button>",
    order: "<h1>Order page</h1>"
}

const addEvent = (currentPage) => {
    if(currentPage === 'home'){
        const detailLink = document.querySelector('.detail-link')
        detailLink.addEventListener('click', storePageInfo)
    }else if(currentPage === 'detail'){
        const orderLink = document.querySelector('.order-link')
        orderLink.addEventListener('click', storePageInfo)
    }
}

const storePageInfo = (e) => {
    // console.log('현재페이지 : ', e.target.innerText)
    const currentPage = e.target.innerText
    history.pushState({ 'page_title' : currentPage}, '', `/${currentPage}`) // 새로고침 없이 URL 주소 변경
    root.innerHTML = pages[currentPage]
    addEvent(currentPage)
}

links.forEach((link)=>{
    link.addEventListener('click', storePageInfo)
})

window.onpopstate = function(e){
    console.log(e.state) // 이동하려는 페이지에 대한 state 객체 
  
    if(e.state === null){ // URL 주소가 / 인 경우 
      root.innerHTML = '' // 화면 초기화
      return // 함수 종료
    }
  
    const currentPage = e.state['page_title'] // 이동하려는 이전 또는 다음 페이지 
    root.innerHTML = pages[currentPage] // 페이지 내용 변경
    addEvent(currentPage) // 페이지 내부에 버튼이 존재하는 경우 해당 버튼에도 클릭 이벤트 등록
  }