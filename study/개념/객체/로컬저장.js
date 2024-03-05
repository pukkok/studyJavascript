const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')

const isValid = (type) => {
    return type.split('/')[0] === 'image'
}

const rememberImg = (e) => { // 객체/배열 => json 문자열로 변경해서 저장함
    console.log(e.target.result)
    // 로컬스토리지에 조회된 파일 데이터를 저장
    localStorage.setItem('file', JSON.stringify(e.target.result)) // JSON
}

const displayImg = (src) => {
    imgBox.innerHTML = `<img src = '${src}'/>`
}

const uploadImg = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader() // web api

    if(!isValid(file.type)){
        imgBox.innerHTML = 'File type not valid'
        return
    }
    const src = URL.createObjectURL(file) // 업로드 파일의 임시경로 생성
    displayImg(src)

    reader.onload = rememberImg // 비동기로 동작
    reader.readAsDataURL(file) // base64 문자열 형식으로 데이터 조회
}
const renderImg = () => {
    const fileStored = JSON.parse(localStorage.getItem('file')) // 객체, 배열(문자열) => 실제 객체, 배열로 변환
    if(fileStored) displayImg(fileStored)
}

fileInput.addEventListener('change', uploadImg)
window.addEventListener('load', renderImg)