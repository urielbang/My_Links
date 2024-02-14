const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.contrroles");

router.post("/register", register);

router.post("/login", login);

router.get("/", getUsers);

router.get("/:id", getOneUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
