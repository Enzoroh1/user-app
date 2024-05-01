import { useEffect, useState } from "react";
import { UserList } from "./components/UserList";

export const UserApp = () => {
  //  const styleLine = {div: {background: "black", fontSize: "1.5rem", color: "white"}}
  const [endPoint, setEndPoint] = useState("users");

  const handleFetch = () => {
    setEndPoint("comments");
  };

  // mostrar en pantalla los datos de la api
  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);

  return (
    <>
      {/*<div style={styleLine.div}>UserApp</div>*/}
      <h1>User List:</h1>
      <UserList endPoint={endPoint} />
      <button onClick={handleFetch}>Call Api</button>
    </>
  );
};
