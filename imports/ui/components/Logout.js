import React, { Component } from 'react'


class Logout extends Component{

    onLogout = () => {

        Meteor.logout((err)=>{
            if(err){
                console.log(err)
            }else{
                this.props.onSetStateLogin()
            }
        })
    }

    render(){
        
        return(
            <div className="logout">
                
                   <p>Accout setting</p>
                    <hr/>
                   <p onClick={this.onLogout}> Logout </p>
                
            </div>
        )
    }
}

export default Logout