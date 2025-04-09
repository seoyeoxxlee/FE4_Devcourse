// 연습문제 - 쉬움

// Q1. 
//[연습문제 - 1부터 9까지 출력하기]
for (let i= 1; i<10; i++) {
    console.log(i);
}

// Q2.
/*
[연습문제 - 음수 걸러내기]
배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.
*/
let numArr = [10, -10, 20, -30, 40];
let result = [];
for (let i=0; i<numArr.length; i++) {
    if (numArr[i] > 0) {
        result.push(numArr[i]);
    }
}
let sum = result.reduce((acc, cur) => acc + cur, 0);
console.log(sum);


// Q3.
/*
[연습문제 - 홀짝 구분하기]

0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
구분하여 출력하도록 코드를 작성해주세요.

출력 예시 ) 
0 짝수 
1 홀수
2 짝수
3 홀수
4 짝수
... 중략 .. 
15 홀수
*/
for (let i=0; i<16; i++) {
    if (i % 2 === 0) {
        console.log(i, `짝수`);
    } else console.log(i, `홀수`);
}


// 연습문제 - 어려움
// 1. 피보나치 수열 계산
let n = 10; // 원하는 항의 수
let res = [0, 1];
// 피포나치 수열 로직
for (let i=2; i<n; i++) {
    res[i] = res[i-1] + res[i-2];
}

console.log(`피보나치 수열(${n}항):`, res); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// 2. 소수 찾기
let start = 1, end = 100;
let results = [];

for (let num = start; num <= end; num++) {
    if (num < 2) continue; 

    let isPrime = true;

    // 2부터 sqrt(num)까지 나눠보며 소수 판별
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        results.push(num);
    }
}

console.log(results);

// 3. 배열 요소의 합 구하기
const numbers = [5, 10, 15, 20, 25]; // 배열
let total_sum = 0;

for (let i=0; i<numbers.length; i++) {
    total_sum += numbers[i];
}
console.log(total_sum); // 75

// 4. 문자열 뒤집기
const str = "Hello, World!";
let reversed = "";

for (let i=str.length-1; i>=0; i--) {
    reversed += str[i];
}

console.log("뒤집힌 문자열:", reversed); // "!dlroW ,olleH"

// 5. 특정 숫자까지의 곱 계산
let m = 5; // 예시 숫자
let factorial = 1;

for (i=m; i>0; i--) {
    factorial *= i;
}

console.log(`${m}의 팩토리얼:`, factorial); // 출력 120

// 6. 암스트롱수 
for (let i = 100; i <= 999; i++) {
    const hundred = Math.floor(i / 100);
    const ten = Math.floor((i % 100) / 10);
    const one = i % 10;

    const sum = hundred ** 3 + ten ** 3 + one ** 3;

    if (i === sum) {
        console.log(i);
    }
}