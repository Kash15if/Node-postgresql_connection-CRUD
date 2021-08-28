const pool = require("./dbcon");

const create = async (data) => {
  const out = await pool.query("Insert into test1 (name) values ($1);", [data]);
  return out;
};

const read = async () => {
  const out = pool.query("select * from test1", []);

  return out;
};

const update = async (Name, personid) => {
  const out = pool.query("UPDATE test1 SET Name=$1 WHERE personid= $2", [
    Name,
    personid,
  ]);
  return out;
};

const deleteOne = (personid) => {
  return pool.query("Delete from test1 where personid = $1", [personid]);
};

module.exports = { create, read, update, deleteOne };
