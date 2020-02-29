import React, {Component} from "react";
import classes from "./DetailVeiw.module.css";
import Spinner from "../../Components/Spinner/Spinner";

class DetailVeiw extends Component{
    state ={
        Users : [], 
        user: [],
        loading : false,
        error: null};

    goToPreviousPage = () =>{
        this.props.history.push("/");
    }

    componentDidMount(){

        const fetchUser = async () => {    

            this.setState({...this.state, loading : true});  
            let res;
            try{
                let data = await fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json");
                res = await data.json();
            }
            catch(err){
                this.setState({...this.state,loading : false, error : err});     
            }

            this.setState({...this.state,loading : false, Users : res});     
        }  
        fetchUser();  
    }

    render(){       
        let userDetails = (<div><h1>Something Went Wrong!!!</h1></div>)
        if(!this.state.error){
            let id = this.props.match.params.userid;
             let user = this.state.Users.filter(user => {
            return String(user.id) === String(id)
        });

        userDetails = user.map(user => {
            return (<div className={classes.DetailVeiw} key = {user.id}>
                        <div><button onClick = {this.goToPreviousPage}>Go back</button></div>
                        <table>
                            <caption>
                                {user.first_name + " " + user.last_name}
                            </caption>
                            <tbody>
                                <tr>
                                    <td >Company</td>
                                    <td>{user.company_name}</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>{user.city}</td>
                                </tr>
                                <tr>
                                    <td>State</td>
                                    <td>{user.state}</td>
                                </tr>
                                <tr>
                                    <td>Zip</td>
                                    <td>{user.zip}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>{user.age}</td>
                                </tr>
                            </tbody>
                        </table>  
                    </div>
            )
        })
            
        }                
        

        return (this.state.loading ? <Spinner /> : userDetails)
    }

}

export default DetailVeiw;