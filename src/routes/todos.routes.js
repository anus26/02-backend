import express from "express";
import { addTodo } from "../controllers/todos.controllers.js"; // Fixed path

const router = express.Router();

// POST route to add a todo
router.post("/todo", addTodo);

export default router;
