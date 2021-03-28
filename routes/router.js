const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Minor Web Survey",
  });
});

router.post("/subjectOne", (req, res) => {
  const user = { userId: req.body.userId, userName: req.body.userName };
  res.render("test", {
    data: user,
  });
});

module.exports = router;
