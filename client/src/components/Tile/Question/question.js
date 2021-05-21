import React, {useState} from 'react';
import { Button,Modal } from 'react-bootstrap';

const Question = (props) => {
    const [show, setShow] = useState(props.view);

    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
  
    return (
      <>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className=""
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Player 1</Button>
            <Button variant="primary">Player 2</Button>
            <Button variant="primary">Player 3</Button>
            <Button variant="primary">Player 4</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Question;