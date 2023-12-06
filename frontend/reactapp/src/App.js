import React, {useEffect, useState} from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as PropTypes from "prop-types";
import {TodoTable} from "./TodoTable";
import {Button, Form, Modal} from "react-bootstrap";

TodoTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    callbackfn: PropTypes.func
};

function CreateModal({buttonFunction}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        const form = e.target
        const formData = new FormData(form);
        e.preventDefault()
        buttonFunction(formData.get("description"))

    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create Todo
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter your Description in the TextBox</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Control as="textarea" name="description"></Form.Control>
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

function App() {
    const [data, setData] = useState([])
    const getTodoList = () => {
        axios
            .get("http://127.0.0.1:8000/todo/")
            .then(res => {
                setData(res.data)
            })
            .catch(error => console.log(error));
    }
    useEffect(getTodoList, []);
    const DeleteButton = ({id}) => {
        const handleDelete = () => {
            axios
                .delete(`http://localhost:8000/todo/${id}`)
                .then(() => {
                    getTodoList();
                })
                .catch(error => {
                    console.log(error);
                })
        };
        return (
            <button onClick={handleDelete}>
                Delete
            </button>
        )
    }
    const CreateTodo = () => {
        const handleCreate = (description) => {
            axios
                .post('http://localhost:8000/todo/', {
                    description: description
                })
                .then(() => {
                    getTodoList();
                })
                .catch(error => {
                    console.log(error);
                })
        }
        return (
            <>
            <CreateModal buttonFunction={handleCreate} />
            </>
        )
    }

    return (
        <div className='container'>
            <div className="mt-3">
                <h3>A simple Todo app made with django + react</h3>
                <CreateTodo></CreateTodo>
                <TodoTable data={data} callbackfn={(todo, index) => {
                    return <tr key={index}>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.created_at}</td>
                        <td><DeleteButton id={todo.id}></DeleteButton></td>
                    </tr>
                }}/>
            </div>
        </div>
    )
}

export default App;
