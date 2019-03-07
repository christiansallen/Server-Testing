const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const users = require("../users/UsersModel.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "working" });
});

server.get("/users", async (req, res) => {
  try {
    const allUsers = await users.getAll();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.post("/users", (req, res) => {
  const { username } = req.body;
  users
    .insert({ username })
    .then(newUser => res.status(201).json(newUser))
    .catch(() => res.status(500).json({ message: "error" }));
});

module.exports = server;
