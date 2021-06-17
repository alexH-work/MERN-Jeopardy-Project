import React, {useState} from "react";
import { Button,Modal } from "react-bootstrap";
import Axios from "axios";

// const Question = (props) => {
//     const [show, setShow] = useState(props.view);
//     const [currentView, setCurrentView] = useState(true);
//     const [formData, updateFormData] = React.useState("");
//     const [display, setDisplay] = useState(false);
//     const [player, setPlayer] = useState(1);
//     const [point, setPoints] = useState(0);
//     const handleClose = () => setShow(false);
    
//     const  getPoints = async() => {// call all point data 
//           await Axios.get(`http://localhost:3000/api/points/${player}`).then(
//               (response) =>{
//                 console.log(response.data[0].points);
//                 console.log(point);
//                 setPoints(response.data[0].points + point);
//                 console.log(response.data[0].points);
//                 console.log(point);
//               })
//               .catch(()=>{
//                 alert('Error');
//             } );
//             updatePoints();
//         }
//     const updatePoints = async() => {
//       await Axios.patch(`http://localhost:3000/api/points/${player}`, 
//     { points: `${point}`});
//     };
    
//     //  useEffect(() => {//calls on render
//     //     getPoints();
//     //   },[])

//     const handleChange = (e) => {
//       updateFormData(
//         // Trimming any whitespace
//       e.target.value.trim()
//       );
      
//     };
//     const handleSubmit = (e) => {

//       e.preventDefault();
//       setCurrentView(false);
//       if(String(formData).toLowerCase() === String (props.storage.answer).toLowerCase()){
//         setDisplay(true);
//         setPoints(point + props.point);// correct answer
//       }else{
//         setPoints(point - props.point);// wrong answer
//       }getPoints();
//     }
//     //const handleShow = () => setShow(true);
//     return (
//       <>  
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>{props.storage.question}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           {currentView && <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
//           <input type="text" variant="outlined" label="Answer" fullWidth  onChange={handleChange}/>
//           <br/><br/>
//           <Button variant="primary" type="submit" onClick={() => {setPlayer(1)}}>Player 1</Button>
//           { (props.playerAmount > 1) && <Button variant="primary" type="submit" onClick={() => {setPlayer(2)}}>Player 2</Button>}
//           { (props.playerAmount > 2) && <Button variant="primary" type="submit" onClick={() => {setPlayer(3)}}>Player 3</Button>}
//           { (props.playerAmount > 3) && <Button variant="primary" type="submit" onClick={() => {setPlayer(4)}}>Player 4</Button>}
//           </form>}
//           {!currentView && display && <h3>Player {player} is Correct</h3>}
//           {!currentView && !display && <h5>Wrong the correct answer is: {props.storage.answer}</h5>}
          
//           </Modal.Body>
//           <Modal.Footer>
//             {!currentView && <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>}
            
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
//   export default Question;