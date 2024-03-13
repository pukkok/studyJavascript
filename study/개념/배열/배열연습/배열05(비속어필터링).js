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
    let indexArr = []
    let textBox = []
    if(comment !== ''){
        insults.forEach((insult)=>{
            let clearIndex = comment.indexOf(insult)
            
            while(clearIndex !== -1){
                indexArr.push({index : clearIndex , insultLength : insult.length})
                clearIndex = comment.indexOf(insult, clearIndex+1)
            }
        })
        
        if(indexArr[0]){
            //첫줄 뽑기
            textBox.push(comment.slice(0, indexArr[0].index))
            for(i=0;i<indexArr.length; i++){
                // 욕 필터링
                // index 욕 위치, length 욕길이
                textBox.push('😊'.repeat(indexArr[i].insultLength))
                    // 욕 필터링 뒷부분
                    if(i===indexArr.length-1){
                        let text = comment.slice(indexArr[i].index + indexArr[i].insultLength)
                        textBox.push(text)
                    }else{
                        let text = comment.slice(indexArr[i].index + indexArr[i].insultLength, indexArr[i+1].index)
                        textBox.push(text)
                    }
            }    
        }else{
            textBox.push(comment)
        }
        console.log('결과', textBox)
        console.log('결과', textBox.join(''))
        // console.log('결과', texter)


        // if(indexArr[0]){
        //     indexArr.forEach((obj, i)=>{ 
        //         textBox.push(comment.slice(0, indexArr[0].index))
        //         textBox.push('😊'.repeat(obj.insultLength))
        //         texter = comment.slice(0, indexArr[0].index)
        //             // let text = '😊'.repeat(obj.insultLength) + comment.slice(obj.index + obj.insultLength)
        //             let text = comment.slice(obj.index + obj.insultLength)
        //             texter = text
        //             textBox.push(text)
                
        //     })
        // }else{
        //     textBox.push(comment)
        // }
        // console.log('결과', textBox)
        // console.log('결과', texter)


    }else{
        alert('You need to give a comment !')
    }
}

submitBtn.addEventListener('click', addComment)