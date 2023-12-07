import Table from "react-bootstrap/Table";
import React from "react";

export function TodoTable(props) {
    return <Table responsive striped hover bordered>
        <thead>
        <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Time Created</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {
            props.data.map(props.callbackfn)
        }
        </tbody>
    </Table>;
}
