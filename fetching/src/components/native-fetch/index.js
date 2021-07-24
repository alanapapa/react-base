import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
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

export default Users;
