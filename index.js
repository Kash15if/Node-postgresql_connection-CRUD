const express = require("express");
const app = express();
const pool = require("./dbcon");
require("dotenv").config();
const { create, read, update, deleteOne } = require("./dbQuery");

app.use(express.urlencoded());

pool.connect().then((row) => {
  console.log("dbconnected :", row._connected);
});

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

//post data
app.post("/", async (req, res) => {
  const name = await req.body.name;
  const out = await create(name);
  res.send(out);
});

//get all data
app.get("/", async (req, res) => {
  const out = await read();
  res.send(out.rows);
});

//update data
app.put("/:id", async (req, res) => {
  const out = await update(req.body.name, req.params.id);
  res.send(out.rows);
});

//delete a data
app.delete("/:id", async (req, res) => {
  const out = await deleteOne(req.params.id);
  res.send(out.rows);
});

app.listen(process.env.PORT, () => {
  console.log("server running on port:", process.env.PORT);
});
