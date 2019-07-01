import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
// import '../imports/startup/client/accounts-config.js/index.js';

import App from '../imports/ui/App.js';
import NotFound from '../imports/ui/NotFound.js';


Meteor.startup(() => {
  
  render((
   <App/>
  ), document.getElementById('render-target'));
  
});
