import express from "express";
import { PORT } from "./config";

const app = express();

app.get("/", (req, res) => {
  res.send("hoy vivio la pepa");
});
app.listen(PORT);
