{
    // 유니온 타입
    // | -> 파이프 기호

    // 타입 가드 (Type Guard) -> 타입을 좁혀주는 행위
    
    function printValue(value: number | string | { name: string }): void {
        if (typeof value === "number") console.log(value.toFixed(0));
        else console.log(value);
    }
    printValue(10);
    printValue("A");
    printValue({ name: "kimbboongbbang"});

    // n1: number, n2: number -> number 결과가 number인 것 하나만 if문으로 작성하면 편하다.
    // n1: string, n2: number -> string
    // n1: number, n2: string -> string
    // n1: string, n2: string -> string

    const sum = (n1: number | string, n2: number | string): number | string => { 
        if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
        else return `${n1}${n2}`;
    };
    console.log(10 + 20);
    console.log("A" + "B");

    // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (유니온)
    const result1 = sum(1.2, 2.3);
    console.log(result1); // 3.5
    // console.log(result1.toFixed(0)); // 왜 string 에러가 날까? -> 불확실함 (result1의 타입 추론 결과가 (number | string) 이라서)
    
    function sum_overload (n1: string, n2: string): string; // 함수 오버로드 문법
    function sum_overload (n1: string, n2: number): string; // 함수 오버로드 문법
    function sum_overload (n1: number, n2: string): string; // 함수 오버로드 문법
    function sum_overload (n1: number, n2: number): number; // 함수 오버로드 문법
    // 함수 오버로드의 원본 함수
    function sum_overload (n1: number | string, n2: number | string): number | string { 
        if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
        else return `${n1}${n2}`;
    };

    const result2 = sum("A", "B");
    

    // 타입 단언 ->  타입스크립트의 타입 추론에 기대하지 않고 개발자가 직접 타입을 명시하여 해당 타입으로 강제하는 것을 의미
    function sum_assertion (n1: number | string, n2: number | string): number | string { 
        if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
        else return `${n1}${n2}`;
    };
    const result3 = sum(1.2, 2.3);
    const result4 = sum("A", "b");



    // never -> 절대로 반환되지 않는 값
    function throwError(message: string): never {
        throw new Error(message);
    }

    // hot module reload -> H, M, R
    function watchHMR(): never {
        while (true) {
            // ...
        }
    }

    
}

