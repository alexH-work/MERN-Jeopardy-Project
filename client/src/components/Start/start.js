import './start.css';
import React from "react";


function Start() {
  
  return (
    <div id="container" className="Start">
        <div className="card">
            <h1 className="headline">Jeopardy</h1>
            <h4 className="cardText">Test your knowledge on some computer sciene topics.
            To begin the game push the button for how many players are going to be playing.
            <br/><br/>How to Play:<br/>To play the game click on the tile under a category to be given a question.
            Question will pop up with a input field below it for you enter in your answer. The game will tell you if it was wrong and what the correct answer is. Time and Space Complexity questions will have you answer the question in "O(_)" time/space. Exampe Question:Time Complexity: For() Ansert would be: O(n)
            <br/><br/>Good Luck! 
               </h4>
        </div>
    </div>
  );
}

export default Start;