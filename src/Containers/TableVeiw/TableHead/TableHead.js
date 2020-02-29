import React, {Component } from "react";

import Pages from "../../Pages/Pages";
import Users from "../../../Components/Tablebody/users";
import classes from "./Table.module.css";


class TableVeiw extends Component {
    constructor(props){
        super(props);
        this.state = { 
            List : [],
            filteredList : [],
            searchedList : [],
            searchValue : "",
            pageno : 1,
            error : null,
        }
    }

    setpage = (pageno) => this.setState({pageno : pageno})

    handleRow = (id) => {
        this.props.history.push("/user/" + id)
    }

    updateChange = (event) => {
        this.setState({searchValue: event.target.value})
    }

    render() {
        let pages = null;
        let allData = this.props.error;

        if(!this.props.error){
        let filteredList = this.props.usersLists;
        filteredList = this.props.usersLists.filter(user => {
            return user.first_name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        });

        let currentPage = this.state.pageno;
        const showUserPerPage = 5; 
        let indexOfLastUser = currentPage * showUserPerPage;
        let indexOfFirstUser = indexOfLastUser - 5;
        let currentUsers =  filteredList.slice(indexOfFirstUser, indexOfLastUser);

        allData = (currentUsers.map(obj => {
                        return (<Users clicked = {() => this.handleRow(obj.id)} 
                            key= {obj.id} obj= {obj}/>
                    )}
                ))
        
        pages = (<Pages paginate = {this.setpage} currentPage = {this.state.pageno} allPages = {this.props.usersLists}/>)
        }

        return(
            <div className = {classes.Table}>
                <div className = {classes.Nav}>
                    <input placeholder = "search by first name" onChange = {
                    (event) =>this.updateChange(event)} />
                </div>
                <table>
                    <thead> 
                        <tr>
                            <th>First Name
                                <div>
                                    <button id = "first_name" onClick = {(event) => this.props.ascendingOrder(event)}>{`v`}</button>
                                    <button id = "first_name" onClick = {(event) => this.props.dscendingOrder(event)}>{`v`}</button>
                                </div>   
                            </th>
                            <th>last Name
                                <div>
                                    <button  id = "last_name" onClick = {(event) => this.props.ascendingOrder(event)}>{`v`}</button>
                                    <button id = "last_name" onClick = {(event) => this.props.dscendingOrder(event)}>{`v`}</button>
                                </div>
                            </th>
                            <th>Company
                                <div>
                                    <button id = "company_name" onClick = {(event) => this.props.ascendingOrder(event)}>{`v`}</button>
                                    <button id = "company_name" onClick = {(event) => this.props.dscendingOrder(event)}>{`v`}</button>
                                </div>
                            </th>
                            <th>City
                                <div>
                                    <button id = "city" onClick = {(event) => this.props.ascendingOrder(event)}>{`v`}</button>
                                    <button id = "city" onClick = {(event) => this.props.dscendingOrder(event)}>{`v`}</button>
                                </div>
                            </th>
                            <th>State
                                <div>
                                    <button id = "state" onClick = {(event) => this.props.ascendingOrder(event)}>{`v`}</button>
                                    <button id = "state" onClick = {(event) => this.props.dscendingOrder(event)}>{`v`}</button>
                                </div>
                            </th>
                            <th>zip
                                <div>
                                    <button id = "zip" onClick = {(event) => this.props.ascendingOrder(event)}>{`v`}</button>
                                    <button id = "zip" onClick = {(event) => this.props.dscendingOrder(event)}>{`v`}</button>
                                </div>
                            </th>
                            <th>Email
                                <div>
                                    <button  id = "email"onClick = {(event) => this.props.ascendingOrder(event)}>{`v`}</button>
                                    <button id = "email" onClick = {(event) => this.props.dscendingOrder(event)}>{`v`}</button>
                                </div>
                            </th>
                            <th>Web
                                <div>
                                    <button id = "web"onClick = {(event) => this.props.ascendingOrder(event)}>{`v`}</button>
                                    <button id = "web" onClick = {(event) => this.props.dscendingOrder(event)}>{`v`}</button>
                                </div>
                            </th>
                            <th>Age
                                <div>
                                    <button id = "age"onClick = {(event) => this.props.ascendingOrder(event)}>{`v`}</button>
                                    <button id = "age" onClick = {(event) => this.props.dscendingOrder(event)}>{`v`}</button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allData}
                    </tbody>
                </table>
             {pages}
            </div>
        )
    }
}

export default TableVeiw;