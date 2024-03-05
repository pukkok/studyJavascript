const msg = 'You are watching text now !'
const tester = document.querySelector('.text')


let i=1;
const test = () =>{
        let text = msg.substring(0, i++);
        tester.innerText = `${text}`
    }

let timer = setInterval(test, 1000)
// clearInterval(timer)