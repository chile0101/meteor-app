import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class ForgotPassword extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }
    handleEmailChange = (event) => {
        this.setState({ 
            email: event.target.value 
        });
    };

   
    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email
        console.log('forgot password')
    };

    render(){
        const {email} = this.state
        return(
            <div className="auth">
                <button className="btn-cancel" onClick={this.props.onCancel}><img src="/cancel-grey/cancel-grey.png"/></button>
                <h2 className="text-center">Forgot Password</h2>
                <p className="text-center">Enter your e-mail address below and we'll get you back on track</p>
                <form className="auth-form" onSubmit = { this.handleSubmit }>
                    <div className="form-group">
                        <label>EMAIL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                id="email" 
                                placeholder="Enter your email" 
                                autoComplete="off"
                                value={email}
                                name="email"
                                onChange={this.handleEmailChange}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className= {(email == '')? "btn btn-submit" : "btn btn-submit btn-active" } >
                        Submit
                    </button>
                    <div className="noaccount">
                        <p>I remember my password now.<a href="#" onClick={this.props.onToggleLogin}>Login</a></p>
                    </div>
                
                </form>
            </div>
        )
    }
}

export default ForgotPassword