// this 개념
// this -> this는 나를 호출한 객체이다.
// 예외?) 전역 상태에서의 this는 window 객체이다.
// console.log(this); 

function printThis() {
    console.log(this);
}
printThis();
window.printThis(); // 위와 동일

const obj = {
    name: "sucoding",
    run: function () {
        console.log(this);
        console.log(this.name); // sucoding
    },
};
obj.run();


// 단축 속성명
// 스코프?
const obj_ = {
    name: "sucoding",
    // run,
};
obj_.run(); // this가 어떤 함수에 포함되어 있는 지가 중요한 게 아니라, 
// this가 포함된 함수를 호출하는 함수가 this의 객체다?

const obj_1 = {
    name: "sucoding",
    smallObject: {
        name: "프로그래머스",
        run: function () {
            console.log(this.name); // 프로그래머스
            console.log(obj_1.name); // "sucoding"
        },
    },
};
obj_1.smallObject.run();

const obj_2 = {
    name: "sucoding",
    smallObject: {
        name: "프로그래머스",
        run: function () {
            console.log(this.name); // 수코딩 잘생김 <- bind 때문에 더이상 smallObjed의 name을 가르키지 않게 됨.
        }
        .bind({ name: "수코딩 잘생김 "}) // bind는 this가 가르키는 객체를 바꿔버림
        .bind({}), // 그리고 bind는 무조건 한 번 사용. 첫 번째만 기억하게 됨.
        run2: function () {
            console.log(this);
        }.bind({ name: "수코딩"}) // 단축 속성명에서는 binding을 하려면 단축한 것을 풀어서 적어야 한다.
    },
};
obj_2.smallObject.run();


/* --------------------------------------------- */
{
    // 객체
    // -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
    // const obj2 = {}; // 기본적인 객체 선언 방법
    const obj3 = { name: "sucoding", age: 20 };

    // 객체를 반복하려면?? -> for ...in
    for (let key in obj3) {
        console.log(obj3[key]);
    }
    // forEach 반복문
    Object.keys(obj3).forEach((key) => {
        console.log(obj3[key]);
    });
    // 또 다른 반복문
    Object.entries(obj3).forEach(([key, value]) => {
        console.log(`${key} : ${value}`);
    })
}

{
    const obj = {};
    // 동적으로 객체의 속성 추가 가능
    obj.name = "sucoding";
    obj.age = 20;
    // 동적으로 객체의 속성 삭제도 가능
    delete obj.name;
    console.log(obj); // { age: 20 }
}

{
    // 객체는 또 다른 객체
    const obj = {
        name: "boong",
        address: {
            zipCode: 13131,
            addr: "서울시 용산구",
            addr2: "강남대로",
        },
        likeFoods: ["banana"],
        run: function () {
            console.log("run~!");
        },
    };
    console.log(obj.address.zipCode);
    console.log(obj["address"]["zipCode"]);
    console.log(obj.likeFoods[0]);
}

{
    const obj1 = { name: "seocoding", age: 24, address: {zipCode: 11111} };
    const obj2 = { ...obj1 }; // 주소값

    obj2.name = "그랩";
    obj2.address.zipCode = 22222; // -> obj1의 zipCode도 바뀜. 중첩되어 있는 데이터까지 깊은 복사가 안 돼서 그럼 어떻게?
    // const obj2 = structuredClone(obj1) // 주소값

    console.log(obj1);
    console.log(obj2);
}

{
    // 구조 분해 할당
    const { uname, age } = { uname: "ding", age: 20 };
    console.log(uname);
    console.log(age);
}
{
    // 구조 분해 할당 2
    const { uname: Uname, age } = { uname: "ding", age: 20 };
    console.log(Uname);
    console.log(age);
}

{
    // 객체 리터럴 (Literal) -> 중괄호를 이용해서 객체를 선언하는 것
    // 생성자 함수 -> 파스칼 케이스: 생성자 함수 명명시 첫 번째 문자를 대문자로. Person
    // userObject -> 카멜 케이스 (js 변수명, 함수명)
    // user_object -> 스네이크 케이스
    // user-object -> 케밥 케이스 (js 파일명)
    // UserObject -> 파스칼 케이스 (js 생성자명, 클래스명)
    const person = {
        name: "sucoding",
        age: 20,
    };
    person();
}

{
    // 객체 리터럴 - 2
    // 함수를 사용해서 객체를 정의할 때-> 파스칼 함수를 써서 객체 정의
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.print = function () {
            console.log(`${this.name}, ${this.age}`);
        };
    }
    const person1 = new Person("sucoding", 20); // new 키워드를 함수에 붙이면, 자신의 함수영역이 객체화 되어 반환하게 함.
    // new를 안 붙이면 그냥 window 객체.
    const person2 = new Person("grab", 50);
    console.log(person1 instanceof Person); // -> Person 생성자 함수로 생성된 객체.
    // instanceof Person -> 네 꼬리표가 Person이니?
    console.log(person2);
    console.log(person1.name);
    console.log(person1.age);
}

{
    // 클래스 문법
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        print() {
            console.log(`${this.name}, ${this.age}`);
        }
    }
    const person1 = new Person("John", 30);
    console.log(person1);
}

{
    // 객체의 불변성 freeze 
    // freeze를 사용해서 중요한 객체를 불변하게 함.
    const obj = Object.freeze({ name: "sucoding", age: 20 });
    obj.name = "John"; // 변경 불가능
    delete obj.name; // 삭제도 불가능
    obj.gender = "male"; // 추가도 불가능
    console.log(obj);

    // seal -> freeze의 순한맛. 객체의 추가/삭제는 막지만, 변경은 가능함.
    const obj2 = Object.seal({ name: "sucoding", age: 20 });
    obj2.name = "이서영";
    obj2.gender = "Female";
    delete obj2.name;
    console.log(obj2);

    // preventExtensions -> seal보다 더 순한 맛. 객체의 추가만 막음.
    const obj3 = Object.preventExtensions({ name: "sucoding", age: 20 });
    obj3.name = "keem";
    delete obj3.age;
    obj3.gender = "male";
    console.log(obj3);
}