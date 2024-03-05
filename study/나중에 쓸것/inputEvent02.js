const fileInput = document.getElementById('file-input')
const progressIndicater = document.querySelector('.progress-indicator')
const progressNumber = document.querySelector('.progress-number')

const handleFileUpload = (e) => {
    const file = e.target.files[0]

    const fileReader = new FileReader() // file data를 비동기적으로 읽을수 있는 객체
    fileReader.readAsDataURL(file) // 파일 데이터를 base64 문자열 형식으로 읽기 시작

    fileReader.onloadstart = () => {
        console.log('파일을 읽기 시작할때 실행되는 이벤트핸들러 함수')
    }
    fileReader.onprogress = (e) => {
        console.log('파일을 읽는 중에 실행되는 이벤트핸들러 함수')
        console.log('파일 업로드 진행률', e.loaded / e.total * 100)
        const progress = parseInt(e.loaded / e.total * 100) + '%'
        progressIndicater.style.width = progress
        progressNumber.innerText = progress
    }
    fileReader.onloadend = (finishedEvent) => {
        console.log('파일 읽기가 방금 끝났을때 실행되는 이벤트핸들러 함수')
    }
    fileReader.onload = (e) => {
        console.log('읽어들인 파일 데이터를 조회할때 실행되는 이벤트핸들러 함수')
    }
}

fileInput.addEventListener('change', handleFileUpload)



// img 추가 이벤트
// const fileInput = document.getElementById('file-input')
// const imgBox = document.getElementById('img-box')

// const isValid = (type) => {
//     console.log(type.split('/')[0]) // split 단어 쪼개기
//     return type.split('/')[0] === `image`
// }

// const displayImg = (e) => {
//     console.log(e.target.files) // 사용자가 업로드한 파일 리스트
//     const file = e.target.files[0] // 업로드한 파일 데이터 조회

//     if(!isValid(file.type)){
//         imgBox.innerHTML = 'File type not valid! please upload image!'
        
//         return
//     }
    
//     const img = document.createElement('img')
//     img.src = URL.createObjectURL(file) // 파일 경로 설정
//     console.log(img.src)
//     imgBox.innerHTML = ''
//     imgBox.appendChild(img)
// }

// fileInput.addEventListener('change', displayImg)