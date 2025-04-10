// 이넘 연습문제+
{
    // 문제 1: 요일을 나타내는 상수
    enum Day {
        MONDAY = 1,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY,
    }
      
    function getDayName(day: Day): string {
        switch (day) {
          case Day.MONDAY:
            return "Monday";
          case Day.TUESDAY:
            return "Tuesday";
          case Day.WEDNESDAY:
            return "Wednesday";
          case Day.THURSDAY:
            return "Thursday";
          case Day.FRIDAY:
            return "Friday";
          case Day.SATURDAY:
            return "Saturday";
          case Day.SUNDAY:
            return "Sunday";
          default:
            return "Invalid day";
        }
    }
      
    // 테스트
    console.log(getDayName(Day.MONDAY)); // "Monday"
    console.log(getDayName(5));          // "Friday"
    // console.log(getDayName(8));          // "Invalid day"
}

{
    // 문제 2: 상태 코드
    enum Status {
        SUCCESS = 200,
        NOT_FOUND = 404,
        INTERNAL_ERROR = 500,
    }

    function getStatusMessage(status: Status): string {
        switch (status) {
          case Status.SUCCESS:
            return "Success";
          case Status.NOT_FOUND:
            return "Not Found";
          case Status.INTERNAL_ERROR:
            return "Internal Server Error";
          default:
            return  "Unknown Status";
        }
    }

    console.log(getStatusMessage(Status.SUCCESS));
}

{
    // 문제 3: 우편번호에 따른 지역 이름
    enum Zip {
        SEOUL = "Seoul",
        BUSAN = "Busan",
        DAEGU = "Daegu",
    }

    function getCityByZip(zip: string): string {
        switch (zip) {
            case "100":
                return Zip.SEOUL;
            case "200":
                return Zip.BUSAN;
            case "300":
                return Zip.DAEGU;
            default:
              return  "Unknown Zip";
        }
    }

    console.log(getCityByZip("100"));
}

{
    // 문제 4: 사용자 권한
    enum Role {
        ADMIN = "admin",
        USER = "user",
        GUEST = "guest",
    }

    function getPermissionLevel(role: Role): string {
        switch (role) {
            case Role.ADMIN:
                return "Full access";
            case Role.USER:
                return "Limited access";
            case Role.GUEST:
                return "Guest access";
            default:
              return  "No access";
        }  
    }

    console.log(getPermissionLevel(Role.ADMIN));
}

{
    // 문제 5: 상품 상태
    enum Status {
        PENDING = 1,
        SHIPPED = 2,
        DELIVERED = 3,
    }

    function getProductStatus(status: Status): string {
        switch (status) {
            case Status.PENDING:
                return "Pending";
            case Status.SHIPPED:
                return "Shipped";
            case Status.DELIVERED:
                return "Delivered";
            default:
              return  "Unknown Status";
        }  
    }

    console.log(getProductStatus(Status.DELIVERED));
}

{
    // 문제 6: 주문 상태

    enum Status {
        ORDER_PLACED = "Order Placed",
        PAYMENT_PENDING = "Payment Pending",
        SHIPPED = "Shipped",
        DELIVERED = "Delivered",
    }

    function getOrderStatus(status: Status): string {
        switch (status) {
            case Status.ORDER_PLACED:
                return "Your order has been placed.";
            case Status.PAYMENT_PENDING:
                return "Payment is pending.";
            case Status.SHIPPED:
                return "Your order has been shipped.";
            case Status.DELIVERED:
                return "Your order has been delivered.";
            default:
              return  "Unknown Status";
        }  
    }

    console.log(Status.ORDER_PLACED);
}

{
    // 문제 7: 상태 변경
    enum Status {
        IS_ACTIVE, // 0 true
        IS_INACTIVE, // 1 false
    }

    function toggleStatus(status: Status): boolean {
        status === Status.IS_ACTIVE ? Status.IS_INACTIVE : Status.IS_ACTIVE;
        return status === 0 ? false : true;
      }
      
      // 테스트
      console.log(toggleStatus(Status.IS_ACTIVE));   // false (INACTIVE)
      console.log(toggleStatus(Status.IS_INACTIVE)); // true (ACTIVE)
}

{
    // 문제 8: 선택지 값
    enum Option {
        OPTION_ONE = "Option 1",
        OPTION_TWO = "Option 2",
        OPTION_THREE = "Option 3",
    }

    function getOptionValue(option: Option): string {
        switch (option) {
            case Option.OPTION_ONE:
                return "You selected Option 1.";
            case Option.OPTION_TWO:
                return "You selected Option 2.";
            case Option.OPTION_THREE:
                return "You selected Option 3.";
            default:
              return  "Invalid option";
        }  
    }

    console.log(getOptionValue(Option.OPTION_TWO));
}

{
    enum Meal {
        BREAKFAST = "Breakfast",
        LUNCH = "Lunch",
        DINNER = "Dinner",
    }

    function getMealTime(meal: Meal): string {
        switch (meal) {
            case Meal.BREAKFAST:
                return "Good morning, it's breakfast time!";
            case Meal.LUNCH:
                return "Good afternoon, it's lunch time!";
            case Meal.DINNER:
                return "Good evening, it's dinner time!";
            default:
              return  "Invalid meal time";
        }  
    }
    console.log(getMealTime(Meal.BREAKFAST));

}

{
    // 문제 10: 로그인 상태
    enum Status {
        LOGGED_IN = "true",
        LOGGED_OUT = "false",
    }

    function checkLoginStatus(status: Status): string {
        switch (status) {
            case Status.LOGGED_IN:
                return "You are logged in.";
            case Status.LOGGED_OUT:
                return "You are logged out.";
            default:
              return  "Unknown status";
        }  
    }

    console.log(checkLoginStatus(Status.LOGGED_IN));
}