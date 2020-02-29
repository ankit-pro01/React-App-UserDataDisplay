import React from "react";

const users = (props) => {

    return(
        <tr onClick = {props.clicked} key = {props.obj.id} >
            <td>{props.obj.first_name}</td>
            <td>{props.obj.last_name}</td>
            <td>{props.obj.company_name}</td>
            <td>{props.obj.city}</td>
            <td>{props.obj.state}</td>
            <td>{props.obj.zip}</td>
            <td>{props.obj.email}</td>
            <td>{props.obj.web}</td>
            <td>{props.obj.age}</td>
        </tr>
    )
};

export default users;