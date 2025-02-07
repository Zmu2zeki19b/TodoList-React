import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    if (e.key === "Enter" && newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo List</h1>
      <div className="todo-box">
        <input
          type="text"
          className="todo-input"
          placeholder="Que tené que hacer hoy papa?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleAddTask}
        />
        <ul className="todo-list">
          {tasks.length === 0 ? (
            <li className="empty">No hay tareas, añadir tareas</li>
          ) : (
            tasks.map((task, index) => (
              <li key={index} className="task-item">
                {task}
                <span
                  className="delete-btn"
                  onClick={() => handleDeleteTask(index)}
                >
                  ❌
                </span>
              </li>
            ))
          )}
        </ul>
        <div className="footer">{tasks.length} item left</div>
      </div>
    </div>
  );
};

export default Home;

