
// let stars = ['★', '★★', `★★★`, `★★★★`, `★★★★★` ];

// let star = '★';
// let spacestar = '☆';
// let testB = prompt('별점을 확인하세요', '');

// if(0< +testB && +testB <6){
//     b = `${star.repeat(testB)}${spacestar.repeat(5-testB)}`
//     console.log(b)
// } else{
//     alert('1~5사이로 입력해주세요')
// }

    //switch 문
    
    // switch(+testB){
    //     case 1 :
    //     case 2 :
    //     case 3 :
    //     case 4 :
    //     case 5 :
    //         console.log(`${star.repeat(testB)}${spacestar.repeat(5-testB)}`);
    //     break;
    //     default :
    //         console.log('잘못된 평점입니다.')
    // }


    //연습과제 3

// let a = 6;

// switch (true) {

//     case(a > 10):
//         alert('3보다도 큰 10보다 크다!')
//         break

//     case(a > 3):
//         alert('3보다 크다!')
//         break

//     default:
//         alert('3보다 작거나 같다.')
// }

// 연습과제 4

// let scoreA = prompt('점수를 입력하세요');

// scoreA < 60 ? console.log('F학점') :
// scoreA < 70 ? console.log('D학점') :
// scoreA < 80 ? console.log('C학점') :
// scoreA < 90 ? console.log('B학점') : 
// scoreA < 100 ? console.log('A학점') :
// console.log('잘 좀 입력해보세요')



// let playerA = '가위';
// let playerB = '바위';

// let s = '가위', r = '바위', p = '보';

// console.log(s, r, p)
// console.log(playerA, playerB)
// if(playerA===s){
//     console.log('playerB 승')
// } else if (playerA===r){
//     console.log('비겼음')
// } else if (playerA===p){
//     console.log('playerA 승')
// } 


// 가위바위보

// function getRandom(index) {
//     return Math.floor(Math.random()*index);
//   }
// let playerA = getRandom(3);
// let playerB = getRandom(3);

// let game = ['가위', '바위', '보'];
// let gameA = game[playerA];
// let gameB = game[playerB];
// console.log(`playerA = ${gameA}`)
// console.log(`playerB = ${gameB}`)

// if(`${gameA}`===`${gameB}`){
//     console.log('비겼습니다.')
// } else if(playerA === 0 && playerB === 1){
//     console.log('B 플레이어 승리')
// } else if(playerA === 1 && playerB === 2){
//     console.log('B 플레이어 승리')
// } else if(playerA === 2 && playerB === 0){
//     console.log('B 플레이어 승리')
// } else{
//     console.log('A 플레이어 승리')
// }


// let logIn = prompt('로그인하세요');
// let password = '12345';

// if (logIn === 'admin'){
//     confrimpw = prompt('비밀번호를 입력하세요')
    
//     if(password === confrimpw){
//         alert('Hello Master!!');
//     } else {
//         alert('잘못된 비밀번호 입니다.');
//     }
// } else {
//     alert('취소되었습니다.')
// }