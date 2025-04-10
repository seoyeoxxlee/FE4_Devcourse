{
    // 이넘(enum) - 열거형, 관련된 타입을 묶어 놓는 것
    // 사용할 값들을 나열해 두는 것.
    type Status = string;
    enum StatusEnum {
        Loading = "loading",
        Success = "success",
        Error = "error",
    }

    // enum - if문 
    function showStatus(status: Status) {
        if (status === "loading") {
            console.log("로딩 중...");
        } else if (status === "success") {
            console.log("성공");
        } else if (status === "error") {
            console.log("실패");
        }
    }

    // enum - 스위치문으로도 작성 가능
    function showStatus_switch(status: Status) {
        switch (status) {
            case StatusEnum.Loading:
                console.log("로딩 중...");
                break;
            case StatusEnum.Success:
                console.log("성공");
                break;
            case StatusEnum.Error:
                console.log("실패!");
                break;
        }
    }

    showStatus(StatusEnum.Success);
    showStatus_switch(StatusEnum.Loading);
}

{
    // 이니셜라이즈된 열거형 (Const Enum)
    // enum => 번들 크기가 크지만, 디버깅이 용이함
    // const enum -> 번들 크기가 작지만, 디버깅이 불편함
    const enum Status {
        Success = 1,
        Error,
        Pending
      }
      
      let result = Status.Success;
      console.log(result); // 1
}

{
    // enum 숫자값이 할당됨
    // 숫자 열거형 enum
    // 아무것도 지정하지 않으면 0부터 숫자가 자동으로 할당됨
    
    enum Direction {
        Up, // 0
        Down, // 1
        Left, // 2
        Right, // 3
    }

    console.log("Up");
    console.log(Direction.Up); // 0

    // 지정했을 때
    // + 타입 스크립트 내부적으로 양방향 객체를 생성한다.
    // 500 = "Up"
    // 600 = "Down" ...
    enum Direction2 {
        Up = 500, 
        Down = 600, 
        Left = 700, 
        Right = 800, 
    }

    console.log(Direction2.Up); // 500
    console.log(Direction2.Down); // 600
    console.log(Direction2.Left); // 700
    console.log(Direction2.Right); // 800
}

{
    // 실무에서 쓰는 숫자 열거형 (이런 상황에서만 사용함)
    enum StatusCode {
        OK = 200,
        BadRequest = 400,
        Unauthorized = 401,
        NotFound = 404,
    }

    console.log(StatusCode.OK); // 200
    console.log(StatusCode[200]); // OK -> 리버스 매핑: const enum에서 겂 -> 키로 거꾸로 접근할 수 있음

}

{
    // 문자 열거형
    // 문자와 숫자가 섞여 있는 형태를 혼합 열거형. -> 문법적으로 가능하나, 실제로 거의 사용하지 않음.
    enum Status {
        Loading = "loading",
        Error = 0,
        Success = "success",
    }

    interface Api {
        data: string;
        status: Status;
    }

    const api: Api = {
        data: "success",
        status: Status.Error,
    }
}

{
    // enum 대신 유니언 리터럴 타입을 쓰는 경우
    type StatusType = "loading" | "success" | "error";
    function showStatusType(status: StatusType) {}
    showStatusType("success");
}