import React, {useState} from "react";
import { Button,Modal } from "react-bootstrap";
import Axios from "axios";
    
const updatePoints = async(data) => {
      await Axios.patch(`https://alexs-jeopardy.herokuapp.com/api/points/${data.player}`, 
    { points: `${data.point}`});
    };

const  getPoints = async(data) => {// call all point data 
          console.log(data.point);
          console.log(data.player);
          await Axios.get(`https://alexs-jeopardy.herokuapp.com/api/points/${data.player}`).then(
              (response) =>{           
                updatePoints({point:response.data[0].points + data.point, player:data.player});
              })
              .catch(()=>{
                alert('Error');
            } );
        }

const Question = (props) => {
    const [show, setShow] = useState(props.view);
    const [currentView, setCurrentView] = useState(true);
    const [formData, updateFormData] = React.useState("");
    const [display, setDisplay] = useState(false);
    const [player, setPlayer] = useState(1);
    const [point] = useState(props.pointValue);
    const handleClose = () => {setShow(false);
      props.triggered(true);
    }
    const handleChange = (e) => {
      updateFormData(// Trimming any whitespace
        e.target.value.trim()
      );
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setCurrentView(false);
      if(String(formData).toLowerCase() === String (props.storage.answer).toLowerCase()){
        setDisplay(true);
        getPoints({point:point, player:player});// correct answer
      }else{
        getPoints({point: -point, player:player});// wrong answer
      }
    }
    //const handleShow = () => setShow(true);
    return (
      <>  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.storage.question}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {currentView && <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
          <input type="text" variant="outlined" label="Answer" fullWidth  onChange={handleChange}/>
          <br/><br/>
          <Button variant="primary" type="submit" onClick={() => {setPlayer(1)}}>Player 1</Button>
          { (props.playerAmount > 1) && <Button variant="primary" type="submit" onClick={() => {setPlayer(2)}}>Player 2</Button>}
          { (props.playerAmount > 2) && <Button variant="primary" type="submit" onClick={() => {setPlayer(3)}}>Player 3</Button>}
          { (props.playerAmount > 3) && <Button variant="primary" type="submit" onClick={() => {setPlayer(4)}}>Player 4</Button>}
          </form>}
          {!currentView && display && <h3>Player {player} is Correct</h3>}
          {!currentView && !display && <h5>Wrong the correct answer is: {props.storage.answer}</h5>}
          
          </Modal.Body>
          <Modal.Footer>
            {!currentView && <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>}
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Question;