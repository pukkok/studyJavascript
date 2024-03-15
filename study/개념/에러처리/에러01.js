// try catch 개념

// try{
//     // 1. 문법오류 같은경우는 try catch 사용 불가능
//     // {{{{{{{{{ // 'parsed-time' 에러

//     console.log('try 실행')
//     // 2. console.log(a) // 코드 실행중에 에러가 발생 - 런타임 에러(runtime error)
    
//     setTimeout(() => { // 3. 비동기적으로 실행되는 코드는 에러를 잡아낼수 없다.
//         try{ // 안에서 써야 잡을수 있다
//             noSuchVariable // 1초후에 에러 발생
//         }
//         catch(err){
//             console.log('에러 발견')
//             console.log(err.name)
//             console.log(err.message)
//             console.log(err.stack)
//         }
//     }, 1000);
//     // name : 에러이름 (ex. 정의되지 않은 변수에 대한 에러명은 'ReferenceError')
//     // message : 에러에 대한 상세내용을 담은 메세지
//     // stack : 에러가 발생하기까지 실행된 함수의 호출순서 (스택) 
//     // => 추적해서 들어가는것 error 발생지점 찾기 -> 에러발생지점에서 다시 타고들어가기 -> 문제점 발견
// }catch(err){
//     console.log(err)
// }

// 예제 1

// 서버에서 가져온 데이터(사용자정보)를 웹 화면에 보여주는 상황

// try{
//     let jsonText = '{"name" : "john" , "age" : 30}' //JSON 문자열 -> 객체 안에 무조건 ""로 표현됨 : 서버에 데이터 요청
//     let badJSONText = '{ bad json }'
//     let user = JSON.parse(jsonText) // JSON 문자열 -> 자바스크립트 객체로 변환
//     let badUser = JSON.parse(badJSONText) // JSON 문자열 -> 자바스크립트 객체로 변환
//     console.log(user.name)
//     console.log(user.age)
//     console.log(badUser.name)
//     console.log(badUser.age)
// }catch(err){
//     console.log('데이터에 에러가 있습니다.') // 서버에 필요한 데이터 다시 요청
//     console.log(err)
//     console.log(err.name, err.message)
// }

// 예제 2

// 개발자가 직접 에러 생성하기 - throw 키워드

// const json = '{ "age" : 30 }' // 불완전한 데이터 (사용자 정보에서 이름이 빠진 경우)

// try{
//     const user = JSON.parse(json)
//     if(!user.name){
//         // new Error(message), SyntaxError(message) ReferenceError(message)
//         // throw new Error('불완전한 데이터: 사용자 이름 빠짐') // 웬만해서는 그냥 Error 생성자 함수 이용가능
//         throw new SyntaxError("불완전한 데이터: 사용자 이름 빠짐") // 에러객체 생성
//     }
//     console.log(user.name)
// }catch(err){
//     console.log('JSON Error: ', err.message)
// }

// 예제 3
function getUserInfo(){
    "use strict" // 자바스크립트가 문법을 엄격하게 검사함
    
    const json = '{ "age" : 300 , "name" : "pukkok" }'
    
    try{
        const user = JSON.parse(json)
        if(!user.name){
            throw new TypeError('회원 정보에 이름이 없습니다.')
        }
        if(user.age>130){
            throw new RangeError('회원의 나이가 범위를 벗어났습니다.')
        }
    
    }catch(err){
        if(err instanceof ReferenceError){ // ReferenceError
            console.log('참조에러가 발생하였습니다.', err)
        }else if(err instanceof SyntaxError){
            console.log('JSON 형식이 올바르지 않습니다.', err)
        }else if(err instanceof TypeError){
            console.log(err.message)
        }else{
            throw err // 정체 불명의 에러는 try ~ catch문 바깥으로 다시 던지기
        }
    }
}

try{
    getUserInfo()
}catch(err){
    console.log('External catch got:' + err) // 다시던져진 에러를
}

// SyntaxError
// const json = '{ 잘못된 형식 }'

// try{
//     const user = JSON.parse(json)

// }catch(err){
//     if(err instanceof ReferenceError){
//         console.log('참조에러가 발생하였습니다.', err)
//     }else if(err instanceof SyntaxError){
//         console.log('JSON 형식이 올바르지 않습니다.', err)
//     }
// }