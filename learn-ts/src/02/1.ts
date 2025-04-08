// var let const

{
    // 코드 블럭 (중괄호)
    
    // 1. string
    let name: string = "Jerry";
    let greeting: string = `Hello, ${name}`;
    let single: string = "Single Quote";
    let multiLine: string = `This is a 
    multiline string`;

    // 2. number
    let age: number = 10; // 10진수
    let hex: number = 0xff; // 16진수
    let binary: number = 0b1010; // 2진수
    let float: number = 3.14; // 실수

    // 3. boolean (논리형)
    // truthy, falsy
    // falsy -> 0, -0, "", null, undefined, NaN
    // truthy? -> falsy를 제외한 모든 값
    let bool1: boolean = true;
    let bool2: boolean = false;
    let bool3: boolean = !0;
    let bool4: boolean = 10 > 20;
    // let bool5: boolean = null; // 에러남

    // 4. null
    let nothing: null = null;

    // 5. undefined
    let notDefined: undefined = undefined;

    // 6. any - 아무거나 허용하겠다
    // -> 타입을 검사하지 않겠다.
    // -> 타입 검사를 무력화하는 타입이기 때문에 남용을 피해야 한다.
    // 최대한 안 쓰도록 해야 한다.
    let anything: any = 10;
    anything = 20;
    anything = 30;
    anything = "A";
    anything = true;
    anything = null;
    anything = undefined;

    // 7. unkown (any 순한맛, 안전한 any)
    // -> 타입 검사를 하지 않는다.
    // -> 단, 그 값을 사용하려고 할 때에는 타입을 검증해야 한다.
    let input: unknown = "Hello";
    input = 10;
    input = true;
    input = undefined;
    input = null;
    input = 3.14;
    
    if (typeof input === "number") {
        console.log(input.toFixed(0));
    }

    // 8. 배열 (array)
    let arr: [] = [];
    let numArr: number[] = [10, 20] // number로 이루어진 배열이라는 것을 선언해야 한다.
    let strArr: string[] = ["A", "B", "C"] // string의 배열이다.
    let boolArr: boolean[] = [true, false]; // boolean의 배열이다.
    let undefinedArr: undefined[] = [undefined, undefined];
    let nullArr: null[] = [null, null];
    let objArr: {}[] = [{}, {}]

    let matrix: number[][] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    let cube: number[][][] = [
        [
            [1, 2],
            [3, 4],
        ],
        [
            [5, 6],
            [7, 8],
        ],
    ];


    // 배열에 push할 때에는 배열에 타입이 지정된 값만 
    let pushedArr: (number | string)[] = [];
    pushedArr.push(10);
    pushedArr.push("A");


    // 9. 튜플(tuple)
    // 특정 형태를 갖는 배열을 의미
    // 튜플의 단점 -> 고정된 배열의 형태 값만 가져올 수 있다. 
    let mixArr: (number | string)[] = [10, "A"]; // 튜플 단점의 개선방법 (number나 string이 올 수 있다.)

    // 타입 추론 -> 타입 스크립트가 타입을 자동으로 추론해주는 기능
    let mixArr0: [number, string] = [10, "A"];
    mixArr0.push("A");

    let mixArr1: [number, string] = [10, "A"];
    let mixArr2: [number, number[]] = [10, [20, 30]];
    let mixArr3: [number, [], {}] = [10, [], {}];

    let mixTuple: [number, string, object][] = [
        [1, "hello", {key: "value"}],
        [2, "world", {key: "example"}],
    ];


    // 10. bigint
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(9007199254740991);
    console.log(9007199254740997); // ~~~91 이상으로 값이 정상적으로 출력되지 않음. -> 해결방법: 큰 수 뒤에 n 붙이기.

    const bigNumber: bigint = 9007199254740991n;
    console.log(bigNumber); // 정상 출력

    // bigint는 bigint끼리만 연산이 가능하다.
    console.log(100n + 200n); // 300n
    // console.log(100n + 200); // error
}