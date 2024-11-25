import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/db/index.js";

import todoRoutes from "./src/routes/todos.routes.js"; // Corrected path

const app = express();
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello, World!");
});
console.log("Mongo URI:", process.env.MONGO_URI);


// Routes
app.use('/api/v1', todoRoutes);
 // Fixed route prefix
 

// Database Connection and Server Start
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!!", err);
  });
