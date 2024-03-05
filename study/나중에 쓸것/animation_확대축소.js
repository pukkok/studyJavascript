const main = document.querySelector('main')
const sections = document.querySelectorAll('section')
const starter = document.querySelector('.starter')
let timer

const changeStyle = () => {
    setTimeout(() => {
        sections.forEach((section, i)=>{
            if(i%2){
                section.style.top = '0'
            }else{
                section.style.bottom = '0'
            }
        })
        starter.style.display = 'none'
    }, 1500);
    document.removeEventListener('wheel', changeStyle)
    main.addEventListener('click', fullScreenMode)
}

const fullScreenMode = (e) => {
    console.log(e.target)

    sections.forEach((section) =>{
        if(e.target === section){
            section.style.width = '100%'
            main.removeEventListener('click', fullScreenMode)
            setTimeout(() => {
                main.addEventListener('click', resizeScreenMode)
            }, 1000);
        }else{
            section.style.width = '0'
            section.style.fontSize = '0'
        }
    })
}


const throttling = (handler) => { // handler : 함수 파라미터로 전달받아서 내부에서 실행하는 함수
    if(!timer){
        timer = setTimeout(() => {
            handler() // 함수 내부로 전달된 moveToRight, moveToLeft 함수를 실행함
            timer = null
        }, 1000)
    }
}


const resizeScreenMode = () => {
    sections.forEach((section) => {
        section.style.width = '25%'
        section.style.fontSize = '2rem'
    })
    main.removeEventListener('click',resizeScreenMode)
    setTimeout(() => {
        main.addEventListener('click', fullScreenMode)
    }, 1000);
    
}

document.addEventListener('wheel', changeStyle)

