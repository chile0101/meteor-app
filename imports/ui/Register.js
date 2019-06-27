import React, { Component } from 'react'

class Register extends Component{
    render(){
        return(
            <div className="register">
                <button className="btn-cancel"><img src="./cancel-grey/cancel-grey.png"></img></button>
                <h3>Register</h3>
                <form className="register-form">
                    
                    <label className="reg-label"><b>NAME</b></label><br/>
                    <input type="text" placeholder="Enter your name..." name="email" required></input><br/>

                    <label className="reg-label"><b>EMAIL</b></label><br/>
                    <input type="email" placeholder="Enter your email" name="email" required></input><br/>

                    <label className="reg-label"><b>PASSWORD</b></label><br/>
                    <input type="password" placeholder="Enter your email" name="email" required></input><br/>

                    <button type="submit" className="">Register</button>
                </form>
            </div>
        )
    }
}

export default Register