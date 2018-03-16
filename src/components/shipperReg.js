import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Raisedbutton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';




class ShipperReg extends React.Component {
    // Now, let’s initialise the state in the constructor
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
            email: '',
            address: '',
            IDType: '',
            IDNum: '',

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
        var apiBaseUrl = 'https://ancapbooking.herokuapp.com/register/shipper';
        
        const { firstName, lastName, password, email, phone, address, IDType, IDNum } = this.state;

        let data = {
                firstName,
                lastName,
                password,
                email,
                phone,
                address,
                IDType,
                IDNum
        }


        console.log(JSON.stringify(data));
        axios.post(apiBaseUrl, data,{
       
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
             title="SHIPPER'S SIGNUP"
           />

                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">

                                <TextField
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                    type="number"
                                    hintText="Enter your phoneNumber"
                                    floatingLabelText="Your PhoneNumber"
                                    required
                                />

                            </div>
                            <div className="form-group">

                                <TextField
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                   floatingLabelText="First Name"
                                    hintText="Enter your First Name"
                                    required
                                />

                            </div>
                            <div className="form-group">

                                <TextField
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                    type="text"
                                    hintText="Enter your last Name"
                                   floatingLabelText="Your lastName"
                                    required
                                />

                            </div>
                            <div className="form-group">

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
                            <div className="form-group">

                                <TextField
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    type="email"
                                    hintText="Enter your email"
                                    floatingLabelText="Your Email"
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <TextField
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.onChange}
                                    
                                    hintText="Enter your Address"
                                   floatingLabelText="Your Address"
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <TextField
                                    name="IDType"
                                    value={this.state.IDType}
                                    onChange={this.onChange}
                                    hintText="Enter your IDType"
                                    floatingLabelText="Your IDType"
                                    required
                                />


                            </div>
                            <div className="form-group">
                                <TextField
                                    name="IDNum"
                                    value={this.state.IDNum}
                                    onChange={this.onChange}
                                    hintText="Enter your licenseNumber"
                                    floatingLabelText="Your licenseNumber"
                                    required
                                />

                            </div>


                            <div className="button-submit">
                                <Raisedbutton type="submit" className="btn btn-primary">submit</Raisedbutton>
                            </div>
                        </form>
                        {/*<div>
                            <Link to="/shipperSignin">{Signin}</Link>
                        </div>*/}
                         </MuiThemeProvider>
                         </div></div>
                    
        );
    }
}
export default ShipperReg;