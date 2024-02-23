const root = document.getElementById('root')
const container = document.createElement('div')
container.className = 'container'

for(let i=0; i<9; i++){
    const colorBox = document.createElement('div')
    const colorRed = Math.floor(Math.random()*255);
    const colorGreen = Math.floor(Math.random()*255);
    const colorBlue = Math.floor(Math.random()*255);
    colorBox.style.backgroundColor= `rgb(${colorRed},${colorGreen},${colorBlue})`
    container.append(colorBox)
};


root.append(container)

const changer = (e) => {
    const changeColor = e.target.style
    const colorRed = Math.floor(Math.random()*255);
    const colorGreen = Math.floor(Math.random()*255);
    const colorBlue = Math.floor(Math.random()*255);
    changeColor.backgroundColor = `rgb(${colorRed},${colorGreen},${colorBlue})`
}

container.addEventListener('click', changer)





