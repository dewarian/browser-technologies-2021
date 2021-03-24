const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  res.render("index", {
    pageTitle: "Minor Web Survey",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
