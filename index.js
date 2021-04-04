import express from "express";
import router from "./routes/router.js";
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(import.meta.url + "/public"));

app.use("/", router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
