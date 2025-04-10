// 인터페이스 연습문제

{
    // 1. 간단한 객체 타입 정의
    interface Person {
        name: string;
        age: number;
    }

    const myPerson: Person = {
        name: "Jerry",
        age: 20,
    };
}

{
    // 2. 메소드가 포함된 인터페이스
    interface Car {
        brand: string;
        model: string;
        start(): void;
    }

    const myCar: Car = {
        brand: "Porsche",
        model: "Panamera",
        start() {
            console.log(`${this.brand} ${this.model} has started.`);
        },
    };
    myCar.start();
}

{
    // 3. 선택적 속성 사용
    interface Employee {
        name: string;
        position: string;
        department?: string;
    }
}

{
    // 4. 배열을 포함한 인터페이스
    interface Team {
        name: string;
        members: string[]
    }

    const programmers: Team = {
        name: "Devcourse",
        members: ["John", "Paul", "George", "Ringo", "and Me :)"]
    };

    console.log(`${programmers.name} Team Memebers: ${programmers.members.join(", ")}`);
}

{
    // 5. 상속을 이용한 인터페이스 확장
    interface Animal {
        name: string;
        age: number;
    }
    
    interface Dog extends Animal {
        breed: string;
    }

    const myDog: Dog = {
        name: "Happy",
        age: 16,
        breed: "shih tzu"
    };

    console.log(`${myDog.name} ${myDog.age} ${myDog.breed}`);
}

{
    // 6. 인터페이스에서 메소드 정의
    interface Person {
        name: string,
        age: number
        greet(): string;
    };
    
    const user: Person = {
        name: "Lee",
        age: 20,
        greet() {
            return `Hello, my name is ${this.name}`;
        },
    };
    console.log(user.greet());
}

{
    // 7. 다형성을 가진 인터페이스
    interface Shape {
        area(): number;
    }

    interface Circle extends Shape {
        radius: number;
    }

    interface Rectangle extends Shape {
        width: number;
        height: number;
    }

    const circle: Circle = {
        radius: 5,
        area() {
            return 3.14 * this.radius ** 2;
        },
    };

    const rectangle: Rectangle = {
        width: 4,
        height: 5,
        area() {
            return this.width * this.height; 
        },
    };

    console.log(`${circle.area()}`);
    console.log(`${rectangle.area()}`);
}

{
    // 8. 다중 인터페이스를 사용하는 객체
    interface Person {
        name: string;
        age: number;
    }

    interface Address {
        street: string;
        city: string;
        zipcode: number;
    }

    type Contact = Person & Address;

    const contact: Contact = {
        name: "Cheetah",
        age: 20,
        street: "Wall street",
        city: "New York",
        zipcode: 123123,
    };

    console.log(contact);
}

{
    // 9. 인터페이스에 인덱스 시그니처 사용
    interface Dictionary {
        [key: string]: string;
    }

    const myDictionary: Dictionary = {
        apple: "사과",
        banana: "바나나",
        cherry: "체리",
    };

    console.log(myDictionary.banana);
    console.log(myDictionary["apple"]);
}

{
    // 10. 인터페이스를 사용한 함수 타입 정의
    interface Operation {
        (num1: number, num2: number): number;
    }
    const add: Operation = (num1, num2) => num1 + num2;
    const subtract: Operation = (num1, num2) => num1 - num2;

    console.log(add(2, 3));
    console.log(subtract(10, 4));
}


