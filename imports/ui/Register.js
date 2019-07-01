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
            usernameErr: username.length > 0 ? '' : 'Username is required.'
        });
    }

    validateEmail = () => {
    const { email } = this.state;
    this.setState({
        emailErr: email.length > 0 ? '' : 'Email is required.'
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
                    img: './profile/profile.jpg'
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
                        
                   }else{
                    console.log("account created");
                   }
            });
        }else{
            return
        }
    };
        
      //  console.log(this.state.errors)
            // Accounts.createUser({
            //     username: 'chilevan',
            //     email: "abcdef@gmail.com",
            //     password: "123456"
            //   },function(e){
            //     console.log(e)   
            //   });

       
        // Tasks.insert({
        // email: this.state.email,
        // password: this.state.password,
        // createAt: new Date(),
        // })
    

    render(){
       // console.log(this.state.usernameErr)
        return(
            <div className="auth">
                <button className="btn-cancel" onClick={this.props.onCancel}><img src="./cancel-grey/cancel-grey.png"/></button>
                <h2 className="text-center">Register</h2>
                <form className="auth-form">
                    <div className="form-group">
                        <label>NAME</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            aria-describedby="nameHelp" 
                            placeholder="Enter your name" 
                            value={this.state.username}
                            name="username"
                            onChange={this.handleUsernameChange}
                            onBlur={this.validateUsername}
                            />
                        <small className="form-text text-danger">{this.state.usernameErr}</small>
                    </div>
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
                            onBlur={this.validateEmail}
                            />
                        <small className="form-text text-danger">{this.state.emailErr}</small>
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
                                onBlur={this.validatePassword}
                                />
                         <small className="form-text text-danger">{this.state.passErr}</small>                        
                    </div>
                    <div>
                        <p>By creating an account your agree to the <br/>
                        <a href="#">Term of Service</a> and <a href="#">Privacy Policy</a></p>
                    </div>
                    <button type="submit" className="btn btn-register-submit" onClick={this.handleSubmit}>Register</button>
                    <p>Do you have an acount? <a href="#">Log in</a></p>
                </form>
            </div>
        )
    }
}

export default Register