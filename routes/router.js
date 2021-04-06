import { Router as expressRouter } from "express";
import { deleteDb, insertStudent } from "../controller/survey.controller.js";
const router = expressRouter();

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
    action: "subjectOne",
    data: undefined,
  });
});

/**
 * Data doesnt have to be updated directly to the database but
 * rather updated to localstorage and after finishing the process pushing it to the database
 * meaning I dont have to fuck around with req.body or storing data in the db.
 * First store data in localstorage and at the end, submit, store data in db
 *
 */

router.post("/subjectOne", (req, res) => {
  const user = { userId: req.body.userId, userName: req.body.userName };
  req.app.locals.user = user;
  console.log(`SubjectOne ${JSON.stringify(req.body)}`);
  deleteDb();
  insertStudent(user);
  res.render("subjectOne", {
    pageTitle: "Minor Web Survey",
    action: "subjectTwo",
    data: user,
    subject: subjects[0],
  });
});

router.post("/subjectTwo", (req, res) => {
  const formData = req.body;
  console.log(`subjectTwo ${JSON.stringify(req.body)}`);

  res.render("subjectTwo", {
    pageTitle: "Minor Web Survey",
    action: "subjectTwo",
    data: req.app.locals.user,
    subject: subjects[1],
  });
});

export default router;
