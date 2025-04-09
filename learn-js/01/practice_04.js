// 👻 연습문제 04. 조건문
// 1. 학점 계산기
/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/
const score = 87;
let grade = "";

switch (Math.floor(score / 10)) {
  case 10: // 100점
  case 9:
    grade = "A";
    break;
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  default:
    grade = "F";
    break;
}
console.log(`학점은 ${grade}입니다.`);

// 2. 짝수와 홀수 판별
// - 변수 `num`에 임의의 숫자를 할당하세요.
const num = 10;
// - `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 3. 로그인 확인 및 권한 부여 

// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
const isLoggedIn = true;
const isAdmin = false;
// - 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
// - 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
// - 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.
if (!isLoggedIn) {
    // 로그인하지 않은 경우
    console.log("Please log in");
} else if (isLoggedIn && !isAdmin) {
    // 로그인했지만 관리자가 아닌 경우
    console.log("Access denied");
} else if (isLoggedIn && isAdmin) {
    // 로그인했고 관리자일 경우
    console.log("Welcome, admin!");
}

// 4. 숫자 크기 비교 
// - 변수 `a`와 `b`에 임의의 숫자를 할당하세요.
// - `a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater", 
// `b`가 크면 "b is greater", 두 값이 같으면 "a and b are equal"을 출력하세요.
const a = 100;
const b = 10;
if (a > b) {
    console.log("a is greater");
} else if (a < b) {
    console.log("b is greater");
} else console.log("a and b are equal");

// 5.  월별 계절 판별
//     1. 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
//     2. `month`에 따라 해당하는 계절을 출력하세요:
//         - 12, 1, 2: "Winter"
//         - 3, 4, 5: "Spring"
//         - 6, 7, 8: "Summer"
//         - 9, 10, 11: "Fall"
const month = 3;
let weather = "";

switch (month) {
    case 12: 
    case 1:
    case 2:
        weather = "Winter";
    break;
    case 3: 
    case 4:
    case 5:
        weather = "Spring";
    break;
    case 6: 
    case 7:
    case 8:
        weather = "Summer";
    break;
    case 9: 
    case 10:
    case 11:
        weather = "Fall";
    break;
    default:
        weather = "weather";
    break;
}
console.log(`계절: ${weather}`);

// 6. 할인율 계산

// 1. 구매 금액에 따라 할인율을 적용하여 최종 금액을 계산하는 코드를 작성하시오
// 2. 100000원 이상 : 20% 할인
// 3. 50000원 이상 : 10% 할인
// 4. 그외 할인 없음 
const price = 120000;

if (price >= 100000) {
    const total = price / 100 * 80;
    console.log(`최종금액: ${total}`);
} else if (price >= 50000) {
    const total = price / 100 * 90;
    console.log(`최종금액: ${total}`);
} else console.log(`${price}`);


// 7. 1부터 7까지의 숫자를 입력받아 해당 요일(1: 월요일, 7: 일요일)을 출력하는 코드를 작성하시오.
const day = 7;
let dayname = "";

switch (day) {
    case 1:
        dayname = "월요일";
        break;
    case 2:
        dayname = "화요일";
        break;
    case 3:
        dayname = "수요일";
        break;
    case 4:
        dayname = "목요일";
        break;
    case 5:
        dayname = "금요일";
        break;
    case 6:
        dayname = "토요일";
        break;
    case 7:
        dayname = "일요일";
        break;
    default:
        dayname = "요일";
        break;
}
console.log(dayname); 

// 8. 주어진 숫자가 양수, 음수, 또는 0인지 판별하는 코드를 작성하시오.
const num2 = 10;
if (num2 > 0) {
    console.log("양수 입니다.");
} else if (num2 < 0) {
    console.log("음수 입니다.");
} else console.log("0 입니다.")