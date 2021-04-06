import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
const supabase = createClient(process.env.DB_URL, process.env.DB_KEY);

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

export { insertStudent, deleteDb, updateStudent };
