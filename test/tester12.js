const root = document.getElementById('root')
const container = document.createElement(`div`)
container.className = 'container'
const input = document.createElement(`input`)
input.type = 'file'
input.multiple = true
const fileInput = document.createElement('div')
fileInput.className = 'file-input'
fileInput.innerText = '업로드 버튼입니다'

const imgContainer = document.createElement('div')
imgContainer.id = 'img-container'
for(let i=0; i<10; i++){
    const imgBox = document.createElement('div')
    imgBox.className = 'img-box'
    if(i%2 === 0){
        imgBox.style.flex = `0 1 400px`
    }
    imgContainer.append(imgBox)
}


root.append(container, imgContainer)
container.append(input, fileInput)



const displayImgs = (e) => {
    // console.log(e.target.files) // 사용자가 업로드한 파일 리스트
    const file = e.target.files[0]
    // console.log(file.type)

    //유효성 검사
    let isValid = file.type.split("/")[0]
    if(isValid !== 'image'){
        imgBox.innerText = '이미지로 넣어'
    }
    
    const img = document.createElement('img')
    img.src = URL.createObjectURL(file) // 파일 경로 설정
    console.log(img.src)

    for(let i=0; i<10; i++){
        imgBox[i].append(img)
    }
}



input.addEventListener('change', displayImgs)

const inputClick = () =>{
    input.click()
}

fileInput.addEventListener(`click`, inputClick)
