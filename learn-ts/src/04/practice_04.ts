// 인터페이스 연습문제+
{
    // 1. 인터페이스 상속과 메소드 오버라이딩
    interface Animal {
        name: string;
        speak(): void;
    }

    interface Dog extends Animal {
        speak(): "Woof!";
    }

    interface Cat extends Animal {
        speak(): "Meow!";
    }

    const myDog: Dog = {
        name: "Doggo",
        speak: () => "Woof!"
    };

    const myCat: Cat = {
        name: "Kitty",
        speak: () => "Meow!"
      };

    console.log(`${myDog.name} says ${myDog.speak()}`); // Buddy says Woof!
    console.log(`${myCat.name} says ${myCat.speak()}`); // Kitty says Meow!
}

{
    // 2. 중첩된 인터페이스와 선택적 속성
    interface Company {
        name: string;
        location: string;
        employee: Employee;
    }

    interface Employee {
        name: string;
        age: number;
        position?: string;
    }
}

{
    // 3. 인터페이스에서 메소드 시그니처와 인덱스 시그니처 함께 사용하기
    interface Logger {
        log(message: string): void;
        history: string[];
    }

    const logger : Logger = {
        history: [],
        log(message: string) {
            this.history.push(message);
        }
    };

    logger.log("App started");
    logger.log("User logged in");
    console.log(logger.history);  // ["App started", "User logged in"]
}

// {
//     // 4. 조건부 로직을 포함한 인터페이스
//     type Response = {
//         status: string;
//     }

//     interface 

//     dmld
// }

