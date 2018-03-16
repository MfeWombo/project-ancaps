import React from 'react';
import axios from 'axios';


class PassReset extends React.Component {
    // Now, let’s initialise the state in the constructor
    constructor() {
        super();

        this.state = {
            
            phone: ''
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
        const { phone} = this.state;

        let data = {
            data: {
                phone
                
            }
        }
        // console.log(data)
        axios.post('https://ancapbooking.herokuapp.com/register/shipper', data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Credentials': true,
                // 'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        }).then((result) => {
            //access the results here....
            alert("datasaved");
          }).catch(function (error) {
    console.log(error);
  });
//                 console.log(data)
//         axios.post('https://ancapbooking.herokuapp.com/register/shipper', data)
//           .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
      }



    render() {
        return (
            <div>

                <h4 className="mv3">PASSWORD RESET</h4>
                <form onSubmit={this.onSubmit} >
                    
                    <div className="form-group">

                        <input
                            name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                            type="number"
                            placeholder="Your PhoneNumber"
                        />

                    </div>
                   
                    <div className="button-submit"> 
                        <button type="submit" className="btn btn-primary">submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default PassReset;






// ResetPassword = React.createClass({
//   validations() {
//     let component = this;

//     return {
//       rules: {
//         password: {
//           required: true,
//           minlength: 6
//         },
//         repeatPassword: {
//           required: true,
//           minlength: 6,
//           equalTo: '[name="password"]'
//         }
//       },
//       messages: {
//         password: {
//           required: "Enter a new password, please.",
//           minlength: "Use at least six characters, please."
//         },
//         repeatPassword: {
//           required: "Repeat your new password, please.",
//           equalTo: "Hmm, your passwords don't match. Try again?"
//         }
//       },
//       submitHandler() {
//         let { getValue } = ReactHelpers;

//         let form     = component.refs.resetPasswordForm.refs.form,
//             token    = component.props.token,
//             password = getValue( form, '[name="password"]' );

//         Accounts.resetPassword( token, password, ( error ) => {
//           if ( error ) {
//             Bert.alert( error.reason, 'danger' );
//           } else {
//             Bert.alert( 'Password reset!', 'success' );
//           }
//         });
//       }
//     };
//   },
//   handleSubmit( event ) {
//     event.preventDefault();
//   },
//   render() {
//     return <GridRow>
//       <GridColumn className="col-xs-12 col-sm-6 col-md-4">
//         <PageHeader size="h4" label="Reset Password" />
//         <InfoAlert>
//           To reset your password, enter a new one below. You will be logged in with your new password.
//         </InfoAlert>
//         <Form ref="resetPasswordForm" id="reset-password" className="reset-password" validations={ this.validations() } onSubmit={ this.handleSubmit }>
//           <FormGroup>
//             <PasswordInput showLabel={ true } />
//           </FormGroup>
//           <FormGroup>
//             <RepeatPasswordInput showLabel={ true } />
//           </FormGroup>
//           <FormGroup>
//             <SuccessButton type="submit" label="Reset Password &amp; Login" />
//           </FormGroup>
//         </Form>
//       </GridColumn>
//     </GridRow>;
//   }
// });