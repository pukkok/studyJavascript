const pageContents = [] //리스트를 담고있는 배열
const numOfData = 100
const pageLimit = 4
const btnLimit = 5
const numOfBtns = Math.ceil(numOfData / pageLimit)
//Math.ceil 소수점 올림
//Math.floor 소수점 버림
//Math.roud 반올림

let offset = 0 // 해당 페이지에서 보여줄 배열의 인덱스 시작값
let btnIndex = 0
const root = document.getElementById('root')

const contents = document.createElement('div')
contents.className = 'contents'
const pageBtnBox = document.createElement('div')
pageBtnBox.className = `pageBtnBox`
const pageBtns = document.createElement('div')
pageBtns.className = `pageBtns`
const prev = document.createElement('button')
prev.className= `prev`
prev.innerText = 'prev'
const next = document.createElement('button')
next.className = `next`
next.innerText = 'next'

pageBtnBox.append(prev, pageBtns, next)
root.append(contents, pageBtnBox)

//상품목록 생성하기
for(let i=0; i<numOfData; i++){
    pageContents.push({name : 'Pukkok', age: 20, id: i+1})
}

// 첫번째 화면 리스트
const loadList = (offset, pageLimit, contents, pageContents) => { // 전역변수 값복사 이후 지역변수
for(let i=offset; i<offset+pageLimit; i++){
    const listItem = pageContents[i]
    contents.innerHTML += `
        <div id=${listItem.id} class='list-item'>
            <h3>${listItem.name} (${listItem.id})</h3>
            <h3>${listItem.age}</h3>
        </div>
    `
}
}

loadList(offset, pageLimit, contents, pageContents)

//버튼생성
for(let i=0; i<numOfBtns; i++){
    const btn = document.createElement('button')
    btn.className = `pageBtn`
    btn.innerText = i + 1
    pageBtns.appendChild(btn)
}

//버튼 5개만 보이기
const showBtns = pageBtns.querySelectorAll('.pageBtn')

const showBtn = (btnIndex, btnLimit, numOfBtns, showBtns) => {
    for(let i=0; i<numOfBtns; i++){
        if(i<btnIndex+btnLimit && i>btnIndex-1){
            showBtns[i].style.display = `unset`
        } else {
            showBtns[i].style.display = `none`
        }
    }
}
showBtn(btnIndex, btnLimit, numOfBtns, showBtns)
showBtns[0].classList.add('active')
prev.disabled = true

//액티브 버튼
const activeBtn = () => {
    const active = pageBtns.querySelector('.active')
    active.classList.remove(`active`)

    const activeBtn = showBtns[offset / pageLimit]
    activeBtn.classList.add('active')

    if(showBtns[0].classList.contains('active')){
        prev.disabled = true
    }else{
        prev.disabled = false
    }
    if(showBtns[numOfBtns-1].classList.contains('active')){
        next.disabled = true
    }else{
        next.disabled = false
    }


}

//바뀐 화면 리스트
const changePage = (e) => {
    if(e.target.classList.contains('pageBtn')){
        const indexSelected = parseInt(e.target.innerText) - 1
        offset = indexSelected * pageLimit
        contents.innerHTML = ''
        loadList(offset, pageLimit, contents, pageContents)
        activeBtn()
    }
}

// prev, next 버튼
const prevBtns = (e) => {
    if(e.target.classList.contains('prev')){
        if(offset!==0){
            offset = offset-pageLimit
            contents.innerHTML = ''
            loadList(offset, pageLimit, contents, pageContents)
            activeBtn()
        }
        if((offset / pageLimit) % btnLimit === 4){
            btnIndex = (offset / pageLimit) - pageLimit
            showBtn(btnIndex, btnLimit, numOfBtns, showBtns)
        }
    }
}

const nextBtns = (e) => {
    if(e.target.classList.contains('next')){
        if(offset+pageLimit < numOfData){
            offset = offset+pageLimit
            contents.innerHTML = ''
            loadList(offset, pageLimit, contents, pageContents)
            activeBtn()
        }
        if((offset / pageLimit) % btnLimit === 0){
            btnIndex = offset / pageLimit
            showBtn(btnIndex, btnLimit, numOfBtns, showBtns)
        }
    }
}

pageBtnBox.addEventListener('click', changePage)
pageBtnBox.addEventListener('click', prevBtns)
pageBtnBox.addEventListener('click', nextBtns)