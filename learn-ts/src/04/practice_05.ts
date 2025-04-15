// 타입 별칭 연습문제+
{
    // 1
    type Action = {
        type: string;
        payload: any;
    }

    function createAction(type: string, payload: any): Action {
        return { type, payload };
    }

    const action1 = createAction('ADD_ITEM', { id: 1, name: 'item' });
    const action2 = createAction('UPDATE_ITEM', 42);
    const action3 = createAction('SET_STATUS', 'success');

    console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
    console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
    console.log(action3); // { type: 'SET_STATUS', payload: 'success' }
}

{
    // 2
    type NumberOrString = {
        id: number | string;
        name: string;
    }

    function createObject(id: number | string, name: string): NumberOrString {
        return { id, name };
    }

    const object1 = createObject(1, 'Alice');
    const object2 = createObject('123', 'Bob');

    console.log(object1); // { id: 1, name: 'Alice' }
    console.log(object2); // { id: '123', name: 'Bob' }
}

{
    // 3
    type Point = {
        x: number;
        y: number; 
    }

    function calculateDistance(a: Point, b: Point): number {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return Math.sqrt(dx*dx + dy*dy);
    }

    const point1: Point = {x: 3, y: 4};
    const point2: Point = {x: 7, y: 1};

    console.log(calculateDistance(point1, point2));
}

{
    // 4 ❓❓
    type FetchResult = 
        | {status: "loading"} 
        | {status: "success"; data: string}
        | {status: "error"; message: string};
    
    function fetchData(): FetchResult {
        const randomStatus = Math.floor(Math.random() * 3);

        if (randomStatus === 0) {
            return {status: "loading"};
        } else if (randomStatus === 1) {
            return {status: "success", data: "Data loaded successfully!"};
        } else {
            return {status: "error", message: "Failed to load data"};
        }
    }

    const result1 = fetchData();
    const result2 = fetchData();
    const result3 = fetchData();

    console.log(result1); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
    console.log(result2); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
    console.log(result3); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
}

{
    // 5
    // ❓ null의 typeof 반환값은 "object", value의 값 자체가 null인지 확인해야 함.
    type NullOrUndefined = {
        value: null | undefined;
    }

    function getValue(value: any): boolean {
        if (value === null || typeof value === "undefined") return true;
        else return false;
    }

    const check1 = getValue(null);
    const check2 = getValue(undefined);
    const check3 = getValue('Hello');

    console.log(check1); // true
    console.log(check2); // true
    console.log(check3); // false
}

{
    // 6
    type Value = [number, number];

    function setCoordinates(val1: number, val2: number): Value {
        return [val1, val2];
    }
    const coordinates = setCoordinates(10, 20);
    console.log(coordinates); // [10, 20]
}

{
    // 7
    type Person = {
        readonly name: string;
        readonly age: number;
    }

    function createPerson(name: string, age: number): Person {
        return {name, age};
    }

    const person = createPerson('John', 30);

    // person 객체의 속성은 변경할 수 없도록 해야 합니다.
    // person.name = 'Jane'; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
    console.log(person); // { name: 'John', age: 30 }
}

{
    // 8
    type User = {
        id: string;
        name: string;
        email: string;
    }

    type UserUpdate = {
        name?: string;
        email?: string;
    }

    function updateUser(user: User, updates: UserUpdate): User {
        return {...user, ...updates};
    }

    const user1 = { id: '1', name: 'Alice', email: 'alice@example.com' };
    const updatedUser1 = updateUser(user1, { name: 'Alicia' });

    console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}

{
    // 9 ❓
    type Role = 'admin' | 'user';
    
    type User =  {
        id: string;
        name: string;
        role: Role;
    }

    type UserWithRole = User;

    function assignRole(user: User, role: Role): UserWithRole {
        return {...user, role}
    }

    const user1: User = { id: '1', name: 'Alice', role: 'user' }; 
    const updatedUser = assignRole(user1, 'admin'); // role을 string으로 인식해서 타입 추론이 안 됨. -> user1: User로 명시적 타입 지정

    console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}

{
    // 10
    type Primitive = string | number;

    function filterString(value: Primitive): string {
        if (typeof value === "string") {
            return value;
        } else {
            return "Error: Not a string";
        }
    }

    const stringValue = filterString('Hello');
    console.log(stringValue); // 'Hello'

    const numberValue = filterString(123); // Error: Not a string
    console.log(numberValue);
}
