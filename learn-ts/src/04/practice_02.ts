// 타입 별칭 연습문제
{
    // 1. Person 타입 작성
    type Person = {
        name: string;
        age: number;
    }

    const getPersonInfo = (person: Person): void => {
        console.log(`${person.name}, ${person.age}`);
    };

    const me: Person = {name: "Jerry", age: 20};
    getPersonInfo(me);
}

{
    // 2. 객체 생성
    type Config = {
        host: string;
        port: number;
        ssl: boolean;
    }

    const createConfig = (host: string, port: number, ssl: boolean): Config => {
        return {host, port, ssl};
    };
    
    const config = createConfig('localhost', 8080, true);
    console.log(config);
}

{
    // 3. Rectangle 타입 작성
    type Rectangle = {
        width: number;
        height: number;
    }

    const calculateArea = (rectangle: Rectangle): number => {
        return rectangle.width * rectangle.height;
    };

    const rect1: Rectangle = {width: 10, height: 5};
    console.log(calculateArea(rect1));
}

{
    // 4. Student 타입 작성
    type Student = {
        name: string;
        age: number;
        grades: number[];
    }

    const calculateAverageGrade =  (student: Student): number => {
        const total = student.grades.reduce((sum, grade) => sum + grade, 0);
        return total / student.grades.length;
    };

    const student: Student = {
        name: "Jerry",
        age: 20,
        grades: [90, 85, 70, 95],
    };
    console.log(calculateAverageGrade(student));
}

{
    // 5. Response 타입 작성
    type Response = {
        status: string;
        data: string;
        message: string;
    }

    const createResponse = (status: string, data: string, message: string): Response => {
        return {status, data, message};
    };

    console.log(createResponse('success', 'John', 'fetch success'));  // { status: 'success', data: 'John', message: 'fetch success'
}

{
    // 6. Employee 타입 작성
    type Employee = {
        id: string;
        name: string;
        position: string;
    }

    const getEmployeeInfo = (employee: Employee): string => {
        return `${employee.name} works as a ${employee.position} with ID: ${employee.id}`;
    };

    console.log(getEmployeeInfo({id:'1', name:'james', position:'developer'})); // "james works as a developer with ID: 1." 
}

{
    // 7. Circle 타입 작성
    type Circle = {
        radius: number;
    }

    const calculateCircumference = (circle: Circle): number => {
        return 3.14 * circle.radius * 2;
    };

    console.log(calculateCircumference({radius:3})); // 18.84955592153876
}

{
    // 8. Product 타입 작성
    type Product = {
        name: string;
        price: number;
        inStock: boolean;
    }

    const getDiscountedPrice = (product: Product, dis: number): number => {
        return product.price / 100 * (100 - dis);
    };

    console.log(getDiscountedPrice({name: 'bag', price: 1000, inStock: true}, 10)); // 900
}

{
    // 9. Book 타입 작성
    type Book = {
        title: string;
        author: string;
        publishedYear: number;
    }

    const getBookSummary = (book: Book): string => {
        return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
    };

    console.log(getBookSummary({title: 'river', author:'james', publishedYear: 2020})); // "river by james, published in 2020." 
}

{
    // 10. Transaction 타입 작성
    type Transaction = {
        id: string;
        amount: number;
        timestamp: string;
    }

    const isValidTransaction = (trans: Transaction): boolean => {
        return trans.amount > 0 ? true : false;
    };

    console.log(isValidTransaction({id: "김뿡빵", amount: 23, timestamp: "boong"}));
}