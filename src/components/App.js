import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/App.css';
import Header from '../components/header';
import ShipperReg from '../components/shipperReg';
import DispatcherReg from '../components/dispatcherReg';
import Book from '../components/booking';
import Payment from '../components/payment';
import Signin from '../components/shipperSignin';
import ResetPassword from '../components/passReset';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Loginscreen from '../components/Loginscreen';
injectTapEventPlugin();


 class App extends Component {
constructor(){
    super();
    this.state={
      loginPage:[],
      shipperDash:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
      loginPage:loginPage
                    })
  }


  render() {
    return (
      <div className="App">
       
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/shippersignup" component={ShipperReg} />
            <Route exact path="/dispatchersignup" component={DispatcherReg} />
            <Route exact path="/shippersignin" component={Signin} />
            <Route exact path="/booking" component={Book} />
            {/*<Route exact path="/shipperSignin" component={Signin} />*/}
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/passwordreset" component={ResetPassword} />
             {this.state.loginPage}
        {this.state.dashBoard}
          </Switch>
        </div>
        {/*<div className="page">
        {this.state.loginPage}
        {this.state.uploadScreen}
        
      </div>*/}
      </div>

    );
    
  }
  
  
}


export default App;
