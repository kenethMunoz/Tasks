import { pool } from "../db.js";

export const getTasks = async function (req, res) {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createdAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async function (req, res) {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "tarea no encontrada" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async function (req, res) {
  try {
    const [result] = await pool.query(
      `INSERT INTO tasks (title,description) VALUES (?,?)`,
      [...Object.values(req.body)]
    );
    res.json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async function (req, res) {
  try {
    const [result] = await pool.query("UPDATE tasks SET ? WHERE id =?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async function (req, res) {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows !== 0) {
      return res.sendStatus(204);
    }

    res.status(404).json({ message: "task not found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const toggleDone = async function (req, res) {
  try {
    const [result] = await pool.query("UPDATE tasks SET done = ? WHERE id=?", [
      req.params.done,
      req.params.id,
    ]);
  } catch (error) {
    return res.status(500).json({ message: "task not found" });
  }
};
