const main = document.querySelector('main')
const sections = document.querySelectorAll('section')
const starter = document.querySelector('.starter')

const changeStyle = () => {
    setTimeout(() => {
        sections.forEach((section, i)=>{
            if(i%2){
                section.style.top = '0'
            }else{
                section.style.bottom = '0'
            }
        })
    }, 2000);
    document.removeEventListener('wheel', changeStyle)
}

const fullScreenMode = (e) => {
    console.log(e.target)
    sections.forEach((section, i) =>{
        if(e.target !== section){
            section.style.width = '0'
            section.style.opacity = '0'
        }else{
            section.style.width = '100%'
        }
    })
}

document.addEventListener('wheel', changeStyle)
main.addEventListener('click', fullScreenMode)