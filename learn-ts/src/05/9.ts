// 조건부
// T extends U ? X : Y

{
    type IsString<T> = T extends string? "Yes" : "No";
    type A = IsString<string>; // "Yes"
    type B = IsString<number>; // "No"

    const a: A = "Yes";
    const b: B = "No";
}


// 조건부 + infer : 오나전 어려움 🥲
{
    // infer는 조건부 타입에서만 사용할 수 있고,
    // 조건에 해당하는 것에서 속성값만 추출이 된다.
    // (infer U)[] -> 배열이 맞으면
    type ElementType<T> = T extends (infer U)[] ? number : T;
    type A = ElementType<10>;
    type B = ElementType<[1, 2, 3]>; // number[] -> number만 추출
    type C = ElementType<["a", "b"]>; // string[] -> string만 추출
    type D = ElementType<[true,false]>; // boolean[] -> boolean만 추출
}


{
    type ReturnType<T extends (...args:any) => any> = T extends (
        ...args: any
    ) => infer R 
    ? R 
    : any;

    type AgeFunc = ReturnType<typeof getAge>;
    
    function getAge() {
        return { name: "sucoding" };
    }
}