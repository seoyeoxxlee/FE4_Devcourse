{
    // 타입 별칭

    type User = {
        name: string;
        age: number;
    };

    type Developer = {
        skill: string;
    }

    type HumonDeveloper = User & Developer;

    let humon: User = {
        name: "sucoding",
        age: 20,
    };

    let developer01: HumonDeveloper = {
        name: "sucoding",
        age: 20,
        skill: "TypeScript",
    };

/* ------------------------ 사용 예시 ------------------------------ */

    type Greet = (name: string) => string;
    const greet: Greet = (name) => `Hello, ${name}`;

    type Point = [number, number]; // 타입 별칭 등록
    // 아래 세 줄은 다 같은 코드 -> 타입 별칭을 쓰면 유지보수와 가독성이 좋음.
    let point: [number, number] = [10, 20]; // x좌표, y좌표
    let point2: number[] = [10, 20]; // x좌표, y좌표
    let point3: Point = [10, 20]; // x좌표, y좌표 (타입 별칭이 사용된 예)
    
/* ------------------------ 사용 예시 ------------------------------ */

    type BookItem = {
        id: number;
        name: string;
        price: number;
        releaseDate?: Date;
    };

    type OrderBook = {
        orderId: string;
        items: BookItem[];
    }

    let aUserOrder: OrderBook = {
        orderId: 'order-123',
        items: [
            {
                id: 1,
                name: "코딩 자율학습 HTML + CSS + 자바스크립트",
                price: 28000,
            },
            {
                id: 2,
                name: "아는 만큼 보이는 프런트엔드 ",
                price: 28000,
            }
        ]
    }

    console.log(typeof aUserOrder);
    type order = typeof aUserOrder;

}