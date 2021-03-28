const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const router = require("./routes/router");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/", router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
