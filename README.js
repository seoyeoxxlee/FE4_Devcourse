/*
    1. 리액트 프로젝트 생성
    1.1 CRA(Create React App) 사용
    1.1.2 CRA 명령어
    1.1.2.1 npx create-react-app [폴더명]
    1.1.2.2 npx create-react-app . -> 현재 폴더에 생성하겠다
    1.1.3 결론: CRA 사용하면 안 된다.

    1.2 Vite 사용
    1.2.1 Vite 명령어
    1.2.1.1 npm create vite@latest [폴더명]
    1.2.1.2 npm create vite@latest . -> 현재 폴더에 생성하겠다
    => npm을 사용해서 vite@latest 패키지의 최신 버전을 설치하고,
    vite@latest 패키지의 최선 버전으로 프로젝트를 생성한다.
    1.2.1.3 Vaniia, React, Vue, Preact, Lite, Svelte 중 선택
    1.2.1.4 React -> React + TypeScript, React + TypeScript + SWC,
    JavaScript, TypeScript + SWC, React Router v7 중 선택.

    1.2.1.3 npm install
    1.2.1.4 npm run dev

    1.3 보일러 플레이트(bolierplate)
    1.3.1 반복적이고 기본적으로 필요한 코드나 설정 파일들을 빠르게 생성해주는 템플릿 역할을 하는 라이브러리.
    1.3.1 CRA, Vite, Next.JS, Remix, Gatsby 등 -> 리액트에서 사용되는 보일러 플레이트



    1.4 Vite가 사용하는 3가지 도구
    1.4.1 ESBuild (Go -> 컴퓨터 레벨에 가장 근접한 언어 -> 빠른 번)
    1.4.1.1 개발 모드에서 node_modules 폴더에 있는 패키지들의 종속성을 사전 번들링 하기 위해서 사용한다. (트랜스 컴파일러 + 사전 종속석 번들링)

    1.4.2 RollUp
    1.4.2.1 배포시에 라이브러리나 모듈들을 번들링 하기 위해서 사용한다. (번들링, JS)
    1.4.2.2 트리쉐이킹, 청크 최적화

    1.4.3 SWC - (Speed Web Compiler)
    1.4.3.1 타입스크립트나 JSX를 자바스크립트로 빠르게 트랜스 컴파일 하기 우해서 사용한다. (트랜스 컴파일러, Rust)
*/