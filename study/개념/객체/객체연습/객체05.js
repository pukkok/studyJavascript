// 1. 각 역에 대한 객체는 생성자 함수를 사용하여 생성한다. 
// 2. 각 역에 대한 멤버변수는 아래와 같다. 
// 역명
// 위도
// 경도
// 3. 목적지 역에 대한 객체를 인자로 받아 거리와 요금을 계산하는 메서드를 프로토타입에 등록한다.


function StationInfo(station, latitude, longitude){
    this.station = station,
    this.latitude = latitude, // 위도
    this.longitude = longitude // 경도
}

StationInfo.prototype = {
    calcDistance(다른역){
        const φ1 = this.latitude * Math.PI / 180;
        const φ2 = 다른역.latitude * Math.PI / 180;
        const Δφ = (다른역.latitude - this.latitude) * Math.PI / 180;
        const Δλ = (다른역.longitude - this.longitude) * Math.PI / 180;
        const R = 6371e3; // 지구의 반지름 (meter)
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        
        const d = R * c; // meter
        return d
    },

    calcCost(거리){ // 거리에 따른 요금은 100원/km 으로 계산한다.
        return 100 * Math.floor(거리/1000)
    }
}

const 서울역 = new StationInfo('서울역', 37.55620110026294, 126.97223116703012)
const 대전역 = new StationInfo('대전역', 36.332516127741, 127.43421099777726)
const 동대구역 = new StationInfo('동대구역', 35.88049128950934, 128.62837657353532)
const 부산역 = new StationInfo('부산역', 35.116613680508806, 129.04009077373016)
const KTX = ['서울역', '대전역', '동대구역', '부산역']
const fare = [
    서울역.calcCost(서울역.calcDistance(대전역)), // 0~1
    대전역.calcCost(대전역.calcDistance(동대구역)), // 1~2
    동대구역.calcCost(동대구역.calcDistance(부산역)) // 2~3
]
let start = prompt('출발역을 입력하세요', '')
let end = prompt('도착역을 입력하세요', '')
let sortedIndex = []

const 요금계산 = (출발역, 도착역) => {
    KTX.forEach((기차역, i)=>{
        if(기차역 === 출발역 || 기차역 === 도착역){
            sortedIndex.push(i)
        }
    })

    let 총요금 = 0
    if(sortedIndex[0]===(sortedIndex[1]-1)){
        총요금 = fare[sortedIndex[0]]
    }else{
        for(i=sortedIndex[0]; i<sortedIndex[1]; i++){
            총요금 += fare[i]
        }
    }
    console.log(`${출발역}부터 ${도착역}까지 금액은 ${총요금}원 입니다.`)
}

요금계산(start, end)


/**
 * 좌표 라디안 단위로 변환
 * φ1 = 위도1 * Math.PI / 180
 * φ2 = 위도2 * Math.PI / 180
 * Δφ = (위도2 - 위도1) * Math.PI / 180
 * Δλ = (경도2 - 경도1) * Math.PI / 180
 * 
 * const R = 6371e3; // 지구의 반지름 (meter)
 */

// 좌표를 라디안 단위로 변환
// const φ1 = lat1 * Math.PI / 180;
// const φ2 = lat2 * Math.PI / 180;
// const Δφ = (lat2 - lat1) * Math.PI / 180;
// const Δλ = (lon2 - lon1) * Math.PI / 180;
// const R = 6371e3; // 지구의 반지름 (meter)
// const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
// 		  Math.cos(φ1) * Math.cos(φ2) *
//           Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
// const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

// const d = R * c; // meter

// d = 11052555.850341197