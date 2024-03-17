const head = document.querySelector('head')
const link = document.createElement('link')
head.append(link)
const root = document.getElementById('root')
const div = document.createElement('div')

root.append(div)

function testFunction(){
    /** 검색박스 */
    const makeSearchBox = () => {
        /** 주석체크 중입니다 */
        const div = document.createElement('div')
        div.className = 'search-box'
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.innerText = '검색'
        div.append(input, button)
        root.append(div)
    }
    div = div('바봌 ㅋㅋ')
    makeSearchBox()
    makeSearchBox()
    makeSearchBox()
}

// const tagPattern = /<[^>]+>?/g
const codeStyles ={
    starter : [/function/g, /const/g, /let/g, /var/g] , // 스타트
    key : [],
    comments : [/\/\*\*/g, /\*\//g, /\/\//g] , // 주석처리
    tag : [/div/g, /span/g, /root/g , /input/g , /button/g, /p/g, /section/g],
    value : [] ,
    string : [/\'\'/] ,
    num : [] ,
    noraml : [/\=/, /\(/, /\)/, /\>/],
}

let pureSentence = `${testFunction}`
let firstResult = []
let secondResult = []
let resultSentence = []
let abc = []
const customStyle = () =>{
    let stringChange = pureSentence.split(' ')
    let stringFilter =[]
    /** 문자열이 있는지 없는지 체크하기 */
    stringChange.forEach(word=>{
        if(word.includes("'")){
            let index = word.indexOf("'")
            stringFilter.push(word.slice(0, index))
            while(index !== -1){
                let prev = index
                index = word.indexOf("'", prev+1)
                stringFilter.push(`<code class='string'>`+word.slice(prev, index+1)+`</code>`)
                return stringFilter.push(word.slice(index+1))
            }
        }else{
            stringFilter.push(word)
        }
    })
    /** []. , () , ( , ) , => , = ] 체크  */
    stringFilter.forEach((word)=>{
        if(word.includes('.')){
            firstResult.push(`<code class='tag'>${word.split('.')[0]}</code><code class='normal'>.</code>${word.split('.')[1]}`)
        }else if(word.includes('()')){
            firstResult.push(`<code class='key'>${word.split('()')[0]}</code><code class='normal'>()</code>${word.split('()')[1]}`)
        }
        else if(word.includes('(')&&word.includes(')')){
            firstResult.push(word)
        }
        else if(word.includes('=>')){
            firstResult.push(`<code class='normal'>${word}</code>`)
        }
        else if(word===('=')){
            firstResult.push(`<code class='normal'>${word}</code>`)
        }
        else{
            firstResult.push(word)
        }
    })
    let secondChange = firstResult
    secondChange.forEach(word=>{
        // console.log(word)
        if(word.includes(`class='string'`)){
            secondResult.push(word)
        }
        else{
            word = word.replace('div', `<code class='tag'>div</code>`)
            word = word.replace('input', `<code class='tag'>input</code>`)
            word = word.replace('button', `<code class='tag'>button</code>`)
            word = word.replace('section', `<code class='tag'>section</code>`)
            secondResult.push(word)
        }

    })
    resultSentence = secondResult.join(' ')
    /** 시작할때 */
    resultSentence = resultSentence.replace(codeStyles.starter[0], `<code class='starter'>function</code>`)
    resultSentence = resultSentence.replace(codeStyles.starter[1], `<code class='starter'>const</code>`)
    resultSentence = resultSentence.replace(codeStyles.starter[2], `<code class='starter'>let</code>`)
    resultSentence = resultSentence.replace(codeStyles.starter[3], `<code class='starter'>var</code>`)
    /** 주석처리 변경 */
    resultSentence = resultSentence.replace(codeStyles.comments[0], `<code class='comments'>\/\*\*`)
    resultSentence = resultSentence.replace(codeStyles.comments[1], `\*\/</code>`)
    
    div.innerHTML = `<pre><code>${resultSentence}</code></pre>`
}
customStyle()