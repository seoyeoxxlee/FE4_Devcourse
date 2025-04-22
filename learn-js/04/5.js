// clas String {}
// function String () {}
const a = new String("Hello"); // a는 인스턴스다 -> __proto__ 속성이 있기 때문에 toUpperCase()라는 메서드에 접근할 수 있음
console.log(a.toUpperCase());

// 래퍼 객체 -> 기본 자료형을 일시적으로 객체로 감싸서 인스턴스화 시키고, 프로토타입 객체에 접근 가능하도록 함. 와 어려워요
// String, Number, Boolean -> 이 세 가지만 래퍼 객체로 제공한다.

const b = "Hello"; // b는 인스턴스도, 객체도 아닌 기본 자료형에 속하는 문자열이다. -> 근데 어떻게 toUpperCase()에 접근할 수 있는가?
console.log(new String(b).toUpperCase()); // -> JS에서 내부적으로 이 코드의 과정을 거침. -> toUpperCase()에 접근 가능해짐.
// new String(b) -> 기본 자료형을 일시적으로 객체로 감싸서 인스턴스화 시킨 래퍼 객체.
console.log(b.toUpperCase()); // 출력이 되면 다시 원래대로...