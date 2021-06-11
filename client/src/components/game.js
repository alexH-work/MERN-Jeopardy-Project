import React from 'react';
import { Table,Container } from 'react-bootstrap';
import Tile from './Tile/tile';
import './game.css';

const Game = (props) => {
        const points = [200,400,600,800,1000];
        var num = 0;
        
        return(
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
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][1]} point={points[0]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][1]} point={points[0]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][2]} point={points[1]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][2]} point={points[1]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][3]} point={points[2]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][3]} point={points[2]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][4]} point={points[3]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][4]} point={points[3]}/></td>
                    </tr>
                    <tr>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[0][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[1][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[2][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[3][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[4][5]} point={points[4]}/></td>
                        <td><Tile tileID={`${num++}`} storage={props.questionData[5][5]} point={points[4]}/></td>
                    </tr>
                </tbody>
                </Table> 
            </Container>    
        ); 
}

export default Game;