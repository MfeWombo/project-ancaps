import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  phone:'',
  password:''
}
// this.onChange = this.onChange.bind(this);
// this.onSubmit = this.onSubmit.bind(this);
 }
 handleClick(event){
 var apiBaseUrl = "https://ancapbooking.herokuapp.com/login/shipper";
 var self = this;
 var payload={
 "email":this.state.username,
 "password":this.state.password
 }
 axios.post(apiBaseUrl, payload,{  
 data: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
 }).then(function (response) {
 console.log(response);
 if(response.data.code === 200){
 console.log("Login successfull");
 var dashBoard=[];
 dashBoard.push(<dashBoard appContext={self.props.appContext}/>)
 self.props.appContext.setState({loginPage:[],dashBoard:dashBoard})
 }
 else if(response.data.code === 204){
 console.log("Username password do not match");
 alert("username password do not match")
 }
 else{
 console.log("Username does not exists");
 alert("Username does not exist");
 }
 })
 .catch(function (error) {
 console.log(error);
});
 }

 render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your phone"
             
             onChange = {(event,newValue) => this.setState({phone:newValue})}
             />
             <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
              
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;