{
    // const로 할당하면 재할당이 되지 않아서, 타입 추론이 const num: num = 10;이 아니고,
    // 자기 자신의 값을 type으로 받게 된다. -> 리터럴 타입
    
    // 리터럴 타입 -> 값 자체를 타입으로 사용하는 것
    const num = 10;
    const str = "A";
    let bool: true = true;
    const obj = { name: "sucoding" };
    obj.name = "kisu";
    const arr: number[] = [1, 2, 3];
}