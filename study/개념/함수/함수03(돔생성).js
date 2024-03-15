// 클로저 : 여러번 생성이 가능
// 클로저 + 즉시실행함수 : 클로저가 한번만 생성됨
// e.js jsx

const Component = (function(){
    const _name = '' // 컴포넌트의 기능을 설명해주는 프라이빗 변수

    /** ex = { id : 'main'} */
    function _setAtrributes(el, attrs){ // attrs : 객체
        if(attrs === undefined || 
            attrs === null || 
            Object.keys(attrs).length === 0) return;
        
        for(let prop in attrs){
            el.setAttribute(prop, attrs[prop]) // setAttribute 원래 있는 함수
        }
    }
    function _setValues(el, values){ // values: 배열
        if(values === undefined ||
            values === null ||
            values.length === 0) return;
        
        el.innerHTML = ''
        values.map(function(value){ // value : dom 객체 (문자열)
            el.append(value)
        })
    }

    /** dom 객체를 생성해주는 퍼블릭 메서드 */ 
    const create = function(tag, attrs, values){ // attribute : 기여하다
        const el = document.createElement(tag) // tag : 'div', 'img'
        _setAtrributes(el, attrs)// dom 객체의 속성 설정
        _setValues(el, values) // dom 객체의 컨텐츠(자식요소) 추가
        return el
    }

    /** dom 객체를 변경해주는 퍼블릭 메서드 */
    const update = function(selector, attrs, values){
        const targetE1 = document.querySelector(selector)
        if(!targetE1) return;
        _setAtrributes(targetE1, attrs)
        _setValues(targetE1, values)
        return targetE1
    }

    return {
        create,
        update,
        get name(){
            return _name
        },
        set name(value){
            _name = value
        }
    }

})() // 즉시 실행함수 : () 함수정의 후 곧바로 실행

const mainDiv = Component.create('div', { class: 'main' }, [
    Component.create('h1', {class: 'title'}, ['main page']),
    Component.create('textarea', {class:'text-area'})
])
console.log(mainDiv)
mainDiv.name = 'main page'
console.log(mainDiv.name)