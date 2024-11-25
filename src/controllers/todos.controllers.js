// 8XwKBGZmUAidQEGA
import mongoose from "mongoose";
import Todos from "../models/todos.models.js";
// add todo
const addTodo = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json({
      message: "title or description required",
    });
    return;
  }
  const todo = Todos.create({
    title,
    description,
  });
  res.status(201).json({
    message: "user added to database successfully",
  });
};
// get all todo
const allTodo = async(req, res) => {
try {
  const  todos=await Todos.find()
  if (!todos||todos.length === 0) {
     res.status(404).json({
      message:"no todo found"
    })
    return
  }
res.status(200).json({
  message:"all todos avalible"
  
})
} catch (error) {
  res.status(500).json({
    message:"ërror fetching"
  
  })
}  
}
// get single todo
// delete todo
// edit todo
export { addTodo ,allTodo}
