import Table from "react-bootstrap/Table";
import React from "react";

export function TodoTable(props) {
    return <Table>
        <thead>
        <tr>
            <th>ID:</th>
            <th>Description:</th>
            <th>Time Create:</th>
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