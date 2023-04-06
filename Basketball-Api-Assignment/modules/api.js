const newsNbaApi = "https://nba-latest-news.p.rapidapi.com";
const liveScore = "https://tank01-fantasy-stats.p.rapidapi.com";


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

async function getLiveScore(){
  let reqUrl = `${liveScore}/getNBAScoresOnly`;
  let response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '',  //API KEY
        'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
      }
    } 
    
  );
  let responseBody = await response.json();
  let scoreArray = Object.values(responseBody.body);
  return scoreArray;
}




module.exports = {
  getNews,
  getLiveScore
}
