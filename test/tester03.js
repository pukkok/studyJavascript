const root = document.getElementById('root');


//nav
const nav = document.createElement('div')
nav.id = `nav`;

const menu = document.createElement('div')
menu.id = `menu`;

for(let i=0; i<3; i++){
    const bar = document.createElement('div');
    bar.className = `bar`;
    menu.append(bar);
}

const screenMode = document.createElement('div');
screenMode.id = `screen-mode`;
const circleBtn = document.createElement('div');
circleBtn.id = `circle-btn`;

const profileMenu = document.createElement('div');
profileMenu.id = `profile-menu`;

const img = document.createElement('img')
img.src = "/studyJavascript/test/profile.jpg"
img.alt = ""


//title
const title = document.createElement('div')
title.id = `title`;

const center = document.createElement('div')
center.id = `center`;

const heading = document.createElement('div')
heading.id = `heading`;
const headingH1 = document.createElement('h1');
const headingH4 = document.createElement('h4');
headingH1.innerText = `My photo gallery`
headingH4.innerText = `my old memories from my life`

const search = document.createElement('div');
search.id = 'search';
const input = document.createElement('input');
input.type = 'text';
input.placeholder = `Search photo ...`;

const photoList = document.createElement('div')
photoList.id = 'photo-list';

for(let i=0; i<9; i++){
const photoContainer = document.createElement('div')
photoContainer.className = 'photo-container';
const photoCard = document.createElement('div')
photoCard.className = 'photo-card';
const photoImg = document.createElement('img')
photoImg.src = '다운로드.jpg';
const photoName = document.createElement('div')
photoName.className = `photo-name`;
photoName.innerText = '이름';

    photoList.appendChild(photoContainer).appendChild(photoCard).appendChild(photoImg)
    photoContainer.appendChild(photoName)
}

// for(let i=0; i<9; i++){
//     const photoContainer = document.createElement('div');
//     photoContainer.className = 'photo-container';
//     photoContainer.innerHTML = `
//                         <div class="photo-card">
//                             <img src="다운로드.jpg" alt="" />
//                         </div>
//                         <div class="photo-name">이름</div>
//     `
//     photoList.appendChild(photoContainer)
// }

console.log(photoList)


root.append(nav, title, photoList);

nav.appendChild(menu)
nav.appendChild(screenMode).append(circleBtn);
nav.appendChild(profileMenu).append(img)

title.appendChild(center).appendChild(heading)
heading.append(headingH1, headingH4);
center.appendChild(search).append(input)

const check = profileMenu.querySelector('img')
check.src = "logo.jpg"