// 타입 별칭
// type -> 나만의 타입을 지정하는 방법

// 장점1: 나만의 타입을 지정하여 사용할 수 있음
// 장점2: 한 번 정의한 타입을 계속 재사용할 수 있음

// number, string, boolean ...
type Level = number; // 타입 별칭 정의 -> Level이라는 이름을 number로 정의해서 Level이라는 타입을 사용할 수 있다.
let level: Level = 10;


type ComplexType = {
    id: number;
    value: string;
    attributes: {weight: number; color: string};
}

let complexStructure: {
    id: number;
    value: string;
    attributes: {weight: number; color: string};
}[] = [
    { id: 1, value: "apple", attributes: {weight: 1.2, color: "green"}},
    { id: 2, value: "banana", attributes: {weight: 0.5, color: "yellow"}},
    { id: 3, value: "cherry", attributes: {weight: 0.2, color: "red"}},
]