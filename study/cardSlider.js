const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cardContainer = document.getElementById('card-container')

const moveToLeft = () => {
    const cards = cardContainer.querySelectorAll('.card')
    setTimeout(() => {
        //첫번째 카드 숨기기
        cardContainer.removeChild(cards[0]) // 첫번째 카드 제거
        cardContainer.appendChild(cards[0]) // 첫번째 카드 맨마지막으로
        cards[0].style.opacity = 0
        setTimeout(() => {
            cards[0].style.opacity = 1
        }, 100);
    }, 150);
}

const moveToRight = () => {
    const cards = cardContainer.querySelectorAll('.card')
    setTimeout(() => {
        cardContainer.removeChild(cards[cards.length - 1]) // 마지막 카드 제거
        cardContainer.insertBefore(cards[cards.length - 1], cards[0]) // 마지막 카드 맨처음으로
    }, 300);
}

prev.addEventListener('click', moveToRight)
next.addEventListener('click', moveToLeft)