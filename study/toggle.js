const menuContainer = document.getElementById('menu-container')

const openMenu = (e) =>{
    // console.log(e.target)
    if(e.target.classList.contains('title')){
        let open = menuContainer.querySelector('.open')
        if(open){
            open.classList.toggle('open')
        }
        let targetNCL = e.target.nextElementSibling.classList
        targetNCL.toggle('open')
    } 
    
    
}

menuContainer.addEventListener('click', openMenu)

// .info.open 일때 .open클래스 삭제