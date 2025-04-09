// 타입 오퍼레이터 연습문제

{
    // 1. 유니언 타입 사용하기: 값 출력하기
    const printValue = (value: string | number): void => {
        console.log(value);
    }
    printValue("Hello"); // "Hello" 출력
    printValue(42);       // 42 출력
}

{
    // 2. 유니언 타입을 사용한 조건 처리
    const doubleOrLength = (val: string | number): number => {
        if (typeof val === "string") {
            return val.length;
        } else {
            return val * 2;
        }
    }
    console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
    console.log(doubleOrLength(10));      // 20 (숫자 10의 두 배)
}

{
    // 3. 인터섹션 타입 사용하기: 객체 합치기
    const mergeObjects = (
        person: {name: string, age: number},
        employee: {jobTitle: string, salary: number}
    ): {name: string, age: number} & {jobTitle: string, salary: number} => {
        return { ...person, ...employee };
    }

    const person = { name: "Alice", age: 30 };
    const employee = { jobTitle: "Engineer", salary: 5000 };

    const mergedObject = mergeObjects(person, employee);
    console.log(mergedObject);
}

{
    // 4. 유니언 타입을 사용한 배열 처리
    const getFirstElement = (val: number[] | string[]): number | string => {
        return val[0];
    }

    console.log(getFirstElement([1, 2, 3])); // 1
    console.log(getFirstElement(["a", "b", "c"])); // "a"
    console.log(getFirstElement([])); // undefined
}

{
    // 5. 유니언 타입을 사용한 값 비교
    const isEqual = (val1: string | number, val2: string | number): boolean => {
        return val1 === val2;
    }

    console.log(isEqual(10, 10)); // true
    console.log(isEqual("hello", "world")); // false
    console.log(isEqual(5, "5")); // false
}

{
    // 6. 인터섹션 타입을 활용한 필드 업데이트
    const updateAddress = (
        person: {name: string, age: number},
        address?: string
    ): {name: string; age: number} | {name: string; age: number; address: string} => {
        if (address !== undefined) {
            return {...person, address};
        }
        return person;
    }

    const updatedPerson = updateAddress({ name: "Jane", age: 28 }, "123 Maple St");
    console.log(updatedPerson);
    // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

    const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
    console.log(updatedPersonWithoutAddress);
    // 예상 출력: { name: "John", age: 22 }
}

{
    // 7. 유니언 타입을 사용한 함수 반환 타입
    const maxValue = (a: string | number, b: string | number): string | number => {
        if (typeof a === "string" && typeof b === "string") {
            return a.length >= b.length ? a : b;
        } else {
            return a >=b ? a : b;
        }
    }

    console.log(maxValue(10, 20)); // 20
    console.log(maxValue("apple", "banana")); // "banana"
    console.log(maxValue(30, 30)); // 30
    console.log(maxValue("cat", "dog")); // "dog"
}

{
    // 8. 유니언 타입으로 함수 오버로딩하기
    const getValue = (value: string | number): string => {
        if (typeof value === "number") {
            return value.toString();
        } else {
            return value;
        }
    }

    console.log(getValue(123));   // "123"
    console.log(getValue("abc")); // "abc"
}

{
    // 9. 인터섹션 타입을 활용한 객체 합치기 (다양한 속성 포함)
    const createContact = (
        person: {name: string, age: number},
        contact: {email: string}
    ): {name: string; age: number; email: string} => {
        return {...person, ...contact};
    }


    const person = { name: "Alice", age: 28 };
    const contact = { email: "alice@example.com" };

    const personWithContact = createContact(person, contact);
    console.log(personWithContact);
    // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

{
    // 10. 유니언 타입을 사용한 나이 체크
    const getAge = (age: string | number): number => {
        if (typeof age === "string") {
            return parseInt(age);
        } else return age;
    }

    console.log(getAge("25"));  // 25
    console.log(getAge(30));    // 30
    console.log(getAge("abc")); // NaN
}
