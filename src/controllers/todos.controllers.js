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
const allTodo = async (req, res) => {
  try {
    const todos = await Todos.find()
    if (!todos || todos.length === 0) {
      res.status(404).json({
        message: "no todo found"
      })
      return
    }
    res.status(200).json({
      message: "all todos avalible",
      todos

    })
  } catch (error) {
    res.status(500).json({
      message: "ërror fetching"

    })
  }
}
// get single todo
const singletodo = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ erro: "not valid id" })

    }
    const todo = await Todos.findById(id)
    if (!todo) {

      res.status(404).json({
        message: "not found id"
      })
      return
    }
    res.status(200).json({
      id,
      todo
    })
  } catch (error) {
    res.status(500).json({
      message: "ërror fetching"

    })
  }
}
// delete todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "not valid id" })
    }

    const todo = await Todos.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: "No Todo found" });
    }
    res.status(200).json({
      message: "todo deleted successfully",
      todo,
    });
  } catch (error) {
    res.status(400).json({
      message: "ërror fetching"

    })
  }
}


// const deleteTodo = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ error: "Not valid id" });
//   }
//   const todo = await Todos.findOneAndDelete({ _id });
//   if (!todo) {
//     return res.status(404).json({ error: "No Todo found" });
//   }
//   res.status(200).json({
//     message: "todo deleted successfully",
//     todo,
//   });
// };
// edit todo
const editTodo = async (req, res) => {

    const { id } = req.params; 
    const { title,description ,completed } = req.body;
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const todo = await Todos.findOneAndUpdate(
      { _id: id }, // Filter by ID
      { title, description,completed },
      // Update fields from the request body
      { new: true } // Return the updated document
    );

    // If the todo item was not found, return a 404 error
    if (!todo) {
      return res.status(404).json({ error: "No Todo found" });
    }

    // Return the updated todo item
    res.status(200).json(todo);
  
};


export { addTodo, allTodo, singletodo, deleteTodo,editTodo }