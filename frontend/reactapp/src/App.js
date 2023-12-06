import React, {useEffect, useState} from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/todo/")
            .then(res => {
                setData(res.data)
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <div className='container'>
            <div className="mt-3">
                <h3>Fetch Data from API in React with axios</h3>
                <Table>
                    <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Description:</th>
                        <th>Time Create:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((todo, index) => {
                                return <tr key={index}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.created_at}</td>
                                </tr>
                            }
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default App;
