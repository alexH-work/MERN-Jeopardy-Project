import React, { useState } from "react";
import Axios from "axios";

const UpdateScore = (props) => {  
    const [points, setPoints] = useState(props.score);
    const  getPoints = async() => {// call all point data 
          await Axios.get(`http://localhost:3000/api/points/${props.player}`).then(
              (response) =>{
                setPoints(response.data[0].points + points);
              })
              .catch(()=>{
                alert('Error');
            } );
        }
    const updatePoints = () => {
      console.log(points);
      Axios.patch(`http://localhost:3000/api/points/${props.player}`, 
    { points: `${points}`});
    };
    return (
      <>  
      {getPoints()}
      {updatePoints()}

      
        </>
    );
  }
  
  export default UpdateScore;