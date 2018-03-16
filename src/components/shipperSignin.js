import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class Login extends Component {
constructor(){
  super();
  this.state={
  phone:'',
  password:''
  }
 }
handleClick(event){
 var apiBaseUrl = "https://ancapbooking.herokuapp.com/login/shipper";
 var self = this;
 var payload={
 "phone":this.state.phone,
 "password":this.state.password
 }
 axios.post(apiBaseUrl+'login', payload)
 .then(function (response) {
 console.log(response);
 if(response.data.code === 200){
 console.log("Login successfull");
 var App=[];
 App.push(<App/>)
 self.props.appContext.setState({loginPage:[],uApp:App})
 }
 else if(response.data.code === 204){
 console.log("phone password do not match");
 alert("phone password do not match")
 }
 else{
 console.log("phone does not exists");
 alert("phone does not exist");
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
             title="Signin"
           />
           <TextField
             hintText="Enter your phoneNumber"
             floatingLabelText="phoneNumber"
             onChange = {(event,newValue) => this.setState({phone:newValue})}
             />
           <br/>
           <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
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