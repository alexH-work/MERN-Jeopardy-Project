import React from 'react';
import { Table,Container } from 'react-bootstrap';
import Tile from './Tile/tile';
import ScoreContainer from "./ScoreElements/scoreContainer.js"
import './game.css';

const Game = (props) => {
        const points = [200,400,600,800,1000];
        const [refresh, setRefresh] = React.useState(0);
        var num = 0;
        
        const handleCallback = (data) =>{
            setRefresh(refresh+1);
        }

        return(
        <>
            <Container className="center">
    
                <Table  bordered variant="dark">
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
                    <tr>{/*left column is currently blank and only used for testing*/}
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][1]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][1]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][1]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][1]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][1]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][1]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[0]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][2]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][2]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][2]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][2]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][2]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][2]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[1]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][3]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][3]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][3]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][3]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][3]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][3]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[2]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][4]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][4]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][4]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][4]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][4]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][4]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[3]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][5]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][5]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][5]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][5]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][5]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][5]} triggered={handleCallback} playerAmount ={props.playerAmount} point={points[4]}/></td>
                    </tr>
                </tbody>
                </Table> 
                <ScoreContainer refresh={refresh} playerAmount ={props.playerAmount} /> 
            </Container>  
            
        </>      
        ); 
}

export default Game;