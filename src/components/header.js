import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';




class Header extends Component {
  render() {

    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="App-header">
        <h1>WELCOME TO UBER FOR TRUCKS</h1>
          <div className="ml1">|</div>
          <span className="">
            <Link to="/" className="ml1 no-underline black">
              Home
            </Link>
          </span>
          <span className="shipper">
            <Link to="/shippersignup" className=" orange">
              Shipper
            </Link>
            
          
            <Link to="/dispatchersignup" className=" green">
              Dispatcher
            </Link>
          </span>
          <span className="">
            <Link to="/shipperSignin" className="ml1 no-underline black">
              Signin
            </Link>
          </span>
          <span className="">
            <Link to="/booking" className="ml1 no-underline black">
              Booking
            </Link>
          </span>
          <span className="">
            <Link to="/payment" className="ml1 no-underline black">
              Payment
            </Link>

          </span>
          <span className="">
            <Link to="/passwordreset" className="ml1 no-underline black">
              PasswordReset
            </Link>
          </span>
          </div>
          </div>
          )
}
}


export default withRouter(Header);