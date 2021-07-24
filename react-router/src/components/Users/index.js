import { useState, useEffect } from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import axios from "axios";
import User from "./User";


function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const {path, url} = useRouteMatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      <ul>
        {!loading && users.map((user) => (
          <li key={user.id}>
            <NavLink to={`${url}/${user.id}`} activeClassName="active">{user.name}</NavLink>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${path}/:id`}>
          <User />
        </Route>
        <Route path={path}>
          <h3>Please select a user.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Users;
