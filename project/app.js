const root = document.getElementById('root')
const main = document.createElement('main')
const section1 = document.createElement('section')
section1.className = 'section1'
const section2 = document.createElement('section')
section2.className = 'section2'

main.append(section1, section2)
root.append(main)



let starterText1Arr = '어디로 떠날지 고민이신가요?'.split('')
let starterText2Arr = '어디로 여행가고 싶은가요?'.split('')
let starterText3Arr = '여행지를 찾아보세요'.split('')
console.log(starterText1Arr)
function makeSectionStarter(arr){
    setInterval(() => {
    arr.forEach((word, i) => {
            const span = document.createElement('span')
            span.innerText = word
            // section1.append(span)
        })
    }, 1000);
}
makeSectionStarter(starterText1Arr)

function makeSection1Map(){
    const div = document.createElement('div')
    div.className='img-box'
    const innerDiv = document.createElement('div')
    const span = document.createElement('span')
    span.className='material-symbols-outlined'
    span.innerText='location_on'
    
    div.append(innerDiv, span)
    section1.append(div)
}
makeSection1Map()