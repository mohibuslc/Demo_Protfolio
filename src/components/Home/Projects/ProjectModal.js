import React from 'react';
import { Button, Card, Modal } from 'react-bootstrap'


const ProjectModal = ({ pr, handleClose, show }) => {
    const { name, img, teach, link, github, type, desc, modalId } = pr;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{desc}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectModal;