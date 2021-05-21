import React from 'react';
import { Table,Container } from 'react-bootstrap';
import Tile from './Tile/tile';
import './game.css';

const Game = () => {
const points = [200,400,600,800,1000];
var num = 0;
    return(
        <Container>
        
            <Table bordered variant="dark">
            <thead>
                <tr>
                <th>Category</th>
                <th>Category</th>
                <th>Category</th>
                <th>Category</th>
                <th>Category</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Tile tileID={`${num++}`} point={points[0]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[0]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[0]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[0]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[0]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[0]}/></td>
                </tr>
                <tr>
                    <td><Tile tileID={`${num++}`} point={points[1]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[1]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[1]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[1]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[1]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[1]}/></td>
                </tr>
                <tr>
                    <td><Tile tileID={`${num++}`} point={points[2]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[2]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[2]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[2]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[2]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[2]}/></td>
                </tr>
                <tr>
                    <td><Tile tileID={`${num++}`} point={points[3]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[3]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[3]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[3]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[3]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[3]}/></td>
                </tr>
                <tr>
                    <td><Tile tileID={`${num++}`} point={points[4]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[4]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[4]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[4]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[4]}/></td>
                    <td><Tile tileID={`${num++}`} point={points[4]}/></td>
                </tr>
            </tbody>
            </Table> 
        </Container>    
    );
    
}

export default Game;