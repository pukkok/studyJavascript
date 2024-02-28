const root = document.getElementById('root')
const header = document.createElement('header')
const aTag = document.createElement('a')
aTag.href = '#'
aTag.innerText = 'logo'
const navigation = document.createElement('nav')
let ul = document.createElement('ul')
let li = document.createElement('li')

const arrMenus = ['home', 'about', 'contact']

const homeMenus = ['home-sub-1', 'home-sub-2', 'home-sub-3']
const aboutMenus = ["about-sub-1", "about-sub-2", "about-sub-3"]
const contactMenus = ["contact-sub-1", "contact-sub-2", "contact-sub-3"]
const arrSubMenus = [homeMenus, aboutMenus, contactMenus]


root.append(header)
header.append(aTag, navigation)
navigation.append(ul)

arrMenus.forEach((menu)=>{
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.className = 'menu'
    a.innerText = menu
    
    li.append(a)
    ul.append(li)
})

const check = document.querySelectorAll('nav > ul > li')
const menus = document.querySelectorAll('.menu')
for(i=0; i<arrSubMenus.length; i++){
    let coords = menus[i].getBoundingClientRect()
    let subMenu = document.createElement('ul')
    subMenu.className = `sub-menu`
    subMenu.style.cssText = `
    left : ${coords.left - 35}px;
    top : ${coords.bottom + 30}px;
    display : none;
    `
    arrSubMenus[i].forEach((sublist)=>{
        let li = document.createElement('li')
        li.innerText = sublist
        subMenu.append(li)
    })
    check[i].append(subMenu)
}

const openSub = (e) => {
        menus.forEach((menu)=>{
            if(e.target === menu){
                menu.nextSibling.style.display === 'none' ?
                menu.nextSibling.style.display = 'block' :
                menu.nextSibling.style.display = 'none'
            }
            else{
                menu.nextSibling.style.display = 'none'
            }
    })
}

navigation.addEventListener('click', openSub)
