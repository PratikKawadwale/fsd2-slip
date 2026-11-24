import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (e) => {
    e.preventDefault();

    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>TODO List Application</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <h3>Task List</h3>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;