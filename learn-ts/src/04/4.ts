{
    // 1. 헝가리안 표기법

    type User = {};
    // interface User {};

    // 마우스를 호버하기 전까지 이 User가 타입 별칭의 User인지, 인터페이스의 User인지 알 수 없음.
    // 그 래 서 앞에 접두사를 붙여주기로 함.
    const user: User = {};

    // 접두사 붙여서 개선 -> 헝가리안 표기법
    type TUser = {};
    interface IUser {};

    const user1: TUser = {}; // 타입 별칭
    const user2: IUser = {}; // 인터페이스

    // 이제는 사용하지 않도록 권장하는 추세
    // 오늘날의 추세 -> 식별자의 이름을 의미있게 잘 지어주는 것
    type Usre = {}
    type Car = {}
    type Color = {}
}

{
    // 타입 가드 기법
    // 구별된 유니온 타입
    interface User {
        name: string;
    }

    interface Car {
        name: string;
        speed: number;
    }

    const user: User = { name: "sucoding"};
    const car: Car = { name: "Porsche", speed: 100 };

    function printValue(obj: User | Car) {
        if ("speed" in obj) console.log(obj.name);
        else console.log(`${obj.name}`);
    }
    printValue(user); // sucoding
    printValue(car); // Porsche
}

{
    // 구조적 타이핑
    type Car = {
        name: string;
        speed: number;
    };

    type Vehicle = {
        name: string;
        speed: number;
    };

    let car: Car = { name:"bmw", speed: 100 };
    let vehicle: Vehicle = { name: "honda", speed: 200 };

    // 구조적 타이핑
    // -> 타입의 이름이 아니라, 객체가 가진 "속성과 형태(구조)"로 타입을 판단하는 방식
    // 타입이 다르더라도 속성과 타입이 일치하면 상호 호환이 가능함.
    // 상호호환
    vehicle = car; // { name, speed } // 재할당
    console.log(vehicle.speed); // 100

    function printValue(obj: Car) {
        console.log(`${obj.name}, ${obj.speed}`);
    }

    printValue(vehicle);
}