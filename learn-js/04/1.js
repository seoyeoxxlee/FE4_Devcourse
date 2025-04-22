// 생성자 함수
// 객체를 생성할 때 사용하는 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `${this.name}, ${this.age}`;
    };
}
// 멤버 속성: 인스턴스 객체에 포함되어지는 속성.
// 프로토타입 체인 -> 자신을 생성한 생성자 함수의 등록되어 있는 메서드를 사용할 수 있도록 함. ex) greet()
Person.prototype.greet = function () {
    return `${this.name}, ${this.age}`;
}

const person = new Person("John", 20);
console.log(person);
console.log(person.name);
console.log(person instanceof Person); // 특정 변수가 특정 생성자 함수의 인스턴스인지 확인하기 위한 키워드 instanceof -> true
console.log(person instanceof Function); // -> false
console.log(Person instanceof Function); // -> true !!

console.dir(person);
console.dir(person.__proto__);

/* ------------------------------------------ */

function Developer(name, age, skill) {
    // name은 Person 생성자 함수러로부터 상속 받음
    Person.call(this, name, age);
    this.skill = skill;
}
// 상속받기 위한 프로토타입 객체 조작..
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const developer = new Developer("James", 19, "Javascript");
console.log(developer.greet());