// 이넘 연습문제++

{
    // 문제 1: 사용자 인증 상태
    enum Status {
        UNVERIFIED = "UNVERIFIED",
        PENDING = "PENDING",
        VERIFIED = "VERIFIED",
    }

    function getUserStatus(status: Status): string {
        if (status === "UNVERIFIED") return "User is unverified";
        if (status ===  "PENDING") return "User verification is pending";
        if (status === "VERIFIED") return "User is verified";
        return "Unknown status";
    }
}

{
    // 문제 2: 주문 처리 상태 (다양한 상태)
    enum OrderState {
        INITIATED = 0,
        PROCESSING = 1,
        SHIPPED = 2,
        DELIVERED = 3,
        CANCELLED = 4
    }
    
    function getOrderState(state: OrderState): string {
        switch (state) {
          case OrderState.INITIATED:
            return "Order initiated";
          case OrderState.PROCESSING:
            return "Order being processed";
          case OrderState.SHIPPED:
            return "Order shipped";
          case OrderState.DELIVERED:
            return "Order delivered";
          case OrderState.CANCELLED:
            return "Order cancelled";
          default:
            return "Unknown state";
        }
    }
}

{
    // 문제 3: 레벨별 사용자 경험
    enum Level {
        BEGINNER = "BEGINNER",
        INTERMEDIATE = "INTERMEDIATE",
        EXPERT = "EXPERT",
    }

    function getUserLevel(level: Level): string {
        if (level === Level.BEGINNER) return "Beginner user";
        if (level === Level.INTERMEDIATE) return "Intermediate user";
        if (level === Level.EXPERT) return "Expert user";
        return "Unknown level";
    }
}

{
    // 문제 4: 결제 상태
    enum PaymentStatus {
        NOT_STARTED = 0,
        IN_PROGRESS = 1,
        COMPLETED = 2,
        FAILED = 3,
    }

    function getPaymentStatus(status: PaymentStatus): string {
        if (status === 0) return "Payment not started";
        if (status === 1) return "Payment in progress";
        if (status === 2) return "Payment completed";
        if (status === 3) return "Payment failed";
        return "Unknown status";
    }
}

{
    // 문제 5: 회원 가입 단계
    enum Step {
        STEP_ONE = "STEP_ONE",
        STEP_TWO = "STEP_TWO",
        STEP_THREE = "STEP_THREE",
    }

    function getSignupStep(step: Step): string {
        if (step === Step.STEP_ONE) return "Step 1: Enter details";
        if (step === Step.STEP_TWO) return "Step 2: Confirm email";
        if (step === Step.STEP_THREE) return "Step 3: Complete registration";
        return "Unknown step";
    }
}

{
    // 문제 6: 차종별 가격
    enum Price {
        SEDAN = "SEDAN",
        SUV = "SUV",
        TRUCK = "TRUCK"
    }

    function getPriceByCarType(type: Price): number {
        if (type === Price.SEDAN) return 30000;
        if (type === Price.SUV) return 40000;
        if (type === Price.TRUCK) return 50000;
        return 0;
    }
}

{
    // 문제 7: 채팅 메시지 유형
    enum MessageType {
        TEXT = "TEXT",
        IMAGE = "IMAGE",
        VIDEO = "VIDEO",
        FILE = "FILE"
    }

    function getMessageType(type: MessageType): string {
        if (type === "TEXT") return "Text message";
        if (type === "IMAGE") return "Image message";
        if (type === "VIDEO") return "Video message";
        if (type === "FILE") return "File message";
        return "Unknown message type";
    }
}

{
    // 문제 8: 시스템 로그 레벨
    enum Level {
        INFO = "INFO",
        WARN = "WARN",
        ERROR = "ERROR",
        DEBUG = "DEBUG"
    }

    function logMessage(level: Level, message: string): void {
        if (level === Level.INFO) console.log("INFO: " + message);
        if (level === Level.WARN) console.warn("WARN: " + message);
        if (level === Level.ERROR) console.error("ERROR: " + message);
        if (level === Level.DEBUG) console.debug("DEBUG: " + message);
    }
}

{
    // 문제 9: 날짜 유형 (일반, 휴일)
    enum Day {
        WEEKDAY = "WEEKDAY",
        WEEKEND = "WEEKEND"
    }

    function getDayType(day: Day): string {
        if (day === "WEEKDAY") return "It's a weekday";
        if (day === "WEEKEND") return "It's a weekend";
        return "Unknown day type";
    }
}

{
    // 문제 10: 마케팅 캠페인 유형
    enum CampaignType {
        DISCOUNT = "DISCOUNT",
        PROMOTION = "PROMOTION",
        GIVEAWAY = "GIVEAWAY",
    }

    function getCampaignType(type: string): string {
        if (type === "DISCOUNT") return "Discount campaign";
        if (type === "PROMOTION") return "Promotion campaign";
        if (type === "GIVEAWAY") return "Giveaway campaign";
        return "Unknown campaign type";
    }
}