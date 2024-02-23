// 주어진 HTML 코드를 자바스크립트로 생성한 다음
// 클래스명이 photo-item 인 요소 내부의 img 요소를 검색해보자! 
// 그런 다음 검색된 요소들 중 첫번째 요소의 alt 속성을 출력해보자!

const root = document.getElementById('root');
root.innerHTML = `
<div class= "photo-container">
    작동 확인
    <div class="photo-item>
        <img src="http://127.0.0.1:5500/index.html" alt="photo"/>
    </div>
    <div class="photo-item>
        <img src="http://127.0.0.1:5500/index.html" alt="photo"/>
    </div>
    <div class="photo-item>
        <img src="http://127.0.0.1:5500/index.html" alt="photo"/>
    </div>
    <div class="photo-item>
        <img src="http://127.0.0.1:5500/index.html" alt="photo"/>
    </div>
    <div class="photo-item>
        <img src="http://127.0.0.1:5500/index.html" alt="photo"/>
    </div>
</div>
`
// console.log(root)

const imgs = document.querySelectorAll('.photo-item img');
// console.log(imgs)
// console.dir(imgs)

for(let img of imgs){
    console.log(img)
}