// 수면 만족도에 영향을 미치는 요소
/** 
1. 잠들기까지 걸린 시간 // 짧을수록 수면만족도가 높다
2. 잠에서 깨어나는데 걸린 시간 // 짧을수록 수면만족도가 높다
3. 잠자는 동안 중간에 깬 횟수 // 횟수가 적을수록 수면만족도가 높다
4. 잠자는 동안 뒤척인 횟수 // 적을수록 수면만족도가 높다
5. 델타파 비율 //  비율이 높을수록 수면만족도가 높다

---

수면만족도 = 델타파 비율  / (잠들기까지 걸린 시간 X 잠에서 깨어나는데 걸린 시간 X 깬 횟수 X 뒤척임 횟수)

--- 

1. 테스터는 생성자 함수를 사용하여 생성한다.
2. 테스터의 멤버변수는 수면 만족도에 영향을 미치는 5가지 요소에 따라 아래 범위에서 랜덤함수로 생성한다.

// 잠들기까지 걸린 시간의 범위 (1~10분 사이)
// 잠에서 깨어나는데 걸린 시간의 범위 (1~10분 사이)
// 잠자는 동안 중간에 깬 횟수 (1~5회 사이)
// 잠자는동안 뒤척인 횟수 (1~10회 사이)
// 델타파 비율 (0~50% 사이)
// 수면 만족도 (초기값 0)

3. 수면 만족도를 계산하는 메서드를 프로토타입에 등록한다. 
4. 수면 만족도를 게터(getter)로 조회한다.

---

1. 잠들기까지 걸린 시간이 3분 이하이면 수면 만족도가 높다.
2. 잠에서 깨어나는데 걸린 시간이 3분 이하이면 수면 만족도가 높다.
3. 잠자는 동안 중간에 깬 횟수가 2회 이하이면 수면 만족도가 높다.
4. 잠자는 동안 뒤척인 횟수가 3회 이하이면 수면 만족도가 높다.
5. 델타파 비율이 20~50% 사이면 수면 만족도가 높다. 

종합해보면 수면 만족도가 높은 기준은 아래의 값 사이가 된다. 

수면 만족도 (최소값) = 20 / (3 x 3 x 2 x 3) = 20 / 54 = 0.37
수면 만족도 (최대값) = 50 / (1 x 1 x 1 x 1) = 50

즉, 수면만족도는 0.37 ~ 50 사이 값이면 높다고 판단한다.

---

*/

/** min ~ max 사이의 랜덤숫자를 생성하는 함수 (min, max 포함) */
function pickRandomNumber(min, max){
    return Math.floor( Math.random() * (max-min+1) ) + min 
}

function Tester(sleepSatisfaction = 0){
    this.sleepInTime = pickRandomNumber(1, 10) // (1~10분 사이)
    this.wakeupTime = pickRandomNumber(1, 10) // (1~10분 사이)
    this.wakeupCount = pickRandomNumber(1, 5) // (1~5회 사이)
    this.moveCount = pickRandomNumber(1, 10) // (1~10회 사이)
    this.delta = pickRandomNumber(0, 50) // (0~50% 사이)
    this.sleepSatisfaction = this.checkSleepSatisfaction()
}
 

Tester.prototype = {
    //수면만족도 (초기값 0)
    checkSleepSatisfaction(){
        return this.delta / (this.sleepInTime * this.wakeupTime * this.wakeupCount * this.moveCount)
    },
    get sleepSatisfactionViewer(){
        return this.sleepSatisfaction
    }
}

let count = 0
const printData = (data) =>{    
    if(data>0.37 && data<=50){
        // console.log('만족중', count)
        return ++count
    }
    // console.log('만족안함', count)
    return count
}

const makeGroup = () => {
    for(i=0; i<100; i++){
        const {sleepSatisfaction : groupSF} = new Tester()
        point = printData(groupSF)
    }
    return point
}

let group = [
    {name: 'groupA', count : makeGroup(count=0)},
    {name: 'groupB', count : makeGroup(count=0)},
    {name: 'groupC', count : makeGroup(count=0)}
]
let sortGroup = [...group].sort((a, b) => b.count - a.count)

console.table(group)
alert(`${sortGroup[0].name} 이/가 가장 만족한대요`)