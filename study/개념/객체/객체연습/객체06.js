const hairColors = ['black', 'brown', 'yellow', 'white', 'gold']
const hairTypes = ['curly', 'straight', 'wavy', 'coily']
const glasses = [true, false]
const heights = [150, 160, 170, 180, 190, 200]
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
const varNames = [hairColors, hairTypes, glasses, heights, weights]
const varTextNames = ['hairColors', 'hairTypes']
const testers = []
// 1. 테스트할 사용자는 생성자 함수를 이용하여 생성한다. 
// 2. 테스트할 사용자의 멤버변수는 특징 데이터 배열에서 랜덤으로 추출한 특징 데이터이다. 
// 머리카락 색깔
// 머리카락 종류
// 안경 착용 유무
// 키
// 몸무게
const testerinfos = []

const randomNumber = (number) =>{
    return Math.floor(Math.random()*number)
}

function Tester(){
    this.hairColors = hairColors[randomNumber(hairColors.length)],
    this.hairTypes = hairTypes[randomNumber(hairTypes.length)],
    this.glasses = glasses[randomNumber(glasses.length)],
    this.heights = heights[randomNumber(heights.length)],
    this.weights = weights[randomNumber(weights.length)]
}

for(i=0; i<10000; i++){
    const tester = new Tester()
    testers.push(tester)
}
console.log(testers)
let count=0
const testerLoop = (arr) =>{
    let test = arr.join('')
    console.log('test', test)
    arr.forEach((data)=>{
        testers.forEach((tester)=>{
            if(tester.arr === data){
                ++count
                testerinfos[`${data}`] = count
            }
        })
    })
}

let obj = {}
varNames.forEach((varName,i)=>{
    testerLoop(varName)
})
console.log(obj)
// testers.reduce((i, tester)=>{
//     i++
//     // console.log(i)
//     // console.log(tester)
//     let colorIndex=[]
//     hairColors.forEach((color, j)=>{
//         colorIndex[j]
//         if(tester.hairColors === color){
//             testerinfos[`${color}`]=j
//         }
//     })
//     // if(tester.glasses===glasses[0]){
//     //     testerinfos.glasses = ++count
//     // }
//     return i
// },0)

// console.log(testerinfos)