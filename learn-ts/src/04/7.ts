{
    let value: number | string = 10.12;
    console.log(value.toFixed(0));
}

{
    function printValue(value: number | string) {
        // 타입 가드 -> 타입을 좁혀주는 조건문 또는 문법 
        // if (typeof value === "number") console.log(value.toFixed());
        
        // 타입 단언 -> 타입 스크립트 컴파일러에게 타입을 명확히 알려주는 행위
        // 타입 단언 방법 1 (prefer) -> as [단언할 타입]
        console.log((value as number).toFixed(0));

        // 타입 단언 방법 2 -> <단언할 타입>
        // 단, JSX 문법과 충돌하기 때문에 리액트에서는 사용할 수 없다.
        console.log((<number>value).toFixed(0));
    }
    printValue("aaa"); // 에러 발생
}

{
    type User = {
        name: string;
    };

    type Car = {
        speed: number;
    };

    const user: User = {
        name: "sucodingding",
    };

    const car: Car = {
        speed: 100,
    };

    function printValue(obj: User | Car) {
        console.log((obj as Car).speed);
    }
    printValue(user);
}

{
    // 널 아님 보장 연산자 (!)
    // value! -> null 값이 아님을 보장하는 타입 단언의 종류
    // 단점) 런타임 에러가 날 수 있음 (null.toFixed() 같은)
    // !는 타입을 좁히는 용도가 아니고, null이 아님을 단언하는 것. 
    // 타입 가드(typeof, in, instanceof)로 정확히 값을 확인한 다음에 사용해야 한다.

    function printValue(value: number | null) {
      // if (typeof value === "number")
      console.log(value!.toFixed(2));
    }
    printValue(null);
  }
  
  {
    const element = document.querySelector("button") as HTMLButtonElement;
    element.style.color = "red";
  }