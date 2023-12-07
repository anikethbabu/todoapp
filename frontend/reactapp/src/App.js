import React, {useEffect, useState} from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as PropTypes from "prop-types";
import {TodoTable} from "./TodoTable";
import CreateModal from "./Components/CreateModal";
import UpdateModal from "./Components/UpdateModal";
import {Button} from "react-bootstrap";

TodoTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    callbackfn: PropTypes.func
};


function App() {
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState({});
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
            <Button onClick={handleDelete}>
                Delete
            </Button>
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
                <CreateModal buttonFunction={handleCreate}/>
            </>
        )
    }

    const UpdateTodo = ({id}, {description}) => {
        const handleUpdate = (description, id) => {
            axios
                .put(`http://localhost:8000/todo/${id}/`, {
                    description: description
                }).then(() => {
                getTodoList();
            })
                .catch(error => {
                    console.log(error);
                })
        }
        return (
            <UpdateModal buttonFunction={handleUpdate} id={id} placeholder={description}></UpdateModal>
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
                        <td><UpdateTodo id={todo.id} description={todo.description}></UpdateTodo></td>
                    </tr>
                }}/>
            </div>
        </div>
    )
}

export default App;
