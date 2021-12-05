import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./modalComponent.scss"

function ModalComponent({
  image,
  title,
  body,
  show,
  onHide
}) {
    return (
        <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-image-container mb-4">
        {image}
        </div>
        <p>
          {body}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
}

export default ModalComponent;