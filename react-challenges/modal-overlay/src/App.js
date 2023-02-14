import './App.css';
import React, {useState} from "react";
import {ModalOffer} from "./components/ModalOffer";
import Button from "react-bootstrap/Button";

function App() {

    const [showOffer, setShowOffer] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    function handleShowOffer() {
        setShowOffer(!showOffer);
        setIsHidden(!isHidden);
    }

    function handleAcceptedOffer() {
        setAccepted(!accepted);
        setShowOffer(!showOffer)
    }

    return (
    <div className="App">
        { !isHidden && <Button variant="primary" onClick={handleShowOffer}>Show Offer</Button> }
        { showOffer && <ModalOffer handleAcceptedOffer={handleAcceptedOffer}/> }
        { accepted && <h3>Offer accepted</h3> }
    </div>
  );
}

export default App;
