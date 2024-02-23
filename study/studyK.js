    const photoContainer = document.getElementById('photo-container')
    const photos = document.getElementById('photos')
    const photosLength = photos.querySelectorAll('.photo').length
    const selection = document.getElementById('selection')
    const widthOfPhoto = 500
    let timerId = null // 타이머 ID
    let index = 0 // 사진 선택을 위한 인덱스

    const changeIndicator = (index) => {
        const activeOption = selection.querySelector('.active')
        if(activeOption) activeOption.classList.remove('active') // 기존에 액티브된 인디케이터 해제
        
        selection.querySelectorAll('.options')[index].classList.add('active')
        // 현재 인덱스에 대한 인디케이터 액티브 적용
    }

    const changePostion = () => {
        index++
        if(index> photosLength-1){
            index = 0;
        }
        photos.style.marginLeft = `${-1 * index * widthOfPhoto}px` //컨테이너 이동 (왼쪽으로)
        changeIndicator(index)// 해당 인덱스에 대한 인디케이터 스타일 변경
    }

    const startCarousel = () => {
        timerId = setInterval(changePostion, 1000)
    }
    const stopCarousel = () => {
        clearInterval(timerId)
    }

    photoContainer.addEventListener('mouseenter', startCarousel)
    photoContainer.addEventListener('mouseleave', stopCarousel)