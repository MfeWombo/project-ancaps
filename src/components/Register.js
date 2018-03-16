import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
            email: '',
            address: '',
            IDType: '',
            IDNum: '',
    }
}
handleClick(event){
    var apiBaseUrl = 'https://ancapbooking.herokuapp.com/register/shipper';
    console.log("values",this.state.firstName,this.state.lastName,this.state.email,this.state.password,this.state.address,this.state.phone,this.state.IDType,this.state.IDNum);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "firstName": this.state.firstName,
    "lastName":this.state.lastName,
    "email":this.state.email,
    "password":this.state.password,
    "address":this.state.address,
    "phone":this.state.phone,
    "IDType":this.state.IDType,
    "IDNum":this.state.IDNum
}
axios.post(apiBaseUrl, payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
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
             title="Register"
           />
           <TextField
             hintText="Enter your FirstName"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({firstName:newValue})}
             />
             <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({lastName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
             <br/>
             <TextField
             hintText="Enter your address"
             floatingLabelText="address"
             onChange = {(event,newValue) => this.setState({address:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             type = "number"
             hintText="Enter your Phone"
             floatingLabelText="Phone"
             onChange = {(event,newValue) => this.setState({phone:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your IDType"
             floatingLabelText="IDType"
             onChange = {(event,newValue) => this.setState({IDType:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your IDNum"
             floatingLabelText="IDNum"
             onChange = {(event,newValue) => this.setState({IDNum:newValue})}
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
export default Register;