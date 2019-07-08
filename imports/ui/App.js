import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

//------------------API------------------------

//----------------Component--------------------
import ClientRouter from './ClientRouter'
import AdLogin from './admin/AdLogin'
import Databoard from './admin/Databoard'




class App extends Component{
 
  render(){
    return( 
      
        <Router> 
          <Switch>    
            <Route exact  path = "/admin/" component ={AdLogin} />
            <Route exact  path = "/admin/databoard" component ={Databoard} />    
            <Route exact  path = "" component={ClientRouter}  />   
          </Switch>
        </Router>
     
    )
  }
}

export default withTracker(() => {
    return {
      currentUser: Meteor.user()
    };
  })(App);





