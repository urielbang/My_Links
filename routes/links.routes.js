const express = require("express");
const {
  postLink,
  getByQuery,
  getLinkById,
  deleteLink,
  updateLink,
} = require("../controllers/links.controlles");
const router = express.Router();

router.post("/", postLink);

router.get("/", getByQuery);

router.get("/:id", getLinkById);

router.delete("/:id", deleteLink);

router.patch("/:id", updateLink);

module.exports = router;
