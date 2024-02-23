const container = document.querySelector('.container')

const viewOn = () => {
    container.style.opacity=1;
}

const viewOff = () => {
    container.style.opacity=0;
}

setTimeout(viewOn, 1000)
setTimeout(viewOff, 3000)