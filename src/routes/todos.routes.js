import express from "express";
import { addTodo, allTodo, deleteTodo, editTodo, singletodo } from "../controllers/todos.controllers.js"; // Fixed path

const router = express.Router();

// POST route to add a todo
router.post("/todo", addTodo);
router.get("/todo",allTodo)
router.get("/todo/:id",singletodo)
router.delete("/todo/:id",deleteTodo)
router.put("/todo/:id",editTodo)
export default router;
