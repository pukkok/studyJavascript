const photoContainer = document.getElementById('photo-container')
const photos = document.getElementById('photos')
const photosLength = photos.querySelectorAll('.photo').length
const selection = document.getElementById(`selection`)
const x = 500;
const marginLeft = x
let i = 0;
let timerId = null


const on = document.querySelector('.on')

const movePhoto = () => {
    i++
    if(i>photosLength-1){   
        i=0
    }
    if(i===4){
        setTimeout(() => {
            on.style.transition = `none`
            setTimeout(() => {
                on.style.transition = `1s`
            }, 100);
        }, 2000);
    }
    photos.style.marginLeft = `${-1 * x * i}px`
    let onPoint = selection.querySelectorAll('.options')[i]
    on.style.left = `${onPoint.offsetLeft}px`
}
const starter = () => {
    timerId = setInterval(movePhoto, 2000);
    console.log(`timer=` + timerId)
}
starter()

const reset = () => {
    clearInterval(timerId)
}

const selectEvent = (e) => {
    reset()
    if(e.target.className==='options'){
        let option = selection.querySelectorAll('.options')
        on.style.left = `${e.target.offsetLeft}px`

        for(let i=0; i<5; i++){
            if(e.target === option[i]){
                photos.style.marginLeft = `${-1 * x * i}px`
            }
        }
    }
}

selection.addEventListener('click', selectEvent)


