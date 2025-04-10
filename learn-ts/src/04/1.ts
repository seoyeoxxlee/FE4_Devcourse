{
    // 1. 타입 별칭
    let num: number | string = 10;
    let str: string = "A";
    let bool: boolean = true;
    
    const sum = (a: number, b: number): number => a + b;
    sum(10, 20);

}

{
    // 2. 타입 별칭 장점
    // 1) 가독성이 좋다.
    // 2) 유지보수성이 증가함 -> 타입을 재사용할 수 있기 때문
    type ID = string | number;
    let userId: ID = "hulk";
    let productId: ID = 1;

    // 리터럴 타입도 타입 별칭으로 가능하다.
}

{
    // 기본 자료형에 대한 타입을 지정할 수도 있고,
    // 타입 별칭은 객체에 대한 타입을 지정할 수 있다.
    
    type User = {
        name: string;
        readonly age?: number;
    }

    const user1:  User = {
        name: "alice",
        age: 20
    };
    const user2:  User = {
        name: "alice",
        age: 20
    };
    const user3:  User = {
        name: "alice",
        age: 20
    };
}

{
    // 3. 함수
    // 함수에도 타입 별칭이 가능하다.

    // 타입 별칭 전
    function sum(n1: number, n2: number): number {
        return n1 + n2;
    }; 

    // 타입 별칭 후
    type SumFunc = (n1: number, n2: number) => number;
    const sum_: SumFunc = function sum_(n1, n2) {
        return n1 + n2;
    };

}

{
    // 4. 튜플
    // 튜플도 타입 별칭 가능

    // 타입 별칭 전
    const point: [number, number] = [10, 15];

    // 타입 별칭 후
    type Point = [number, number];
    const point_: Point = [10, 15];
}

{
    // 5. 인터섹션
    // 새로운 타입을 조합할 수 있다.
    type Nameable = {
        name: string;
    };

    type Ageable = {
        age: number;
    };

    type Person = Nameable & Ageable;
    type PersonOther = {
        name: string;
    } & {
        age: number;
    };
}

{
    // 6. key 선택 타입 별칭
    // keyof -> 키를 추출, 리터럴로 반환
    type Person = {
        name: string;
        age: number;
        gender: string;
    };

    type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
    const key: PersonOfKeys = "gender";
}

{
    // 7. 객체 선택 타입 별칭
    // typeof -> 타입을 추출
    const user = {
        name: "sucoding",
        age: 20,
    };

    // user 객체의 타입을 추출해서 User 라는 타입으로 지정.
    type User = typeof user; // 이 자체로 타입 별칭이 됨. -> 이 코드를 기점으로 이후에만 이 타입 별칭을 사용할 수 있다.

    const User2: User = {
        name: "a",
        age: 30,
    }
}

{
    // 8.
    // 타입 컴파일러가 추론한 타입 추론
    type Category = {
        name: string;
        subCategory: ({
            name: string;
            subCategory?: undefined; // 옵셔널
        } | {
            name: string;
            subCategory: {
                name: string;
            }[];
        })[];
    };

    // 위 타입 별칭의  개선된 코드
    type Category2 = {
        name: string;
        subCategory: {name: string; subCategory?: {name: string}[]}[];
    }

    // 재귀 타입 별칭 -> 자기 자신을 타입 정의 안에서 참조하는 타입
    type Category3 = {
        name: string;
        subCategory?: Category3[];
    };

    const category: Category = {
        name: "Electronics",
        subCategory: [
            {
                name: "Phones",
            },
            {
                name: "Laptops",
                subCategory: [
                    {
                        name: "Gaming Laptops",
                    }
                ]
            }
        ]
    }
}

{
    // tree
    // 기존 타입 별칭
    type Tree = {
        value: string;
        children: {
            value: string;
            children: {
                value: string;
            }[];
        }[];
    }

    // 기존 타입 별칭의 개선된 코드
    type Tree2 = {
        value: string;
        children: [{ value: string; children: []}];
    }

    // 재귀 타입 별칭 
    type Tree3 = {
        value: string;
        children: Tree2[];
    }
    
    const tree: Tree = {
        value: "root",
        children: [
            {
                value: "child1",
                children: [
                    {
                        value: "child2",
                    },
                ],
            },
        ],
    };
}
