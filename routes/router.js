const express = require("express");
const router = express.Router();
const subjects = [
  "Web App From Scratch",
  "CSS to the rescue",
  "Progressive Web Apps",
  "Browser Technologies",
  "Human Centred Design",
];

router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Minor Web Survey",
  });
});

router.post("/subjectOne", (req, res) => {
  const user = { userId: req.body.userId, userName: req.body.userName };
  res.render("subjectOne", {
    pageTitle: "Minor Web Survey",
    data: user,
    subject: subjects[0],
  });
});

module.exports = router;
