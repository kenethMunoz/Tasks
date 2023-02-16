import React from "react";

import { BsCheckLg, BsXLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx";
function TaskCard({ task }) {
  const { deleteTask, toggleDone } = useTasks();
  const navigate = useNavigate();
  return (
    <div className="m-25 card d-flex justify-content-start px-4 my-3 bg-info p-2">
      <h2 className="card-title">{task.title}</h2>
      <p className="card-subtitle">{task.description}</p>

      <span>{task.createdAt}</span>
      <a
        className=" text-ligth cursor-pointer over-overlay "
        onClick={() => {
          toggleDone(task.id, task.done);
        }}
      >
        <button className="btn">
          Done: {task.done === 1 ? <BsCheckLg /> : <BsXLg />}
        </button>
      </a>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-ligth w-25"
          onClick={() => {
            navigate(`/edit/${task.id}`);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-ligth w-25"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
