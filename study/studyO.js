// 서버에서 페이지 내용을 가져오지만 서버가 없으므로 가상으로 페이지 내용을 생성함
const pageContents = [] //리스트를 담고있는 배열
const numOfData = 100
const limit = 4
const numOfBtns = Math.ceil(numOfData / limit)
let offset = 0 // 해당 페이지에서 보여줄 배열의 인덱스 시작값

const pageBtns = document.querySelector('.page-btns')
const contents = document.querySelector('.contents')

for(let i=0; i<numOfBtns; i++){
    const btn = document.createElement('button')
    btn.className = `page-btn`
    btn.innerText = i + 1

    pageBtns.appendChild(btn)
}

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
    pageContents.push({name : 'sunrise', age: 20, id: i})
}
console.log(pageContents)

// 화면 초기 로딩시 상품목록 보여주기
for(let i=offset; i<offset+limit; i++){ // 배열에서 처음 4개 상품만 가져오기
    const listItem = pageContents[i] // 하나의 상품정보
    contents.innerHTML += `
        <div id=${listItem.id} class='list-item'>
            <h3>${listItem.name} (${listItem.id}</h3>
            <h3>${listItem.age}</h3>
        </div>
    `
}

const changePage = (e) => {
    console.log(e.target)
    if(e.target.classList.contains('page-btn')){
        const indexSelected = parseInt(e.target.innerText) - 1
        contents.innerHTML = pageContents[indexSelected]
    }
}

pageBtns.addEventListener('click', changePage)