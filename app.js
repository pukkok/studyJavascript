
/** 함수박스 = [{name : 'h1', forder: '폴더명', javascript : '파일명' , css : '파일명' }] */
const functionBox = [
    { name : '재귀함수' , forder : 'function', javascript : 'function01' , css : ''},
    { name : '바인딩' , forder : 'function', javascript : 'function02' , css : '' },
    { name : '쓸만한것' , forder : 'function', javascript : 'function-useful' , css : '' },
]

const boxContainer = [functionBox,]

/** 헤더 영역 */
const head = document.querySelector('head')
const link = document.createElement('link')
link.rel='stylesheet'
link.href=''
head.append(link)

/** 바디영역 */
const root = document.getElementById('root')
const viewerContainer = document.createElement('div')
viewerContainer.className = 'viewer-container'
const viewer = document.createElement('div')
viewer.className = 'viewer'
const pre = document.createElement('pre')
const code = document.createElement('code')
code.className=''
const controlBox = document.createElement('div')
controlBox.className = 'control-box'

const minimizeViewer = document.createElement('button')
minimizeViewer.className = 'minimize-viewer'
minimizeViewer.innerHTML = `<span class="material-symbols-outlined">minimize</span>`

const closeFullscreenViewer = document.createElement('button')
closeFullscreenViewer.className='close-fullscreen-viewer'
closeFullscreenViewer.innerHTML=`<span class="material-symbols-outlined">close_fullscreen</span>`

const closeViewer = document.createElement('button')
closeViewer.className = 'close-viewer'
closeViewer.innerHTML = `<span class="material-symbols-outlined">close</span>`
code.innerHTML=`
const makeSearchBox = () => {
    const div = document.createElement('div')
    div.className = 'search-box'
    const input = document.createElement('input')
    const button = document.createElement('button')
    button.innerText = '검색'
    div.append(input, button)
    root.append(div)
}
makeSearchBox()
`
pre.append(code)
root.append(pre)
// viewer.append(pre)
controlBox.append(minimizeViewer, closeFullscreenViewer, closeViewer)
// viewerContainer.append(pre, controlBox)
root.append(viewerContainer) 

/** 검색박스 */
const makeSearchBox = () => {
    const div = document.createElement('div')
    div.className = 'search-box'
    const input = document.createElement('input')
    const button = document.createElement('button')
    button.innerText = '검색'
    div.append(input, button)
    root.append(div)
}
makeSearchBox()

/** 섹션만들기 (박스, '섹션제목', '섹션클래스')*/
const makeSection = (arr, name, cName) => {
    const section = document.createElement('section')
    section.className= cName
    const h1 = document.createElement('h1')
    h1.innerText = name
    section.append(h1)
    const div = document.createElement('div')
    div.className = 'button-box'
    arr.forEach(data => {
        const button = document.createElement('button')
        button.innerText = data.name
        div.append(button)
    })
    section.append(div)
    root.append(section)
}
makeSection(functionBox, '함수', 'function-box')


const buttons = document.querySelectorAll('.button-box button')


// function searchObject(check){
//     let result = {}
//     boxContainer.forEach((box)=>{
//         box.filter(obj => {
//             if(obj.name === check) return result = obj
//         })
//     })
//     startJS(result)
// }

// const startJS = (obj) => {
//     let worker = new Worker(`./${obj.forder}/${obj.javascript}.js`)
//     worker.onmessage = (event) => {
//         code.innerHTML = `${event.data}`
//         viewerContainer.style.display = 'flex'
//         worker.terminate()
//     }
    
//     if(obj.css) link.href = `${obj.forder}/${obj.css}.css`
// }

// buttons.forEach((button)=>{
//     let checkName = button.innerText
//     button.addEventListener('click', ()=> searchObject(checkName) )
// })



const closeViewerContainer = () => {
    viewerContainer.style.display='none'
    console.clear()
}

closeViewer.addEventListener('click', closeViewerContainer)

document.addEventListener('DOMContentLoaded', (e)=>{

    // hljs.highlightAll()

    function searchObject(check){
        let result = {}
        boxContainer.forEach((box)=>{
            box.filter(obj => {
                if(obj.name === check) return result = obj
            })
        })
        startJS(result)
    }
    
    const startJS = (obj) => {
        let worker = new Worker(`./${obj.forder}/${obj.javascript}.js`)
        worker.onmessage = (event) => {
            code.innerText = makeSection
            viewerContainer.style.display = 'flex'
            worker.terminate()
        }
        document.addEventListener('DOMContentLoaded',()=>{
            hljs.initHighlightingOnLoad.called = false;
            hljs.initHighlightingOnLoad()
        })
        if(obj.css) link.href = `${obj.forder}/${obj.css}.css`
    }
    
    buttons.forEach((button)=>{
        let checkName = button.innerText
        button.addEventListener('click', ()=> searchObject(checkName) )
    })
    hljs.initHighlightingOnLoad()
})