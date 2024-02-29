const contents = document.querySelectorAll('.contents')

const startAnimation = () => {
    contents.forEach((content) => {
        if(!content.classList.contains('show') && content.getBoundingClientRect().top < 500){
            content.classList.add('show')
        }
    })
}

window.addEventListener('scroll', startAnimation)