import axios from "axios";
export const getTaskRequest = async (task) =>
  await axios.get("http://localhost:4000/tasks", task);

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getOneTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateTaskRequest = async (task) => {
  await axios.put(`http://localhost:4000/tasks/${task.id}`, task);
};

export const toggleDoneRequest = async (id, done) => {
  await axios.put(`http://localhost:4000/tasks/${id}/${done}`);
};
