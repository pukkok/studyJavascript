function Thenable(num){
    this.num = num
}

// Thenable에 then이 있다면 알아서 then 실행
Thenable.prototype.then = function(resolve, reject){ //executor 와 유사함
    setTimeout(() => resolve(this.num*2), 1000);// 비동기 코드
}


new Promise(resolve => resolve(1))
.then(result => {
    //프로미스 객체와 호환되는 thenable 객체 반환
    return new Thenable(result)
})
.then(alert)



