{
    // 1.
    let obj: {
        readonly name: string; //readonly -> name과 age만 받는 타입, 바꿀 수 없음.
        age: number;
        gender?: string; // optional 속성: 객체에서만 사용 (튜플, 배열 사용 X)
    } = {
        name: "sucoding",
        age: 20
    };

    obj.gender = "Feamle" // readonly -> 추후에 추가되는 것을 위해 optional property : 변수로 옵션적으로 

    // obj.name = "jane"; readonly !

    console.log(obj.name);
    console.log(obj.age);
}
