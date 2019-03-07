const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(user) {
  const [id] = await db("users").insert(user, "id");

  return db("users")
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  const [id] = await db('users').where({id})

  return db('users').del(id)
}

function getAll() {
  return db("users");
}

function findById(id) {
  return null;
}
