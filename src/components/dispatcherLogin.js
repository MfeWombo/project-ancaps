import React from 'react';
import axios from 'axios';


class shipperLogin extends React.Component {
    constructor() {
        super();

        this.state = {
            phone: '',
            password:'',
            
        };
        // this.onChange = this.handleChange.bind(this);
        // this.onSubmit = this.handleSubmit.bind(this);
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
        const { phone,password } = this.state;

        axios.post('https://ancapbooking.herokuapp.com/login/shipper', { phone,password})
          .then((result) => {
            //access the results here....
            alert("datasaved");
          });
      }



    render() {
        return (
            <div>

                <h4 className="mv3">SHIPPER'S LOGIN</h4>
                <form onSubmit={this.onSubmit} >
                   
                   <div className="flex flex-column">

                        <input
                            name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                            type="number"
                            placeholder="Your PhoneNumber"
                        />

                    </div>
                    <div className="flex flex-column">

                        <input
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Your PassWord"
                            required
                        />

                    </div>
                   
                    
                    <div className="button-submit"> 
                        <button type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}
export default dispatcherLogin;