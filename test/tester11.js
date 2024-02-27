const center = document.querySelector('.center')
const docs = document.querySelectorAll('.document')
const btn = document.querySelector('button')

let docH = []
let count = 0
const scrollEvent = (e) => {
    for(let i=0; i<docs.length; i++){
        let scrollH = docs[i].scrollHeight - docs[i].clientHeight
        docH[i] = scrollH
        if(e.target.scrollTop === docH[i]){
            console.log(i, 'check')
            count++
            if(count===docs.length){
                btn.disabled = true
            }
        }
    }
}
// console.log(docH)

for(let doc of docs){
    doc.addEventListener('scroll', scrollEvent)
}