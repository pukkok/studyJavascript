const container = document.querySelector('.container')
let i=1;
const test = () =>{
    container.innerHTML = `<h1>${i++}</h1>`
}
let t = setInterval(test, 1000);

