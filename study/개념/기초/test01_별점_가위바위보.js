// 별점 넣기

// let stars = ['★', '★★', `★★★`, `★★★★`, `★★★★★` ];

// let star = '★';
// let spacestar = '☆';
// let test = prompt('별점을 확인하세요', '');

// if(0< +test && +test <6){
//     별점 = `${star.repeat(test)}${spacestar.repeat(5-test)}`
//     console.log(별점)
// } else{
//     alert('1~5사이로 입력해주세요')
// }

// ----------------------------------------------------------------------

// 가위바위보

// function getRandom(index) {
//     return Math.floor(Math.random()*index);
//   }
// let randomA = getRandom(3);
// let randomB = getRandom(3);

// let game = ['가위', '바위', '보'];
// let playerA = game[randomA];
// let playerB = game[randomB];
// console.log(`playerA = ${playerA}`)
// console.log(`playerB = ${playerB}`)

// if(`${playerA}`===`${playerB}`){
//     console.log('비겼습니다.')
// } else if(randomA === 0 && randomB === 1){
//     console.log('B 플레이어 승리')
// } else if(randomA === 1 && randomB === 2){
//     console.log('B 플레이어 승리')
// } else if(randomA === 2 && randomB === 0){
//     console.log('B 플레이어 승리')
// } else{
//     console.log('A 플레이어 승리')
// }