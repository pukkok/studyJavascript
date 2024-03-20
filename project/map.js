var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

var map = new naver.maps.Map('map', mapOptions);

console.log(naver.maps.Service.geocode({query : '나리로 38'}, (status, response) => {
    if (status !== naver.maps.Service.Status.OK) {
        return alert('Something wrong!');
    }

    var result = response.v2, // 검색 결과의 컨테이너
        items = result.addresses; // 검색 결과의 배열

    }    // do Something
))