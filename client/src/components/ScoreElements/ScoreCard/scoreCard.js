import React from 'react';
import './scoreCard.css';


const ScoreCard = (props) => {

    return(
        <div className="score" style={{backgroundColor: `${props.color}`}}>
            <h1>{props.score}</h1>
        </div>
    );    
}

export default ScoreCard;