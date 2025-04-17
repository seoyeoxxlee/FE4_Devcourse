// d.ts
// d -> declaration file
// 자바 스크립트 라이브러리나 모듈에 대한 타입 정보를
// 타입 스크립트에 제공하기 위해 사용하는 파일 형식

interface User {
    id: number;
    name: string;
}

interface UserProps {
    message: string,
    count: number,
    isVisible: boolean,
    tags: string[],
    user: User;
}