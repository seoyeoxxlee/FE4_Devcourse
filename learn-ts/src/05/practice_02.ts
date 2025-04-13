// class 연습 문제

{
    // 1. 사람 객체 생성
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    const person = new Person("Alice", 30);
    person.greet();
}

{
    // 2. 학생 클래스
    class Student {
        name: string;
        grade: number;

        constructor(name: string, grade: number) {
            this.name = name;
            this.grade = grade;
        }

        displayInfo() {
            console.log(`${this.name} is in grade ${this.grade}.`);
        }
    }

    const student = new Student("Bob", 10);
    student.displayInfo();
}

{
    // 3. 자동차 클래스
    class Car {
        brand: string;
        model: string;
    

        constructor(brand: string, model: string) {
            this.brand = brand;
            this.model = model;
        }

        getCarInfo() {
            console.log(`${this.brand} ${this.model}`);
        }
    }

    const car = new Car("Toyota", "Corolla");
    car.getCarInfo();
}

{
    // 4. 사각형 클래스
    class Rectangle {
        width: number;
        height: number;

        constructor(width: number, height: number) {
            this.width = width;
            this.height = height;
        }

        getArea() {
            return this.width * this.height;
        }
    }

    const rectangle = new Rectangle(5, 10);
    console.log(rectangle.getArea());
}

{
    // 5. 도서 클래스
    class Book {
        title: string;
        author: string;

        constructor(title: string, author: string) {
            this.title = title;
            this.author = author;
        }

        getBookInfo() {
            console.log(`${this.title} by ${this.author}`);
        }
    }

    const book = new Book("1984", "George Orwell");
    book.getBookInfo();
}

{
    // 6. 직원 클래스
    class Employee {
        name: string;
        salary: number;

        constructor(name: string, salary: number) {
            this.name = name;
            this.salary = salary;
        }

        getSalary() {
            console.log(`${this.name} earns ${this.salary}.`);
        }
    }

    const employee = new Employee("Alice", 50000);
    employee.getSalary();
}

{
    // 7. 도형 클래스 
    class Shape {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        getShapeName() {
            console.log(`This is a ${this.name}`);
        }
    }

    const shape = new Shape("Circle");
    shape.getShapeName();
}

{
    // 8. 도서관 클래스
    class Library {
        name: string;
        books: string[];

        constructor(name: string, books: string[]) {
            this.name = name;
            this.books = books;
        }

        getBooks() {
            console.log(`${this.name} has the following books: ${this.books.join(", ")}`);
        }
    }

    const library = new Library("City Library", ["1984", "Brave New World"]);
    library.getBooks();
}

{
    // 9. 날짜 클래스
    class DateUtill {
        day: number;
        month: number;
        year: number;

        constructor(day: number, month: number, year: number) {
            this.day = day;
            this.month = month;
            this.year = year;
        }

        getDate() {
            console.log(`${this.day}/${this.month}/${this.year}`);
        }
    }

    const date = new DateUtill(12, 5, 2024);
    date.getDate();
}

{
    // 10. 점 클래스
    class Point {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        getDistance() {
            console.log(Math.sqrt(this.x**2 + this.y**2));
        }
    }

    const point = new Point(3, 4);
    point.getDistance();
}