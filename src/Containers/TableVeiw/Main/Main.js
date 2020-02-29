import React, {Component } from "react";
import TableVeiw from "../TableHead/TableHead";
import classes from "./Main.module.css";
import Spinner from "../../../Components/Spinner/Spinner"

class Main extends Component {
    constructor(){
        super();
        this.state = {
            Users : [],
            loading: false,
            error : null
            };
    }

    componentDidMount(){
        const fetchUsers = async () => {
            this.setState({...this.state, loading : true});   
            let res;
            try{
                let data = await fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json");
                res = await data.json();
            }  
            catch(err){
                this.setState({...this.state, loading : false, error : err});            
            }
            this.setState({...this.state, Users : res, loading : false});           
        }
        fetchUsers();   
    }

    ascendingOrder = (event) => {
        let list = [...this.state.Users]
        let coloumnFeild = event.target.id;
        switch (coloumnFeild) {
            case "first_name":
                list.sort((a,b) => {
                    if(a.first_name > b.first_name){
                        return 1
                    }
                    if(a.first_name < b.first_name){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list})                
                
            case "last_name":
                list.sort((a,b) => {
                    if(a.last_name > b.last_name){
                        return 1
                    }
                    if(a.last_name < b.last_name){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                
            case "company_name":
                list.sort((a,b) => {
                    if(a.company_name > b.company_name){
                        return 1
                    }
                    if(a.company_name < b.company_name){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                
            case "city":
                list.sort((a,b) => {
                    if(a.city > b.city){
                        return 1
                    }
                    if(a.city < b.city){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                   
            case "state":
                list.sort((a,b) => {
                    if(a.state > b.state){
                        return 1
                    }
                    if(a.state < b.state){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                                
            case "zip":
                list.sort((a,b) => {
                    if(a.zip > b.zip){
                        return 1
                    }
                    if(a.zip < b.zip){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                
            case "email":
                list.sort((a,b) => {
                    if(a.email > b.email){
                        return 1
                    }
                    if(a.email < b.email){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                
            case "web":
                list.sort((a,b) => {return a.age - b.age});
                console.log(list);
                return this.setState({Users : list});
            
                
            case "age":
                list.sort((a,b) => {return a.age - b.age});
                console.log(list);
                return this.setState({Users : list});
                
        
            default:
                
        }
        
    }

    dscendingOrder = (event) => {
        let list = [...this.state.Users]
        let coloumnFeild = event.target.id;
        switch (coloumnFeild) {
            case "first_name":
                list.sort((a,b) => {
                    if(a.first_name < b.first_name){
                        return 1
                    }
                    if(a.first_name > b.first_name){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list})                
                
            case "last_name":
                list.sort((a,b) => {
                    if(a.last_name < b.last_name){
                        return 1
                    }
                    if(a.last_name > b.last_name){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                
            case "company_name":
                list.sort((a,b) => {
                    if(a.company_name < b.company_name){
                        return 1
                    }
                    if(a.company_name > b.company_name){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                
            case "city":
                list.sort((a,b) => {
                    if(a.city < b.city){
                        return 1
                    }
                    if(a.city > b.city){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                   
            case "state":
                list.sort((a,b) => {
                    if(a.state < b.state){
                        return 1
                    }
                    if(a.state > b.state){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                                
            case "zip":
                list.sort((a,b) => {
                    if(a.zip < b.zip){
                        return 1
                    }
                    if(a.zip > b.zip){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                
            case "email":
                list.sort((a,b) => {
                    if(a.email < b.email){
                        return 1
                    }
                    if(a.email > b.email){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
                
                
            case "web":
                list.sort((a,b) => {
                    if(a.web < b.web){
                        return 1
                    }
                    if(a.web > b.web){
                        return -1
                    }
                    return 0;
                })
                return this.setState({Users : list}) 
            
                
            case "age":
                list.sort((a,b) => {return b.age - a.age});
                console.log(list);
                return this.setState({Users : list});
                
            default:
                break;
        }       
    }

    render() {
        
        let error = this.state.error ? (<h1 
            style = {{textAlign : "center"}}
            >Some thing went wrong!!!</h1>):null;
        
        let table = (
            <div className = {classes.container}>
                <TableVeiw usersLists = {this.state.Users} {...this.props} 
                ascendingOrder = {this.ascendingOrder}
                dscendingOrder = {this.dscendingOrder}
                error = {error}/>
            </div>
        )
        return(
            this.state.loading ? <Spinner /> : table
        )
    }
}

export default Main;