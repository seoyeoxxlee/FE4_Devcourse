// class
// 1. 타입 선언 -> 변수에 타입을 지정해야 한다.
// 2. 접근 제어자 -> 속성이나, 메서드에 대한 접근을 제한하는 것. public, protected, private, # 으로 접근 제한.
// (ES2022)
// 3. readonly -> // 한 번 값을 할당하면 바꿀 수 없는 속성. 생성자(constructot)에서만 값 할당 가능. 이후에는 읽기만 가능하고 수정은 불가능
// 4. 추상 클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
// 5. implements, 타입 별칭이나 인터페이스 
// 6. 타입 스크립트 클래스에는 제네릭으로 작성할 수 있다. JS는 불가

{
    class Person {
        name: string; // public (default값) -> 어디서든 접근할 수 있다.
        private age: number; // private -> 자기 클래스 내부에서만 사용 가능. 외부에서 사용 불가. (외부에서 접근할 수 없도록 중요한 속성이나 메서드에 private을 붙임.)

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        // 함수 정의
        protected greet() { // protected -> 자기 자신 + 자식 클래스에서만 접근 가능, 외부에서는 접근 불가.
            console.log(`Hello, ${this.name}, ${this.age}`);
        }
    }

    const person = new Person("sucoding", 20);
    console.log(person);
    console.log(person.name);
    // console.log(person.age); // private age 라서 에러남.
    // person.greet(); // protected greet이라서 에러남.
}

{
    class Person {
        private name: string; // public (default값) -> 어디서든 접근할 수 있다.
        private age: number; // private -> 자기 클래스 내부에서만 사용 가능. 외부에서 사용 불가. (외부에서 접근할 수 없도록 중요한 속성이나 메서드에 private을 붙임.)

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        // 함수 정의
        greet() { 
            console.log(`Hello, ${this.name}, ${this.age}`);
        }
    }

    const person = new Person("sucoding", 20);
    console.log(person); // 분명, name과 age는 private인데, 출력 결과로 보여짐(외부로 드러남.) -> 해결: # (진정한 의미의 private)
}


{
    // # -> 진정한 의미의 private
    class Person {
        #name: string; // #name
        #age: number; // #age

        constructor(name: string, age: number) {
            this.#name = name;
            this.#age = age;
        }

        // 함수 정의
        greet() { 
            console.log(`Hello, ${this.#name}, ${this.#age}`);
        }
    }

    const person = new Person("sucoding", 20);
    console.log(person); // 이제 진짜 빈 배열이 나옴 # 덕분에 ! -> 속성 감추기
}

{
    // readonly
    // 한 번 값을 할당하면 바꿀 수 없는 속성
    // 생성자(constructot)에서만 값 할당 가능
    // 이후에는 읽기만 가능하고 수정은 불가능
    class Person {
        readonly name: string; // #readonly
        age: number; // #age

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        // 함수 정의
        greet() { 
            console.log(`Hello, ${this.name}, ${this.age}`);
        }
    }

    const person = new Person("sucoding", 20);
    console.log(person.name);
    console.log(person.age); 
}

{
    // 추상 클래스
    // extends - 하나만 
    abstract class Shape {
        abstract area(): number;
    }

    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        area() {
            return 10;
        }
    }
}

{
    // 추상 클래스2 - 자식 클래스에 쓸 속성과 메서드를 정의
    // 추상 클래스에 있는 속성과 메서드를 자식 클래스에서 상속받기
    abstract class Shape {
        abstract radius: number;
        abstract area(): number;
    }

    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        area() {
            return Math.PI * this.radius;
        }
    }
}

{
    // implements
    // 여러 개 가능
    interface Movable {
        move(): void;
    }

    interface Stopable {
        stop(): void
    }

    type CarType = Movable & Stopable;
    class Car implements Movable {
        move() {
            console.log("run run !");
        }
        stop() {
            console.log("stop");
        }
    }

    const car: Car = new Car();
    car.move();
}

{
    // 클래스 제네릭
    class Box<T> {
        value: T;
        constructor(value: T) {
            this.value = value;
        }

        getValue() {
            return this.value;
        }
    }

    const stringBox: Box<string> = new Box<string>("abc");
    console.log(stringBox.getValue());

    const numberBox = new Box(123);
    console.log(stringBox.getValue());
}


