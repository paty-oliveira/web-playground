import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function ModalOffer(props) {

    const {show, setShow, handleAcceptedOffer} = props

    return (
        <Modal show={show} onHide={() => setShow(!show)} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>Click the button below to accept our amazing offer!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleAcceptedOffer}>
                    Accept Offer
                </Button>
            </Modal.Footer>
        </Modal>
    )
}