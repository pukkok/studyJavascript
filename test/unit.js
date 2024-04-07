const hero = document.getElementById('hero')
const context = hero.getContext('2d')
function draw(x, y) {
    context.clearRect(0,0, hero.width, hero.height)
    context.beginPath()
    context.arc(x, y, 10, 0, Math.PI*2, false)
    context.fill()
    
}



let x = 0
let y = 0

var keys = [];
function keyDownEvent(e) {
    // console.log(e)
    keys[e.code] = true
    
    if(keys['ArrowRight']) x+=5
    
    if(keys['ArrowLeft']) x-=5
    
    if(keys['ArrowUp']) y-=5
    
    if(keys['ArrowDown']) y+=5
    // window.requestAnimationFrame(draw)
    draw(x, y)
}

function keyUpEvent(e){
    keys[e.code] = false
}

window.addEventListener('keydown', keyDownEvent, false)
window.addEventListener('keyup', keyUpEvent, false)

