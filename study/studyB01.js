// const div = document.createElement('div');
// div.className = 'container checked';
// div.innerHTML = `<img src='' alt=''/>
//                 <p>You have happy family</p>`;
// console.log(div);
// console.dir(div);


//mount => javascript로 작성 후 html에 쑤셔넣기
// const div = document.createElement('div');
// div.className = 'child'
// div.innerHTML = `hello world!`

// const root = document.getElementById('root')
// root.appendChild(div);

// const root = document.getElementById('root');
// root.innerHTML = `<div class="child">hello world</div>`


// dom 객체 생성
// const div = document.createElement('div');
// div.className = 'parent';
// div.innerText = "hello world!"

// const img = document.createElement('img');
// img.id = 'photo';
// img.src = "http://127.0.0.1:5500"
// img.art = 'photo';

// const p = document.createElement('p');
// p.className = 'summary'
// p.innerText = 'this is summary!'

// // 생성한 div 하위 요소 추가
// div.append(img, p);

// // html 문서에 생성한 dom 이 삽입 되기 전 img 태그를 검색한 경우
// const photo = document.getElementById('photo');
// console.log(photo)

// // 생성한 dom 을 html 문서에 마운트
// const root = document.getElementById('root');
// root.appendChild(div);

// // html 문서에 생성한 dom이 삽입된 이후 img 태그를 검색한 경우
// const photo2 = document.getElementById('photo');
// console.log(photo)
// console.log(photo2)

// 사진리스트의 div 요소 검색하기
// const photos = document.querySelectorAll('.photo-item')
// console.log(photos)

// // 사진리스트의 img 요소 검색하기
// const imgs = document.querySelectorAll('.photo-item img')
// console.log(imgs)

// for(let img of imgs){
//     console.log(img)
// }