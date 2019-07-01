import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error:'',
        };
    }
    handleEmailChange = (event) => {
        this.setState({ 
            email: event.target.value 
        });
    };
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    };
   
    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email
        let password = this.state.password
        Meteor.loginWithPassword(email, password, (error) => {
            if(error){
                this.setState({
                    error: error.reason
                })
            }else{  
                this.props.onSetStateLogin()
            }
        });
    };

    render(){
        return(
            <div className="auth">
                <button className="btn-cancel" onClick={this.props.onCancel}><img src="./cancel-grey/cancel-grey.png"/></button>
                <h2 className="text-center">Login</h2>
                <p className="text-center text-danger">{this.state.error}</p>
                <form className="auth-form" onSubmit = { this.handleSubmit }>
                    <div className="form-group">
                        <label>EMAIL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                id="email" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter your email" 
                                autoComplete="off"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input  type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Enter your password..." 
                                autoComplete="off"
                                value={this.state.password}
                                name="password"
                                onChange={this.handlePasswordChange}
                                />
                    </div>
                    <div className="form-check">
                        <div className="row">
                            <div className="col-6">
                                <input type="checkbox" className="form-check-input" id="remember-password" />  
                                <p>Remember password </p>
                            </div>
                            <div className="col-6">
                                <p>Forgot your password?</p>
                            </div>
                        </div>
                        
                    </div>
                    <button type="submit" className="btn btn-login-submit">Log In</button>
                    <p>Don't have an acount? <a href="#">Register</a></p>
                </form>
            </div>
        )
    }
}

export default Login