const s2product = [
    {name : "키친", img : "main-1-img-kitchen.jpg"},
    {name : "바스", img : "main-1-img-bath.jpg"},
    {name : "도어", img : "main-1-img-door.jpg"},
    {name : "중문", img : "main-1-img-interlocking-door.jpg"},
    {name : "창호", img : "main-1-img-window.jpg"},
    {name : "몰딩/월/마루", img : "main-1-img-wall-finish.jpg"},
    {name : "인테리어 필름", img : "main-1-img-color.jpg"},
    {name : "붙박이장", img : "main-1-img-built-in.jpg"},
]

const section2 = document.createElement('section')
section2.className = 'section2'
const s2Container = document.createElement('div')
s2Container.className = 'container swiper2'

const s2div = document.createElement('div')
s2div.className = 'product-box swiper-wrapper'
for(i=0; i<7; i++){
    const div = document.createElement('div')
    div.className = `product swiper-slide item${i+1}`
    const img = document.createElement('img')
    img.src = `./imgs/section2/${s2product[i].img}`
    const h5 = document.createElement('h5')
    h5.innerText = s2product[i].name
    div.append(img, h5)
    s2div.append(div)
}

const s2indicator = document.createElement('div')
s2indicator.className = 'indicator-line'

s2Container.append(s2div, s2indicator)
section2.append(s2Container)
root.append(section2)

const s2Swiper = new Swiper('.swiper2' ,{
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.indicator-line',
      type:'progressbar',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});
