export default function User ({
    message,
    count,
    isVisible,
    tags,
    user,
    myFunction,
    greet,
}: {
    message: string;
    count: number;
    isVisible: boolean;
    tags: string[];
    user: {id: number, name: string};

    myFunction: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        message: string
    ) => void;
    greet:(e: React.MouseEvent<HTMLButtonElement>) => void;
    
}) {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    const changeHandler_ = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <>
            <h1>{message}</h1>
            <h1>{count}</h1>
            <h1>{isVisible.toString()}</h1> 
            <h1>{JSON.stringify(tags, null, 2)}</h1>
            <h1>{JSON.stringify(user, null, 2)}</h1> 

            {/* 매개변수가 있을 경우 */}
            <button onClick={(e) => myFunction(e, "hello")}>Click me</button>
            {/* 매개변수가 없을 경우 */}
            <button onClick={greet}>greet</button>

            <input type="text" onChange={changeHandler}/>
            <input type="text" onChange={changeHandler_}/>
        </>
    );
}