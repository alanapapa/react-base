import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h2>User Details:</h2>
      {loading && <div>Loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <br />
      <br />
      { id < 10 && <Link to={`/users/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>}
      <br />
      { id > 1 && <Link to={`/users/${parseInt(id) - 1}`}>Last User ({parseInt(id) - 1})</Link>}
    </div>
  );
}

export default User;
