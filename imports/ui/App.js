import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

//------------------API------------------------
import { Tasks } from '../api/tasks.js'

//----------------Component--------------------
import Task from './Task.js'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

import NotFound from './NotFound.js';

class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      btnRegState: 0,
      btnLoginState: 0,
      
    }
  }
  onRegister(){

  }

  render(){
    return( 
      <div>
        <Header></Header>
        
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>

        <Footer></Footer>
      </div>
    )
  }
}

export default App




 
// class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       email:'',
//       password:'',
//     }
//     this.onHandleChange = this.onHandleChange.bind(this) 
//     this.onHandleSubmit = this.onHandleSubmit.bind(this)
//   }

//   onHandleChange(event){
//     var target = event.target;
//     var name = target.name;
//     var value = target.value;
//     this.setState({
//       [name]: value
//     })
//   }
//   onHandleSubmit(event){
//     event.preventDefault();
//     console.log(this.state.email)

//     Tasks.insert({
//       email: this.state.email,
//       password: this.state.password,
//       createAt: new Date(),
//     })
//   }

//   renderTasks() {
//     return this.props.tasks.map((task) => (
//       <Task key={task._id} task={task} />
//     ));
//   }

//     render() {
//         return (
//             <div className="container">

//               <AccountsUIWrapper />

//               <form onSubmit={this.onHandleSubmit}>
//                 Email: <input type="text" name="email" onChange={this.onHandleChange}></input><br/>
//                 Password: <input type="password" name="password" onChange={this.onHandleChange}></input><br/>
//                 <button type="submit">Signin</button>
//               </form>
    
//             <ul>
//                 {this.renderTasks()}
//             </ul>
//             </div>
//         );
//     }
// }

// export default withTracker(() => {
//     return {
//       tasks: Tasks.find({},{sort:{createAt: -1}}).fetch(),
//       incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
//       currentUser: Meteor.user(),
//     };
//   })(App);


