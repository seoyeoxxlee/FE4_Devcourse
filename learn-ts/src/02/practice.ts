// 연습문제
{
    // 1
    let str: string = "Hello";
    console.log(str);

    // 2
    let num: number = 42;
    console.log(num);

    // 3
    let bool: boolean = true;
    console.log(bool);

    // 4
    let numArr: number[] = [1, 2, 3, 4];
    console.log(numArr);

    // 5
    let strArr: string[] = ["A", "B", "C"];
    console.log(strArr);

    // 6
    let mixArr: (number | string)[] = [3, "X"];
    console.log(mixArr);

    // 7
    let nall: null = null;
    console.log(nall);

    // 8
    let undef: undefined = undefined;
    console.log(undef);

    // 9
    let info: object = {
        name: "Jerry",
        age: 24,
    };
    console.log(info);

    // 연습문제+
    // 1+
    let employee: {
        id: number,
        name: string,
        contact: {
        email: string,
        phone: string
        },
        department: string
    } = {
        id: 123,
        name: "John Doe",
        contact: {
        email: "john.doe@example.com",
        phone: "123-456-7890"
        },
        department: "Engineering"
    };

    // 2+ - 헷갈렸음
    let students: { name: string, age: number, grade: string }[] = [
        { name: "Alice", age: 22, grade: "A" },
        { name: "Bob", age: 24, grade: "B" },
        { name: "Charlie", age: 21, grade: "C" }
    ];

    // 3+
    let numbers: number[] = [10, 20, 30, 40, 50];


    // 4+ - 2번과 동일
    let users: { name: string, age: number, active: boolean}[] = [
        { name: "Alice", age: 30, active: true },
        { name: "Bob", age: 25, active: false },
        { name: "Charlie", age: 35, active: true }
    ];

    // 5+
    let nestedArray: [string[], number[], string[]] = [
        ["apple", "banana"],
        [1, 2, 3],
        ["cherry"]
    ];

    let nestedArray_union: (string | number)[][] = [
        ["apple", "banana"],
        [1, 2, 3],
        ["cherry"]
    ];

    // 6+
    let words: string[] = ["apple", "banana", "cherry", "kiwi"];

    // 7+ - ???
    // 
    let items: [
        {id: number, name: string, price: number},
        {id: number, name: string, price: number},
        [string, number]
    ] = [
        { id: 1, name: "Item1", price: 100 },
        { id: 2, name: "Item2", price: 200 },
        ["discount", 10]
    ];

    let items_union: (
        { id: number; name: string; price: number} | (string | number)[])[]= [
        { id: 1, name: "Item1", price: 100 },
        { id: 2, name: "Item2", price: 200 },
        ["discount", 10]
    ];


    // 8+
    let profile: {
        user: { name: string, age: number},
        preferences: string[],
        isActive: boolean
    } = {
        user: { name: "John", age: 30 },
        preferences: ["coding", "reading", "travelling"],
        isActive: true
    };

    // 9+
    let mixedData: (string | number | boolean)[] = ["apple", 10, true, "banana", 20];

    // 10+
    let company: {
        name: string,
        address: {
        street: string,
        city: string,
        country: string
        }
    } = {
        name: "Tech Corp",
        address: {
        street: "123 Main St",
        city: "Tech City",
        country: "Techland"
        }
    };

    // 연습문제++
    // 1++ 
    let complexData: {
        id: number,
        name: string,
        details: {
        description: string,
        dimensions: {
            height: number,
            width: number,
            depth: number
        },
        tags: string[]
        },
        reviews: [
        { user: string, rating: number, comment: string },
        { user: string, rating: number, comment: string }
        ]
    } = {
        id: 1,
        name: "Product A",
        details: {
        description: "This is a great product",
        dimensions: {
            height: 10,
            width: 5,
            depth: 2
        },
        tags: ["sale", "new", "featured"]
        },
        reviews: [
        { user: "Alice", rating: 4.5, comment: "Excellent!" },
        { user: "Bob", rating: 3.0, comment: "Decent product." }
        ]
    };

    // 2++
    let dataset: [object, object][] = [
        [{ id: 1, value: "a" }, { id: 2, value: "b" }],
        [{ id: 3, value: "c" }, { id: 4, value: "d" }],
        [{ id: 5, value: "e" }, { id: 6, value: "f" }]
    ];

    // 3++ - ???
    let mixedData_: [
        { type: string, name: string, age: number },
        { type: string, name: string, age: number },
        { type: string, id: number, name: string,  price: number },
        { type: string, id: number, name: string,  price: number } 
    ] = [
        { type: "user", name: "Alice", age: 30 },
        { type: "user", name: "Bob", age: 25 },
        { type: "product", id: 1, name: "Laptop", price: 999 },
        { type: "product", id: 2, name: "Smartphone", price: 499 }
    ];

    // 4++
    let dataSet: [
        {name: string, price: number},
        [string, number],
        {name: string, price: number},
        [string, number]
    ]= [
        { name: "Item A", price: 100 },
        [ "item1", 50 ],
        { name: "Item B", price: 200 },
        [ "item2", 75 ]
    ];

    let dataSet_union: ({ name: string, price: number} | (string | number)[])[]= [
        { name: "Item A", price: 100 },
        [ "item1", 50 ],
        { name: "Item B", price: 200 },
        [ "item2", 75 ]
    ];

    // 5++
    let complexStructure: {id: number, value: string, attributes: {weight: number, color: string}}[] = [
        { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" }},
        { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" }},
        { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" }}
    ]; 

    // 6++
    let nestedData: {id: number, tags: [string, string], name: string}[] = [
        { id: 1, tags: ["fruit", "sweet"], name: "apple" },
        { id: 2, tags: ["fruit", "tropical"], name: "mango" },
        { id: 3, tags: ["fruit", "berry"], name: "strawberry" }
    ];

    // 7++
    let profile_: {
        name: string,
        age: number,
        favorites: [ string, number, boolean, number ],
        address: {
          street: string,
          city: string
        }  
    } = {
        name: "Alice",
        age: 28,
        favorites: [ "reading", 42, true, 99.9 ],
        address: {
          street: "123 Main St",
          city: "Metropolis"
        }
    };

    // 8++
    let userData: {user: {name:string, age: number}, status: string}[] = [
        { user: { name: "John", age: 32 }, status: "active" },
        { user: { name: "Doe", age: 28 }, status: "inactive" },
        { user: { name: "Jane", age: 35 }, status: "active" }
    ];

    // 9++
    let collection: [
        { id: number, name: string, price: number},
        [string, number],
        { id: number, name: string, price: number},
        [string, number]
    ] = [
        { id: 1, name: "Item 1", price: 100 },
        ["Discount", 20],
        { id: 2, name: "Item 2", price: 200 },
        ["Discount", 10]
    ];

    // 10++
    let mixedItems: {id: number, type: string, name: string, size: string}[] = [
        { id: 1, type: "food", name: "Pizza", size: "Large" },
        { id: 2, type: "drink", name: "Coke", size: "Medium" },
        { id: 3, type: "food", name: "Burger", size: "Small" }
    ];  
}