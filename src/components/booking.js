import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Book extends React.Component {
    constructor() {
        super();

        this.state = {
            destination: '',
            firstName: '',
            origin: '',
            phone: '',
            itemsType:''
           
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
        const {  destination,firstName,origin,phone,itemsType } = this.state;

        let data = {
             destination,
            firstName,
            origin,
            phone,
            itemsType
        }
        console.log(data)
        axios.post('https://ancapbooking.herokuapp.com/shipper/booking', data, {
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
                            title="BOOK HERE"
                        />

                        <form onSubmit={this.onSubmit} >
                            <div className="flex flex-column">

                                <TextField
                                    name="destination"
                                    value={this.state.destination}
                                    onChange={this.onChange}
                                    hintText="Enter destination"
                                    floatingLabelText="Your destination"
                                />

                            </div>
                            <div className="flex flex-column">

                                <TextField
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                    hintText="Enter firstName"
                                    floatingLabelText="Your firstName"
                                />

                            </div>


                            <div className="flex flex-column">

                                <TextField
                                    name="origin"
                                    value={this.state.origin}
                                    onChange={this.onChange}
                                    hintText="Enter your origin"
                                    floatingLabelText="Your origin"
                                />

                            </div>
                            <div className="flex flex-column">

                                <TextField
                                    name="phone"
                                    type="number"
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                    hintText="Enter your phone"
                                    floatingLabelText="Your phone"
                                />

                            </div>
                            <div className="flex flex-column">

                                <TextField
                                    name="itemsType"
                                    value={this.state.itemsType}
                                    onChange={this.onChange}
                                    hintText="Enter your itemsType"
                                    floatingLabelText="Your itemsType"
                                />

                            </div>


                            <div className="button-submit">
                                <button type="submit" className="btn btn-primary">submit</button>
                            </div>
                        </form>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
export default Book;