import { useState, useEffect } from "react";

function Edit({ todos, addTodos, filter, checkFilter }) {
  const [todosCompleted, setTodosCompleted] = useState(false);
  const [updateTodoIndex, setUpdateTodoIndex] = useState(-1);

  useEffect(() => {
    setTodosCompleted(todos.every(todo => todo.isCompleted));
  }, [todos]);

  const handleToggleComplete = (i) => {
    updateTodo({ isCompleted: !todos[i].isCompleted }, i);
  };

  const handleToggleAllComplete = () => {
    const newTodoList = todos.map((todo) => {
      todo.isCompleted = !todosCompleted;
      return todo;
    });
    addTodos(newTodoList);
  };

  const handleUpdateTodoIndex = (i) => {
    setUpdateTodoIndex(i);
  };

  const handleOnBlur = (e, i) => {
    setUpdateTodoIndex(-1);

    if (e.target.value === "") {
      return false;
    }

    updateTodo({todo: e.target.value}, i);
  };

  const removeTodo = (i) => {
    const filteredTodos = todos.filter((todo, key) => key !== i);
    addTodos(filteredTodos);
  };

  const updateTodo = (newTodo, i) => {
    let newTodoList = [...todos];
    let todo = newTodoList[i];
    newTodoList[i] = { ...todo, ...newTodo };
    addTodos(newTodoList);
  };

  return (
    <div>
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={todosCompleted}
          onChange={handleToggleAllComplete}
        />
        <label htmlFor="toggle-all" onClick={handleToggleAllComplete}>
          Mark all as complete
        </label>

        <ul className="todo-list">
          {todos.map(
            (todo, i) =>
              checkFilter(filter, todo) && (
                <li className={(todo.isCompleted ? "completed" : "")} key={i}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => handleToggleComplete(i)}
                    />

                    {updateTodoIndex === i ? (
                      <input
                        defaultValue={todo.todo}
                        className="mv-editor"
                        autoFocus={true}
                        onBlur={(e) => handleOnBlur(e, i)}
                      />
                    ) : (
                      <>
                        <label onClick={() => handleUpdateTodoIndex(i)}>
                          {todo.todo}
                        </label>
                        <button
                          className="destroy"
                          onClick={() => removeTodo(i)}
                        />
                      </>
                    )}
                  </div>
                </li>
              )
          )}
        </ul>
      </section>
    </div>
  );
}

export default Edit;
