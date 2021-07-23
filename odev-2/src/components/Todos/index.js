import { useState } from "react";
import Add from "./Add";
import List from "./List";
import Panel from "./Panel";

const initialTodos = [
  { todo: "Learn JavaScript", isCompleted: true },
  { todo: "Learn React", isCompleted: false },
  { todo: "Have a life!", isCompleted: false },
];

const checkFilter = (filter, item) => {
  switch (filter) {
    case "all":
      return true;
    case "active":
      return !item.isCompleted;
    case "completed":
      return item.isCompleted;
    default:
      return false;
  }
};

const uncompletedCount = (todos) => {
  return todos.filter(todo => !todo.isCompleted).length
}

function Todosapp() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('all');

  const removeAllCompletedTodos = () => {
    const filteredTodos = todos.filter(todo => !todo.isCompleted);
    setTodos(filteredTodos)
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Add todos={todos} addTodos={setTodos} />
      </header>

      <List todos={todos} addTodos={setTodos} filter={filter} checkFilter={checkFilter} />
      <Panel filter={filter} setFilter={setFilter} uncompletedCount={uncompletedCount} clearCompleted={removeAllCompletedTodos} />
    </section>
  );
}

export default Todosapp;
