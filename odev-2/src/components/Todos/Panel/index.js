import React from "react";

const Panel = ({ filter, setFilter, uncompletedCount, clearCompleted }) => {
  
  const handleOnClickFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{uncompletedCount}</strong>
        {console.log(uncompletedCount)}
        {uncompletedCount > 1 ? `items` : `item`} left
      </span>

      <ul className="filters">
        <li>
          <a onClick={() => handleOnClickFilter("all")}
            className={filter === "all" ? "selected" : ""}>
            All
          </a>
        </li>
        <li>
          <a onClick={() => handleOnClickFilter("active")}
            className={filter === "active" ? "selected" : ""}>
            Active
          </a>
        </li>
        <li>
          <a onClick={() => handleOnClickFilter("completed")}
            className={filter === "all" ? "completed" : ""}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
}

export default Panel;
