// static -> 정적 속성
// static이 붙은 메서드 -> 정적 메서드
// static이 붙지 않은 속성 -> 인스턴스 속성
// static이 붙지 않은 메서드 -> 인스턴스 메서드 
class Maths {
    static PI = 3.14;
    static add(n1, n2) {
        return n1 + n2;
    }
}

// static이 붙은 것은 생성자 함수 내부에 남아있음. = static은 인스턴스화 되지 않는다.
// 그래서 m은 PI 값에 절대 접근할 수 없고, 생성자 함수를 직접 참조하는 수밖에 없다.
const m = new Maths();
console.log(m);
console.log(m.PI);
console.log(Maths.PI);
console.log(Maths.add(10, 20)); // 생성자 함수를 직접 참조하여 정적 메서드인 add() 호출