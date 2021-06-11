import './App.css';
import React from "react";
import Axios from "axios";
import Game from './components/game.js';
import Start from '../src/components/Start/start';

function App() {
  const [page,setPage] = React.useState(<Start/>);
  const [displayStartBtn, setDisplayStartBtn] = React.useState(true);
  const[questionData, setQuestionData] = React.useState([["0"],["1"],["2"],["3"],["4"],["5"]])

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
  
  
  
  const changePage = () => {
    setPage(<Game questionData={questionData}/>);
    setDisplayStartBtn(false);
  }
  return (
    <div className="App">
    
    {displayStartBtn && <button className="startBtn" onClick={changePage}>Start the Game</button>}
      {page}
    </div>
  );
}

export default App;
