{
    // 인터페이스의 제네릭
    // -> 인터페이스 정의 부분이 간단해짐.
    // -> 인터페이스 재사용 용이. -> 코드의 재사용성 증가
    interface Car<T> {
        name: string;
        options: T;
    }

    const car1: Car<{color: string}> = {
        name: "Porsche",
        options: {
            color: "gray",
        },
    };

    const car2: Car<{wheels: number}> = {
        name: "panamera",
        options: {
            wheels: 4,
        },
    };
}

{
    // 제네릭 타입 순서 중요
    interface Pair<T, U> {
        first: T;
        second: U;
    }

    const numberStringPair: Pair<string, number> = {
        first: "a",
        second: 1,
    };
}

{
    type Pair<T, U> = T | U;
    const numberAndString: Pair<string, number> = 10;
}

{
    // extends 제약 조건 : 첫 번째 매개변수로 boolean 이나 string만 받을 수 있음.
    type Pair<T extends boolean | string, U> = T | U;
    const numberAndString: Pair<string, number> = 10;
}

{
    // 이렇게도 가능
    type ID = string | number;
    type Pair<T extends ID, U extends number> = T | U;
    const numberAndString: Pair<string, number> = 10;
}

{
    interface Length {
        length: number;
    }

    function getLength<T extends Length>(value: T[]): number {
        return value.length;
    }
}