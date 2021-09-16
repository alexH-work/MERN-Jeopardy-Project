import './App.css';
import React, {useState} from "react";
import Axios from "axios";
import Game from './components/game.js';
import Start from '../src/components/Start/start';

const resetPoints = () => {
  Axios.patch('http://localhost:3000/api/points', 
{ points: '0'});
}

function App() {
  const [page, setPage] = useState(<Start/>);
  const [displayStartBtn, setDisplayStartBtn] = useState(true);
  const[questionData, setQuestionData] = useState([["0"],["1"],["2"],["3"],["4"],["5"]])

  window.addEventListener("DOMContentLoaded", () =>{
    var qData =  [["0"],["1"],["2"],["3"],["4"],["5"]];
      Axios.get('http://localhost:3000/api').then(
        (response) =>{
          const data = response.data;
          let i = 0;            
          while(data.length>0){                
            if(qData[i][0] === data[data.length-1].category){
              qData[i].push(data.pop());
              i=0;
            }else{i++;}
          }
            setQuestionData(qData);
        })
        .catch(()=>{
          alert('Error');
      } );
    });

  const player1 = () => {changePage(1)}
  const player2 = () => {changePage(2)}
  const player3 = () => {changePage(3)}
  const player4 = () => {changePage(4)}

  const changePage = (players) => {
    setDisplayStartBtn(false);
    resetPoints();
    setPage(<Game questionData={questionData} playerAmount ={players}/>);
  }
  const reset = () => {
    setDisplayStartBtn(true);
    resetPoints();
    setPage(<Start/>);
  }
  
  return (
    <div className="App">
      <button className="restartBtn" onClick={reset}>Restart Game</button>
      <div className="Changed-features">
        {page}

        {displayStartBtn && <div className="buttonContainer">
          <button className="startBtn" onClick={player1}>1 Player</button> 
          <button className="startBtn" onClick={player2}>2 Players</button>
          <button className="startBtn" onClick={player3}>3 Players </button>
          <button className="startBtn" onClick={player4}>4 Players</button>
        </div>}  
      </div>
    </div>
  );
}

export default App;
