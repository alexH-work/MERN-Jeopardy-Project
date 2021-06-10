import React, {useState} from 'react';
import { Table,Container } from 'react-bootstrap';
import Tile from './Tile/tile';
import './game.css';
import Axios from "axios";

const Game = () => {
        const points = [200,400,600,800,1000];
        var num = 0;
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
            }   );
        });
        return(
            <Container>
    
                <Table bordered variant="dark">
                <thead>
                    <tr>
                    <th>Category</th>
                    <th>Time Complexity</th>
                    <th>Time Complexity V2</th>
                    <th>Time Complexity algorithms</th>
                    <th>Space Complexity</th>
                    <th>CSS Terms</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={questionData[0][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[1][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[2][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[3][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[4][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[5][1]} point={points[0]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={questionData[0][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[1][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[2][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[3][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[4][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[5][2]} point={points[1]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={questionData[0][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[1][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[2][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[3][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[4][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[5][3]} point={points[2]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={questionData[0][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[1][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[2][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[3][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[4][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[5][4]} point={points[3]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={questionData[0][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[1][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[2][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[3][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[4][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={questionData[5][5]} point={points[4]}/></td>
                    </tr>
                </tbody>
                </Table> 
            </Container>    
        ); 
}

export default Game;