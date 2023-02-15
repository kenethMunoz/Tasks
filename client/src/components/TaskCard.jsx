import React from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx";
function TaskCard({ task }) {
  const { deleteTask, toggleDone } = useTasks();
  const navigate = useNavigate();
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <a
        onClick={() => {
          toggleDone(task.id, task.done);
        }}
      >
        {task.done === 1 ? "✅" : "❌"}
      </a>
      <span>{task.createdAt}</span>
      <button
        onClick={() => {
          navigate(`/edit/${task.id}`);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
