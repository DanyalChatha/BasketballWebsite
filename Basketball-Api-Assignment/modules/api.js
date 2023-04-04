const sportOddapi = "https://odds.p.rapidapi.com/v4/sports/basketball_nba";
const newsNbaApi = "https://nba-latest-news.p.rapidapi.com";

async function getScore(){
  let reqUrl = `${sportOddapi}/scores`;
  let response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '', //API KEY
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
      }
    }
  );
  return await response.json();
}

async function getNews(){
  let reqUrl = `${newsNbaApi}/articles`;
  let response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '',  //API KEY
        'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
      }
    }
  );
  return await response.json();
}


module.exports = {
  getScore,
  getNews
}