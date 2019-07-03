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

    validateEmailReget = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email
        let password = this.state.password

        if(this.validateEmailReget(email)){
            this.setState({
                error: 'Your e-mail/password is invalid!'
            })
        }

        Meteor.loginWithPassword(email, password, (error) => {
            if(error){
                this.setState({
                    error: 'Your e-mail/password is invalid!'
                })
            }else{
                this.props.onSetStateLogin()
            }
        });
    };

    render(){
        const {email,password,error} = this.state
        return(
            <div className="auth">
                <button className="btn-cancel" onClick={this.props.onCancel}><img src="./cancel-grey/cancel-grey.png"/></button>
                <h2 className="text-center">Login</h2>
                <p className="text-center text-danger">{error}</p>
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
                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input  type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Enter your password..." 
                                autoComplete="off"
                                value={password}
                                name="password"
                                onChange={this.handlePasswordChange}
                                />
                    </div>
                    <div className="form-check">
                        <div className="row remember-me">
                            <div className="col-6">
                                <input type="checkbox" className="form-check-input" id="remember-password" />  
                                <p>Remember password </p>
                            </div>
                            <div className="col-6">
                                <a href="#" onClick = { this.props.onToggleForgotPass }>Forgot your password?</a>
                            </div>
                        </div>                       
                    </div>
                    <button 
                        type="submit" 
                        className= {(email == '' || password == '' )? "btn btn-submit" : "btn btn-submit btn-active" } >
                        Log In
                    </button>
                    <div className="noaccount">
                        <p>Don't have an acount? <a href="#" onClick={this.props.onToggleRegister}>Register</a></p>
                    </div>
                
                </form>
            </div>
        )
    }
}

export default Login