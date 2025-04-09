{
    // 옵셔널 파라미터
    // 옵셔널 속성
    function printUserInfo(name: string) : void;
    function printUserInfo(name: string, age: number) : void;
    function printUserInfo(name: string, age?: number) : void {
        if (name && age) console.log(`${name}, ${age}`);
        else console.log(`${name}`);
    }
    printUserInfo("sucoding", 20);
}