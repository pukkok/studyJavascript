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
        const abc = [ 123 ]
        let def = { ab : 12 }
        const div = document.createElement('div')
        div.className = 'search-box'
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.innerText = '검색'
        div.append(input, button)
        root.append(div)
    }
    div = letdiva('테스트 테스트', "test", `const는 ㅁㅁ다` `이것도 "되나" '안되나 "되지" ' 되나 확인`)
    div = construct('테스트 테스트', "test", `const는 ㅁㅁ다` `이것도 되나 확인`)
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
    quotation : [/\'/ , /\"/ , /\`/]
}

let pureSentence = `${testFunction}`
let firstResult = []
let secondResult = []
let resultSentence = []

const searchString = (str, filter) => {
    let check = ''
    let IndexArr = []
    let newStr = str
    /** 문자열 인덱스값 찾기 */
    if(str.includes(filter)){
        let index = str.indexOf(filter)
        while(index !== -1){
            IndexArr.push(index)
            index = str.indexOf(filter, index+1)
        }
    }

    /** 문자열 class='string' 변환 */
    if(IndexArr.length!==0){
        for(i=0; i<IndexArr.length; i+=2){
            check = str.slice(IndexArr[i],IndexArr[i+1]+1) // 원본은 건들지 않는다.
            newStr = newStr.replace(check, `<code class='string'>${check}</code>`) // 복사본으로 수정
        }
    }
    return newStr
}


const customStyle = () =>{
    /** 문자열 포함 검사 */
    let stringCheck1 = searchString(pureSentence, "'")
    let stringCheck2 = searchString(stringCheck1, '"')
    let stringCheck3 = searchString(stringCheck2, "`")
    
    let dotCheck = stringCheck3.split(' ')
    let dotWordArr = []
    // console.log(dotResult)
    dotCheck.forEach(word=>{
        if(word.includes('.')){
            let index = word.indexOf('.')
            while(index !== -1){
            dotWordArr.push(word)
            index = word.indexOf('.', index+1)
            }
        }
    })
    
    let stringFilter = stringCheck3.split(' ')
    /** []. , () , ( , ) , => , = ] 체크  */
    stringFilter.forEach((word)=>{
        if(word.includes('.')){
            // firstResult.push(`<code class='tag'>${word.split('.')[0]}</code><code class='normal'>.</code>${word.split('.')[1]}`)
            firstResult.push(`<code>${word.split('.')[0]}</code><code class='normal'>.</code>${word.split('.')[1]}`)
        }else if(word.includes('()')){
            firstResult.push(`<code class='key'>${word.split('()')[0]}</code><code class='normal'>()</code><code>${word.split('()')[1]}</code>`)
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
    console.log(secondChange)
    secondChange.forEach(word=>{
        if(word.includes(`class='string'`)){
            // console.log(word)
            secondResult.push(word)
        }
        else{
            // word = word.replace('div', `<code class='tag'>div</code>`)
            // word = word.replace('input', `<code class='tag'>input</code>`)
            // word = word.replace('button', `<code class='tag'>button</code>`)
            // word = word.replace('section', `<code class='tag'>section</code>`)
            // word = word.replace('root', `<code class='tag'>root</code>`)
            // word = word.replace(codeStyles.starter[0], `<code class='starter'>function</code>`)
            // word = word.replace(codeStyles.starter[1], `<code class='starter'>const</code>`)
            // word = word.replace(codeStyles.starter[2], `<code class='starter'>let</code>`)
            // word = word.replace(codeStyles.starter[3], `<code class='starter'>var</code>`)
            secondResult.push(word)
        }
    })

    resultSentence = secondResult.join(' ')
    /** 시작할때 */
    /** 주석처리 변경 */
    resultSentence = resultSentence.replace(codeStyles.comments[0], `<code class='comments'>\/\*\*`)
    resultSentence = resultSentence.replace(codeStyles.comments[1], `\*\/</code>`)
    
    div.innerHTML = `<pre>${resultSentence}</pre>`
}
customStyle()