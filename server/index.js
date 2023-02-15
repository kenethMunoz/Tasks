import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use(cors());
app.use(taskRoutes);

app.get("/", (req, res) => {
  res.send("servcer running");
});

app.listen(PORT);
console.log(`server running on port ${PORT}`);
