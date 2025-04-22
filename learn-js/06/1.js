// WEB API -> 웹 브라우저에서 제공해주는 API
// setTimeout, setInterval, DOM 이벤트, Promise, Fetch
// 코드 상에서의 setTimeout의 위치와, 출력 순서와는 아무 관계가 없다.

// call stack에서의 setTimeout()의 역할은 console.log('b');를 WEB API로 넘겨주는 것이다.
// 따라서 넘겨주기만하면, setTimeout()은 call stack에서 비워지게 된다.

// 이벤트 루프: JS의 Call stack이 비어져 있는 지 실시간으로 확인히고,
// 비어 있으면 Task queue에 있는 컨텍스트를 실행!

// setTimeout도 함수다.

// Task Queue
// setTimeout
// setInterval
// setImmediate
// DOM 이벤트 콜백
// fetch.then()

// Micro Task Queue
// queueMicrotask()
// Promise.then()
// Promise.catch
// Promise.finally
// MutationObserver

// Micro Task Queue의 우선순위가 Task Queue보다 먼저다.
console.log("A");
Promise.resolve().then(() => {
    console.log("micro");
});
setTimeout(() => {
    console.log("B");
}, 0);
Promise.resolve().then(() => {
    console.log("C");
});
console.log("D");
// AD micro CB

