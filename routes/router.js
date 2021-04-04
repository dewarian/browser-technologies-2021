import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { Router as expressRouter } from "express";
const router = expressRouter();
dotenv.config();

const supabase = createClient(process.env.DB_URL, process.env.DB_KEY);

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

const updateStudent = async (subjectOne, student) => {
  console.log(`Updating student data`);
  let { d, e } = await supabase
    .from("students")
    .update(
      `
        surveyData: {
          ${subjects[0]}: {
            teacher: ${subjectOne.teachers},
            period: ${subjectOne.timePeriod},
            rating: ${subjectOne.ratings}
          }
        }
      `
    )
    .match({ studentId: student.studentId });

  if (!e) {
    return d;
  } else {
    return e;
  }
};

const insertStudent = async (userData) => {
  let { data, error } = await supabase
    .from("students")
    .insert([{ studentName: userData.userName, studentId: userData.userId }]);

  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
};

const deleteDb = async () => {
  console.log(`clearing db`);
  let { data, error } = await supabase.from("students").delete();
  if (error) return console.error(error);
};

export default router;
