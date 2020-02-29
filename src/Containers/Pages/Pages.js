import React, { Component } from "react";
import classes from "./Pages.module.css";

class Pages extends Component{
    state = {
        pages : [],
        lastPageNo : 10,
        currentPage : 1 ,
        previousButtondDisable :false,
        nextButtondDisable:false,
        style : {}
    }

    PreviousPage = () => {    
        this.setState({...this.state, currentPage : this.state.currentPage -1 });
        this.props.paginate(this.state.currentPage - 1);

    }

    NextPage = () => {
        this.setState({...this.state, currentPage : this.state.currentPage + 1 });
        this.props.paginate(this.state.currentPage + 1);

    }

    PreviousTenPages = () => {    
        this.setState({...this.state, lastPageNo : this.state.lastPageNo - 10,
             currentPage : this.state.lastPageNo});

        this.props.paginate(this.state.currentPage);
    }

    NextTenPages = () => {
        this.setState({...this.state, lastPageNo : this.state.lastPageNo + 10,
        currentPage : this.state.lastPageNo})
        this.props.paginate(this.state.currentPage);

    }

    setCurrentPage = (pageno) => {
        this.setState({...this.state, currentPage : pageno})
        this.props.paginate(pageno);
    }

    render(){
        
        let pages = [...this.state.pages];
        for (let index = 0; index < Math.ceil((this.props.allPages.length/5)); index++) {
            pages.push(index+1);
        };

        let indexOfLastPage = this.state.lastPageNo;
        let indexOfFirstPage = this.state.lastPageNo - 10;
        let currentPages = pages.slice(indexOfFirstPage,indexOfLastPage);    

        let previousButtondDisable = indexOfFirstPage === 0 ? true : false;
        let nextButtondDisable = indexOfLastPage === pages.length ? true : false; 

        let nextPageDisable = (this.state.currentPage < currentPages[9]) ? false : true; 
        let previousPageDisable = (this.state.currentPage > currentPages[0]) ? false : true; 

        let activeStyle ={
                        cursor: "pointer",
                        margin: "20px auto",
                        padding: "10px",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "blanchedalmond" ,
                        color : "lightseagreen",
                        border : "2px solid lightseagreen",
                        fontWeight:"bolder",
                        fontSize:"20px"  
        }

        return(
            
            <div className = {classes.Page}>
                <button className = {classes.PreviousButton} 
                        onClick ={this.PreviousTenPages} 
                        disabled = {previousButtondDisable}>Previous</button>

                <button className = {classes.previousPage}
                        onClick = {this.PreviousPage}
                        disabled = {previousPageDisable}>{`<`}</button>

                {currentPages.map(pageNo =>
                <button id = {pageNo} key = {pageNo} className = {classes.Button} 
                onClick = {() => this.setCurrentPage(pageNo)}
                style = {pageNo === this.state.currentPage ? activeStyle : {height: "50px"
                }}>{pageNo}</button>)}
                <button  className ={classes.nextPage}
                 onClick = {this.NextPage} disabled = {nextPageDisable}>{`>`}</button>

                <button className = {classes.NextButton} 
                onClick = {this.NextTenPages} disabled = {nextButtondDisable}>Next</button>
           
            </div>
            
        )
    };
    
}

   
export default Pages;