import { createContext, useContext, useState } from "react";
import {
  getTaskRequest,
  deleteTaskRequest,
  createTaskRequest,
  getOneTaskRequest,
  updateTaskRequest,
  toggleDoneRequest,
} from "../api/Task.api";
export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context)
    throw new Error("useTasks must be used within a TaskContextProvider");

  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  async function loadTasks() {
    const response = await getTaskRequest();
    setTasks(response.data);
  }
  async function deleteTask(id) {
    try {
      await deleteTaskRequest(id);

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  }
  async function createTask(values, actions) {
    try {
      await createTaskRequest(values);
      actions.resetForm();
    } catch (error) {
      console.log(error.response.data);
    }
  }
  async function getTask(id) {
    try {
      return await getOneTaskRequest(id);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTask(values) {
    try {
      await updateTaskRequest(values);
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleDone(id, done) {
    try {
      await toggleDoneRequest(id, done === 0 ? 1 : 0);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
