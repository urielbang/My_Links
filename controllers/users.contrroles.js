const User = require("../models/users.model");

//! Post register
const register = async (req, res) => {
  const body = req.body;
  try {
    const user = new User(body);
    await user.save();

    return res.send(user);
  } catch (err) {
    console.log(err);
    res.send("something wrong");
  }
};

//! Post Login
const login = async (req, res) => {
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
};

//! Get
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

//! get one
const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.find({ _id: id });
    return res.send(user);
  } catch (error) {
    console.log(error);
  }
};

//! Patch
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const body = await req.body;
    const user = await User.findByIdAndUpdate(id, body);
    return res.send(user);
  } catch (error) {
    console.log(error);
    res.send("now working");
  }
};

//! Delete
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    return res.send("user delted!");
  } catch (error) {
    console.log(error);
    res.send("somhting wrong");
  }
};

module.exports = {
  deleteUser,
  register,
  login,
  getUsers,
  getOneUser,
  updateUser,
};
