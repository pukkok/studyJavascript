// const main = document.querySelector('main')
// const sections = document.querySelectorAll('section')
// let timer, angle = 7
// let index = 0
// let isTurn = true

// const throttling = (handler, e) => {
//     if(!timer){
//         timer = setTimeout(() => {
//            handler(e) 
//            timer = null
//         }, 100);
//     }
// }

// // const intializeStyle = (sections) => {
// //     sections.forEach((section) => {
// //         section.style.opacity = '0' // 기존 슬라이드 숨기기
// //         section.style.transform = `translateX(-50%)`
// //         section.style.transition = 'none' // 다음슬라이드 나올때 감자기 회전하는 것을 막기 위함
// //     });
// // }

// const changeSlide = (e) => {
    
//     if(e.deltaY > 0){
//         angle += 6
//         console.log(angle)
//         console.log(isTurn)
//         sections.forEach((section, i)=>{
//             section.style.transform = `translateX(-50%) rotateY(${angle+180*i}deg)`
//             section.style.opacity = '0'
//             // section.style.transition = 'none'
//         })
//         sections[index].style.opacity = '1'
//         if(angle>90 && isTurn){
//             index++
//             isTurn = false
//         }

//         if(index > sections.length -1){
//             index = 0 
//         }

//         if(angle > 180){
//             angle = 0
//             isTurn = true
//         }
//     }


//         // const section = sections[index]
//         // section.style.opacity = '1'
//         // section.style.transform = `translateX(-50%) rotateY(${angle}deg)`
        
//         // setTimeout(() => {
//         //     section.style.transition = `1s ease-in-out` // 트랜지션 초기화
//         // }, 50);
//     }



// document.addEventListener('wheel', (e)=> throttling(changeSlide, e))



















const main = document.querySelector('main')
const sections = document.querySelectorAll('section')
let timer, angle = 0 // degree
let index = 0
let isTurn = true

const throttling = (handler, e) => {
    if(!timer){
        timer = setTimeout(() => {
           handler(e) 
           timer = null
        }, 100);
    }
}

const intializeStyle = (sections) => {
    sections.forEach((section) => {
        section.style.opacity = '0' // 기존 슬라이드 숨기기
        section.style.transform = `translateX(-50%)`
        section.style.transition = '0s' // 다음슬라이드 나올때 감자기 회전하는 것을 막기 위함
    });
}

const changeSlide = (e) => {
    // console.log('scroll', e.deltaY)
    
    if(e.deltaY > 0){
        angle += 6
        console.log(angle)

        if(angle > 360){
            angle = 0 // 다음 슬라이드의 플립을 위한 angle 초기화
            isTurn = true
            intializeStyle(sections)
        }

        if(angle > 90 && isTurn){ //90도 +-20도 근처
            angle += 180 // 다음 슬라이드의 위상은 270도부터 시작함 (flip)
            index++
            isTurn = false
            intializeStyle(sections)
            if(index > sections.length -1){
                index = 0 
            }
            // 기존 슬라이드를 숨기고, transition을 잠깐 제거해야 됨
        }
        const section = sections[index]
        section.style.opacity = '1'
        section.style.transform = `translateX(-50%) rotateY(${angle}deg)`
        
        setTimeout(() => {
            section.style.transition = `1s linear` // 트랜지션 초기화
        }, 50);
    }

}

document.addEventListener('wheel', (e)=> throttling(changeSlide, e))