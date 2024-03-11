const commentInput = document.getElementById('user-comment-input') // 사용자 댓글 입력창
const userComments = document.getElementById('user-comments') // 사용자 댓글 리스트 출력

const submitBtn = document.getElementById('user-comment-add') //  사용자 댓글 추가 버튼
const comments = [] // 사용자 댓글목록 배열
const insults = ['shit', 'fuck', 'poop', 'dumb', '새끼', '놈', '똥', '씨발', '좇', '시발', '좆', '죽어', '뒤져', '병신', '년']
//😊

// 댓글 정보로부터 댓글에 대한 DOM 객체 생성 및 반환
function buildElement(comment){
   // 구현하기
   const div = document.createElement('div')
   div.className = 'comment'
   div.innerText = comment 
   return div
}
// comments 배열을 이용하여 화면에 댓글목록 보여주기
function displayComments(comments){
    userComments.innerHTML = ''
    // 구현하기
    userComments.append(buildElement(comments))
}

// 입력창 초기화
function initInput(){
    commentInput.value = ''
}

// 댓글 추가하기
function addComment(){
    const comment = commentInput.value
    
    if(comment !== ''){

        let clearComment = []
        let tester2 = insults.map((insult)=>{
            // console.log(splitInsults)
            if(comment.includes(insult)){
                let splitInsults = comment.split(insult)[1]
                insult = '😊'.repeat(insult.length)
                clearComment = [insult, splitInsults]
                return clearComment.join('')
            }
            return clearComment=[...comment]
        })
        console.log(clearComment)
        // console.log((tester2).join(''))

        // let tester = splitComments.reduce((sentence, word)=>{
        //     sentence += word
        //     let newvalue = insults.map((insult)=>{
        //         if(sentence.includes(insult)){
        //             sentence = sentence.split(insult)[0]
        //             insult = '😊'.repeat(insult.length)
        //             return sentence = insult
        //         }
        //             return sentence
        //     })
        //     console.log(newvalue)
        //     return sentence
        // },'')
        // console.log(tester)
        // console.log(tester)
        // displayComments(result)
    }else{
        alert('You need to give a comment !')
    }
}

submitBtn.addEventListener('click', addComment)