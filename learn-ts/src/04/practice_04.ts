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

{
    // 4. 조건부 로직을 포함한 인터페이스 - ❓❓
    interface Success {
        status: "success";
        data: string;
    }

    interface Error {
        status: "error";
        error: string;
    }

    type Response = Success | Error;

    function handleResponse(response: Response): string {
        if(response.status === "success") {
            return `Success: ${response.data}`;
        } else {
            return `Error: ${response.error}`;
        }
    }

    const res1: Response = { status: "success", data: "Loaded successfully" };
    const res2: Response = { status: "error", error: "Failed to load" };

    console.log(handleResponse(res1)); 
    console.log(handleResponse(res2)); 

}

{
    // 5. 중첩된 인터페이스와 제네릭을 혼합하기 (제네릭 사용하지 않음)
    interface Book {
        title: string;
        publishedYear: number;
        author: Author;
    }

    interface Author {
        name: string;
        birthYear: number
    }

    const myBook: Book = {
        title: "Crying baby",
        publishedYear: 2001,
        author: {
            name: "Jane Jang",
            birthYear: 1967,
        }
    };

    console.log(myBook);
}

{
    // 6. 다형성을 활용한 인터페이스 정의
    interface Employee {
        name: string;
        age: number;
    }

    interface Manager extends Employee {
        team: string[];
    }

    interface Developer extends Employee {
        language: string;
    }

    const myManager: Manager = {
        name: "Gerry",
        age: 20,
        team: ["Tom", "Jerry", "Mia"],
    };

    const myDeveloper: Developer = {
        name: "Ken",
        age: 25,
        language: "C",
    };

    console.log(myManager);
    console.log(myDeveloper);
}

{
    // 7. 인덱스 시그니처와 배열을 포함한 복합 인터페이스
    interface Database {
        [key: string]: string[];
    }

    const db: Database = {
        users: ["Alice", "Bob", "Charlie"],
        orders: ["order1", "order2"],
      };
      
      console.log(db.users);  // ["Alice", "Bob", "Charlie"]
      console.log(db.orders);  // ["order1", "order2"]
}

{
    // 8. 조건부 타입에 따른 인터페이스 필드 추가
    interface User {
        name: string;
        isAdmin: boolean;
    }

    interface AdminUser extends User {
        isAdmin: true;
        adminCode: string;
    }

    interface GeneralUser extends User {
        isAdmin: false;
    }

    type AllUser = AdminUser | GeneralUser;

    function createUser(name: string, isAdmin: boolean): AllUser {
        if (isAdmin) {
            return {
                name,
                isAdmin: true,
                adminCode: "admin123",
            };
        } else {
            return {
                name,
                isAdmin: false
            };
        }
    }

    const admin = createUser("Alice", true);
    const user = createUser("Bob", false);

    console.log(admin);  // { name: "Alice", isAdmin: true, adminCode: "admin123" }
    console.log(user);  // { name: "Bob", isAdmin: false }
}

{
    // 9. 인터페이스 상속을 이용한 다형성 적용
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
            return this.radius * this.radius * 3.14;
        }
      };
      
      const rectangle: Rectangle = {
        width: 4,
        height: 6,
        area() {
            return this.width * this.height
        }
      };

    console.log(circle.area());  
    console.log(rectangle.area());  
}

{
    // 10. 다중 인터페이스 상속
    interface Vehicle {
        brand: string;
        model: string;
    }

    interface Electric {
        batteryLife: number;
    }

    interface ElectricCar extends Vehicle, Electric {
        charge(): void;
    }

    const tesla: ElectricCar = {
        brand: "Tesla",
        model: "Model X",
        batteryLife: 99,
        charge() {
            console.log("Charging the car...")
        }
      };
      
      tesla.charge();  // "Charging the car..."
}