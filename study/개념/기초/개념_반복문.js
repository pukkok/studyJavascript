// 무한 루프 걸리면 x댄다!
// 무한 반복을 조심하자!

// let a = 1;
// let enabale = true; // 반복문 활성화, 비활성화 버튼

// // while(enabale && a < 100){
// //     if(a % 5 === 0){
// //         console.log(a)
// //     }
// //     a++
// // }

// do{
//     if(a % 5 === 0){
//       console.log(a)
//     }
//     a++
//   }while(a < 100)

// let i =0;

// for(i = 0; i < 3; i++){
//     console.log(i)
// }
// console.log(i)

// 3의 배수씩 step하기
// for(let i = 3; i < 100; i += 3){
//     console.log(i)
// }

// 반올림
// for(let i = 0; i < 100; i += 0.1){
//     console.log(i.toFixed(1))
// }

// let sum = 0;

// while(true){
//     let value = +prompt('숫자를 입력하세요.', '')
//     if(!value) break;
//     sum += value
// }
// console.log(sum)

// let time = 0

// console.log('loading...')
// while(time < 1000000000){
//   if(time === 700000000){
//     break
//   }
//   time++
// }
// console.log('finished loading!')

// for(let i=0; i <10; i++){
//     if(i % 2 === 0) continue;
//     console.log(i)
// }

// let letter = 'A'
// let str = ''

// for(let i = 0; i <3; i++){
//     for(let j = 0; j<3; j++){
//         str += letter + ' ';
//     }
//     str += '\n';
// }
// console.log(str);

outer: for(let i =0; i < 3; i++){
    for(let j =0; j <3; j++){
        let input = prompt(`(${i}, ${j})의 값`)

        if(!input) break outer;
    }
}
console.log('완료')