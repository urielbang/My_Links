const express = require("express");
const {
  postLink,
  getByQuery,
  getLinkById,
  deleteLink,
  updateLink,
} = require("../controllers/links.controlles");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.post("/", auth, postLink);

router.get("/", getByQuery);

router.get("/:id", getLinkById);

router.delete("/:id", deleteLink);

router.patch("/:id", updateLink);

module.exports = router;
