// class part2
{
    class Employee {
        name: string; // private name이라면 자식 클래스에서 사용 불가. protected는 자식이나 상속된 클래스까지는 허용(외부에서만 접근 불가).
        
        constructor(name: string) {
            this.name = name;
        }

        getSalary() {
            console.log("Salary");
        }
    }

    const employee = new Employee("John");
    employee.getSalary();

    // Employee 클래스를 상속받는 Manager 클래스
    class Manager extends Employee {
        role: string;
        constructor(name: string, role: string) {
            super(name); // 상속을 받을 때에는 반드시 super(부모 클래스의 속성의 초기값) 적어줘야 한다. -> 부모로부터 물려받았다는 뜻
            this.role = role;
        }
        getManager() {
            console.log(`${this.name}, ${this.role}`);
        }
    }

    const manager = new Manager("Mike", "admin");
    manager.getSalary();
    manager.getManager();
}