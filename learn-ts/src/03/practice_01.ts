{
    // 함수 타입 연습문제 (함수 정의와 호출 포함)

    // 문제 1: 두 수의 합을 구하는 함수
    // 다음과 같은 `add` 함수가 있습니다. `add` 함수는 두 개의 숫자(`a`, `b`)를 받아 그 합을 반환합니다. 
    // 적절한 타입을 붙여서 함수 정의를 하고, 두 개의 숫자를 넘겨서 호출하고 결과를 출력해보세요.
    function add(a: number, b: number): number {
        return a + b;
    }
    // const add = (n1: number, n2: number): number => n1 + n2;
    const result = add(10, 5);
    console.log(result);

    // 문제 2: 이름을 받아 인사하는 함수
    // `greet` 함수는 사용자의 이름을 받아 `"Hello, {name}!"`을 출력하는 함수입니다. 
    // `name` 파라미터는 필수로 받아야 하며, 적절한 타입을 붙여서 함수 정의를 하고, 함수를 호출해보세요.
    function greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }
    const greeting = greet('Jerry');
    console.log(greeting);

    // 문제 3: 숫자 배열을 받아 합을 구하는 함수
    // `sumAll` 함수는 여러 개의 숫자를 받아 그 합을 반환하는 함수입니다. 
    // `sumAll` 함수는 `rest parameter`를 사용하여 배열의 길이에 관계없이 숫자들을 받을 수 있어야 합니다. 
    // 함수 호출 후 결과를 출력해보세요.
    function sumAll(...nums: number[]): number {
        return nums.reduce((result, num) => result + num, 0);
    }
    const total = sumAll(1, 2, 3, 4);
    console.log(total);

    // 문제 4: 기본값을 설정한 덧셈 함수
    // `sum` 함수는 두 숫자를 더하는 함수입니다. `a`는 필수 매개변수로 받고, `b`는 기본값을 `0`으로 설정합니다. 
    // 이 함수에 타입을 지정하고 호출해보세요.
    const sum = (a: number, b: number = 0): number => a + b;
    const result_sum = sum(5);
    console.log(result_sum);

    // 문제 5: 두 수를 곱하는 함수
    // `multiply` 함수는 두 숫자(`a`, `b`)를 받아 그들의 곱을 반환하는 함수입니다. 
    // 매개변수와 반환값의 타입을 적절히 지정하고, 함수를 호출하여 결과를 출력해보세요.
    const multiply = (a: number, b: number): number => a * b;
    
    const product = multiply(4, 5);
    console.log(product);

    // 문제 6: 문자열과 숫자를 결합하는 함수
    // `concatStringAndNumber` 함수는 문자열(`a`)과 숫자(`b`)를 받아 그 합을 문자열로 반환합니다. 
    // 매개변수의 타입을 적절히 지정하고, 함수를 호출해보세요.
    const concatStringAndNumber = (a: string, b: number): string => `${a}${b}`;
    const result2 = concatStringAndNumber("Hello", 2025);
    console.log(result2);

    // 문제 7: 옵셔널 파라미터를 사용한 인사 함수
    // `greet` 함수는 이름을 받아 인사말을 반환합니다. 
    // `name` 파라미터는 필수로 받되, `message` 파라미터는 옵셔널 파라미터로 받습니다. 
    // `message`가 없으면 기본값 `"Welcome"`을 사용해야 합니다. 이 함수의 타입을 지정하고, 호출해보세요.
    // 문제 오류: 옵셔널하기 애매함
    const greet_ = (name: string, message: string = "Welcome"): string => `Welcome, ${name}!`;
    const greeting1 = greet_("Alice", "Hello");
    const greeting2 = greet_("Bob");
    console.log(greeting1);
    console.log(greeting2);

    // 문제 8: 숫자 배열의 최대값을 구하는 함수**
    // `findMax` 함수는 숫자 배열을 받아 그 배열의 최대값을 반환하는 함수입니다. 
    // 이 함수의 타입을 지정하고 호출해서 배열의 최대값을 출력해보세요. 
    // Math.max(1, 2, 3, 4) 배열 안의 값을 풀어서 받아줘야 하므로 ...nums
    const findMax = (nums: number[]): number => Math.max(...nums);
    const max = findMax([10, 20, 30, 40]);
    console.log(max); // 40

    // 문제 9: 단일 숫자를 두 배로 만드는 함수
    // `double` 함수는 하나의 숫자를 받아 그 값을 두 배로 만들어 반환하는 함수입니다. 
    // 이 함수의 타입을 지정하고 호출하여 결과를 출력해보세요.
    const double = (num: number): number => num * 2;
    const doubled = double(10);
    console.log(doubled); // 20
}