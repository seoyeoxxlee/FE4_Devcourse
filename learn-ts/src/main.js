// 필수 문법
// 1. 템플릿 문자열
// 1.1 백틱(``) 문자열을 정의하는 방법, 영문 자판일 때만 나옴.

const uname = "sucoding";
const greet = `Hello, ${uname}!`;

//console.log(greet);

// 2. 화살표 함수
// 2.1 함수를 화살표를 사용해서 정의하는 방법
// 2.1.1 함수 선언문
function sum1(a, b) {
    return a + b;
}

// 2.1.2 함수 표현식
const sum2 = function sum2(a, b) {
    return a + b;
};

// 2.1.3 화살표 함수
const sum3 = (a, b) => {
    return a + b;
};
// 화살표 함수 축약형
const sum4 = (a, b) => a + b;


// 3. 구조 분해 할당 (비구조화 할당)
// 3.1 분해해서 할당하겠다.
const [a, ...rest] = ["apple", "banana", "orange"];
// 구조분해 전
const foods = ["apple", "banana", "orange"];
console.log(foods[0]); // 대괄호 연산자
console.log(foods[1]); 
console.log(foods[2]); 
// 구조분해 후
const [apple, banana, orage] = ["apple", "banana", "orange"];
console.log(apple); // 대괄호 연산자
console.log(banana); 
console.log(orage); 

// 3.2 객체에서의 구조분해 할당 전
const animal = {
    animalName: "곰이",
    animalType: "고양이",
    animalAge: 10,
    animalGender: "male",
};
console.log(animal.animalName);
// 객체에서의 구조분해 할당 후
const {animalName, animalType, animalAge, animalGender} = {
    animalName: aname, // 명명도 가능
    animalType,
    animalAge,
    animalGender,
} = {
    animalName: "곰이",
    animalType: "고양이",
    animalAge: 10,
    animalGender: "male",
};
console.log(aname); // 이렇게도 사용 가능
console.log(animalType);




const {
    id,
    profile: { name: sname, age, gender }
} = animal_2;

console.log(sname);       // "곰이"
console.log(age);         // 20
console.log(gender);      // "male"
console.log(animal_2.profile.age); // 20



function printInfo({name, age}) {
    console.log(`${name}, ${age}`);
}
printInfo({
    name: "sucoding",
    age: 20,
});


// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = "name";
const user = {
    [key]: "sucoding",
};
console.log(user.name);


// 5. 스프레드 연산자
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

const { name, ...restProperty } = {
    name: "sucoding",
    age: 20,
    gender: "male",
};

console.log(name);
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사
// 스프레드(중첩자)는 깊은 복사처럼 보이지만 깊은 복사가 되지 않음
// 깊은 복사 (deep copy)
// 얕은 복사 (shallow copy)
const colors = ["red", "orange", "banana", {special: "pink"}];
const copyColors = [...colors];

copyColors[0] = "violet";
copyColors[3].special= "grey";

console.log(colors);
console.log(copyColors);

// 동적 타이핑
// : 할당과 동시에 타입이 결정된다. -> 자바 스크립트의 단점
let num = null;
num = 10;