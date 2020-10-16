# Drifting between Silence and Stardust version 1.0
Drifting Between Silence and Startdust is a "Choose-your-own-Adventure" game that features character creation, randomly shuffled encounters and character specific choices for each encounter based on a selected character's traits. Winners of the game are given the option to add their initals to the scoreboard, which can by filtered by Recent or Top scores.

This client was built using ReactJS to create a simple text game engine that features:
- Character by Character Question/Response Rendering.
- Randomly Shuffled Questions sets for each playthrough.
- Character specific choices for each question.
- Game specific responses based on an alignment chart that correlates to a choice's aligment. 

# [Play now!](https://dbss-client.vercel.app/)
This front-end client was built with using **ReactJS**, **HTML**, and **CSS**.

## Screenshots
### Landing Page

Renders from a landing page route that pulls in its elements from src/components. 

![Landing Page Above Fold](./readme_screenshots/LandingPage1.png)
![Landing Page Above Fold](./readme_screenshots/LandingPage2.png)
### Tutorial Page
Renders from a tutorial page route, generates its components on that route, and pulls its tutorial gifs from src/images.
![Tutorial Page 1](./readme_screenshots/Tutorial1.png)
![Tutorial Page 2](./readme_screenshots/Tutorial2.png)
### Score Board
![Scoreboard Recent](./readme_screenshots/ScoreboardRecent.png)
### Character Create
### Character Select
### Play Screen
### Lose Screen
### Win Screen

## Set up (for local use)
Curious about setting up the game for you own personal use?
1. clone this client to a directory
1. run `npm install` to ensure all dependencies are installed.
1. download and run the dbss server and follow it's instructions
1. create a .env file with two variables, a token that matches the server token and a endpoint address that points to your local server address.
      1. `REACT_APP_GAME_TOKEN="any token here"`
      1. `REACT_APP_API_ENDPOINT="http://somelocalhost:1337/api"`
1. run `npm start` to launch the client.


## About Me

## Features coming soon
Your README should include:
A description of your app **check**
A link to a deployed version **check**
Screenshots and your tech stack
It should also briefly describe:
      -  Where each of the components of the project live in your codebase, and
      -  If your app is meant to be re-used by other developers, then it should include instructions on how to get the app up and running.
