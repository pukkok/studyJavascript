// 블록 스코프
// 블록 안에서는 변수는 개별로 생각한다
// 블록은 다른 세상
// age = 10 , 3
let age = 3;
if(age < 10){
    let age = 10;
    console.log(age);
}
console.log(age);

console.log('---------------------');

// \,  \n,  \t,  \'

/**
 * 객체 리터럴 방식 선언
 */
const person = {
    name: `minseok`, //문자열
    age: 32, //숫자열
    isActive: false, //불리언
    // key : value
};

console.log(person);

/**
 * 배열 리터럴 방식 선언
 */

const numbers = [0, 'apple', 2, true, 4, 5, 6, 7, 8, 9];
console.log(numbers);
// 배열 하나하나의 값 : 원소(element) 배열요소
// 자바스크립트의 배열은 하나하나가 객체이다.

console.log('-------------------');

const isLoading = true;
const person2 = null; // 개발자가 지정해주는 값, 딱히 초기화하고 싶은 값이 없는 경우
let city; // undefined : 자료형은 초기값을 지정하지 않거나 프로그램적으로 값이 없는 경우;

/**자료형 검사
 * const age = 23;
 * if(typeof age === 'number')
 */

// 객체타입
const fruits = ['apple', 'banana', 'orange'];
const car = {
    name : 'grandier',
    year : 2016,
    owner : 'pukkok',
}

// console.log(fruits instanceof Array);
// console.log(Array.isArray(car));

//함수타입
function changeName(){

}
// console.log(typeof changeName);
if(typeof changeName ==='function'){
    console.log('this is function');
};

console.log('-------------------');

// 숫자타입 integer(정수)
const age2 = 27
const temperature = 32.7
// console.log(Number.isInteger(age2))
// console.log(Number.isInteger(temperature))

// 개발자가 직접 자료형을 반환하는 경우 -> 명시적인 형변환
// 자바스크립트가 자동으로 변환해주는 경우 -> 자동형변환

const age3 = '32';
const temperature2 = '37.6';
const msg = "hello world 237";
const msg2 = "23.7 hello world";

// 숫자 추출할때는 숫자가 앞에있어야만 출력이 가능하다.
const msg_castedA = parseInt(msg);
const msg2_castedA = parseFloat(msg2);

// 숫자타입으로 명시적인 형변환
const age_casted = Number(age3);
const temp_casted = Number(temperature2);
const msg_casted = Number(msg);

// console.log(typeof age3);
// console.log(typeof age_casted);
// console.log(age_casted);

// console.log(typeof temperature2);
// console.log(typeof temp_casted);
// console.log(temp_casted);

// console.log(typeof msg);
// console.log(typeof msg_casted);
// console.log(msg_casted);

// console.log('-------------------');

// console.log(msg_castedA);
// console.log(msg2_castedA);

const age4 = +"3";
// console.log(typeof age4);

const age5 = 17;
const temperature3 = 43.2;
const isLoading2 = false;

const age5_casted = age5.toString();
const temp3_casted = temperature3.toString()
const isLoading2_casted = isLoading2.toString()
//변수.toString() 문자열형으로 변환
//Boolean(변수) 불리언형으로 변환

// console.log(age5_casted)
// console.log(typeof age5_casted)

// console.log(temp3_casted)
// console.log(typeof temp3_casted)


const result = 31 + "3";
console.log(result);

const result2 = 31 * "3";
console.log(result2);

const result3 = "값" + "합" ;
console.log(result3);

//hoisting 변수 선언만 먼저해줌 할당은 나중에
/**
 * ex) console.log(age)
 * var age = 3;
 * log값 => age = undefined => 변수 선언만 해줌.
 * var만 가능
 */

console.log('-------------------');

// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(''));

