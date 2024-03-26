const types = [
    {style : "Modern", 
    comment : "원룸부터 고급주택까지 다양한 형태의 주거공간에 모두 잘 어울리는 모던 스타일을 만나보세요. 꼭 필요한 물건들만 채워 공간에 여백을 주고 간결한 선과 면으로 다듬어진 깔끔한 인테리어를 선보입니다."},
    {style : "Natural", 
    comment : "진정한 아름다움은 자연스러움에서 시작됩니다. 자연에서 얻은 소재와 색감은 공간에 담담하면서도 활발한 에너지를 더해주며 오래도록 질리지 않는 편안하고 안락한 공간을 완성해줍니다."},
    {style : "Classic", 
    comment : "과하지 않은 화려함으로 절제된 아름다움을 보여주는 클래식 스타일은 적절하게 가미된 정식적 요소와 우아한 곡선 포인트로 공간에 격식과 품격을 더해줍니다."},
    {style : "Unique", 
    comment : "나만의 개성과 취향을 듬뿍 담아 집안 구석구석 생동감 넘치는 아이템들로 완성한 유니크 스타일은 지루하고 나른한 일상에 새로움을 선사합니다. 톡톡 튀는 컬러와 다양한 소재의 믹스매치로 완성된 독창적인 공간을 만나보세요."},
]

const root = document.getElementById('root')

const test02 = document.createElement('section')
test02.className = 'test'

const container = document.createElement('div')
container.className = 'container'

const tabBox = document.createElement('div')
tabBox.className = 'tab-box'

const imgBox = document.createElement('div')
imgBox.className = 'img-box'


    const h2 = document.createElement('h2')
    const a = document.createElement('a')
    a.innerText = types[0].style
    h2.append(a)

    for(i=0; i<3; i++){
        const img = document.createElement('img')
        img.src = `../imgs/section3/main-2-img-${types[0].style.toLowerCase()}-${i+1}.jpg`
        imgBox.append(img)
    }

    const textBox = document.createElement('div')
    textBox.className = 'text-box'
    const h4 = document.createElement('h4')
    h4.innerText = types[0].style
    const h5 = document.createElement('h5')
    h5.innerText = types[0].comment

    textBox.append(h4, h5)
    tabBox.append(h2)
    imgBox.append(textBox)

// types.forEach(type=>{
//     const h2 = document.createElement('h2')
//     const a = document.createElement('a')
//     a.innerText = type.style
//     h2.append(a)

//     for(i=0; i<3; i++){
//         const img = document.createElement('img')
//         img.src = `../imgs/section3/main-2-img-${type.style.toLowerCase()}-${i+1}.jpg`
//         imgBox.append(img)
//     }

//     const textBox = document.createElement('div')
//     textBox.className = 'text-box'
//     const h4 = document.createElement('h4')
//     h4.innerText = type.style
//     const h5 = document.createElement('h5')
//     h5.innerText = type.comment

//     textBox.append(h4, h5)
//     tabBox.append(h2)
//     imgBox.append(textBox)
// })


container.append(tabBox, imgBox)

test02.append(container)
// root.append(test02)

/**
 * Modern
 * 원룸부터 고급주택까지 다양한 형태의 주거공간에 모두 잘 어울리는 모던 스타일을 만나보세요.
 * 꼭 필요한 물건들만 채워 공간에 여백을 주고 간결한 선과 면으로 다듬어진 깔끔한 인테리어를 선보입니다.
 * 
 * Modern
 * 인테리어 스타일 제안
 */

/**
 * Natural
 * 진정한 아름다움은 자연스러움에서 시작됩니다. 자연에서 얻은 소재와 색감은 공간에
 * 담담하면서도 활발한 에너지를 더해주며 오래도록 질리지 않는 편안하고 안락한 공간을
 * 완성해줍니다.
 * 
 * 
 */

/**
 * Classic
 * 과하지 않은 화려함으로 절제된 아름다움을 보여주는 클래식 스타일은 적절하게 가미된 정식적
 * 요소와 우아한 곡선 포인트로 공간에 격식과 품격을 더해줍니다.
 * 
 */

/**
 * Unique
 * 나만의 개성과 취향을 듬뿍 담아 집안 구석구석 생동감 넘치는 아이템들로 완성한 유니크
 * 스타일은 지루하고 나른한 일상에 새로움을 선사합니다. 톡톡 튀는 컬러와 다양한 소재의
 * 믹스매치로 완성된 독창적인 공간을 만나보세요.
 * 
 */

const imgTest = document.querySelector('.img-box')
const tabBtn = document.querySelector('.tab-box')
const message = [
    `<div class="special">
    <h1>Modern</h1>
</div>
<div class="content-box box1">
    <img src="../imgs/section3/main-2-img-modern-3.jpg" alt="">
    <div class="text-box">
        <h4>Modern</h4>
        <h5>원룸부터 고급주택까지 다양한 형태의 주거공간에 모두 잘 어울리는 모던 스타일을 만나보세요. 꼭 필요한 물건들만 채워 공간에 여백을 주고 간결한 선과 면으로 다듬어진 깔끔한 인테리어를 선보입니다.</h5>
    </div>
</div>
<div class="content-box box2">
    <img src="../imgs/section3/main-2-img-modern-2.jpg" alt="">
</div>
<div class="content-box box3">
    <img src="../imgs/section3/main-2-img-modern-1.jpg" alt="">
</div>`,
`<div class="special">
<h1>Natural</h1>
</div>
<div class="content-box box1">
<img src="../imgs/section3/main-2-img-natural-3.jpg" alt="">
<div class="text-box">
    <h4>Natural</h4>
    <h5>원룸부터 고급주택까지 다양한 형태의 주거공간에 모두 잘 어울리는 모던 스타일을 만나보세요. 꼭 필요한 물건들만 채워 공간에 여백을 주고 간결한 선과 면으로 다듬어진 깔끔한 인테리어를 선보입니다.</h5>
</div>
</div>
<div class="content-box box2">
<img src="../imgs/section3/main-2-img-natural-2.jpg" alt="">
</div>
<div class="content-box box3">
<img src="../imgs/section3/main-2-img-natural-1.jpg" alt="">
</div>
</div>`
]

const changeType = (e) => {
    console.log(e.target.innerText)
    if(e.target.innerText === 'Modern'){
        imgTest.innerHTML=''
        imgTest.classList.remove('natural')
        imgTest.classList.add('modern')
        imgTest.innerHTML=message[0]
    }else if(e.target.innerText === 'Natural'){
        imgTest.innerHTML=''
        imgTest.classList.remove('modern')
        imgTest.classList.add('natural')
        imgTest.innerHTML=message[1]
    }
}

tabBtn.addEventListener('click', changeType)
