import { useEffect, useState } from "react";

export const UserApp = () => {
  //  const styleLine = {div: {background: "black", fontSize: "1.5rem", color: "white"}}
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      {/*<div style={styleLine.div}>UserApp</div>*/}
      <h1>User List:</h1>
      <ul>
        <li>Enzo</li>
        <li>John</li>
      </ul>
    </>
  );
};
