const express = require("express");
const router = express.Router();
const { Link } = require("../models/links.model");

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

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findById(id);
    res.send(link);
  } catch (error) {
    console.log(error);
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

//! Patch
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = await req.body;
    const link = await Link.findByIdAndUpdate(id, body);
    return res.send(link);
  } catch (error) {
    console.log(error);
    res.send("now working");
  }
});

module.exports = router;
