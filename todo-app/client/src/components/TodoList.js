import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemAsync,
  getTodosAync,
  toggleTodoAsync,
} from "../redux/todos/services";
import { selectFilteredTodos } from "../redux/todos/todosSlice";
import Loading from "./Loading";
import Error from "./Error";

function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAync());
  }, [dispatch]);

  const handleDestroy = async (id) => {
    if (window.confirm("Are you sure?")) {
      await dispatch(removeItemAsync(id));
    }
  };

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id, !todo.completed)}
                />
                <label>{todo.title}</label>
                <button
                  className="destroy"
                  onClick={() => handleDestroy(todo.id)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
