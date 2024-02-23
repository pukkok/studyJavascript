// 서버에서 페이지 내용을 가져오지만 서버가 없으므로 가상으로 페이지 내용을 생성함
const pageContents = [] //리스트를 담고있는 배열
const numOfData = 100
const limit = 4
const btnLimit = 5
const numOfBtns = Math.ceil(numOfData / limit)
let offset = 0 // 해당 페이지에서 보여줄 배열의 인덱스 시작값
const root = document.getElementById('root')

const pageBtns = document.createElement('div')
pageBtns.className = `page-btns`
const contents = document.querySelector('.contents')

const btnBox = document.createElement('div')
btnBox.className = `btnBox`

const prev = document.createElement('button')
prev.className= `prev`
prev.innerText = 'prev'
const next = document.createElement('button')
next.className = `next`
next.innerText = 'next'

//버튼생성
for(let i=0; i<numOfBtns; i++){
    const btn = document.createElement('button')
    btn.className = `page-btn`
    btn.innerText = i + 1
    pageBtns.appendChild(btn)
}


btnBox.append(prev, pageBtns, next)
root.append(btnBox)
const tests = pageBtns.querySelectorAll('.page-btn')
console.log(tests[0])

//버튼 5개만 보이기
let show = 0
const showBtn = (tests, btnLimit) => {
    for(let i=offset; i<offset+btnLimit; i++){
        if(i<btnLimit && i>offset-1){
            console.log(tests[i])
            tests[i].style.display = `unset`
        } else {
            tests[i].style.display = `none`
        }
    }
}
showBtn(tests, btnLimit)

// next.addEventListener('click', nextPage)

/** 
  데이터 구조
[
  {name : 'sunrise', age: 20, id: i},  하나의 상품정보 (객체 타입) - 배열 원소
  {},
  {},
]
*/

//상품목록 생성하기 (서버에서 가져온 데이터로 가정하기)
for(let i=0; i<numOfData; i++){
    pageContents.push({name : 'Pukkok', age: 20, id: i})
}
// console.log(pageContents)

// 화면 초기 로딩시 상품목록 보여주기
const loadList = (offset, limit, contents, pageContents) => { // 전역변수 값복사 이후 지역변수
for(let i=offset; i<offset+limit; i++){
    const listItem = pageContents[i]
    contents.innerHTML += `
        <div id=${listItem.id} class='list-item'>
            <h3>${listItem.name} (${listItem.id})</h3>
            <h3>${listItem.age}</h3>
        </div>
    `
}
}

const changePage = (e) => {
    console.log(e.target)
    if(e.target.classList.contains('page-btn')){
        const indexSelected = parseInt(e.target.innerText) - 1
        offset = indexSelected * limit
        console.log(offset)

        contents.innerHTML = ''
        loadList(offset, limit, contents, pageContents) // 전역변수값
    }
}



pageBtns.addEventListener('click', changePage)

loadList(offset, limit, contents, pageContents) //함수 호출