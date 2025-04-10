{
    // 1. 인터페이스 -> 객체의 구조를 정의, 해당 객체가 가져야 할 프로퍼티와 타입을 명시
    // 1.1 객체 타입을 지정할 때 사용합니다. (나만의 객체 타입) // (타입별칭 - 나만의 타입)

    // 차이점_1
    // 타입 별칭은 원시 타입도 타입 별칭으로 나타낼 수 있는 반면, 
    // 인터페이스는 only 객체만 가능하다. -> 가장 큰 차이점

    // 차이점_2
    // 타입 별칭은 마우스 호버 시 내용 확인 가능.
    // 인터페이스는 마우스 호버 시 별 다른 내용 없음.

    // 차이점_3
    // 타입 별칭은 똑같은 타입을 2개 지정할 수 없다.
    // 인터페이스는 식별자가 중복 선언 가능. -> 선언 병합: 타입 스크립트가 같은 이름의 인터페이스들을 자동으로 합쳐준다.
    // 인터페이스는 상속 가능 !
    
    // User 타입은 name과 age라는 프로퍼티를 가진 객체를 의미
    interface User {
        name: string;
        readonly age?: number;
    }

    interface User {
        gender?: string;
    }

    const user1:  User = {
        name: "alice",
        age: 20
    };
}

{
    interface User {
        name: string;
        age: number;
        // greet: () => void; 
        greet(): void; // 윗줄과 같은 의미
    }

    const user = {
        name: "sucoding",
        age: 20,
        greet() {
            console.log(`${this.name}, ${this.age}`);
        },
    };
}

{
    type sumFunc = (n1: number, n2: number) => number;
    // 인터페이스로 함수 정의 -> 인터페이스 함수
    interface sumFuncInterface {
        (n1: number, n2: number): number;
    }

    const sum: sumFuncInterface = (n1, n2) => n1 + n2;

}

{
    // 인터페이스의 상속
    // 기존 인터페이스(부모)의 속성을 새로운 인터페이스(자식)가 이어받아서 확장하는 것
    interface Animal {
        name: string;
    };

    interface Dog {
        name: string;
        bark(): void; // 멍멍
    };

    const dog: Dog = {
        name: "puppy",
        bark() {
            console.log("멍멍");
        },
    };

    interface Cat {
        name: string;
        bark(): void; // 애옹
    };

    const cat: Cat = {
        name: "kitty",
        bark() {
            console.log("애옹");
        },
    };
}

{
    interface A {
        a: string;
    }

    interface B {
        b: number;
    }

    // 인터페이스 A와 B를 상속받음
    interface C extends A, B {
        c: boolean;
    }

    const cValue: C = {
        a: "a",
        b: 10,
        c: true,
    };
}

{
    // 위 상속을 타입 별칭으로 바꾸어 본다면?
    type A = {
        a: string;
    };

    type B = {
        b: number;
    };

    type C = A & B & {
        c: boolean;
    };

    const cValue: C = {
        a: "a", 
        b: 10,
        c: true,
    };

    // -> interface로 할 수 있는 것은 타입 별칭으로도 다 가능하다, 그러나 더 편한 ..
    // 단순한 객체의 구조를 정의할 때에는 -> 인터페이스 사용
    // 유니언, 튜플, 기본 타입, 함수 등을 정의할 때에는 -> 타입 별칭 사용
    // API의 응답 값을 지정할 때에도 -> 타입 별칭 사용
}