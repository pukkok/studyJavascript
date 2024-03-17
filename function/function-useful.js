let workerComment = `
${workerComments}
`
postMessage(workerComment)

function workerComments(){
// ----------- 쓸만한것1 --------------------

function add(...args){
    console.log(args)

    let sum = 0
    for(let arg of args){
        sum += arg
    }
    return sum
}
console.log(add())
console.log(add(1))
console.log(add(1, 2))
console.log(add(1, 2, 3))
console.log(add(1, 2, 3, 4))
console.log(add(1, 2, 3, 4, 5))

// ----------- 쓸만한것2 --------------------

function sortByOrder(flag, ...args){
    args.sort((a,b) => flag * (a-b))
    return args
}

console.log(sortByOrder(1, 5, 2, 3, 1, 4)) // 오름차순
console.log(sortByOrder(-1, 5, 2, 3, 1, 4)) // 내림차순

// ----------- 쓸만한것3 --------------------

function printCircleInfo(x, y, radius){
    console.log('원의 중심: ' , x, ',', y)
    console.log('반지름: ', radius)
}

printCircleInfo(...[3, 4, 5])

}
workerComments()
