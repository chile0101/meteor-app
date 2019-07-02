import React,{Component} from 'react'

import Login from './Login'
import Register from './Register'
import Logout from './Logout';

import { Session } from 'meteor/session'
import { Meteor } from 'meteor/meteor';
import ForgotPassword from './ForgotPassword';



class Header extends Component{

    constructor(props) {
        super(props)
        this.state = {
            showRegister: false,
            showLogin: false,
            showLogout: false,  
            showForgotPass: true,
        }
      
    }
    onSetStateLogin = (event) => {

        this.setState({
            showRegister: false,
            showLogin: false,  
            showLogout: false,
            showForgotPass: false,
        })
    }
    onToggleRegister =  (event) => {
        this.setState({
            showRegister: !this.state.showRegister,
            showLogin: false
        })
    }
    onToggleLogin = (event) => {
       
        this.setState({
            showLogin:  !this.state.showLogin,
            showRegister: false
        })
        
    }
    onToggleForgotPass = (event) => {
        this.setState({
            showForgotPass:  !this.state.showForgotPass,
            showRegister: false,
            showLogin: false,  
        })  
    }
    onToggleLogout = (event) => {
        this.setState({
            showLogout:  !this.state.showLogout,
        })  
    }
    

    render(){
        return(
            <div>
        
            <div className="container">
                <div className="header">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <form className="search-form">
                                        <input type="text" placeholder="Search.." name="search" />
                                        <button type="submit" className="btn-search"><img src="./search/search.png" /></button>
                                    </form>
                                </div>
                                <div className="col-6" />
                            </div>
                        </div>

                        <div className="col-4 Logo">
                            <a><img src="./logo/logo.png" /></a>
                        </div>

                        <div className="col-4 text-right">
                            { Meteor.user() ?
                                <div className="avatar" >
                                    <img src="./profile/profile.jpg" alt="Avatar" className = "avatar-img" onClick={ this.onToggleLogout }></img>
                                </div>  
                                : 
                                <div className = "btns-auth">
                                    <button className="btn-register" onClick = { this.onToggleRegister }>Register</button> 
                                    <button className="btn-login" onClick = { this.onToggleLogin }>Log In</button>
                                </div>
                            }                                                  
                            <div className="cart">
                                <a href="#"><img src="./cart/cart.png"/></a>
                                <div className="Oval">7</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>    
            
            <div className="header-menu">
                <ul>
                    <li>
                        <span>Men</span>
                        <a><img src="./arrow-black/arrow-black.png" /></a>
                    </li>
                    <li>
                        <span>Ladies</span>
                        <a><img src="./arrow-black/arrow-black.png" /></a>
                    </li>
                    <li>
                        <span>Girl</span>
                        <a><img src="./arrow-black/arrow-black.png" /></a>
                    </li>
                    <li>
                        <span>Boy</span>
                        <a><img src="./arrow-black/arrow-black.png" /></a>
                    </li>
                </ul>     
            </div>
            {this.state.showLogout ? <Logout onSetStateLogin = { this.onSetStateLogin }/> : null}                
            {this.state.showRegister ? <Register    onSetStateLogin = { this.onSetStateLogin }  
                                                    onCancel = {this.onToggleRegister} 
                                                    onToggleLogin = {this.onToggleLogin}/> : null}
            {this.state.showLogin ? <Login  onSetStateLogin = { this.onSetStateLogin }  
                                            onCancel = {this.onToggleLogin}
                                            onToggleForgotPass = {this.onToggleForgotPass}
                                            onToggleRegister = {this.onToggleRegister}/> : null}
            {this.state.showForgotPass ? <ForgotPassword    onSetStateLogin = { this.onSetStateLogin }  
                                                            onToggleLogin = {this.onToggleLogin}
                                                            onCancel = {this.onToggleLogin} /> : null}

           
            </div>
        )
    }
}

export default Header