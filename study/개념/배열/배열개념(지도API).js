const mapObj = L.map('map')

// 다른 API를 사용해서 지명을 입력하면 위도, 경도 값을 전송해주는 라이브러리 사용하기

const coordinates = [ // hotels.com API 실제 호텔의 위치정보
    {
        "name": "조선 팰리스 럭셔리 컬렉션 호텔, 서울 강남 (Josun Palace, a Luxury Collection Hotel, Seoul Gangnam)",
        "coordinate": [
            37.502642, // 위도(latitude)
            127.041787 // 경도(longitude)
        ]
    },
    {
        "name": "그랜드 인터컨티넨탈 서울 파르나스 (Grand InterContinental Seoul Parnas, an IHG Hotel)",
        "coordinate": [
            37.50846,
            127.061036
        ]
    },
    {
        "name": "인터컨티넨탈 서울 코엑스 (InterContinental Seoul COEX, an IHG Hotel)",
        "coordinate": [
            37.513481,
            127.057276
        ]
    },
    {
        "name": "파크 하얏트 서울 (Park Hyatt Seoul)",
        "coordinate": [
            37.50845,
            127.06335
        ]
    },
    {
        "name": "안다즈 서울 강남 (Andaz Seoul Gangnam)",
        "coordinate": [
            37.525265,
            127.028627
        ]
    },
    {
        "name": "글래드 라이브 강남 (Glad Live Gangnam)",
        "coordinate": [
            37.508184,
            127.036514
        ]
    }
]

const displayLocation = (위도, 경도, 지명) => {
    const map = mapObj.setView([위도, 경도], 17) // 지도에 해당위치 표시함

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([위도, 경도]).addTo(map) // 마커 맵에 표시
    .bindPopup(지명) // 마커 클릭시 지명 보여주기
    .openPopup()
}

coordinates.forEach((coord)=>{
    displayLocation(coord.coordinate[0], coord.coordinate[1], coord.name)
})