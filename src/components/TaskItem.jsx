import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(task.id)}>
        {task.completed ? "✔️" : "⬜️"} {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
