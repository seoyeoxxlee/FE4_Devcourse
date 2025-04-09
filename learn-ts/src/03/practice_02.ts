// 함수타입 연습문제 +

{
    // 문제 1: 여러 개의 숫자 배열을 받아 합을 구하는 함수
    const sumAllNumbers = (...nums: number[][]): number[] => {
        return nums.map(arr => arr.reduce((acc, cur) => acc + cur), 0);
    }

    const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
    console.log(result); // [3, 12, 13]
}

{
    // 문제 2: 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
    const doubleValue = (val: number | string): number => {
        if (typeof val === "number") return val * 2;
        else return val.length * 2;
    }

    const result1 = doubleValue(5); 
    const result2 = doubleValue("hello"); 
    console.log(result1); // 10
    console.log(result2); // 10
}

{
    // 문제 3: 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수
    const multiplyArrays = (arr1: number[], arr2: number[]) => {
        const minLength = Math.min(arr1.length, arr2.length);
        const result: number[] = [];

        for (let i=0; i<minLength; i++) {
            result.push(arr1[i] * arr2[i]);
        }

        return result;
    }

    const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
    console.log(result); // [4, 10, 18]
}

{
    // 문제 4: 두 개의 배열을 받아 교차된 값을 반환하는 함수
    const intersection = (arr1: number[], arr2: number[]): number[] => {
        const result:  number[] = [];

        for (let i=0; i<arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        }
        return result;
    }

    const result = intersection([1, 2, 3], [2, 3, 4]);
    console.log(result); // [2, 3]  
}

{
    // 문제 5: 객체의 필드 값에 따라 출력 형식을 다르게 하는 함수
    // const formatInfo: (info: { name?: string; age?: number }): void => {
    // }
    // }
    // const info = formatInfo({ name: "Alice" });
    // console.log(info); // "Name: Alice"
}

{
    // 문제 6: 두 문자열을 합쳐서 출력하는 함수
    const combineStrings = (str1: string, str2: string): string => str1 + str2;
    const combined = combineStrings("Hello", "World");
    console.log(combined); // "HelloWorld"
}

{
    // 문제 7: 배열의 각 값을 제곱하여 새로운 배열을 반환하는 함수
    const squareArray = (arr: number[]): number[] => {
        const result:  number[] = [];
        for (let i=0; i<arr.length; i++) {
            result.push(arr[i]**2);
        }
        return result;
    }

    const result = squareArray([1, 2, 3, 4]);
    console.log(result); // [1, 4, 9, 16]
}

{
    // 문제 8: 문자열과 숫자가 주어졌을 때, 그 둘을 더하여 문자열로 반환하는 함수
    const addStringAndNumber = (val1: number | string, val2: number | string): number | string => {
        if (typeof val1 === "number" && typeof val2 === "number") return val1 + val2;
        else return `${val1}${val2}`;
    }
    const result = addStringAndNumber("The number is ", 10);
    console.log(result); // "The number is 10"
}

{
    // 문제 9: 타입이 서로 다른 두 값을 비교하는 함수
    const compareValues = (val1: number, val2: string): string => {
        if (val1 > val2.length) {
            return "Number is larger";
        } else return "String is larger";
    }
    const result = compareValues(10, "Hello");
    console.log(result); // "Number is larger"
}

{
    // 문제 10: 다중 조건을 처리하는 조건문 함수
    const checkValue = (val: number | boolean | string): string => {
        if (typeof val === "number") {
            return "It's a number";
        } else if (typeof val === "string") {
            return "It's a string";
        } else {
            return "It's a boolean";
        }
    }
    const result = checkValue(true);
    console.log(result);
}