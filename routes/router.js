const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Minor Web Survey",
  });
});

module.exports = router;
