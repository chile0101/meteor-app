import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'


class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email: '',
            password: '',
            usernameErr:'',
            emailErr: '',
            passErr: ''
        };
    }
    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value }, () => {
          this.validateUsername();
        });
    };
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value }, () => {
          this.validateEmail();
        });
    };
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value }, () => {
          this.validatePassword();
        });
    };

    validateUsername = () => {
        const { username } = this.state;
        this.setState({
            usernameErr: username.length > 0 ? '' : 'Name is required.'
        });
    }
    validateEmailReget = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateEmail = () => {
        const { email } = this.state;
        let emailerr='';
        if(email.length == 0 ){
            emailerr = 'Email is required.'
        }else if(!this.validateEmailReget(email)){
            emailerr = 'Please enter a valid e-mail!'
        }
        this.setState({
            emailErr: emailerr
        });
    }

    validatePassword = () => {
        const { password } = this.state;
        this.setState({
          passErr: password.length > 6 ? '' : 'Your password must be more than 6 characters!'
        });
    };
    handleSubmit = event => {   
        event.preventDefault();
        const { username, email, password,usernameErr,emailErr,passErr } = this.state;
        if(usernameErr == '' & emailErr == '' & passErr == ''){
            
            Accounts.createUser({
                username: username,
                email: email,
                password: password,
                profile: {
                    img: '/profile/profile.jpg'
                }
                }, err => {
                    if(err){
                        if(err.error == 403){
                            if(err.reason[0] =='U'){
                                    this.setState({
                                        usernameErr: err.reason
                                    })
                            }else{
                                    this.setState({
                                        emailErr: err.reason
                                    })
                            }
                        }
                    console.log(err)   
                    }else{
                            this.props.onSetStateLogin()
                    }
            });
        }else{
            return
        }
    };
    render(){
        const {username,email,password} = this.state
        const {usernameErr,emailErr,passErr} = this.state
        return(
            <div className="auth">
                <button className="btn-cancel" onClick={this.props.onCancel}><img src="/cancel-grey/cancel-grey.png"/></button>
                <h2 className="text-center">Register</h2>
                <form className="auth-form" onSubmit = { this.handleSubmit }>
                    <div className="form-group">
                        <label>NAME</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your name" 
                            id="name" 
                            value={username}
                            name="username"
                            onChange={this.handleUsernameChange}
                            onBlur={this.validateUsername}                           
                            />
                        <small className="form-text text-danger">{usernameErr}</small>
                    </div>
                    <div className="form-group">
                        <label>EMAIL</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter your email" 
                            value={email}
                            name="email"
                            onChange={this.handleEmailChange}
                            onBlur={this.validateEmail}
                        />
                        <small className="form-text text-danger">{emailErr}</small>
                    </div>
                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input  type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Enter your password..." 
                                value={password}
                                name="password"
                                onChange={this.handlePasswordChange}
                                onBlur={this.validatePassword}
                        />
                        <small className="form-text text-danger">{passErr}</small>                        
                    </div>
                    <div className="remember-me">
                        <p>By creating an account your agree to the <br/>
                        <a href="#">Term of Service</a> and <a href="#">Privacy Policy</a></p>
                    </div>
                    <button     
                            type="submit" 
                            className= {(username == '' || email == '' || password == '' )?  "btn btn-submit" : "btn btn-submit btn-active" }>
                            Register
                    </button>
                    <div className="noaccount">
                        <p>Do you have an acount?  <a href="#" onClick={this.props.onToggleLogin}>Log in</a> </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register