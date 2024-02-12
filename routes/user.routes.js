const express = require("express");
const router = express.Router();
const { User } = require("../models/users.model");

//! Post register
router.post("/register", async (req, res) => {
  const body = req.body;
  try {
    const user = new User(body);
    await user.save();

    return res.send(user);
  } catch (err) {
    console.log(err);
    res.send("something wrong");
  }
});

//! Post Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.find({ email: email, password: password });
    if (userFound.length) {
      return res.send(`${email} is connected`);
    } else {
      return res.send("no user connected");
    }
  } catch (err) {
    console.log(err);
    res.send("something wrong");
  }
});

//! Get
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
});

//! get one
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.find({ _id: id });
    return res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//! Patch
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = await req.body;
    const user = await User.findByIdAndUpdate(id, body);
    return res.send(user);
  } catch (error) {
    console.log(error);
    res.send("now working");
  }
});
//! Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    return res.send("user delted!");
  } catch (error) {
    console.log(error);
    res.send("somhting wrong");
  }
});

module.exports = router;
