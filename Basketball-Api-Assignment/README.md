## Steps to use the Basketball Website powered by APIs.

- Download the folder Basketball-Api-Assignment
- Load the folder into VsCode 
- In the VsCode terminal  enter  ``` npm i ``` or ``` npm install ```
- Create a RapidAPI account (https://rapidapi.com/auth/sign-up?referral=/hub)
- Click on this link to find your RapidAPI Key (https://rapidapi.com/theoddsapi/api/live-sports-odds)
    - it will be under "Code Snippets"
    - under "headers"
    - you will than see a 'X-RapidAPI-Key:' copy the long string of variable characters it will look like this: (4d3eb1d81semh0e6ad11d53d3023p148aeajsn1eba803c792c)
- once the key is copied go to the file called api.js and paste it in the empty quatation mark where it says ``` X-RapidAPI-Key: ``` make sure you past it for both APIs
- Open up termnial and enter ``` npm run dev ```
- In the terminal a ```http://localhost:8888``` appears click on that links to see the basketball website.