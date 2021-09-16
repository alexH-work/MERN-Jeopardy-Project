# Jeopardy Full-Stack Project
 
This repo contains the code for the frontend and backend for a simple Jeopardy game I created. The reason I decide to create this was to help me and some friends study for interview prep. One of them complained how it was getting really boring and I decided making something like this would be a good way to help us study and make the experience more fun. This was my first attempt at making a fullstack application.


### Overview ###
- I decide to create it with a [MERN](https://www.mongodb.com/mern-stack "MERN") Stack design with the frontend being built with [React](https://reactjs.org/ "React"), [Javascript](https://javascript.info/ "Javascript"), [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML "HTML"), and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS"). 
- The backend using [MongoDB](https://www.mongodb.com/cloud/atlas "MongoDB") to store data. 
- Finally connecting the two with [Express](https://expressjs.com/ "Express") and [Node](https://nodejs.org/en/ "Node"). 
- I also used [React Bootstrap](https://react-bootstrap.github.io/ "React Bootstrap") library to help light the load on designing the frontend layout.


### Getting started ###
- How to run this program after you have downloaded the code from github. 
- Open a terminal inside the client folder and another terminal inside the server folder.
- Next to download the required dependencies 
  - Run `npm install` inside both terminals
- To run the program locally on port 3000 go inside the client terminal and enter: 
  - `npm start`  
- The instructions on how to play will be on the main screen.
  
### About the game ###
This game will allow 1-4 player(s) the opportunity to answer questions based on how many players are selected on the main screen. It will also keep track of each player's scores based on if they got an answer correct or wrong. There is also a restart button to start a fresh new game. The goal of the game is to let players compete against eachother to test their programming knowledge.
