const pool = require("./dbcon");

//insert data query
const create = async (data) => {
  const out = await pool.query("Insert into test1 (name) values ($1);", [data]);
  return out;
};

//read all data query
const read = async () => {
  const out = pool.query("select * from test1", []);

  return out;
};

//update particular data with id query
const update = async (Name, personid) => {
  const out = pool.query("UPDATE test1 SET Name=$1 WHERE personid= $2", [
    Name,
    personid,
  ]);
  return out;
};

//deleting data query
const deleteOne = (personid) => {
  return pool.query("Delete from test1 where personid = $1", [personid]);
};

module.exports = { create, read, update, deleteOne };
