import { useState, useEffect } from "react";

const initialFormValues = {todo: '', isCompleted: false};

function Add({ addTodos, todos }) {
    const [form, setForm] = useState(initialFormValues)
    useEffect(() => {
        setForm(initialFormValues)
    }, [todos])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if (form.todo === '') {
            return false;
        }
        addTodos([...todos, form])
    }


  return (
    <div>
      <form onSubmit={onSubmit} mv-action="set(newTodo, newTodo.trim()), if(newTodo != '', add(newTodo, todo) & set(newTodo, ''))">
        <input
          name="todo"
          value={form.todo}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
}

export default Add;
