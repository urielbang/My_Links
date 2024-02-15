const { User } = require("../models/users.model");
const bcryptjs = require("bcryptjs");

//! Post register
const register = async (req, res) => {
  const { name, password, email } = req.body;
  const hash = await bcryptjs.hash(password, 10);
  try {
    const user = new User({ name: name, password: hash, email: email });
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
    const userFound = await User.findOne({ email: email });

    if (userFound) {
      const isMatch = await bcryptjs.compare(password, userFound.password);

      if (isMatch) return res.send(userFound);
      else return res.status(401).send("email or password are incorrect");
    } else return res.send("no found such email");
  } catch (err) {
    console.log(err);
    return res.send("something wrong");
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
