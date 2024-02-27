
const center = document.querySelector('.center')
const docs = document.querySelectorAll('.document')
const btn = document.querySelector('button')

let isCompletes = []
let docHeights = []
let count = 0

const scrollEvent = (e) => {
    for(let i=0; i<docs.length; i++){
        console.log('e : ', parseInt(e.target.scrollTop+5))
        console.log('dH : ', docHeights[i])
        if(parseInt(e.target.scrollTop+5) > docHeights[i]){
            isCompletes[i] = true
            console.log(isCompletes)            
        }
    }
    if(!isCompletes.includes(false)){
        btn.disabled = false
    }
}


for(let doc of docs){
    let docHeight = doc.scrollHeight - doc.clientHeight
    docHeights.push(docHeight)
    let isComplete = false
    isCompletes.push(isComplete)
    doc.addEventListener('scroll', scrollEvent)
}