import React, { useState } from "react";

const TaskInput = ({ onAdd, onSearch }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title); 
      setTitle(""); 
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
      <input
        type="text"
        placeholder="Search tasks"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default TaskInput;
