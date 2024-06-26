const express = require("express");
const {
  createToDo,
  getAllToDo,
  deleteToDo,
  updateToDo,
} = require("../controllers/todoController");
const authenticationToken = require("../middleware/authJwt");
const router = express.Router();

router.post("/create-to-do", authenticationToken, createToDo);
router.get("/get-all-to-do/:userId", authenticationToken, getAllToDo);
router.delete("/delete-to-do/:id", authenticationToken, deleteToDo);
router.patch("/update-to-do/:id", authenticationToken, updateToDo);

module.exports = router;
