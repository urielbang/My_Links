const express = require("express");
const router = express.Router();
const { Link } = require("../models/links.model");
const { User } = require("../models/users.model");

//! post
router.post("/", async (req, res) => {
  const body = req.body;

  try {
    const link = new Link(body);
    await link.save();
    return res.send(link);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
});
//! get links and Query
router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const links = await Link.find({ ...query });
    return res.send(links);
  } catch (err) {
    console.log(err);
    res.send("something wrong");
  }
});

//! Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Link.findByIdAndDelete(id);
    return res.send("user delted!");
  } catch (error) {
    console.log(error);
    res.send("somhting wrong");
  }
});

module.exports = router;