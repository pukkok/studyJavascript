const root = document.getElementById('root')
const main = document.createElement('main')

const cursor = document.createElement('span')
root.append(cursor)
const section1 = document.createElement('section')
section1.className='section1'
const div = document.createElement('div')
div.className = 'search-box'
const input = document.createElement('input')
input.placeholder='검색어 입력해'
const button = document.createElement('button')
button.innerText='^👀^'
const div2 = document.createElement('div')
div2.innerText=`
function delay(ms) {
    // 여기에 코드 작성
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(), ms)
    })
  }
  
  delay(3000).then(() => alert('3초후 실행'))
`


const section2 = document.createElement('section')
section2.className='section2'
const section3 = document.createElement('section')
section3.className='section3'
const section4 = document.createElement('section')
section4.className='section4'

main.append(section1, section2, section3, section4)
root.append(main)

let sections = document.querySelectorAll('section')
sections.forEach(section => {
    const header = document.createElement('header')
    const div = document.createElement('div')
    div.innerText=`${section.className}`
    header.append(div)
    section.append(header)
});
div.append(input, button)
section1.append(div, div2)

let headers = document.querySelectorAll('header')
let divs = document.querySelectorAll('header div')

const nextPage = () => {
    sections.forEach((section, i) => {
        if(window.scrollY >= section.scrollHeight*i-5){
            headers[i].style.position = 'fixed'
            divs[i].style.marginLeft = `${100*i}px`
            
        }else{
            headers[i].style.position = 'sticky'
            divs[i].style.marginLeft = `0px`
            
        }
    })
}

window.addEventListener('scroll', nextPage)

const moveToPage = (e) => {
    divs.forEach((div, i)=>{
        if(div===e.target){
            console.log(e.target)
            window.scrollTo(0,sections[0].scrollHeight*i)
        }
    })
}

headers.forEach((header)=>{
    header.addEventListener('click',moveToPage)
})

const cursorPoint = (e) => {
    // console.log(e.pageX, e.pageY)
    cursor.style.left= `${e.pageX}px`
    cursor.style.top= `${e.pageY}px`
}

window.addEventListener('mousemove', cursorPoint)






// function delay(ms) {
//     // 여기에 코드 작성
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>resolve(), ms)
//     })
//   }
  
//   delay(3000).then(() => alert('3초후 실행'))

/**첫번째 사진의 로딩이 완료된 후 1초 후에 첫번째 사진을 화면에서 숨긴다. 
 * 첫번째 사진이 사라지면서, 두번째 사진을 로딩한다. 
 * 두번째 사진의 로딩이 완료된 후 1초 후에 두번째 사진을 화면에서 숨긴다. 
 * 두번째 사진이 사라지면서, 경고창에 두번째 사진이 사라졌다는 문구를 띄운다. 
 * (프로미스 체이닝을 사용하세요!) */

function loadImg(src){
    return new Promise((resolve, reject)=>{
        const img = document.createElement('img')
        img.src = src
        img.onload = () => 
        setTimeout(()=>{
            resolve(img)
        },1000)
        img.onerror = () => reject(new Error(`${img}에러`))
        section2.append(img)
})}

loadImg('model-1.jpg')
.then((img)=>{
    img.style.display='none'
    return loadImg('model-2.jpg')
})
.then((img)=>{
    img.style.display='none'
    // console.log('2번째 이미지가 사라직')
})