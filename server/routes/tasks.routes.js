import { Router } from "express";
import {
  getTask,
  getTasks,
  deleteTask,
  updateTask,
  createTask,
  toggleDone,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id/:done", toggleDone);

export default router;
