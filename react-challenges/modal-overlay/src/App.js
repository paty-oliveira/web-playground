import './App.css';
import React, {useState} from "react";
import {ModalOffer} from "./components/ModalOffer";

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
        {!isHidden && <button type="button" className="btn btn-primary" onClick={handleShowOffer}>
          Show Offer
        </button>}
        { showOffer && <ModalOffer handleAcceptedOffer={handleAcceptedOffer}/> }
        { accepted && <h3>Offer accepted</h3> }
    </div>
  );
}

export default App;
