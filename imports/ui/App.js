import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';

import AccountsUIWrapper from './AccountsUIWrapper.js';
 
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
    }
    this.onHandleChange = this.onHandleChange.bind(this) 
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state.email)

    Tasks.insert({
      email: this.state.email,
      password: this.state.password,
      createAt: new Date(),
    })
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

    render() {
        return (
            <div className="container">

              <AccountsUIWrapper />

              <form onSubmit={this.onHandleSubmit}>
                Email: <input type="text" name="email" onChange={this.onHandleChange}></input><br/>
                Password: <input type="password" name="password" onChange={this.onHandleChange}></input><br/>
                <button type="submit">Signin</button>
              </form>
    
            <ul>
                {this.renderTasks()}
            </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
      tasks: Tasks.find({},{sort:{createAt: -1}}).fetch(),
      incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
      currentUser: Meteor.user(),
    };
  })(App);


// export default class App extends Component {
//     getTasks() {
//       return [
//         { _id: 1, text: 'This is task 1' },
//         { _id: 2, text: 'This is task 2' },
//         { _id: 3, text: 'This is task 3' },
//       ];
//     }
   
//     renderTasks() {
//       return this.getTasks().map((task) => (
//         <Task key={task._id} task={task} />
//       ));
//     }
   
//     render() {
//       return (
//         <div className="container">
//           <header>
//             <h1>Todo List</h1>
//           </header>
   
//           <ul>
//             {this.renderTasks()}
//           </ul>
//         </div>
//       );
//     }
//   }