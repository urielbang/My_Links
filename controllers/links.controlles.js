const { Link } = require("../models/links.model");

//! post
const postLink = async (req, res) => {
  const body = req.body;

  try {
    body.owner = req.user.id;
    const link = new Link(body);
    console.log(req.user);
    await link.save();
    return res.send(link);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

//! get links and Query
const getByQuery = async (req, res) => {
  try {
    const query = req.query;
    const links = await Link.find({ ...query });
    return res.send(links);
  } catch (err) {
    console.log(err);
    res.send("something wrong");
  }
};

//! get one link
const getLinkById = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findById(id).populate("owner");
    res.send(link);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};
//! Delete
const deleteLink = async (req, res) => {
  const { id } = req.params;
  try {
    await Link.findByIdAndDelete(id);
    return res.send("user delted!");
  } catch (error) {
    console.log(error);
    res.send("somhting wrong");
  }
};

//! Patch
const updateLink = async (req, res) => {
  try {
    const { id } = req.params;
    const body = await req.body;
    const link = await Link.findByIdAndUpdate(id, body);
    return res.send(link);
  } catch (error) {
    console.log(error);
    res.send("now working");
  }
};

module.exports = { updateLink, postLink, getByQuery, getLinkById, deleteLink };
