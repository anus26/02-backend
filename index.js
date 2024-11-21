import express from "express";
const app = express()
app.use(express.json());
 
  const port=3000
const users = [];
app.get("/", (req, res) => {
  res.send("hello world!");
});




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });