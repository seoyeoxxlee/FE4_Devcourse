import { use } from "react";
import { Suspense } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface UserResponse {
  users: User[];
}

function getUsers(): Promise<UserResponse> {
  return fetch('https://dummyjson.com/users').then(res => res.json());
}

export default function UseHookExample () {

  const usersPormise = getUsers();

  return (
    <div>
      <h1>Use Hook Example</h1>
      <Suspense fallback = {<div>Loading...</div>}>
        <UsersList usersPromise={usersPormise} />
      </Suspense>
    </div>
  );
}

function UsersList({usersPromise} : {usersPromise : Promise<UserResponse>}) {
  
  const getUsersList = use(usersPromise);
  
  return (
    <div>
      {
        getUsersList.users.map(user => (
          <div key={user.id}>
            <p>{user.firstName} - {user.lastName}</p>
          </div>
        ))
      }
    </div>
  )
}