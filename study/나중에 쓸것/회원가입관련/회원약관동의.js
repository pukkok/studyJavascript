
// const center = document.querySelector('.center')
// const docs = document.querySelectorAll('.document')
// const btn = document.querySelector('button')

// let isCompletes = []
// let docHeights = []
// let count = 0

// const scrollEvent = (e) => {
//     for(let i=0; i<docs.length; i++){
//         if(Math.ceil(e.target.scrollTop) === docHeights[i]){
//             isCompletes[i] = true
//             console.log(isCompletes)            
//         }
//     }
//     if(!isCompletes.includes(false)){
//         btn.disabled = false
//     }
// }

// for(let doc of docs){
//     let docHeight = doc.scrollHeight - doc.clientHeight
//     docHeights.push(docHeight)
//     let isComplete = false
//     isCompletes.push(isComplete)
//     doc.addEventListener('scroll', scrollEvent)
// }


const center = document.querySelector('.center')
const docs = document.querySelectorAll('.document')
const btn = document.querySelector('button')

let count = 0

const scrollEvent = (e) => {
    addSE(e)
    let eHeight = e.target.scrollHeight - e.target.clientHeight
    let eScrollTop = e.target.scrollTop

    if(Math.ceil(eScrollTop) >= eHeight){
        count++
        removeSE(e)
    }
    if(count>=docs.length){
        btn.disabled = false
    }
}


for(let doc of docs){
    doc.addEventListener('scroll', scrollEvent)
}

const removeSE = (e) => {
    e.target.removeEventListener('scroll', scrollEvent)
}
const addSE = (e) => {
    e.target.addEventListener('scroll', scrollEvent)
}