import React, { useEffect } from 'react';
import Axios from "axios";
import './ScoreContainer.css';
import ScoreCard from "./ScoreCard/scoreCard.js";

const ScoreContainer = (props) => {
    const [points1, setPoints1] = React.useState(0);
    const [points2, setPoints2] = React.useState(0);
    const [points3, setPoints3] = React.useState(0);
    const [points4, setPoints4] = React.useState(0);
   
    const  getPoints = () => {// call all point data 
         Axios.get(`https://alexs-jeopardy.herokuapp.com/api/points/`).then(
            (response) =>{           
            setPoints1(response.data[0].points);
            setPoints2(response.data[1].points);
            setPoints3(response.data[2].points);
            setPoints4(response.data[3].points);
            })
            .catch(()=>{
            alert('Error');
        } );
    }

    useEffect(() => {
        getPoints();
        console.log("render1");
    }, [props.refresh])

    return(
        <div className="scorebox">
            <ScoreCard color={"cyan"} refresh={props.refresh} score={points1}/>
            { (props.playerAmount > 1) && <ScoreCard color={"red"} refresh={props.refresh} score={points2}/> }
            { (props.playerAmount > 2) && <ScoreCard color={"pink"} refresh={props.refresh} score={points3}/> }
            { (props.playerAmount > 3) && <ScoreCard color={"green"} refresh={props.refresh} score={points4}/> }
        </div>
    );    
}

export default ScoreContainer;