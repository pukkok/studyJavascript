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
const infoObj = {}

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

for(let i=0; i<10000; i++){
    const tester = new Tester()
    testers.push(tester)
}

// console.log(testers)

testers.forEach((tester)=>{
    let entries = Object.entries(tester)
    entries.forEach((entry)=>{
        if(entry[0]==='weights'){
            !infoObj[entry[1]+'kg'] ? 
            infoObj[entry[1]+'kg']=1 : infoObj[entry[1]+'kg']++
        }else if(entry[0]==='heights'){
            !infoObj[entry[1]+'cm'] ? 
            infoObj[entry[1]+'cm']=1 : infoObj[entry[1]+'cm']++
        }else if(entry[0]==='glasses'){
            if(entry[1]){
                !infoObj['glasses'] ?
                infoObj['glasses']=1 : infoObj['glasses']++
            }
            else{
                !infoObj['no glasses'] ?
                infoObj['no glasses']=1 : infoObj['no glasses']++
            }
        }else{
            if(!infoObj[entry[1]]){
                infoObj[entry[1]]=1
            }else{
                infoObj[entry[1]]++
            }
        }

    })
})

console.log(infoObj)


const datas = Object.entries(infoObj)

const root = document.getElementById('root')

const displayInformation = (i) =>{
    const div = document.createElement('div')
    div.className = 'info'
    const h1 = document.createElement('h1')
    h1.innerText = `${datas[i][1]}`
    const pTag = document.createElement('p')
    pTag.innerText = `${datas[i][0]}`
    div.append(h1, pTag)
    root.append(div)
}

datas.forEach((data,i)=>{
    displayInformation(i)
})
