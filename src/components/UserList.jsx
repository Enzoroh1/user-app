import { useFetchData } from "../hooks/useFetchData";

export const UserList = ({ endPoint }) => {
  const { data, isLoading } = useFetchData(endPoint);

  return (
    <>
      <ul>
        {isLoading ? 
          <p>Loading...</p>
        : endPoint === "users" ? 
          data.map((item) => <li key={item.id}>{item.name}</li>)
         : 
          data.map((item) => <li key={item.id}>{item.email}</li>)
        }
      </ul>
    </>
  );
};
