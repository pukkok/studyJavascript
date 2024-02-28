const root = document.getElementById('root')
const navigation = document.querySelector('header > nav')
const homeMenus = ["home-sub-1", "home-sub-2", "home-sub-3"]      // 서브메뉴 배열
const aboutMenus = ["about-sub-1", "about-sub-2", "about-sub-3"]  // 서브메뉴 배열
const contactMenus = ["contact-sub-1", "contact-sub-2", "contact-sub-3"] // 서브메뉴 배열
const subMenus = [homeMenus, aboutMenus, contactMenus]

const listMenus = document.querySelectorAll('nav > ul > li')
const menus = document.querySelectorAll('.menu')

for(i=0; i<subMenus.length; i++){
    let coords = menus[i].getBoundingClientRect()
    let ul = document.createElement('ul')
        ul.className='sub-menu'
        ul.style.cssText = `
        left : ${coords.left - 35}px;
        top : ${coords.bottom + 30}px;
        display : none;
        `
    for(let list of subMenus[i]){
        let li = document.createElement('li')
        li.innerText = list
        ul.append(li)
    }
    listMenus[i].append(ul)
}

const openSub = (e) => {
    let subMenus = document.querySelectorAll('.sub-menu')
    for(i=0; i<menus.length; i++){
        if(e.target === menus[i]){
            subMenus[i].style.display === 'none' ?
            subMenus[i].style.display = 'block' :
            subMenus[i].style.display = 'none'
        }
        else{
            subMenus[i].style.display = 'none'
        }
    }
}

navigation.addEventListener('click', openSub)






























// for(let menu of menus){
//     let ul = document.createElement('ul')    
//     ul.className='sub-menu'
//     menu.append(ul)
// }

// let subMenus = menus.querySelectorAll('.sub-menu')

// let ul = document.createElement('ul')
// ul.className ='sub-menu'
// const listCreater = (items) => {
//     for(let item of items){
//         let li = document.createElement('li')
//         li.innerText = item
//         ul.append(li)
//     }
// }

// let subList = () => {
//     for(let array of menuBox)
//     listCreater(menuBox)
// }

// root.append(ul)

// const openSub = () => {

// }

// navigation.addEventListener('click', openSub)