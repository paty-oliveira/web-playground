import React, {useState} from "react";
import "./ModalOffer.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function ModalOffer(props) {
    const [show, setShow] = useState(true);
    function handleClose() {
        setShow(!show);
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>Click the button below to accept our amazing offer!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleAcceptedOffer}>
                    Accept Offer
                </Button>
            </Modal.Footer>
        </Modal>
    )
}