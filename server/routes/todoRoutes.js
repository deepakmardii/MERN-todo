const express = require("express");
const { createToDo } = require("../controllers/todoController");
const authenticationToken = require("../middleware/authJwt");
const router = express.Router();

router.post("/create-to-do", authenticationToken, createToDo);

module.exports = router;
