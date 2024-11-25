import express from "express";
import { addTodo, allTodo } from "../controllers/todos.controllers.js"; // Fixed path

const router = express.Router();

// POST route to add a todo
router.post("/todo", addTodo);
router.get("/todo",allTodo)

export default router;
