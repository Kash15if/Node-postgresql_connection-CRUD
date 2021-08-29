const express = require("express");
const app = express();
require("dotenv").config();

//importing db-connection query and crud query
const pool = require("./dbcon");
const { create, read, update, deleteOne } = require("./dbQuery");

app.use(express.urlencoded());

//connection method for database connection everytime server starts
pool.connect().then((row) => {
  console.log("db is connected :", row._connected);
});

//posting data to database
app.post("/", async (req, res) => {
  const name = await req.body.name;
  const out = await create(name);
  res.send(out);
});

//getting all data from database
app.get("/", async (req, res) => {
  const out = await read();
  res.send(out.rows);
});

//updating a data with particular id passed in URL
app.put("/:id", async (req, res) => {
  const out = await update(req.body.name, req.params.id);
  res.send(out.rows);
});

//delete a data
app.delete("/:id", async (req, res) => {
  const out = await deleteOne(req.params.id);
  res.send(out.rows);
});

//starting a server
app.listen(process.env.PORT, () => {
  console.log("server running on port:", process.env.PORT);
});
