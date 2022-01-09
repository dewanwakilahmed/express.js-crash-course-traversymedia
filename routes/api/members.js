const express = require("express");
const router = express.Router();
const members = require("../../Members");

// Gets All Members
router.get("/", (req, res) => res.json(members));

// Get Single Member
router.get("/:id", (req, res) => {
  // res.send(req.params.id);
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `Member with id ${req.params.id} not found!` });
  }
});

module.exports = router;
