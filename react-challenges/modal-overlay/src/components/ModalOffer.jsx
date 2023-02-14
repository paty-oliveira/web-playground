import React from "react";
import './ModalOffer.css';

export function ModalOffer(props) {
    return (
        <div className="modalBody">
            <p>Click the button below to accept our amazing offer!</p>
            <button type="button" className="btn btn-primary btn-modal" onClick={props.handleAcceptedOffer}>Accept Offer</button>
        </div>
    )
}