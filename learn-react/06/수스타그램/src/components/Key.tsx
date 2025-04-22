import { useState } from "react";

export default function Key () { 
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John"
        },
        {
            id: 2,
            name: "Mike"
        },
        {
            id: 3,
            name: "Anna"
        },
    ]);

    const clickHandler = () => {
        setUsers((users) => [{id: users.length + 1, name: "Jerry"}, ...users]);
    }

    return (
    <>
      {users && users.map((user, index) => (
        <input 
            key={index}
            className="border border-black block m-4 "
            placeholder={user.name}
        />
      ))}
       <button className="m-4" onClick={clickHandler}>추가</button>
    </>
  );
}