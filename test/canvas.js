const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

// context.fillStyle = 'rgba(0,0,0,.5)'
// context.fillRect(50,50,100,100)
// context.fillStyle = 'red'
// context.fillRect(0, 0, 100, 100)
context.clearRect(80, 80, 50, 50)
// context.strokeRect(150, 150, 100, 100)

// context.beginPath()
// context.moveTo(100, 100)
// context.lineTo(300, 200)
// context.stroke()

context.beginPath()
context.arc(300, 200, 50, 0, Math.PI*2, false)
context.stroke()
context.beginPath()
context.arc(500, 100, 20, 0, Math.PI*2, false)
context.stroke()