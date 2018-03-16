import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';





class DispatcherReg extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            password:'',
            phone: '',
            email: '',
            address: '',
            DrivLicNo: ''
           
            
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

   
  onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }



onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { firstName, lastName, email,phone,password,address,DrivLicNo} = this.state;

         let data = {
                firstName,
                lastName,
                password,
                email,
                phone,
                address,
                DrivLicNo
        }
        console.log(JSON.stringify(data));
        axios({
            method: 'post',
            url: 'https://ancapbooking.herokuapp.com/register/driver',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        }).then((result) => {
            //access the results here....
            // alert(result);
            console.log(result);
        }).catch(function (error) {
            console.log('error got' + error);
        });
    
      }



    render() {
        return (
            <div>
                <div>
                    <MuiThemeProvider>
                        <AppBar
             title="DISPATCHER'S SIGNUP"
           />
                <form onSubmit={this.onSubmit} >
                    <div className="flex flex-column">

                        <TextField
                            name="firstName"
                            value={this.state.firstName }
                            onChange={this.onChange}
                            hintText="Enter your First Name"
                             floatingLabelText="Your FirstName"
                            required
                        />

                    </div>
                    <div className="flex flex-column">

                        <TextField
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.onChange}
                            hintText="Enter your last Name"
                             floatingLabelText="Your lastName"
                            required
                        />

                    </div>
                    <div className="flex flex-column">

                        <TextField
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            type="password"
                            hintText="Enter your password"
                             floatingLabelText="Your PassWord"
                            required
                        />

                    </div>
                    <div className="flex flex-column">

                        <TextField
                            name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                            type="number"
                            hintText="Enter your Phone number"
                             floatingLabelText="Your PhoneNumber"
                            required
                        />

                    </div>
                    <div className="flex flex-column">

                        <TextField
                            name="email"
                            value={this.state.email}
                           onChange={this.onChange}
                            type="email"
                             floatingLabelText="Your Email"
                            required
                        />

                    </div>
                    <div className="flex flex-column">

                        <TextField
                            name="address"
                            value={this.state.address}
                            
                            hintText="Enter your address"
                             floatingLabelText="Your Address"
                            required
                        />

                    </div>
                    
                    <div className="flex flex-column">

                        <TextField
                            name="DrivLicNo"
                            value={this.state.DrivLicNo}
                            onChange={this.onChange}
                            
                            hintText="Enter your Driver's Licence Number"
                             floatingLabelTextr="Your licenseNumber"
                            required
                        />

                    </div>
                    <div className="button-submit">
                        <button type="submit" className="btn btn-primary">submit</button>
                    </div>
                </form>
            </MuiThemeProvider>
                         </div></div>
        );
    }


    
}
export default DispatcherReg;