// 트랜스 컴파일(컴파일링): 웹 브라우저에서 ts 파일을 실행하기 위해 변환하는 작업
// ts -> js
// 웹 브라우저에서는 html, css, js 파일만 실행이 가능하기 때문에 ts와 같은 파일들은 트랜스 컴파일을 통해 변환 작업을 거쳐야 함.

// 타입 스크립트란?
// 자바 스크립트 + 타입 시스템을 추가한 언어

// 자바 스크립트 -> 타입 스크립트
// 자바 스크립트 -> 문법
// 타입 스크립트 타입 시스템을 배우는 것.
// 타입 스크립트는 결국 값의 타입을 지정해 주는 것. (사전에 타입 검증 가능)

// 타입 스크립트가 왜 어렵다고 생각이 드냐? -> 값에 대한 타입을 지정하는 방법이 많아서

// 자료형: string, number, boolean, object, array, symbol, tuple, undefined, null, any, bigint
// 정적 타이핑

// 자바 스크립트 -> 동적 타입 시스템
// 타입 스크립트 -> 정적 타입 시스템

{
    // let name = "sucoding"; // js
    let name: string = "sucoding" // ts

    // let age = 20; // js
    let age: number = 20; // ts

    // let bool = true; // js
    let bool: boolean = true; // ts

    // 객체
    // let obj = {}; // js 
    let obj: object = {}; // js

    // 배열
    // let arr = []; // js
    let arr: [] = []; // ts

    // symbol
    // let sym = Symbol("a"); // js
    let sym: symbol = Symbol("a"); // ts

    // undefined
    // let und = undefined; // js
    let und: undefined = undefined; // js

    // null
    // let nul = null; // js
    let nul: null = null; // ts

    // bigint
    // let big = 100n; // js
    let big : bigint = 100n; // ts
}