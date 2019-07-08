import React, { Component } from 'react'

class AdLogin extends Component{
    render(){
        return(
            
            <div className = "bg-login">
            
                <div className = "logo">
                    <img src="/logo/logo.png"/>
                </div>
                <div className = "form-wrapper">
                    <h5>Log in</h5>
                    <form>
                        <label>EMAIL</label>
                        <input type = "text" name="email" placeholder="email@sample.com"></input>

                        <label>PASSWORD</label>
                        <input type = "password" name="email" placeholder="Enter password"></input>

                        <button>Log in</button>
                    </form>
                    <a>Forgot password</a>
                </div>
            </div>
        )
    }
}

export default AdLogin