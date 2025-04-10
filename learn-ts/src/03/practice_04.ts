// 타입 오퍼레이터 연습문제+

{
    // 1. 유니언 타입을 사용한 함수 구현: 타입에 따라 다르게 처리하기
    const processInput = (input: string | number | boolean): string | number => {
        if (typeof input === "string") return input.toUpperCase();
        else if (typeof input === "number") return input * input;
        else return input === true ? "YES" : "NO";
    }
    console.log(processInput("hello"));   // "HELLO"
    console.log(processInput(5));         // 25
    console.log(processInput(true));      // "YES"
}

{
    // 2. 유니언 타입으로 함수 반환 타입 처리
    const getFirstCharacter = (input: string | number): string | number => {
        if (typeof input === "string") return input[0];
        else return parseInt(input.toString()[0]);
    }
    console.log(getFirstCharacter("hello")); // "h"
    console.log(getFirstCharacter(12345));   // 1
}

{
    // 3. 인터섹션 타입을 활용한 복합 객체 다루기
    type Person = {
        name: string;
        age: number;
    };

    type Employee = {
        jobTitle: string;
        salary: number;
    };

    const combinePersonAndEmployee = (person: Person, employee: Employee): Person & Employee => {
        return {...person, ...employee};
    };
    const person = { name: "Alice", age: 30 };
    const employee = { jobTitle: "Engineer", salary: 5000 };
    console.log(combinePersonAndEmployee(person, employee));
}

{
    // 4. 유니언 타입을 이용한 객체의 프로퍼티 타입 검사
    const getIdValue = (id: number | string): number => {
        if (typeof id === "string") return id.length;
        else return id;
    }
    console.log(getIdValue(23));
    console.log(getIdValue("Jerry"));
}

{
    // 5. 유니언 타입을 이용한 날짜 포맷 변환
    const formatDate = (date: string | Date): string => {
        if (typeof date === "string") return date;
        else {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${month}/${day}/${year}`;
        }
    }

    // 테스트 케이스
    console.log(formatDate("2024-11-19"));  // "2024-11-19"
    console.log(formatDate(new Date(2024, 10, 19)));  // "11/19/2024"
}

{
    const convert = (input: number | string): string | number => {
        if (typeof input === "string") return Number(input);
        else return input.toString();
    }

    // 테스트 케이스
    console.log(convert(123));      // "123"
    console.log(convert("456"));    // 456
    console.log(convert("abc"));    // NaN
}

{
    // 7. 인터섹션 타입을 활용한 복합 객체 반환
    type Person = {
        name: string;
        age: number;
    };

    type Address = {
        street: string;
        city: string;
    }


    const combinePersonAndAddress = (person: Person, address: Address): Person & Address => {
        return {...person, ...address};
    };

    const person = { name: "John", age: 25 };
    const address = { street: "123 Elm St", city: "Springfield", zipcode: "12345" };
    console.log(combinePersonAndAddress(person, address));
}

{
    // 8. 유니언 타입을 활용한 두 값 비교하기
    const compareValues = (n1: number | string, n2: number | string): boolean => {
        if (typeof n1 === "number" && typeof n2 === "number") {
            return n1 > n2;
        } else if (typeof n1 === "string" && typeof n2 === "string") {
            return n1 > n2;
        } else {
            throw new Error("두 값의 타입이 다름")
        }
    }

    console.log(compareValues(10, 20));      // false
    console.log(compareValues("apple", "banana")); // false
    console.log(compareValues("grape", "apple"));  // true
}

{
    // 9. 유니언 타입으로 복합 조건 처리
    const checkEvenOdd = (input: number | string): string => {
        if (typeof input === "number") return input % 2 === 0 ? "Even" : "Odd";
        else return input.length % 2 === 0 ? "Even Length" : "Odd Length";
    }

    // 테스트 케이스
    console.log(checkEvenOdd(4));      // "Even"
    console.log(checkEvenOdd(7));      // "Odd"
    console.log(checkEvenOdd("hello")); // "Odd Length"
    console.log(checkEvenOdd("code"));  // "Even Length"
}

{
    // 10. 인터섹션 타입을 활용한 동적 객체 반환
    type Person = {
        name: string;
        age: number;
    };
    
    type Contact = {
        email?: string;
        phoneNumber?: string;
    };

    const mergeContactInfo = (person: Person, contact: Contact): Person & Contact => {
        return {...person, ...contact};
    }

    // 테스트 케이스
    const person = { name: "Alice", age: 30 };
    const contactInfo = { email: "alice@example.com", phoneNumber: "123-456-7890" };
    console.log(mergeContactInfo(person, contactInfo));

    const personWithoutContact = { name: "Bob", age: 25 };
    console.log(mergeContactInfo(personWithoutContact, {}));
}