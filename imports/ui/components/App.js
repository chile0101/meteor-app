import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

//------------------API------------------------

//----------------Component--------------------

import AdLogin from '../pages/AdLoginPage'
import Databoard from './AdProducts'


class App extends Component{
 
  render(){
    return( 
        <div ></div>
     
    )
  }
}

export default withTracker(() => {
    return {
      currentUser: Meteor.user()
    };
  })(App);





