import React, {useState} from 'react';
import { Button,Modal } from 'react-bootstrap';

const Question = (props) => {
    const [show, setShow] = useState(props.view);
    const [currentView, setCurrentView] = useState(true);
    const [formData, updateFormData] = React.useState("");
    const [display, setDisplay] = useState(false);
    const [player, setPlayer] = useState(0);
    const handleClose = () => setShow(false);

    const handleChange = (e) => {
      updateFormData(
        // Trimming any whitespace
      e.target.value.trim()
      );
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setCurrentView(false);
      if(String(formData).toLowerCase() === String (props.storage.answer).toLowerCase()){
        setDisplay(true);
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
          {/*<Button variant="primary" type="submit" onClick={() => {setPlayer(2)}}>Player 2</Button>
          <Button variant="primary" type="submit" onClick={() => {setPlayer(3)}}>Player 3</Button>
          <Button variant="primary" type="submit" onClick={() => {setPlayer(4)}}>Player 4</Button>*/}
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