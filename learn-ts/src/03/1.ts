{
    // 함수
    // 매개 변수와 반환 값의 타입을 지정해 주는 것

    // 함수 선언문: function 키워드로 함수 정의
    function greeting() {
        console.log("Greet!");
    }
    // greeting();


    // ------------------------------



    // 함수 표현식: 함수 선언문으로 정의된 함수를 변수에 담아주는 것
    // -> 1) 함수 자체에 매개 변수와 반환값의 타입을 지정하는 방법 - 선호!
    // -> 2) 함수를 담은 변수에 함수의 매개 변수와 반환값의 타입을 지정하는 방법
    
    // 1) 함수 자체에 매개 변수와 반환값의 타입을 지정하는 방법 - 선호!
    // 매개 변수와 반환값이 없을 경우 void (반환값의 type)
    // void -> 아무것도 반환하지 않는다.
    function greeting_(): void {
        console.log("Greet!");
    }
    // greeting();
    // 매개 변수와 반환값의 타입 모두 number
    function sum(n1: number, n2: number): number {
        return n1 + n2;
    }
    // const result = sum(10, 20);
    // console.log(result);

    // 매개변수 string, 반환값 없으므로 void
    function printValue(value: string): void {
        console.log(value);
    }
    // printValue("A");

    // 매개변수 number[], 반환값 number
    // 함수의 매개변수는 타입 추론이 되지 않는다.
    function add(numbers: number[]): number {
        return numbers.reduce((result, num) => result + num, 0);
    }
    // const res = add([1, 2, 3]);
    // console.log(res);

    function printObj(userObj: { name: string }): void {
        console.log(userObj.name);
    }
    // printObj({ name: "sucoding" });


    // ------------------------------
    // 2) 함수를 담은 변수에 함수의 매개 변수와 반환값의 타입을 지정하는 방법
    const greet = function greet(): void {
        console.log("Greet!");
    }

    // 2)
    // 매개변수 없고, 반환값은 void
    // 함수 표현식의 두 번째 방법을 쓸 때에, 함수 자체의 매개 변수와 반환값의 타입을 지정하지 않아도 된다.
    const greet_: () => void = function greet_() {
        console.log("Greet!");
    }

    const sum_: (n1: number, n2: number) => number = function sum_(n1, n2) {
        return n1 + n2;
    }
    const sun = (n1: number, n2: number): number => n1 + n2; // 화살표 함수

    // 매개변수 string, 반환값 없으므로 void
    const printValue_: (value: string) => void = function printValue_(value) {
        console.log(value);
    }
    const printValue_arrow: (value: string) => void = (value) => {
        console.log(value);
    }; // 화살표 함수


    // 매개변수 number[], 반환값 number
    // 함수의 매개변수는 타입 추론이 되지 않는다.
    function add_(numbers: number[]): number {
        return numbers.reduce((result, num) => result + num, 0);
    }
    const add_arrow: (...numbers: number[]) => number = (...numbers) =>
        numbers.reduce((result, num) => result + num, 0); // 화살표 함수


    function printObj_(userObj: { name: string }): void {
        console.log(userObj.name);
    }
    const printObj_arrow: (userObj: { name: string }) => void = (userObj) => {
        console.log(userObj.name);
    }; // 화살표 함수
    


   
}