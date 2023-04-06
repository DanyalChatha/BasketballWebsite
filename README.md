## Steps to use the Basketball Website powered by APIs.

- Download the folder Basketball-Api-Assignment
- Load the folder into VsCode 
- In the VsCode terminal  enter  ``` npm i ``` or ``` npm install ```
- Create a RapidAPI account (https://rapidapi.com/auth/sign-up?referral=/hub)
- Click on this link to find your RapidAPI Key (https://rapidapi.com/tank01/api/tank01-fantasy-stats) and (https://rapidapi.com/savey03/api/nba-latest-news)
    - it will be under "Code Snippets"
    - under "headers"
    - you will then see an 'X-RapidAPI-Key:' copy of the long string of variable characters it will look like this: (4d3eb1d81semh0e6ad11d53d3023p148aeajsn1eba803c792c)
- once the key is copied go to the file called api.js and paste it in the empty quotation mark where it says ``` X-RapidAPI-Key: ``` Make sure you passed it for both APIs
- Make sure to subscribe to both of RapidApi APIs (https://rapidapi.com/savey03/api/nba-latest-news) and (https://rapidapi.com/tank01/api/tank01-fantasy-stats)
- Open up the terminal and enter ``` npm run dev ```
- In the terminal a ```http://localhost:8888``` will appears sp click on that link to see the basketball website.
