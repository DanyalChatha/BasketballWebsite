//import required modules
const express = require("express");
const path = require("path");

const rapidapi = require("./modules/api");

//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

//Connect to pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//page routes
app.get("/", (request, response) => {
  response.render("index", { title: "Home" });
});

 app.get("/Scores", async (request, response) => {
  let scoreDetail = await rapidapi.getScore();
  response.render("score", { title: "Scores", score: scoreDetail });
});

app.get("/News", async (request, response) => {
  let latestNews = await rapidapi.getNews();
  response.render("news", { title: "News", news: latestNews });
});

//Connect to Public folder
app.use(express.static(path.join(__dirname, "public")));

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});