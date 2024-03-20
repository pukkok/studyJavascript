let url = 'https://e-childschoolinfo.moe.go.kr/api/notice/basicInfo2.do'
let apiKey = '74cfc6b4c3b545df8541505847b793d0'
let param = 'sidoCode=27&sggCode=27140'

function loadJson(url, apiKey, param){
    return fetch(`${url}?key=${apiKey}&${param}`, {
        method: "POST",
        crossDomain: true,
        dataType: 'json',
    }).then(response => response)
}
let result = loadJson(url, apiKey, param)
console.log(result)

// // const http = require('https://e-childschoolinfo.moe.go.kr/api/notice/basicInfo2.do?key=74cfc6b4c3b545df8541505847b793d0&sidoCode=27&sggCode=27140');

// // const server = http.createServer((req, res) => {
// //   // 모든 도메인에서의 요청을 허용하기 위해 Access-Control-Allow-Origin 헤더에 *을 설정합니다.
// //   res.setHeader('Access-Control-Allow-Origin', '*');

// //   // 서버로부터 받은 요청에 대한 응답을 작성합니다.
// //   res.write('Hello World!');
// //   res.end();
// // });

// // server.listen(3000, () => {
// //   console.log('Server listening on port 3000');
// // });

// fetch("https://e-childschoolinfo.moe.go.kr/api/notice/basicInfo2.do?key=74cfc6b4c3b545df8541505847b793d0&sidoCode=27&sggCode=27140")
//   .then((response) => response.json())
//   .then((data) => console.log(data));