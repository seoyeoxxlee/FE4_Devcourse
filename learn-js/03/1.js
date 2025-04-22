// ES5
// 자바스크립트는 prototype 기반의 언어이다.
// 생성자 함수 - 파스칼 케이스

// 함수의 이름이 대문자로 시작한다면, 생정자 함수
function Car(name, speed) {
    this.name = name;
    this.speed = speed;
    // this.getMaxSpeed = function () {
    //     return `Max Speed: ${this.speed * 2};`
    // }; -> prototype 객체로 옮김.
}

Car.prototype.teacher = "잘생겼나"; // 생성자 함수의 prototype 객체에 접근하여 원하는 속성을 추가할 수 있다.
Car.prototype.getMaxSpeed = function () {
    return `Max Speed: ${this.speed * 2};`
}

// 생성자 함수 호출시 new -> 함수를 호출할 때 함수를 객체 형태로 변환해서 반환하는 역할! -> 객체화
// 인스턴스 -> 생성자 함수로 찍어낸 객체를 가리키는 용어
// 인스턴스는 생성자 함수의 프로토타입을 바라보는 객체가 있음
// 모든 인스턴스트 생성자 함수의 프로토타입으르 가리키는 객체가 무조건 있다.
const car1 = new Car("bmw", 200);
const car2 = new Car("g80", 200);
const car3 = new Car("g90", 200);

console.log(car1); // 콘솔창에서 찍어보면 Car{name: 'bmw', speed: 200, maxSpeed: ƒ} -> Car라는 생산자의 꼬리표가 남아있음. (생성자 함수의 특징)
console.log(car1.name);
console.log(car1.speed);
console.log(car2);
console.log(car3);

console.log(car1.getMaxSpeed()); // Max Speed: 200
console.log(car1.__proto__.getMaxSpeed()); // NaN -> this를 호출한 객체가 proto라서 NaN


// prototype - 모든 함수는 자신과 1:1로 매칭이 되는 'prototype'이라고 불리우는 공간이 있다.
console.dir(Car) // dir -> 객체의 구조를 상세하게 볼 수 있는 콘솔 도구. arguments, caller, length, name, prototype{}이 기본 속성으로 존재하더라~
console.dir(car1.__proto__); // __prototype -> 자신을 생선한 prototype을 가르킨다.
console.dir(car1.__proto__.teacher);
console.dir(car1.teacher); // __proto__ 는 애초에 hidden 속성이라서, 생략하고 출력해도 출력됨. -> 프로토타입 체인
// 프로토타입 체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위.
console.log(car1.toString()); // [object Objct]