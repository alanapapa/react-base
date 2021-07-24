import { useEffect, useState } from "react";
import axios from "axios";

function UsersAxios() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
      .finally(()=> setIsLoading(false))
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {isLoading && "Loading..."}
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default UsersAxios;
