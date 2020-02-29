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
            searchIndicator : false
        }
    }

    setpage = (pageno) => this.setState({pageno : pageno,searchIndicator: false})

    handleRow = (id) => {
        this.props.history.push("/user/" + id)
    }

    updateChange = (event) => {
        this.setState({searchValue: event.target.value})
    }

    handleSearch = () => {
        this.setState({searchIndicator: true});

    }

    render() {
        let pages = null;
        let allData = this.props.error;        

        if(!this.props.error){
        let filteredList = this.props.usersLists.filter(user => {
            return user.first_name.toLowerCase() === this.state.searchValue.toLowerCase()
        })
        let currentPage = this.state.pageno;
        const showUserPerPage = 5; 
        let indexOfLastUser = currentPage * showUserPerPage;
        let indexOfFirstUser = indexOfLastUser - 5;
        let currentUsers =  this.props.usersLists.slice(indexOfFirstUser, indexOfLastUser);
        let mapLists = this.state.searchIndicator ? filteredList : currentUsers

        allData = (mapLists.map(obj => {
                        return (<Users clicked = {() => this.handleRow(obj.id)} 
                            key= {obj.id} obj= {obj}/>
                    )}
                ))
        
        pages = (<Pages paginate = {this.setpage} currentPage = {this.state.pageno} allPages = {this.props.usersLists} />)
        }

        return(
            <div className = {classes.Table}>
                <div className = {classes.Nav}>
                    <input placeholder = "search by first name" onChange = {
                    (event) =>this.updateChange(event)} />
                    <button className = {classes.searchButton} 
                    disabled = {!this.state.searchValue}
                    style ={{cursor : this.state.searchValue ? "pointer" : "not-allowed"}}  
                     onClick = {this.handleSearch}>search</button>
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