import React from 'react';
import axios from 'axios';



class Payment extends React.Component {
    constructor() {
        super();

        this.state = {
            paymentFor: '',
            AccountName:'',
            Amount:'',
            email:'',
            
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
        var apiBaseUrl = 'https://ancapbooking.herokuapp.com/shipper/payment';
        const { paymentFor ,AccountName, Amount, email} = this.state;
        let data ={
            paymentFor,
            AccountName,
            Amount,
            email
        }

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

                <h4 className="mv3">BOOKING PAYMENT</h4>
                <form onSubmit={this.onSubmit} >
                   
                   <div className="flex flex-column">

                                <input
                                    name="paymentFor"
                                    value={this.state.paymentFor}
                                    onChange={this.onChange}
                                    placeholder="Enter paymentFor"
                                  
                                />

                            </div>
                   <div className="flex flex-column">

                                <input
                                    name="AccountName"
                                    value={this.state.AccountName}
                                    onChange={this.onChange}
                                    placeholder="enter your accountName"
                                />

                            </div>
                    <div className="flex flex-column">

                                <input
                                    name="Amount"
                                    value={this.state.Amount}
                                    onChange={this.onChange}
                                    placeholder="Enter Amount"
                                    
                                />

                            </div>
                    <div className="flex flex-column">

                                <input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                   placeholder="Enter email"
                                   
                                />

                            </div>
                    
                    <div className="button-submit"> 
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Payment;