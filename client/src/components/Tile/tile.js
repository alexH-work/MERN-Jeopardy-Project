import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Question from './Question/question';
import './tile.css'

const Tile = (props) => {
    const [show, setShow] = useState(false);
    const [point, setPoint] = useState(props.point);

    function changeColor() {
        var elem = document.getElementById(props.tileID);
        elem.style.display = "none";
      }  

    const handleShow = () => {setShow(true)
        changeColor()}
    
//<Question view={show}/>

    return(
        <Container >
            <div id= {`${props.tileID}`} className='tile' onClick={handleShow}>             
                <Row>
                    <Col><p className="pointText">{point}</p></Col>                   
                </Row>
            </div>
            {
                show
                &&
                <Question view={true}/>
            }
        </Container>   
    );    
}

export default Tile;