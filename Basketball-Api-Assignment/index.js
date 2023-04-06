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

app.get("/News", async (request, response) => {
  let latestNews = await rapidapi.getNews();
  response.render("news", { title: "News", news: latestNews });
});

app.get("/LiveScore", async (request, response) => {
  let liveScore = await rapidapi.getLiveScore();
  response.render("livescore", { title: "Live Score", score: liveScore });
});

//Connect to Public folder
app.use(express.static(path.join(__dirname, "public")));

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});