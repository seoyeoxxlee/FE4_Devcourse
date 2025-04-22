// 사용자가 작성한 글을 바로 자동으로 저장해주는 코드

import { useEffect, useState } from "react";

export default function AutoSave () {

    const [text, setText] = useState("");
    const textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    useEffect(() => {
        const saveText = localStorage.getItem("saveText");
        if (saveText) {
            setText(saveText);
        }
    }, []);

    // 텍스트의 변경사항이 감지되었을 때 useEffect로 localStorage에 text 저장해줌
    useEffect(() => {
        const interval = setTimeout(() => {
            localStorage.setItem("savedText", text);
        }, 1000);

        // setTimeout 반드시 종료해주기.
        return () => {
            clearTimeout(interval);
        }
    }, [text]);

    return (
    <>
        <h1>{text}</h1>
        <textarea value={text} onChange={textChangeHandler}></textarea>
    </>
  );
}