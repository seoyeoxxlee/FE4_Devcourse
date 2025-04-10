{
    // 범용적인 타입 지정 방법
    // 인덱스 시그니처 -> 마냥 좋은 것은 아님. 객체라서 가능한 방법.
    // 옵셔널 프로퍼티 -> ?
    // readonly 프로퍼티 -> readonly
    // 인덱스 시그니처 -> 객체의 속성 이름(key)과 속성 값(value의 타입을 명시할 수 있는 기능.
    
    // // 문법 요약
    // interface MyType {
    //     [key: KeyType]: ValueType;
    // }

    const obj: {
        [key: string]: string | number;
    } = {
        name: "sucoding",
        age: 20,
    };

    const name = obj.name;

    const obj2: {
        name: string;
        age: number;
    } = {
        name: "sucoding",
        age: 20,
    };
}