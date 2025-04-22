// 1.js에 있는 생성자 함수를 class로 작성한 코드! 
// 클래스가 훨씬 간단한 문법 -> Sugar Syntax (쉽게 만들어진 문법)
// 따라서, 클래스는 생성자 함수의 sugar syntax다.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `${this.name}, ${this.age}`;
    }
}
// 상속
class Developer extends Person {
    constructor(name, age, skill) {
        super(name, age); // 상속받은 것
        this.skill = skill;
    }
}

// 프로토타입 체인 -> 밑에서 위로의 접근은 가능, 위에서 아래로의 접근은 불가능.
const person1 = new Person("John", 19);
console.log(person1);
console.log(person1.greet());

// 상속
const developer = new Developer("Jerry", 20, "Python");
console.log(developer);
console.log(developer.greet());