{
    // 제네릭 "타입 제약 조건"
    // extends - 모든 것을 다 받았던(범용적) 제네릭에 타입 제한 조건을 주는 것.
    // 아래 예제 코드로는 length의 타입은 number로만 받겠다. -> 10 같은 정수는 length 속성이 없으므로 안 받아줌. (제네릭 조건에 부합하지 않음)
    function getLength<T extends {length: number}> (value: T): number {
        return value.length;
    }

    getLength([1, 2]); // ok
    getLength("abc"); // ok, 래퍼 객체
    // getLength(10); // not ok (length 속성이 없어서 에러남)
}

{
    // 제네릭 K, V 설명
    // 키 선택 타입 별칭
    // keyof -> 타입의 키를 추출하는 속성!
    type Person = {
        name: string;
        age: number;
        gender: string;
    };

    type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
    const key: PersonOfKeys = "gender";
}

{
    // 매개변수에 지정되는 T와 U의 순서 중요함.
    function returnTuple<T, U>(a: T, b:U): [T, U] {
        return [a, b];
    }
    const r1 = returnTuple(1, "a"); 
}