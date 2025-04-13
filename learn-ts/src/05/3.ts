// 제네릭 part2

{
    // 1. <T>
    // T: Type -> 일반적인 타입 변수(가장 흔하게 사용)
    function returnvalue<T>(value: T): T {
        return value;
    }
    const r1 = returnvalue(1);
    



    // U: Another Type -> 두 번째 타입 변수
    // 두 개의 매개변수를 받을 때
    function returnTuple<T, U>(a: T, b: U): [T, U] {
        return [a, b];
    }
    const r3 = returnTuple(1, 2);
    const r4 = returnTuple([1, 2, 3], {name: "sucoding"});



    // K: Key -> 객체 타입의 키
    // V: Value -> 객체 타입의 값
    // 제네릭에 타입 제약 조건
    // 반환값은 무조건 V의 속성값임을 보장해줌.
    function getValue<K extends keyof V, V> (obj: V, key: K): V[K] {
        return obj[key];
    }

    const name = getValue({name: "Kim", age: 20}, "name");
    const gender = getValue({gender: "male"}, "gender");
    console.log(name); // Kim
    console.log(gender); // male



    // E: Element -> 주로 "배열" 요소의 타입 변수
    function firstElement<E> (element: E[]): E {
        return element[0];
    }
    firstElement([1, 2, 3]);
    firstElement(["A", "B", "C"]);
    // firstElement("a"); // 배열이 아니라서 에러남



    // R: Return Type -> 반환 값의 타입 (함수에서 사용)
    function returnValue<R>(value: R): R {
        return value;
    }
      
    const num = returnValue<number>(123);         // number
    const str = returnValue<string>("hello");     // string
    const obj = returnValue<{ name: string }>({ name: "Seoyeong" }); // object
}