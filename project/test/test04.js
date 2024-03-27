const root = document.getElementById('root')

const testbox = document.createElement('div')
testbox.className='container-box style1'
const ul = document.createElement('ul')

for(i=0; i<4; i++){
    const li = document.createElement("li")
    li.innerText = i+1
    ul.append(li)
}
const hr = document.createElement('hr')

const div1 = document.createElement('div')
div1.className = 'box1'
const text = document.createElement('p')
text.innerText = '1'
const div2 = document.createElement('div')
div2.className = 'box2'
const div3 = document.createElement('div')
div3.className = 'box3'


div1.append(text)
testbox.append(div1, div2, div3)

root.append(ul, hr, testbox)


const list = document.querySelectorAll('li')
const boxs = document.querySelectorAll('.container-box div')

const changeStyle = (e) => {
    if(e.target === list[0]){
        testbox.classList.remove('style2')
        testbox.classList.add('style1')
    }
    if(e.target === list[1]){
        testbox.classList.remove('style1')
        testbox.classList.add('style2')
    }
}

ul.addEventListener('click', changeStyle)