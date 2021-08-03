import React from "react";
import { UserListProps } from "./interfaces";

const UserList: React.FC<UserListProps> = ({ users, deleteHandler }) => {
  console.log(users);
  const content = users && users.map((user, index) => (
    <div
      style={{ width: "10%", margin: "1rem auto", border: "1px solid black" }}
      key={index}
      className="user"
    >
      <p>Name: {user.nome}</p>
      <p>Email: {user.email}</p>
      <button onClick={hEvent => deleteHandler(hEvent, user)}>
        Delete This
      </button>
    </div>
  ));
  
  return <>{content}</>;
};

export default UserList;
