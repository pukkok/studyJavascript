const section1 = document.createElement('section')
section1.className = 'first-section section1'
const s1Container = document.createElement('div')
s1Container.className = 'container'

const buttonContainer = document.createElement('div')
buttonContainer.className = 'button-container'


const s1Swiperdiv = document.createElement('div')
s1Swiperdiv.className = 'swiper1'
const s1SwiperWrapper = document.createElement('div')
s1SwiperWrapper.className = 'swiper-wrapper'

for(i=0; i<5; i++){
    const div = document.createElement('div')
    div.className = 'swiper-slide'
    const img = document.createElement('img')
    img.src = `./imgs/bg_${i+1}_main.jpg`
    div.append(img)
    s1SwiperWrapper.append(div)
}

const s1div2 = document.createElement('div')
s1div2.className = 'swiper-pagination'
const s1PrevBtn = document.createElement('div')
s1PrevBtn.className = 'swiper-button-prev'
const s1NextBtn = document.createElement('div')
s1NextBtn.className = 'swiper-button-next'
const playBtn = document.createElement('div')
playBtn.className = 'swiper-play play'
buttonContainer.append(s1div2, s1PrevBtn, s1NextBtn, playBtn)
s1Swiperdiv.append(s1SwiperWrapper, buttonContainer)
section1.append(s1Swiperdiv)
root.append(section1)

const s1Swiper = new Swiper('.swiper1', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
        delay : 3000,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    paused: false
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});
  
s1Swiper.on()
//   s1Swiper.on('slideChange', function () {
//     console.log('slide changed')
//   })

function test (e){
    if(e.target === playBtn){
        if(playBtn.classList.contains("play")){
            s1Swiper.autoplay.stop()
            playBtn.classList.remove('play')
        }else{
            s1Swiper.autoplay.start()
            playBtn.classList.add('play')

        }
    }
}

playBtn.addEventListener('click', test)