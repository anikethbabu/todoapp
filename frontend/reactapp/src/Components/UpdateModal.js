import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

export default function UpdateModal({buttonFunction,id,placeholder}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        const form = e.target
        const formData = new FormData(form);
        e.preventDefault()
        buttonFunction(formData.get("description"), id)

    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update Todo
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter your Description in the TextBox</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Control as="textarea" name="description" placeholder={placeholder}></Form.Control>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" value="submit" >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}