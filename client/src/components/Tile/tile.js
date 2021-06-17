import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Question from './Question/questiontest.js';
import './tile.css'

const Tile = (props) => {
    const [show, setShow] = useState(false);
    //const [point, setPoint] = useState(props.point);

    function changeColor() {
        var elem = document.getElementById(props.tileID);
        elem.style.display = "none";
      }  

    const handleShow = () => {setShow(true)
        changeColor()}

    const handleCallback = (data) =>{
            props.triggered(data);
    }   
//<Question view={show}/>
    return(
        <Container >
            <div id= {`${props.tileID}`} className='tile' onClick={handleShow}>             
                <Row>
                    <Col><p className="pointText">{props.point}</p></Col>                   
                </Row>
            </div>
            {
                show
                &&
                <Question storage={props.storage} playerAmount={props.playerAmount} triggered={handleCallback} pointValue={props.point} view={true}/>
            }
        </Container>   
    );    
}

export default Tile;