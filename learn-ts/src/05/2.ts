{
    // 1. 제네릭 전
    function getFirstElement(element: number[] | string[] | boolean[]): number | string | boolean {
        return element[0];
    }

    const r1 = getFirstElement([1, 2 ,3]); // 1
    const r2 = getFirstElement(["A", "B", "C"]); // "A"
    const r3 = getFirstElement([true, false, true]); // true
    console.log(r1);
}
{
    // 1. 제네릭 후
    // <Type> -> Type이라는 이름을 가진 타입 변수
    function getFirstElement<Type>(element: Type[]): Type {
        return element[0];
    }

    const r1 = getFirstElement<number>([1, 2 ,3]); // 1
    const r2 = getFirstElement<string>(["A", "B", "C"]); // "A"
    const r3 = getFirstElement([true, false, true]); // 타입 안 적어도 추론 해줘서 에러 안 남
}
{
    // 1. 제네릭 후
    function getFirstElement<T>(element: T[]): T {
        return element[0];
    }

    const r1 = getFirstElement<number>([1, 2 ,3]); // 1
    const r2 = getFirstElement(["A", "B", "C"]); // "A"
    const r3 = getFirstElement([true, false, true]); // true
}

{
    //  함수 표현식(화살표 함수)일 때의 제네릭 표현
    const getFirstElement = <T>(element: T[]): T => {
        return element[0];
    }

    const r1 = getFirstElement<number>([1, 2 ,3]); // 1
    const r2 = getFirstElement(["A", "B", "C"]); // "A"
}

{
    // 함수 표현식일 때의 제네릭 표현
    const getFirstElement = function getFirstElement<T>(element: T[]): T {
        return element[0];
    }
}

{
    // 변수에 타입을 지정할 때의 제네릭 표현
    const getFirstElement: <T>(element: T[]) => T = (element) => {
        return element[0];
    }
}

{
    // 타입 별칭
    // 제네릭 타입 별칭
    type MyFunc<T> = (element: T[]) => T;

    const getFirstElement: MyFunc<unknown> = (element) => { // MyFunc<unknown> -> 어떤 값을 받아올 건지 명시적으로 적어줌
        return element[0]; // unknown -> 자동 타입 추론 (범용)
    }

    const r1 = getFirstElement([1, 2 ,3]); // 1
    const r2 = getFirstElement(["A", "B", "C"]); // "A"
    const r3 = getFirstElement([true, false, true]); // true
    const r4 = getFirstElement([1, "A"]);
}

{
    // 타입 별칭
    // 타입을 변수에 저장한 것에 불과함
    type MyFunc = <T>(element: T[]) => T;
    const getFirstElement: MyFunc = (element) => {
        return element[0];
    }

    const r1 = getFirstElement([1, 2 ,3]); // 1
    const r2 = getFirstElement(["A", "B", "C"]); // "A"
    const r3 = getFirstElement([true, false, true]); // true
    const r4 = getFirstElement([1, "A"]);
}

{
    // 기존 인터페이스
    interface sum {
        (a: number, b: number): number;
    }
    const sum: sum = (a, b) => a + b;


    // 제네릭을 적용한 인터페이스로
    interface MyFunc<T> {
        (element:T[]): T;
    }
    const getFirstElement: MyFunc<unknown> = (element) => {
        return element[0];
    }
}